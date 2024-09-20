const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml'); // 需要添加对js-yaml的依赖
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

async function generateAllCodeContext() {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const currentFilePath = activeEditor.document.uri.fsPath;
    const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const config = yaml.load(fs.readFileSync(currentFilePath, 'utf8'));

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
    const MARKDOWN_TEMPLATE = `请基于 “项目文件夹树”结构 和 “项目内文件” 里的代码， 完成下面的 “任务”

## 项目文件夹树

\`\`\`
{{ folder_tree }}
\`\`\`

## 项目内文件

{{ all_files_markdown }}

## 任务

${renderedInstruction}
`

    let template = XML_TEMPLATE;
    let extentions_name = ".xml";
    if (config.input && config.input.instruction_template) {
        // 优先使用自定义模板
        template = config.input.instruction_template;
    } else {
        // 根据配置选择内置模板
        const tempalte_option = vscode.workspace.getConfiguration('promptContextBuilderPlugin').get('generateAllTemplate');
        switch (tempalte_option) {
            case 'xml':
                template = XML_TEMPLATE;
                extentions_name = ".xml";
                break;
            case 'markdown':
                template = MARKDOWN_TEMPLATE;
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


function activate(context) {

    context.subscriptions.push(vscode.commands.registerCommand('generateAllCodeContext', generateAllCodeContext));

    context.subscriptions.push(vscode.commands.registerCommand('updateContext', async () => {
        vscode.window.showInformationMessage(`In Development, Not Support Now`);
    }));

}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};