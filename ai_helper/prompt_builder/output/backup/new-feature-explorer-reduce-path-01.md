## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
.
├── .vscode
│   └── launch.json
├── README.md
├── example
│   └── config.yml
├── extension.js
├── media
│   └── custom-explorer-icon.png
├── package-lock.json
└── package.json

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
    }


    getSelectedFiles() {
        const selectedFiles = this.treeView.selection.map(file => file.resourceUri.fsPath);
        const workspaceRoot = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';
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
        this.config = this.readConfig();
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
        return element;
    }

    getChildren(element) {
        if (element) {
            return this.getFiles(element.resourceUri.fsPath);
        } else {
            return vscode.workspace.workspaceFolders ? this.getFiles(vscode.workspace.workspaceFolders[0].uri.fsPath) : [];
        }
    }

    getFiles(dir) {
        const readDir = (dirPath) => {
            if (!fs.existsSync(dirPath)) {
                return [];
            }

            const files = fs.readdirSync(dirPath).filter(file => {
                const filePath = path.join(dirPath, file);
                if (fs.statSync(filePath).isDirectory()) {
                    return !this.config.project.ignore.path.includes(file);
                } else {
                    return !this.config.project.ignore.file.includes(file);
                }
            });

            if (files.length === 1 && fs.statSync(path.join(dirPath, files[0])).isDirectory()) {
                return readDir(path.join(dirPath, files[0])).map(subFile => path.join(files[0], subFile));
            }

            return files;
        };

        return readDir(dir).map(file => {
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
        files.forEach(file => {
            // 移除重复项
            this.recentFiles = this.recentFiles.filter(recentFile => recentFile !== file);

            // 添加到列表开头
            this.recentFiles.unshift(file);

            // 保持列表在最大数量限制之内
            if (this.recentFiles.length > this.maxFiles) {
                this.recentFiles.pop();
            }
        });

        this._onDidChangeTreeData.fire();
    }
}


class TemplateFilesProvider {
    constructor() {
        this.templatePath = this.getTemplatePath();
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
        return fs.existsSync(templateDir) ? fs.readdirSync(templateDir).filter(file => !fs.statSync(path.join(templateDir, file)).isDirectory()) : [];
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
    const outputFile = createOutputFilePath(outputDir, fileNamePrefix);
    fs.writeFileSync(outputFile, renderedContent);
    vscode.window.showInformationMessage(`Output generated at ${outputFile}`);
}

function createOutputFilePath(outputDir, fileNamePrefix) {
    let suffix = 1;
    let outputFile;
    do {
        outputFile = path.join(outputDir, `${fileNamePrefix}_${suffix}.txt`);
        suffix++;
    } while (fs.existsSync(outputFile));
    return outputFile;
}

function activate(context) {
	recentFilesProvider = new RecentFilesProvider();
    new FileExplorer(context);
	const recentFilesTreeView = vscode.window.createTreeView('recentFiles', { treeDataProvider: recentFilesProvider, canSelectMany: true });
    context.subscriptions.push(recentFilesTreeView);

    // 创建模板文件视图
    const templateFilesProvider = new TemplateFilesProvider();
    const templateFilesTreeView = vscode.window.createTreeView('templateFiles', { treeDataProvider: templateFilesProvider });
    context.subscriptions.push(templateFilesTreeView);
        context.subscriptions.push(vscode.commands.registerCommand('templateFile.openFile', (filePath) => {
        // 处理文件打开逻辑
        const openPath = vscode.Uri.file(filePath);
        vscode.window.showTextDocument(openPath);
    }));

    context.subscriptions.push(vscode.commands.registerCommand('generatePromptOutput', generatePromptOutput));

}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

```            
### package.json

```
{
	"name": "helloworld-minimal-sample",
	"description": "Minimal HelloWorld example for VS Code",
	"version": "0.0.1",
	"publisher": "vscode-samples",
	"repository": "https://github.com/Microsoft/vscode-extension-samples/helloworld-minimal-sample",
	"engines": {
		"vscode": "^1.74.0"
	},
	"activationEvents": [],
	"main": "./extension.js",
	"contributes": {
		"commands": [
			{
				"command": "fileExplorer.refresh",
				"title": "Refresh Custom Explorer"
			},
			{
				"command": "fileExplorer.selectFiles",
				"title": "Select Files"
			},
			{
				"command": "templateFile.openFile",
				"title": "Open Template File"
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
		}
	},
	"scripts": {},
	"devDependencies": {
		"@types/vscode": "^1.73.0"
	},
	"dependencies": {
		"handlebars": "^4.7.8",
		"js-yaml": "^4.1.0",
		"prompt-context-builder": "^1.0.6"
	}
}

```            

## 任务

我希望文件树里，如果文件夹下有且只有一个文件夹，则以path形式显示为一个item，比如

```
.
└── src
    └── main
        └── java
```

显示为 src/main/java 以此类推，除非超过一个文件夹以外的子项。

### 典型case

给定结构：
```
.
├── HELP.md
├── config.yml
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── dev
    │   │       └── jtong
    │   │           └── training
    │   │               └── demo
    │   │                   └── smart
    │   │                       └── domain
    │   │                           ├── MainApplication.java
    │   │                           ├── controllers
    │   │                           │   ├── JwtTokenController.java
    │   │                           │   ├── SelfController.java
    │   │                           │   ├── UsersController.java
    │   │                           │   ├── filter
    │   │                           │   │   └── JwtTokenFilter.java
    │   │                           │   ├── representation
    │   │                           │   │   ├── TokenRequest.java
    │   │                           │   │   ├── UserRole.java
    │   │                           │   │   └── UserVO.java
    │   │                           │   └── security
    │   │                           │       └── spring
    │   │                           │           ├── JwtAuthenticationEntryPoint.java
    │   │                           │           └── SecurityConfig.java
    │   │                           ├── persistent
    │   │                           │   ├── model
    │   │                           │   │   └── user
    │   │                           │   │       └── mybatis
    │   │                           │   │           ├── PasswordChangeRequest.java
    │   │                           │   │           ├── Role.java
    │   │                           │   │           ├── RoleMapper.java
    │   │                           │   │           ├── User.java
    │   │                           │   │           └── UserModelMapper.java
    │   │                           │   └── support
    │   │                           │       └── mybatis
    │   │                           │           └── IdHolder.java
    │   │                           └── service
    │   │                               └── JwtUtils.java
    │   └── resources
    │       ├── api
    │       │   └── doc
    │       │       └── user-api-specification.yaml
    │       ├── application.yml
    │       ├── db
    │       │   └── migration
    │       │       ├── V01__create_users.sql
    │       │       └── V02__create_roles.sql
    │       └── mybatis
    │           └── mapper
    │               ├── Mapper.xml
    │               └── Model.xml
    └── test
```
应显示为：
```
.
├── HELP.md
├── config.yml
├── pom.xml
└── src
    ├── main
    │   ├── java/dev/jtong/training/demo/smart/domain
    │   │   ├── MainApplication.java
    │   │   ├── controllers
    │   │   │   ├── JwtTokenController.java
    │   │   │   ├── SelfController.java
    │   │   │   ├── UsersController.java
    │   │   │   ├── filter
    │   │   │   │   └── JwtTokenFilter.java
    │   │   │   ├── representation
    │   │   │   │   ├── TokenRequest.java
    │   │   │   │   ├── UserRole.java
    │   │   │   │   └── UserVO.java
    │   │   │   └── security/spring
    │   │   │       ├── JwtAuthenticationEntryPoint.java
    │   │   │       └── SecurityConfig.java
    │   │   ├── persistent
    │   │   │   ├── model/user/mybatis
    │   │   │   │   ├── PasswordChangeRequest.java
    │   │   │   │   ├── Role.java
    │   │   │   │   ├── RoleMapper.java
    │   │   │   │   ├── User.java
    │   │   │   │   └── UserModelMapper.java
    │   │   │   └── support/mybatis
    │   │   │       └── IdHolder.java
    │   │   └── service
    │   │       └── JwtUtils.java
    │   └── resources
    │       ├── api/doc
    │       │   └── user-api-specification.yaml
    │       ├── application.yml
    │       ├── db/migration
    │       │   ├── V01__create_users.sql
    │       │   └── V02__create_roles.sql
    │       └── mybatis/mapper
    │           ├── Mapper.xml
    │           └── Model.xml
    └── test
```
