const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const Handlebars = require('handlebars');
const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const url = require('url');

const { prompt_render, folder_tree, prompt_render_with_config_object } = require('prompt-context-builder');

function createBackupOutputFilePath(outputDir, fileNamePrefix, extension) {
    let suffix = 1;
    let outputFile;
    do {
        outputFile = path.join(outputDir, `${fileNamePrefix}_${suffix}${extension}`);
        suffix++;
    } while (fs.existsSync(outputFile));
    return outputFile;
}

// **核心逻辑函数**
async function executeGenerateAllCodeContext(config, workspaceRoot, includeInstruction = true) {
    let project_base_path = workspaceRoot;
    let outputFilePrefix = path.basename(workspaceRoot);
    
    if (config.project && config.project.type === 'git') {
        const gitRepoPath = path.join(workspaceRoot, config.input.git_clone_to_path || 'git_repo');
        const gitRepoUrl = config.project.base_path;
        const repoName = path.basename(url.parse(gitRepoUrl).pathname, '.git');
        const repoDir = path.join(gitRepoPath, repoName);

        const shouldSkipClone = fs.existsSync(repoDir) && config.input.skip_clone_if_folder_exist;

        if (shouldSkipClone) {
            vscode.window.showWarningMessage(`Skipping Git clone, the target directory "${repoDir}" already exists. Please be aware of potential file name conflicts.`);
        } else {
            try {
                await git.clone({
                    fs,
                    http,
                    dir: repoDir,
                    url: gitRepoUrl,
                    depth: 1,
                });
            } catch (err) {
                vscode.window.showErrorMessage(`Failed to clone Git repository: ${err}`);
                return;
            }
        }

        project_base_path = repoDir;
        outputFilePrefix = repoName;
    } else if (config.project && config.project.base_path) {
        project_base_path = path.resolve(workspaceRoot, config.project.base_path);
        outputFilePrefix = path.basename(project_base_path);
    }

    config.project.base_path = project_base_path;
    let instruction = '';
    if (config.input && config.input.instruction) {
        instruction = config.input.instruction;
    }
    const renderedInstruction = prompt_render_with_config_object(instruction, config, '', project_base_path);

    // **Context Only 模板**
    const XML_CONTEXT_ONLY_TEMPLATE = `<Project>
<folder_tree>
{{ folder_tree }}
</folder_tree>
<files>
{{ all_files_xml }}
</files>
</Project>
`;

    const MARKDOWN_CONTEXT_ONLY_TEMPLATE = `## 项目文件夹树

\`\`\`
{{ folder_tree }}
\`\`\`

## 项目内文件

{{ all_files_markdown }}
`;

    // **Context + Instruction 模板**
    const XML_TEMPLATE = `请基于 Project 里的代码， 完成下面的 Instruction

<Project>
<folder_tree>
{{ folder_tree }}
</folder_tree>
<files>
{{ all_files_xml }}
</files>
</Project>

<Instruction>
${renderedInstruction}
</Instruction>
`;
    const MARKDOWN_TEMPLATE = `请基于 "项目文件夹树"结构 和 "项目内文件" 里的代码， 完成下面的 "任务"

## 项目文件夹树

\`\`\`
{{ folder_tree }}
\`\`\`

## 项目内文件

{{ all_files_markdown }}

## 任务

${renderedInstruction}
`

    let template = includeInstruction ? XML_TEMPLATE : XML_CONTEXT_ONLY_TEMPLATE;
    let extentions_name = ".xml";
    
    if (config.input && config.input.instruction_template) {
        // 优先使用自定义模板
        template = config.input.instruction_template;
    } else {
        // 根据配置选择内置模板
        const tempalte_option = vscode.workspace.getConfiguration('promptContextBuilderPlugin').get('generateAllTemplate');
        switch (tempalte_option) {
            case 'xml':
                template = includeInstruction ? XML_TEMPLATE : XML_CONTEXT_ONLY_TEMPLATE;
                extentions_name = ".xml";
                break;
            case 'markdown':
                template = includeInstruction ? MARKDOWN_TEMPLATE : MARKDOWN_CONTEXT_ONLY_TEMPLATE;
                extentions_name = ".md";
                break;
        }
    }
    const renderedContent = prompt_render_with_config_object(template, config, '', project_base_path);

    // 输出文件路径
    const outputDir = path.join(workspaceRoot, config.output.prompt.path);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const outputFile = path.join(outputDir, `context.txt`);
    fs.writeFileSync(outputFile, renderedContent);
    const lineCount = renderedContent.split('\n').length;
    vscode.window.showInformationMessage(`Total lines of Context: ${lineCount}`);
    vscode.window.showInformationMessage(`Output generated at ${outputFile}`);

    if (config.output.prompt.backup_path) {
        // 输出备份文件路径
        const backupOutputDir = path.join(workspaceRoot, config.output.prompt.backup_path);
        if (!fs.existsSync(backupOutputDir)) {
            fs.mkdirSync(backupOutputDir, { recursive: true });
        }

        //backup
        const backupOutputFilePath = createBackupOutputFilePath(backupOutputDir, outputFilePrefix, extentions_name);
        fs.writeFileSync(backupOutputFilePath, renderedContent);

        vscode.window.showInformationMessage(`Backup Output generated at ${backupOutputFilePath}`);
    }

    let outputMode = vscode.workspace.getConfiguration('promptContextBuilderPlugin').get('generateOutputToClipboard');
    
    switch (outputMode) {
        case 'none':
            // 不输出
            break;
        case 'text':
            // 输出文本到剪切板
            vscode.env.clipboard.writeText(renderedContent);
            vscode.window.showInformationMessage('Prompt output copied to clipboard');
            break;
        case 'path':
            // 输出已经拷贝的文件路径到剪切板            
            vscode.env.clipboard.writeText(outputFile);
            vscode.window.showInformationMessage('Prompt filepath copied to clipboard');
            break;
    }
}

