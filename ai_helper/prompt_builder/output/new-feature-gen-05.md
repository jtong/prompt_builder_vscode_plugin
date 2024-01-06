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
		"prompt-context-builder": "^1.0.4"
	}
}

```            

## 外部依赖：

### prompt_context_builder 包的index.js

```js
module.exports = {
    import_read : require("./import_read"),
    read_controller: require("./read_controller"),
    read_model: require("./read_model"),
    folder_tree: require("./read_folder"),
    related_java_class_analysis: require("./related_java_class_analysis"),
    resolve_java_class_full_name: require("./resolve_java_class_full_name"),
    prompt_render: require("prompt_render")
}
```

### prompt_context_builder 的包中的 prompt_render 函数

```js
const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const read_folder_tree = require('./read_folder');
const read_related_files = require('./related_files.js');

/**
 * 解析并渲染模板
 * @param {string} templateText - 模板文本
 * @param {string} configPath - 配置文件路径
 * @param {string} contextPath - 上下文文件路径
 * @return {string} 渲染后的内容
 */
function renderTemplate(templateText, configPath, contextPath, baseDir) {
    // 解析路径（如果传入的是相对路径）
    const resolvedConfigPath = path.resolve(baseDir, configPath);
    // 读取并解析配置文件

    const configContent = fs.readFileSync(resolvedConfigPath, 'utf8');
    const config = yaml.load(configContent);
    let project = config.project;

    project.base_path = path.resolve(baseDir, project.base_path);

    // console.log(project.base_path)

    // 定义内部上下文
    // 注册 Handlebars 助手
    Handlebars.registerHelper('folder_tree', function() {
        return new Handlebars.SafeString(read_folder_tree(project));
    });

    Handlebars.registerHelper('related_files', function() {
        const resolvedContextPath = path.resolve(baseDir, contextPath);
        const contextContent = fs.readFileSync(resolvedContextPath, 'utf8');
        const contextData = yaml.load(contextContent);
        return new Handlebars.SafeString(read_related_files(project.base_path, contextData));
    });

    Handlebars.registerHelper('related_files_from', function(options) {
        const templateString = options.fn(this);
        let trimmedString = templateString.trim();
        if (trimmedString.startsWith("```")) {
            const firstNewLineIndex = trimmedString.indexOf('\n') + 1;
            const lastNewLineIndex = trimmedString.lastIndexOf('\n');
            trimmedString = trimmedString.substring(firstNewLineIndex, lastNewLineIndex);
        }
        const contextData = yaml.load(trimmedString);
        return new Handlebars.SafeString(read_related_files(project.base_path, contextData));
    });

    // 使用 Handlebars 编译和渲染模板
    const template = Handlebars.compile(templateText);
    return template({ data: {} });
}

module.exports = renderTemplate;
```

调用代码：

```js
    const renderedContent = renderTemplate(templateContent, configPath, contextPath, baseDir);
```

## 任务

我希望添加一个命令可以将当前打开的文件调用prompt-context-builder里的函数生成文本并输出到文件，文件输出路径可能定义在config.yml中:

```yaml
project:
  base_path: ./
  ignore:
    path:
      - target
      - .idea
      - .mvn
      - prompt
      - prompt-builder
      - .git
      - ai_helper
      - node_modules
      - spike
    file:
      - .DS_Store
input:
  prompt_template:
    path: ai_helper/prompt_builder/template    
  relative_files:
    path: ai_helper/prompt_builder/relative_files.html
    template: >
      ```yaml
        
      ```           
output:     
  prompt:
    path: ai_helper/prompt_builder/output/
```

读取其中 output/prompt/path 的内容作为输出路径。输出的时候，按照当前editor的文件文件名作为前缀，并且在后面加上数字后缀，输出到该输出路径中。数字后缀的计算按照输出路径里前缀相同的文件里数字后缀最大的向后+1。
另外：调用related_files时，如果存在 input/relative_files/path 则传进来来，否则就传个空让他报错。
