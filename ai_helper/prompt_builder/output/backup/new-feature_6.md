## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
.
├── .vscode
│   └── launch.json
├── .vscodeignore
├── LICENSE.txt
├── README.md
├── config.yml
├── dist
│   ├── extension.js
│   └── extension.js.map
├── example
│   ├── config.yml
│   └── template
│       └── new-feature.md
├── extension.js
├── media
│   └── custom-explorer-icon.png
├── package-lock.json
├── package.json
└── webpack.config.js

```

## 相关文件

### extension.js

```
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml'); // 需要添加对js-yaml的依赖
const Handlebars = require('handlebars');
const { prompt_render } = require('prompt-context-builder');

let recentFilesProvider;

class FileExplorer {
    constructor(context) {
        this.treeDataProvider = new FileSystemProvider();
        this.treeView = vscode.window.createTreeView('fileExplorer', { treeDataProvider: this.treeDataProvider, canSelectMany: true });
        context.subscriptions.push(this.treeView);

        // 注册一个命令，当用户选择文件时触发
        context.subscriptions.push(vscode.commands.registerCommand('fileExplorer.selectFiles', () => this.getSelectedFiles()));
        context.subscriptions.push(vscode.commands.registerCommand('fileExplorer.openFile', (filePath) => {
            this.treeDataProvider.openFile(filePath);
        }));
    }

    refresh() {
        this.treeDataProvider.refresh();
        
    }


    getSelectedFiles() {
        // 从 fileExplorer 获取选中的文件
        const fileExplorerSelected = this.treeView.selection
        .filter(file => fs.statSync(file.resourceUri.fsPath).isFile())
        .map(file => file.resourceUri.fsPath);
        // 获取工作区根路径
        const workspaceRoot = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';

        // 从 recentFilesProvider 获取选中的文件并转换为完整路径
        const recentFilesSelected = recentFilesProvider.getChildren().map(relativePath => path.join(workspaceRoot, relativePath));

        // 合并两个数组并去除重复项
        const selectedFiles = Array.from(new Set([...fileExplorerSelected, ...recentFilesSelected]));

        // 转换为相对于工作区的路径
        const relativePaths = selectedFiles.map(file => path.relative(workspaceRoot, file));

        console.log("Selected Files (Relative Paths):", relativePaths);
        vscode.window.showInformationMessage(`Selected Files: ${relativePaths.join(', ')}`);
        recentFilesProvider.updateRecentFiles(relativePaths);

        const ymlContent = this.generateYmlContent(relativePaths);
        this.insertTextToEditor(ymlContent);
    }

    insertTextToEditor(text) {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const position = editor.selection.active;
            editor.edit(editBuilder => {
                editBuilder.insert(position, text);
            });
        } else {
            vscode.window.showErrorMessage('No active text editor found');
        }
    }

    readTemplate() {
        try {
            const config = this.treeDataProvider.readConfig();
            if (!config || !config.input || !config.input.relative_files || !config.input.relative_files.template) {
                console.error('Template not found in config.yml');
                return '';
            }
            return config.input.relative_files.template;
        } catch (error) {
            console.error('Error reading template from config.yml:', error);
            return '';
        }
    }

    generateYmlContent(relativePaths) {
        const templateContent = this.readTemplate();
        const template = Handlebars.compile(templateContent);

        const ymlArray = relativePaths.map(path => ({
            path: path,
            reader: 'all'
        }));

        const content = yaml.dump(ymlArray);

        return template({ content: content });
    }
}

class FileSystemProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.config = this.readConfig();
    }

    refresh() {
        this._onDidChangeTreeData.fire(null);
    }

    openFile(filePath) {
        const openPath = vscode.Uri.file(filePath);
        vscode.window.showTextDocument(openPath);
    }

    readConfig() {
        try {
            const configPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, 'config.yml');
            const configFile = fs.readFileSync(configPath, 'utf8');
            return yaml.load(configFile);
        } catch (error) {
            console.error('Error reading config.yml:', error);
            return null;
        }
    }

    getTreeItem(element) {
        element.id =  element.resourceUri.fsPath;
        element.command = { command: 'fileExplorer.openFile', title: "Open File", arguments: [element.resourceUri.fsPath] };
        return element;
    }


    processSingleSubfolder(dir, accumulatedPath = '') {
        const entries = this.getFiles(dir);
        if (entries.length === 1 && entries[0].collapsibleState === vscode.TreeItemCollapsibleState.Collapsed) {
            const subfolderPath = entries[0].resourceUri.fsPath;
            const subfolderName = path.basename(subfolderPath);
            const parentDir = path.dirname(subfolderPath);
            const parentDirName = path.basename(parentDir);
            const newPath = accumulatedPath ? path.join(accumulatedPath, subfolderName) : path.join(parentDirName, subfolderName);
            const result = this.processSingleSubfolder(subfolderPath, newPath);
            if (result.singleSubfolder) {
                return {
                    singleSubfolder: true,
                    path: result.path,
                    children: result.children
                };
            } else {
                return {
                    singleSubfolder: true,
                    path: newPath,
                    children: entries
                };
            }
        }
        return { singleSubfolder: false, children: entries };
    }

    getChildren(element) {
        if (element) {
            const result = this.processSingleSubfolder(element.resourceUri.fsPath);
            if (result.singleSubfolder) {
                element.label = result.path; // 更新标签为新路径
                this._onDidChangeTreeData.fire(element); // 触发更新
                // 重要改动：确保返回单个子文件夹的子元素
                const parentDir = path.dirname(element.resourceUri.fsPath);
                const subfolderPath = path.join(parentDir, ...result.path.split(path.sep));
                return this.getFiles(subfolderPath);
            } else {
                return this.getFiles(element.resourceUri.fsPath);
            }
        } else {
            const workspaceRoot = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';
            const result = this.processSingleSubfolder(workspaceRoot);
            if (result.singleSubfolder) {
                // 根目录特殊处理
                const rootItem = new vscode.TreeItem(result.path, vscode.TreeItemCollapsibleState.Collapsed);
                this._onDidChangeTreeData.fire(null); // 触发根目录更新
                return [rootItem];
            } else {
                return result.children || [];
            }
        }
    }

    getFiles(dir) {
        if (!this.config) return fs.readdirSync(dir).map(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            return new vscode.TreeItem(vscode.Uri.file(filePath), stat.isDirectory() ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None);
        });

        return fs.readdirSync(dir).filter(file => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                return !this.config.project.ignore.path.includes(file);
            } else {
                return !this.config.project.ignore.file.includes(file);
            }
        }).map(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            return new vscode.TreeItem(vscode.Uri.file(filePath), stat.isDirectory() ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None);
        });
    }
}

class RecentFilesProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.recentFiles = [];
        this.maxFiles = 100;
    }

    getTreeItem(element) {
        const shortenedPath = this.shortenPath(element);
        const treeItem = new vscode.TreeItem(shortenedPath, vscode.TreeItemCollapsibleState.None);
        treeItem.tooltip = element; // 完整路径作为悬停提示
        treeItem.resourceUri = vscode.Uri.file(element); // 保留完整路径
        return treeItem;
    }

    shortenPath(fullPath) {
        const maxLength = 100;
        if (fullPath.length <= maxLength) {
            return fullPath;
        }

        const fileName = path.basename(fullPath);
        let shortenedPath = fullPath.slice(0, maxLength - fileName.length - 3) + '...' + fileName; // 从路径左侧开始裁剪
        const firstSlashIndex = shortenedPath.indexOf(path.sep);

        // 确保第一个文件夹名被保留
        if (firstSlashIndex > -1 && firstSlashIndex <= maxLength - fileName.length - 3) {
            shortenedPath = shortenedPath.slice(firstSlashIndex);
        }

        return shortenedPath;
    }

    getChildren() {
        return this.recentFiles;
    }

    updateRecentFiles(files) {
        const workspaceRoot = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';

        files.forEach(relativePath => {
            // 转换为绝对路径
            const absolutePath = path.join(workspaceRoot, relativePath);
    
            // 确保路径指向文件而非文件夹
            if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
                // 移除重复项
                this.recentFiles = this.recentFiles.filter(recentFile => recentFile !== relativePath);
    
                // 添加到列表开头
                this.recentFiles.unshift(relativePath);
    
                // 保持列表在最大数量限制之内
                if (this.recentFiles.length > this.maxFiles) {
                    this.recentFiles.pop();
                }
            }
        });
    
        this._onDidChangeTreeData.fire();
    }
}


class TemplateFilesProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.templatePath = this.getTemplatePath();
    }
    
    refresh() {
        this.templatePath = this.getTemplatePath();
        this._onDidChangeTreeData.fire(null);
    }

    getTemplatePath() {
        const config = new FileSystemProvider().readConfig();
        return config && config.input && config.input.prompt_template && config.input.prompt_template.path ? config.input.prompt_template.path : '';
    }

    getTreeItem(element) {
        // 返回一个可以点击的按钮
        // return new vscode.TreeItem(element, vscode.TreeItemCollapsibleState.None);
        return new TemplateFileItem(element, {
            command: 'templateFile.openFile', // 在此处定义命令
            title: '',
            arguments: [this.getFilePath(element)] // 传递文件路径作为参数
        });
    }

    getFilePath(fileName) {
        const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
        return path.join(workspaceRoot, this.templatePath, fileName);
    }

    getChildren() {
        if (!this.templatePath) return [];

        const templateDir = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, this.templatePath);
        if (!fs.existsSync(templateDir)) return [];

        return fs.readdirSync(templateDir)
            .filter(file => !fs.statSync(path.join(templateDir, file)).isDirectory())
            .map(file => ({
                name: file,
                path: path.join(templateDir, file),
                mtime: fs.statSync(path.join(templateDir, file)).mtime
            }))
            .sort((a, b) =>  a.mtime - b.mtime) // 按最近修改日期排序
            .map(file => file.name);
    }
}

class TemplateFileItem extends vscode.TreeItem {
    constructor(label, command) {
        super(label, vscode.TreeItemCollapsibleState.None);
        this.command = command; // 添加点击命令
    }
}


async function generatePromptOutput() {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        vscode.window.showWarningMessage('No active editor found');
        return;
    }

    const currentFilePath = activeEditor.document.uri.fsPath;
    const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const configPath = path.join(workspaceRoot, 'config.yml');
    const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

    // 检查是否存在 relative_files.path
    let relativeFilesPath = '';
    if (config.input && config.input.relative_files && config.input.relative_files.path) {
        relativeFilesPath = config.input.relative_files.path;
    }

    // 生成内容
    const templateContent = fs.readFileSync(currentFilePath, 'utf8');
    const renderedContent = prompt_render(templateContent, configPath, relativeFilesPath, workspaceRoot);

    // 输出文件路径
    const outputDir = path.join(workspaceRoot, config.output.prompt.path);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 创建输出文件
    const fileNamePrefix = path.basename(currentFilePath, path.extname(currentFilePath));
    const templateExtension = path.extname(currentFilePath); // 获取模板文件的扩展名
    const outputFile = createOutputFilePath(outputDir, fileNamePrefix, templateExtension);
    fs.writeFileSync(outputFile, renderedContent);
    vscode.window.showInformationMessage(`Output generated at ${outputFile}`);
}

function createOutputFilePath(outputDir, fileNamePrefix, extension) {
    let suffix = 1;
    let outputFile;
    do {
        outputFile = path.join(outputDir, `${fileNamePrefix}_${suffix}${extension}`);
        suffix++;
    } while (fs.existsSync(outputFile));
    return outputFile;
}