async function generateAllCodeContextAndInstruction() {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const currentFilePath = activeEditor.document.uri.fsPath;
    const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
    
    let config;
    try {
        config = yaml.load(fs.readFileSync(currentFilePath, 'utf8'));
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to read or parse config file: ${error.message}`);
        return;
    }

    await executeGenerateAllCodeContext(config, workspaceRoot, true);
}

async function generateInstructionFromClipboard() {
    const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
    
    // 从剪切板读取内容
    let clipboardContent;
    try {
        clipboardContent = await vscode.env.clipboard.readText();
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to read from clipboard: ${error.message}`);
        return;
    }
    
    if (!clipboardContent.trim()) {
        vscode.window.showWarningMessage('Clipboard is empty');
        return;
    }
    
    // 解析 YAML 配置
    let config;
    try {
        config = yaml.load(clipboardContent);
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to parse YAML from clipboard: ${error.message}`);
        return;
    }
    
    if (!config) {
        vscode.window.showWarningMessage('Invalid YAML configuration in clipboard');
        return;
    }

    await executeGenerateAllCodeContext(config, workspaceRoot, true);
}

async function generateContextOnly() {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const currentFilePath = activeEditor.document.uri.fsPath;
    const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
    
    let config;
    try {
        config = yaml.load(fs.readFileSync(currentFilePath, 'utf8'));
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to read or parse config file: ${error.message}`);
        return;
    }

    await executeGenerateAllCodeContext(config, workspaceRoot, false);
}

function createUniqueFileName(dir, baseName, extension) {
    let fileName = `${baseName}${extension}`;
    let counter = 1;
    while (fs.existsSync(path.join(dir, fileName))) {
        fileName = `${baseName}_${counter}${extension}`;
        counter++;
    }
    return fileName;
}

async function initializeConfigFile() {
    const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const configFileName = createUniqueFileName(workspaceRoot, 'config', '.yaml');
    const configFilePath = path.join(workspaceRoot, configFileName);

    const initialConfig = `project:
  base_path: ./ 
  filters: 
    - ignore:
      - .git
      - node_modules
      - "config.yaml"
input:
  instruction: |
    我希望 <在这加入你想实现的功能>
output:     
  prompt:
    path: .ai_helper/prompt_builder/output/working
    backup_path: .ai_helper/prompt_builder/output/backup
# 写完指令后，按下 Ctrl+Shift+P 或者 CMD+Shift+P 执行我们的命令：Generate All Code Context And Instruction。
# 就可以在 ai_helper/prompt_builder/output/working 下看到我们的 context.txt 文件。
# 然后在文件系统中，直接把context.txt拖拽到poe或claude等LLM的web输入框，敲击回车即可得到AI对愿望的响应。（如果是chatgpt的话，目前的版本你还需要把你得指令在文本框里再输入一遍，否则可能它不正确响应）
`;

    fs.writeFileSync(configFilePath, initialConfig);

    const document = await vscode.workspace.openTextDocument(configFilePath);
    await vscode.window.showTextDocument(document);

    vscode.window.showInformationMessage(`Config file created and opened: ${configFileName}`);
}

function activate(context) {
    // **注册重命名后的命令**
    context.subscriptions.push(vscode.commands.registerCommand('generateAllCodeContextAndInstruction', generateAllCodeContextAndInstruction));
    
    context.subscriptions.push(vscode.commands.registerCommand('generateInstructionFromClipboard', generateInstructionFromClipboard));
    
    // **注册新命令**
    context.subscriptions.push(vscode.commands.registerCommand('generateContextOnly', generateContextOnly));
    
    context.subscriptions.push(vscode.commands.registerCommand('initializeConfigFile', initializeConfigFile));

    context.subscriptions.push(vscode.commands.registerCommand('updateContext', async () => {
        vscode.window.showInformationMessage(`In Development, Not Support Now`);
    }));

}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
