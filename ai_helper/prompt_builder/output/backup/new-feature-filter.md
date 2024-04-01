## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
.
├── .vscode
│   └── launch.json
├── README.md
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
let recentFilesProvider;

class FileExplorer {
    constructor(context) {
        const treeDataProvider = new FileSystemProvider();
        this.treeView = vscode.window.createTreeView('fileExplorer', { treeDataProvider, canSelectMany: true });
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
    }
}

class FileSystemProvider {
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
        return fs.readdirSync(dir).map(file => {
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


function activate(context) {
    new FileExplorer(context);
	recentFilesProvider = new RecentFilesProvider();
	const recentFilesTreeView = vscode.window.createTreeView('recentFiles', { treeDataProvider: recentFilesProvider, canSelectMany: true });
    context.subscriptions.push(recentFilesTreeView);

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
				}
            ]
        }
	},
	"scripts": {},
	"devDependencies": {
		"@types/vscode": "^1.73.0"
	}
}

```            


## 任务

我想要生成 fileExplorer view 的时候，读取workspace根路径文件夹下的config.yml：

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
```

过滤掉path里的文件夹，如果相对路径匹配则不显示。过滤掉文件每个文件夹下file里面指定的文件