function activate(context) {

    recentFilesProvider = new RecentFilesProvider();
    const fileExplorer=new FileExplorer(context);


    const recentFilesTreeView = vscode.window.createTreeView('recentFiles', { treeDataProvider: recentFilesProvider, canSelectMany: true });
    context.subscriptions.push(recentFilesTreeView);
    context.subscriptions.push(vscode.commands.registerCommand('fileExplorer.refresh', () => {
        fileExplorer.refresh();
    }));

    // 创建模板文件视图
    const templateFilesProvider = new TemplateFilesProvider();
    const templateFilesTreeView = vscode.window.createTreeView('templateFiles', { treeDataProvider: templateFilesProvider });
    context.subscriptions.push(templateFilesTreeView);
    context.subscriptions.push(vscode.commands.registerCommand('templateFile.openFile', (filePath) => {
        // 处理文件打开逻辑
        const openPath = vscode.Uri.file(filePath);
        vscode.window.showTextDocument(openPath);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('templateFile.refresh', () => {
        templateFilesProvider.refresh();
    }));

    context.subscriptions.push(vscode.commands.registerCommand('generatePromptOutput', generatePromptOutput));



    let openAIKey = vscode.workspace.getConfiguration('promptContextBuilderPlugin').get('openAIKey');
    // 使用密钥做一些事情，例如初始化您的功能
    if (openAIKey) {
        // 初始化带有密钥的功能
        console.log(openAIKey);
        vscode.window.showWarningMessage(openAIKey);

    } else {
        vscode.window.showWarningMessage('OpenAI API Key is not set. Please configure it in the settings.');
    }

    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('promptContextBuilderPlugin.openAIKey')) {
            // 重新读取配置
            openAIKey = vscode.workspace.getConfiguration('promptContextBuilderPlugin').get('openAIKey');
            
            // 更新您的扩展以使用新的配置
            // 例如，重新初始化需要 API 密钥的功能

            if (openAIKey) {
                // 使用新的密钥重新初始化功能
                console.log(openAIKey)
                vscode.window.showWarningMessage(openAIKey);

            } else {
                vscode.window.showWarningMessage('OpenAI API Key is not set. Please configure it in the settings.');
            }
        }
    }));

}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};

```            
### package.json

```
{
	"name": "prompt-context-builder-plugin",
	"description": "plugin of prompt-context-builder(Based on project engineering files and other information, automatically generate context related to tasks to save the cost of writing prompt words.)",
	"version": "0.0.5",
	"publisher": "jtong",
	"repository": "https://github.com/jtong/prompt_builder_vscode_plugin",
	"engines": {
		"vscode": "^1.74.0"
	},
	"activationEvents": [],
	"main": "./dist/extension.js",
	"contributes": {
		"configuration": {
			"title": "Prompt Context Builder Configuration",
			"properties": {
				"promptContextBuilderPlugin.openAIKey": {
					"type": "string",
					"default": "",
					"description": "OpenAI API Key for prompt-context-builder-plugin."
				}
			}
		},
		"commands": [
			{
				"command": "extension.helloWorld",
				"title": "Hello World"
			},
			{
				"command": "fileExplorer.refresh",
				"title": "Refresh"
			},
			{
				"command": "fileExplorer.selectFiles",
				"title": "Related Files"
			},
			{
				"command": "fileExplorer.openFile",
				"title": "Open Explorer File"
			},
			{
				"command": "templateFile.openFile",
				"title": "Open Template File"
			},
			{
				"command": "templateFile.refresh",
				"title": "Refresh"
			},
			{
				"command": "generatePromptOutput",
				"title": "Generate Prompt Output"
			}
		],
		"viewsContainers": {
			"activitybar": [
				{
					"id": "fileExplorer",
					"title": "Custom Explorer",
					"icon": "media/custom-explorer-icon.png"
				}
			]
		},
		"views": {
			"fileExplorer": [
				{
					"id": "fileExplorer",
					"name": "Files",
					"canSelectMany": true
				},
				{
					"id": "recentFiles",
					"name": "Recent Files"
				},
				{
					"id": "templateFiles",
					"name": "Template Files"
				}
			]
		},
		"menus": {
			"view/title": [
				{
					"command": "fileExplorer.refresh",
					"when": "view == fileExplorer",
					"group": "navigation"
				},
				{
					"command": "templateFile.refresh",
					"when": "view == templateFiles",
					"group": "navigation"
				}
			]
		}
	},
	"scripts": {
		"package": "webpack --mode development"
	},
	"devDependencies": {
		"@types/vscode": "^1.73.0",
		"webpack": "^5.89.0",
		"webpack-cli": "^5.1.4"
	},
	"dependencies": {
		"handlebars": "^4.7.8",
		"js-yaml": "^4.1.0",
		"prompt-context-builder": "^1.0.8"
	}
}

```            

## 任务

我希望 点击 file explorer 的 refresh 可以重新加载config文件，然后刷新整个file explorer