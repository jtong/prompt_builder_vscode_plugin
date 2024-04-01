## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
.
├── .gitignore
├── .vscode
│   └── launch.json
├── .vscodeignore
├── LICENSE.txt
├── README.md
├── config.yml
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

### .gitignore

```
.idea
.DS_Store
node_modules
*.vsix
config.yml
dist
```            
### .vscode/launch.json

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Run Extension",
			"type": "extensionHost",
			"request": "launch",
			"runtimeExecutable": "${execPath}",
			"args": ["--extensionDevelopmentPath=${workspaceFolder}"]
		}
	]
}

```            
### .vscodeignore

```
ai_helper
node_modules
.DS_Store
.git
.idea
config.yml
extension.js
webpack.config.js


```            
### LICENSE.txt

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

```            
### README.md

```
## 快速启动


安装后就可以在左侧看到我们的图标：

![sider-bar-icon](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/01-sider-bar-icon.png)

打开工程所在文件夹，工程文件夹下需要有一个config.yml文件。内容可参考[https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml](https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml)


点击图标后我们就可以看到三个子view：一个Explorer，一个RECENT FILES，一个TEMPLATE FILES，如下所示：

![all-views](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/02-all-views.png)

其中Explorer里面是我们的文件夹结构，TEMPLATE FILES里是我们可用的模板引擎，点击就能打开。接下来我们打开一个模版，然后选择几个文件如下，类似这样：

![select-files](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/03-select-files.png)

然后按下Ctrl+Shift+P（mac下是CMD+Shift+P）弹出窗口：
![04-gen-related-files-command](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/04-gen-related-files-command.png)

选择”Related Files“就会生成相关的文件填在光标处，而选择的文件会出现在RECENT FILES里：

![05-gen-output-files-result](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/05-gen-output-files-result.png)
然后我们再按Ctrl+Shift+P（mac下是CMD+Shift+P）执行命令”Generate Prompt Output“

![06-gen-prompt-command](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/06-gen-prompt-command.png)

就输出到了指定的输出目录，然后就可以拷到浏览器里去问chatgpt或其他任何LLM了。

模版文件的语法为 [prompt-context-builder](https://www.npmjs.com/package/prompt-context-builder) 引擎的语法，该引擎基于handlebars提供了一系列helper函数，可以基于当前工程上下文生成提示词所需的任务上下文文本。

## Feature List

- [x] 可以在File Explorer View展示某文件夹下所有文件（当前workspace）
- [x] 可以在File Explorer View中多选
- [x] 可以将File Explorer View中选中的文件传给特定函数
- [x] 可以在Recent Files View展示最近生成过related files的文件 
- [x] 可以在Recent Files View中多选
- [x] Recent Files View中最多显示最近打开的100个文件
- [x] 在Template Files View下显示所有的文件
- [x] 点击模版打开模版文件
- [x] 在打开的编辑器里生成related files
- [x] File Explorer View中，如果存在下面只有一个文件夹的文件夹，则合并到path中显示为一个元素
- [x] 同时在File Explorer View和Recent Files View中选择，然后归并两者
- [x] 无视掉在File Explorer View中选择的文件夹
- [x] 支持修改config.yml中的template path后，通过Template File View的刷新按钮重新加载
- [x] 支持Template Files View的文件按最近修改顺序排序，按刷新按钮刷新排序。
- [x] 按File Explorer View的refresh可以重新加载config.yml然后刷新文件夹树

```            
### config.yml

```
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
      - dist
    file:
      - .DS_Store
input:
  prompt_template:
    path: ai_helper/prompt_builder/prompt    
  relative_files:
    template: >
      ```yaml

      {{{content}}}

      ```
output:     
  prompt:
    path: ai_helper/prompt_builder/output/

```            
### example/config.yml

```
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
    template: >
      ```yaml

      {{{content}}}

      ```
output:     
  prompt:
    path: ai_helper/prompt_builder/output/

```            
### example/template/new-feature.md

```
## 技术上下文

我们在开发一个 <你的软件项目的描述>，其工程的文件夹树形结构如下：

```
{{ folder_tree }}
```

## 相关文件

{{#related_files_from }}
<在这里生成你的Related Files>
{{/related_files_from }}

## 任务

我希望<你要实现的功能，用代码的词汇表达，不要过于抽象>
```            
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
        context.subscriptions.push(vscode.commands.registerCommand('fileExplorer.generateRelatedFiles', () => {
            this.generateRelatedFiles();
        }));
    }

    refresh() {
        this.treeDataProvider.refresh();
        
    }

    getSelectedFilesYaml() {
        const fileExplorerSelected = this.treeView.selection
        .filter(file => fs.statSync(file.resourceUri.fsPath).isFile())
        .map(file => file.resourceUri.fsPath);
        // 获取工作区根路径
        const workspaceRoot = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';

        // 从 recentFilesProvider 获取选中的文件并转换为完整路径
        const recentFilesSelected = recentFilesProvider.getSelectedRecentFiles().map(relativePath => path.join(workspaceRoot, relativePath));

        // 合并两个数组并去除重复项
        const selectedFiles = Array.from(new Set([...fileExplorerSelected, ...recentFilesSelected]));

        // 转换为相对于工作区的路径
        const relativePaths = selectedFiles.map(file => path.relative(workspaceRoot, file));


        console.log("Selected Files (Relative Paths):", relativePaths);
        vscode.window.showInformationMessage(`Selected Files: ${relativePaths.join(', ')}`);
        recentFilesProvider.updateRecentFiles(relativePaths);

        const ymlContent = this.generateYmlContent(relativePaths);
        return ymlContent;
    }

    getSelectedFiles() {
        const ymlContent = this.getSelectedFilesYaml();

        const templateContent = this.readTemplate();
        const template = Handlebars.compile(templateContent);
        const templatedContet = template({ content: ymlContent });

        this.insertTextToEditor(templatedContet);
    }



    generateRelatedFiles() {
        const yamlContent = this.getSelectedFilesYaml();
        this.insertTextToEditor(yamlContent);
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

        const ymlArray = relativePaths.map(path => ({
            path: path,
            reader: 'all'
        }));

        const content = yaml.dump(ymlArray);
        return content;
    }
}

class FileSystemProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.config = this.readConfig();
    }

    refresh() {
        this.config = this.readConfig();
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
            return !this.config.project.ignore.path.includes(file) 
                    && !this.config.project.ignore.file.includes(file);
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

    setTreeView(treeView) {
        this.treeView = treeView;
    }

    getSelectedRecentFiles() {
        // 使用 .selection 属性获取当前选中的文件
        return this.treeView.selection;
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
    recentFilesProvider.setTreeView(recentFilesTreeView);

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
### media/custom-explorer-icon.png

```
�PNG

   IHDR  H  i   �ƈ   gAMA  ���a    cHRM  z&  ��  �   ��  u0  �`  :�  p��Q<   PeXIfMM *           �i       &     �       �      H�      i    �wh  2iTXtXML:com.adobe.xmp     <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="XMP Core 6.0.0">
   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
      <rdf:Description rdf:about=""
            xmlns:exif="http://ns.adobe.com/exif/1.0/"
            xmlns:tiff="http://ns.adobe.com/tiff/1.0/">
         <exif:PixelYDimension>873</exif:PixelYDimension>
         <exif:PixelXDimension>584</exif:PixelXDimension>
         <exif:ColorSpace>1</exif:ColorSpace>
         <tiff:Orientation>1</tiff:Orientation>
      </rdf:Description>
   </rdf:RDF>
</x:xmpmeta>
�%�'  @ IDATx�	�-Ey��Zkg>f� 2d!��S��$�b��ɽ_��3r��>F�x��1�8�=<F_�!Q�8qA$LJ��s�g��������]��z�ի��׿��WwW��֯��z����Ȉ6�r-g��+Ȏ���"�	�q���`_��������ڵkdzzzdfffd|�A���?&&&�z��EH�}������9싣����M��@�b��+�"Ё �#@�'�x����sssϺ�{Nꩧ�{�Gz��'W�8�{�����ܹsdjjjd�޽ё�#��4��k8�-~aa�.K�1?�}t�v;�cR�J�E��f��1�����(y�Z�=k<.;�
o�Vі_�h 1�u��-`9���8���7o~ �;�vۚ5k�[�v�S�JH��J����D 8aj��0K`���A�0d8T���ň�(:�o�>�m۶�;���|����>�������~�,tr��X:u~~~3�}`0���и�Ǝ�>��O����a�����h�{�8���=�/�k㐗���L��k��C�Ksi�suUu������9��]ط��g0�n߸q�]|����ώg>�s�z��;nn��&B���OÉ�sj;�ݐ��å6���p�N��H ̾����F�s��W�}��c0�F~�,|�;�y���0B4�cǎy�]|t���ل�	<��z�Mߟ�(��5n|R�!�����0��9�z��	$�7�r�AÝ�v�؉�w✯�fq=O
#Qc�F7m�4s��G��~��G0�4}�I'm��ӗ����Gm"<H��2Ў �$��Ncf�Fc0��}��׿��o|	��w�uW4g��:�h�'�Ω���'�8蠃f�j�aI_=���~�+_y��'�L���49|:�}'�,��p�@
��$i�`�p���.{Ï~��C���o���7��x���㠰7b���h$罼��R*y�r�(�.�p܊�K��ܶg<��g�y�����]i��L����t�r�ܔ���������{Vٲe��֭[���+^v�UW�>�=��c6!����Wm�qNG�llʦdE zM?d�u4���(����������}�k�:�����|��*���� ��G@�e"��$ E�z̑��<��C|�+_Y��o{����>�	��$LH��D�-����Pr��k$)	F�"����F��--�j�9����ʯ�N9唹_��_������=�y�!ʻᏯഉ�wd yW$�64p����EEk����W^y�;�*�ȧ�~�&O�<;�QGO�p����t."�� G��ͭů���>��Ae^���ʋ/�������x�E@�3E�jE$r��@* ��� ����||�̧>��5�����o��c0�l(ߵT��ZE�x}Q�f#I�IG���6�Whlc��&�%J|�]���������{�6�~�~�%�܂���
��)ʣ��305�k��ž�[n�����=_;��Ӷc��<-ߕ�C�FG�G���{4�!>w��|������@_u�#@�ݶ��-�mҽ�����h��XB`v���\���~����W���m�m~��O[�T��g��  ��'�302��4�W���L�>��ς�fܷ��<�Vl�!(`7��Q#��V�\R:��	X�tc��A�MGsX+��s���<��o��p�����o�۟<�3n�<��po�*7B�����P��"v>5r������o\��׿~ˆ��9Ch��F�F�x>��>�\<T2�q;f��F��=��mw_x�s�u�=z`C��
�6ȅ@�cv.)*hC�J�O�~�~���������wE���s�4���8
)K(�61�i��bhE qB;n8�����0���_��_��o��o>}��g�n�	��ЭMD@�M ���F4z8rt��7��I|��8�( ��1�;�a�#GP�6Je����A\�b*��\%���Mcim�{4b�k����o}�[����n�홱�������M�%0�G�leUl%% %�Q�s{�M��G�è����pfJ��#�ܾ�I�j6�!SR�/����@S6�ěsh��9J����7܃���x����[��[���-oف?��	�>@�i�r�����Q5ޏ��G?�}��}Qf_�$�i�D�	��Y�������v1P\��nGc��#�Y�>��2����ކ?��7�#z��#��" +	`NщPj��z��s�9ů�L9��}�F7��}�|`F�4YtՁ��k���:2��v���Uz|�ƍ_~���X ��3��\�ᵉ������8r4���/ë�-\��U�v��#;���+�Ĩъ'����'�m�ZG�P|��u���-�	q����E,0{�	'l���>�wO>�䡦c�_����A �k���;�8��}�ɱ��g��AdA�E�B��[]	��Q��1�h�Hn�:���:0�:�)vѺ`���mI(�H��������~���I��ꓡo�$ �h� �1�}�{������o�r�����.�bd�a�f���q�������f� ԢDVPR|��L�}�9��e���"�q�]TT��M$E�F�0*=}�����w��[�n�E�è��U+�" ��b�ꪫ��a��"r�O��pz}��������@�:��@�Q%J�+8�$�P�_�<�?��]�!ĩMD@�' �����?���.� ��_�yF�i�A�9µe�@TP�X�H6�ds��,��u��=~�I'}�ӟ�4�r{6���5�T|!	D`x	�w�}�_t�E�A�=�}o�Ԧy�f(��IvOGu���M�@�Kl��=��I�N� �x�3������;w�|!$��=�]�r.���������u��'���	s��tg_���GM �����4�m$��Hۨ�^���q�l���K/�����=u�%P�&"�(���W_��͛7ߊ��رB�����_Ó��b�:�:д��$9rT�v�Hd(�A��E�Mz�ތ� .��Z��fT*" CK ��4{�g>���۷R���"�Th eOy2��	6�QG�.M�@R����Q��Q��s #7|(����N��k�y�޽{7Cw����^ʸ� ̦���_���7!��k5��"C��B�?�u���TY�	Ձ���E������Gu�M���Y诵��&" ��b��>����_599���	�s�#{�Km�Pl��QPP�U��@��&�7��8���/�㜤1�i��	@����O}�cX�����:��a7�7|���j���mi��[,�b��@;]��uR���dë��X���|�W�ٳ�0��&" ��a�9G�bx�e9�'����U����)�h�Q
����Љ���q��X��PՁ�I}�(K#�;�����m���^���ZTp����@ 
�/}�K����"�n(��(Q��I�!��� �_���@�:�I_��=�5�gx6l������OA���D`D�v�J�� W�=��+���w���m۶mQs4i!�dG~b_�Н�� �{k�81m[m"P8�$�S�@U0>�k׮�>������s�m0�x�&" �	@i����k/;��C��2�Og�F��Oh��d$�ihϏLZ���3{N�g]h��'�U�3��F�:�%u���h�:����R%�Ň'����ݶ���U����������?��i�~�C4|0,m�O��!p�#��������A���� 2Q��'GGx܎v�����82�IFR{����/��p��:���Y��9I|���m�%Kv~�|?��A�mD^�����C 
b��_x�)�\	gw��H�8��nԸnӡ���~4�3�G}�g�|�,x���t6H�#vu��������}}\Q��-�6�ݺ�g����l-��F������իo����A�M�MD@	���G9��:�Ҳ�#��B��w�0y�<v�@�|��/H���^g�2O��K�����<Y�b�(�J��[��s�Ȉ�3�w�z�Qz-�yV�'�K�k_��q�(|��[���o�zpv4m" "�R8��/� .�b���qޠ�Z(��1����e��wݗ���T�n:�Η�m,Ǵ�+㮠���%c�^�ٱ�<��I�z+˘[i��f�`e}ŃFr{�@b0��>���{�����߅.�����;>-a_�����|(��XT-R�T`c#H<��GI�S������kv������Y�;�����>�L�L����frtv3#��q��W�fy]��bƑ姷���$?aku�^�C�ܼή0�L_�����E%g���܅iσN�ĵ6�a&@��ꫯ�_v|C�{�(�	ˌ#S��XZ���9��f�����7�����d�B�b�`w�PyN��*�\1��Ӡ��{Ҹ��L��>��w�@#�2��3/K;e`�Z˲d@-uHƪ�#�s�>b�I��ʖ<�#����H{Lʖ��>���:��u�G�k�m,w�@��;�w�������O?}tc��S�B�6�P �o���/y�K>�cǎSp]��\Kľ���8�G�~�7|��źQ���þ��������;�@V���%�MY����X�w�c�V�Pv�x����kDeA,l�v�sԿׯp�ʣ�ù����5$���Ԙ��dp�e�s�n������A�e���o&/���Uܼo;��g�$���ޯ����|�I�!�q���u���e�>��V�~׻�����'�G����M�&���S|I�5(��֭[�?��/���.��~333T\���Q}���J(\����&в�4�
Ӿ�g0�K�J"|%���#�T_K3v�8�CĴ��EX�D�D�Ɨ�h�܋�[�-M+��Xr��HHl�;�ѣ�u6p���ĿdS�!)�0�S��E�Q�(٤�4(Y�}�h�رY��߹g��qZ:M�П�M�7�%X+Rǡ	�V�G݂�LQ�����������׿����9J���˪U�r�@޺*PL�!6��>�����?��{p� eF�GE�}Ū؝�)f��tc�W4S|8.>��;�*l���|�D���V�Jmd�����_�~dӦ�#ky�w�(ґ���d#��!��(�U�x�0J�g�q�A�����E2Ic�#���"�V��*�},�+|�ɸ��q|Y|�St�,���Xޒ�/�������e���k��
�`��
^����:?�$�]��䵹'�n��%��䋜��:�:��i�wR��۷W�׽{�Fy~�'Fv��=�|��G�����)+�:윔�{�J�)�-ɧ��֦�|�X�yν�xx�C����+�/x���=M�SI���J�/e�Kh����?��W��_>_!E1�צ4���x�r�����qY�`}nv~��0�d��J6Q�ax�����Շo�|�3=r�SO�;�Y'�{ұ��7.�i���ڵ#k���`0
:b;��HB���p��m���u7�4G7�4�;�A|Mm�N� d�&�h�,0�F�d����뮻F�ӟVq��������{����C0Qa��̹��ht
�hd��O\��"��G_�I�ܱ��|ܘ?�9�#�U~���j�W���/�C����
E��JE R�+Sf����T�ڷ�����R�B0��ƿ���"�~����6S�v�x�\��v,��㿗�Xs�����>��9��ӯz���ճN:k��Q�L੧�ڀW��~�w��G?�с�̽���xs�hOU���Q���J�6��4a�lM�d����#E^��S
�����������߾�H���V22�JV��d
`��O���~�B^��n�+�D�"L�)�h5r��݋����	y]�5R��;R���O=�������_��/������a5�)<:oCO�\V�O"P6h�5���Q�}u�ʑ�;�s����������p9�~��������K|�52���v���W�I�����HjA��+lo{���	p��b��ʥ��4%�����>��l���G�\rg|nn=�(G�{���N~��iL��{�
��[�?t�G��������ׯ��0W7�$G�:J뮸��^r�%נM=�[��A��K��r �nh���7p�Я��������9^��u�Q�x�FQp�&"P&h���շ��&(��b��[F
f����}o�,=*�0����kּ�w����ُ<��;��������b��Yy�L	��T}������[n��,|�u��G�z�o@_�X�AA}�6��h筌�f��/�~��>Z/	#j������}�~<~	;'�k(�_p!^#mecG�l���
������$�Er��u��4���	��Wj��h1���n��Mo���k��k^�MD�!��c�����>�߱D���ۡSh$���Y�wG����ۭ��5hJF#Ѹ��/I��/��SЧ�S[�>�T�%��̉��r1H4�iH:���#*�Hy��`O�J.e		��F��jmKur�^�Ƌ����ٻw/��k5�`k��� ��8b�Ν/�<�=��Ͼr���bǇM� ���~�W"<�Z��`���6m�ۛ�`=�����L �sދ�X��5{���@j���@�N�T��_񫯺��_���g~��MD >��/~��<��?��8O�ƐD�"3����-^�a��/�X:���f��P6JBD�4�U�B��}���:�53��� V��ǲ���*8�^���E�p���s�-#cc�>d��7�����y�����<�]�Z�	9�@������I�U:�C��K<��7#��c��m8F����T�{�G	��x�����|�r�{�2���P�O� �!�.�첯��Z�a�)�׸cE��1���P���?���c�hq�6v�ŗ^�
|]2A%�=�JCD`%l��̽�u�{�K�w���G��ÙM7��';�=��U�#�<r�|�˥����D w�W���Y�f�=|���)�2ŲF�G8�������5���z����g�x����C*�*e&����&����?���;���k���s�U�V�(�Wq�=�C|��Q$��}�����u��ՃY�+��V>�?���E/���4T}}�~D~a�#H4���i��U��s�}�O��q�H�Q���r8�KX�{�s�=�7�n@�8��Q#9���󞌕"�a�h�#IE�o����~��+�k� �/}�K�Ji7vG�٪;�p�9�V��r�.��j�O5��S�_��O��o��-/{��ǟ�<�c�qB���CK m��e˖����@���q���am�G;/Z��I��h�"-�򕯼
|6�WmC[˕�`��V�U�k�=�ػ����E*���(��D#,�V�{��o���?�Q�`j��%�I�ǰ���p��ք����KO������"�������(��Rn�+"�-4�}>���}�
(��@����8"S�((,��Xۋѣk>䙿���}�X*Yo�K0���~�����|�v^Q}���+�X^J��������;�0�%ȟF� F�xK ��_z�����w�0��(�g+��2U��y�'�舕���#��y֛���A�h�Gok��t������\\�:�f 5����P]�"}�Hn2���޶����țF� N�xI t���������K�Br��1ã����p�:��a�uEC�4�::z�H������x�Ǟ�|�+��&e ��\���۞���>�����b�����3�LGص���Y>�Bo�b�f�"���i	�M�"��9���^y�i��
��h�ʣ�
��x7e�L'r��vx��{_{�k^�(�MR8��MJF�FF�7<t��=� AIA7��*�;����5�t��-#]�nݺ�_���>�|y����D s�W^�Y�Nc�7z��|ʆ�J�v��S�D
ѕg|���/;�����6"O�JͧJ&YD cl���ۋ�ױsQI3�\�E�$2Jp�SG5K�rD�QwQ��5�����(��4�p�MD�4$�0�0v-d�F�p�y]Ѹ�H���3������TWx�̔{t��O>�u�.�9�k5�6(3��]wݵ�)��B#����z!>7�e�S���۸L6;2|45���6l�~��W�=�tܵ���@ rV��$�)�����J���ؿ�i���{�x��\%����	��?��C�~���_�}����4�cE��+��Q�x$��W���w ?�I���(HE`۶m/|��_�=B 6Z{��y�Q75r��y( �)R~c�6l��f�#8�>�GAh�a"�v_���k�	��Ѩ���4�y覴i�u,d��� �5�l������t�0���*^��ʭ���|p�'-6�H���P�s�K���gʅ�<P�V?�я~�(�Es���eJO���7�@�3�v7v3�Z�~�P/�M&��=�|$�-^z饷`u�s��@C�I �p����s�5���F��Q��_/
��0&גbἣJ�o�s��'#�ErT�" ����?��ap|���{�a	����p��M_X�v�<���:�ɟ����������D@�"�w��t�Iw�_R����sF�U���X��s^���H�vHQH銀gh$]|��/�X?��v������Fk����CW��$��u�e�]v%�q�gh%�4��7��ˡ��)\A�|g��{�T�����I���֟����#z�6<�V9����z�'�|���m���-S�3�̭��Ng}�Fg���f�l��7���x�WSG�ͬn��� �>o{�۾��sU����#r��������玑q4���XE t���7�ņ̌`pl�أ�YΑ��_*!���A��ѣ����E��=�UW}�m]�� �E H��wߋ�;�; <C#H�Z�Oz�~���Ϋ�lٲ&H�ZD`�8����L��|���h� Q��P�{t��3?�)�Y�C�h��^��둇�J	���$�W�W�{�ƍT���k)Vn�#�ѭG}�c�>+s$X&p��Nb��߂��J�wL���~�f�E����d�1���͛7/>����9m" yسg�!��w0����Y6J�������*���Z���}�|����yV�%������B��El QǹƐ{^������_����?���#D/�E \X��M���=h�69�;E���߇DC�8Ώ֪����7���I��V=I.��������~1��{h� qoG�!_�E����oy�[n������a&�W�җ��^0�ɑ#Ixb)��	�D2P�E��_�U0�̡g(�}������w��Wk�\y�w����>�?����+!��:���=��y��U�xi_�=�w��7@g��z(w��	���}ӛ��5Ff Eɲ��[1��-~[�=Z���5��ɽ��;���]�G]����p����'>qVپ�_�����<$s��8�z���u������?��T�E 'w�}��<���ƑOP{� RNK#H8����ё����}�{��5�:�dD�l�|�����})�u#v����>�?���ï٨�����~szz�xȨMD`��8�G��4F�������^�-).*�i|ҿ8�ѣ���{�ѣA��/�&��|� �X���e� �f	w�O箑M҆<��s��;v�6εyJ@�?=-�n�z����H�)xǽ�mF˶���h�Eo� w~�6�07?���8��7\��{�Q%��&" �x�����}�`���qx�_^_5�a�g� -`I�Տ=��q�����^
=�0�CzJb@��~馛n:���&�(�n��z6���/.,̼��^���O?}G7ɯ��$	}��3�y�����0�h5�d���)�
�2F��w��=�yH�MMM�tK���J�\��K��rˑ������L�e��e�OF�bd���Ot�7�������۠,"٤�XD@�� �ȋ^���O=��/���<�&����F��0�h���u�]w�6�0_d��d 5��
�G'cu�
�9d˷P#�@!STϠ�0�E��SN9���^q�S��&" �8��C����7�F��A\�ԅ���7�l»}mt���Fn����I:2�$K��B�:nŗ(���~��]�vM�1'Mcɋ2���*�rm�:>��_�����ɋ�D@D�o4�^��W=��r��WXE��X�B�ř�>�<��A� ��v�֭[��ޮ�~t���O��#,a���ڃ�����=���6�k<�`�F�Gq\Y�f�c��k�@.� "P"X�d�%�\�����������G�/���y;i�Tn��C�G�(��2�<*�^Ey�GNz���`x6�x���AA��	�1�T�VN8��<��c�	�6Ȍ ���+_��{���x`��*�3K#�n���͈��U|�������ǀa�s|����-�Z��T��Vks\p��AqE���/�PD Op�S��v�70z�F��L�۴0�t�<��p�?x�v���yIR���(�a��4��4�$搣G��1���V�7�u�i����!"��N8a_��]���I�R<�nܹs���+�ʥH�t�E">����o'�a��W7C^�ҘѶ8�8r���/��˿��R�" "��ų�:�AGw�?ڼЁ��q�ͮ�l�R�2-��>f�t�$?ʡ)6�	d-"��t���&ai$a���Y����z-��DD���O>y;�9��\���T��΃!d4��ka�L8o:�!�YvѸ������?�DW!�܇I�KOOs�w�ɷg�yE$" M`M���?�:��x����Xw������񄺣N�  ɋb�]4�c�x�u�l���"sG�̭��L�#���ώ>��B����R�}��?�+���g��Lˑ���,�e6�d ^�>�艳���D�:P��,;z��9��q���~��xŬ�H����_���֮]��6��bt�#HX����~�ǵyD@�G�ы(X�~v�"�r��l)����%^(%��E@�G`�}���o����=g|x|��'�w����'w���X>�:ь�6����&4.�5�,i �:��4�h8��r)�8����<��cA8?ӕ�j��̅�۷���~w��+��"�)|V�b��1����[fkժUO�y��Zz�Ȗ��QG��Gfy5����\В�ٲ;b뗀
�_��ǰlR6~� �ٴ�~wa�Q�"MI�u-" Y�Q�x��?�WX���u�������
ו]��N��y�0WV,Oo܊�[
U(<u�~��k�6n��
+�y��	�ۮիW�#��_���n Q�p�k�o���)�\�Qp��<�dn#��L+����ͫ��@7` M�[��I���/��/�r�IWA6M{IP���T�"�6&�5�߷r݃����	*7 �Y�V{���@�+,�a��z�+��e �"��7���fdRKޗ�G��_S�ȕ �d[���w�0���#�J���<��<���zj?�_�ʏ��'�}ǚ?��5<��֬Y�t�+����86n��S� ��N�w�k'X�����OM-�/���ySA�J���ذa���KQ��,t�A�b�0B�Wl�Wm�f���s�,T%�@@R]� ��#�D܊SD@Z���"�n�>�*�ϳc����C6�U����[�J�#o*IGI�)��q~���p�'�{/�(H{&&&�1J@�*����ɩ�)N���	H�D�bLOO�4�pl���v��܈+!# )��ͮq��X����b��aY�SH���?�}8�|�Ey����'E@�"�D��T5�h-$DƵ�Lٱ�4���|�ľ�ϸ<C2�2�YDTX\��d�M�C�ZE�[j�/"�7������8�!衤A���;�^#�*�4���^�'�U;�g�k�h�5>ihI�!�c�>z�i�Y�^�Ϳ@A\�&+}7MW���J�OjJ%SlP���Z����@��`3c���F�V�}���K�,��Ω�G7d uC�3�?��h�ޗa�Jĳ"�8" "�/3ب˛U�����D��ε�\I ,��$�ᐔ��)"�3WO��=G8����W��]��Ta�_F-%��j�:��[bx�e~tCD@A�^_�qid��&e��釀�~�vǎ4�RM2,RT|a[d�J[D`�	�0���0鳌CY��`�2�gs{�1:�}�����Z�����#H4��I�G�����#VމB	By?�O����:H�� ���Fh�U��� ��'�p�
���Ae��NNN�a��2ܻwoO��e�<��xA`R��x��sp�C��[Z�]N=Iy�yB@#H�D/b��̄R~���K1(��@��h������Q�Y��d���%�������� be8w�嗛R��� FgF�;��&��7��5@�ҝ����\�B-�����\�9e�F��3���jSSS'���J��;v*5���S����ߤ���?��wꌶ*��ȣ�@Bo��~��U��Z�D��Չ����֢G��a���8 麎�Ƒ^�u�mp�C\
�y`n���9眯m۶���%�A�PNs��z����_���a�Ԟ}��g2��h�c��*Q����;w�\�R�2S�_�'����0�v\������rh& �aͭY�1�|��r�"���W���]��:;;ˑ#.{2���
�iƇJc��s�'����S9�FץN��#���lDW�F�:�����ٸq�
D�� ��H�q@{�_�xo@P1���ʭ��:�h7�NQf�Pp�0��PkI�J�y� �]8�_�<B!��[����*[e �Z�Z�n��8�;�p�a�N�c�Ocu�A�q��pέ��/KwS�"��>���W�?$�r�V�#G�LI
�tW�4+�~��)��Y\����:��"��`ß�ݨGx=	�U82�*5�qn���*�O�G��O��-ܞ�����_`��$=ey:��N�Ǣ:�7
��#߽3/�������u4G�?&WZYbi����L7y�t;��p��8����ju�q�����!ٹ'�oVZ������"�nS.�����1�Ƴ�K�@����{�ܜ��v�B���Va�=�9�s��"0�ש�F������`�L�r���u�{���H�vL�e�#B�@c�h�O��%4<��I�
�ʪ�d�l]�s3��}��E�,�&��ώL"m��L��ٽfn��c?�xɕ�޸�:�V�����#���1�d>P���1AO=$9����nٵn�"*o�>6��[s������=�Pf�G¨u�P�7?�n$��7�'B�2��.y�'h�x�!bkPrM�n���FP@�d;n&W��1`_o�nw��)������o����qg�M}Ϩ�B�U3w;2n�<b��Q_��oz�E
�Y$�ZQT8)`�U�)Xɋ��@@#H�:W�
�[Q���4��ۀ�/" "��w�\C+����szX~*À�P�����C����_���� � �ǻu~?�$r�;9V�<�N����� �ΐ��Q�j�����VLzV�uM�E@D�O|�Ư��yB@�'ы|Ŧі^�)����E ��_���J�/�}I#�/|��z4��]l(uȒ�>�ϒf�qiR� ��k6�z]k�~�T����oژ���k��F�<+�n��g��В_� �g�b�d yT݊��#�'�a���_D@�#@�H��<*u�F��i�DD@|#��]}��Y�����@���'#�Kh�." ��u��Q��>J� �R0�C��G�ѭ(x⨢q��'�" "�-�Y��s��@�O�n�˯�������i�G�#ɣ��VL���m0���@<I_�yT.2�<*�nE�����-8��D}1�$���Q��@�0zeJe�8�vԹ������8�ߍx^NOD@R��5�bK*//2��"=�t` i�� �*J(� t��"��HSR0!8�+6�_%E@D�3�'��(W�`sŝmb��-�����@d �S�2�:��>_��C6���e$�D@D�{��u�����yս�	�s�x�ɡa��T�YBU\" "�?����wLQ�����╴54�oI2hK�F�੆s���)�5_ޙ��9H��Td" " "P' ��"�M���$������d �^Bm��_���0�-� 'i� �0ɨ�5���B�a������ti|.���3yM��������8z�$
�A�K#�s|��$�������h���B��}PE�?�|)^F2�.u(��� �d/��I;bm�M���̿{���p�n�Ǥ<��{�c�t����:�L�Ys�[s#���M�e9�K���(=�zXd yX(iE�B�J˧M�_s��u�Cɦ��~����f�k�@ҿ�Z
�	�r�>�u�}��鯌�7�V�$c��5�߮��o�[G:�i2���b_��W�%���m�vnǢE�V;B��q��Ӥ�����_W�Ց���ԣ���,+�6O�@� zs�{/asc��d�#�p�s�urK�uU�o�/|w��:Q��r��#\�x�`[v+��ҿ��3(&I��9w��u�_�43���J���o�vrI��5ַ�u|�;�M.=$`��C�$R'PΡ|�f��U�T�T^��M�v�r��n��tު#[�8]�{��5��I���Q����[:_��1���o��UZ�Z\4������j�ظ|Z�������jtq�q�4������8����Ӣ<�2�O��Օ�v�3����Z�٩�wJ��[�1ݳ��ҙ��*\����Y��_l��U�*OW��s1Р�i�)��F�D���[|��  @ IDAT��y���u��m��p��J��؉-�k�{�S����q9?�ҷ��"7��/�ckQ���8��~�O���:���y3#��[R�4�����#�L��77-�|�n���� �dK�A�������+6\�larr�655��$d�"E=�Nf9��Y�y�Ni)�rg�3�]r��--;�_ܯ@��yq�t���19��K�",�1y�|��,��~�S���'n<����[��yp�c�澒��?;��i�;�F�L�Hr�5�b�_���IM?��\N�c�����F���\�iq��r�fg��ŨZ�}�0�p�<�X7&�@�%Uw3�,��fy�~̕��3�xj�����������=��b��9"̜�U��#V���[eff�@f��+��=�QIao�i,)�к��8-�N�Ӳ���	?�z�A���
-VnQ�k�˺���pZ�}��e��gN��V�Q���1
�<='���R����xϮVƳ�^�4,�fGƑ�t*͂Dn��j���ⲣݷc��r��SY�s��,�iUNdd6��R�4��L���x��ֹ�[�D����mn<��L��7̿M~�6��x�$g�E9i Ez�G������������7���@�d u�̟ hX�:H�(���Q�7���/�k�Ý�؀�T�b��Nʿ[���nl4\�����α�&�r|NV�h��eMn�rJ����/+�y|c򯼛��r��[D�L>�k�|�>ڟ�����W�l�߽�r�:�t����7����$��Ϗ��Ύ̢�P.�i�l���<�׎-=��A�cvf��&|�o��v�hX7�CS��3ߧ\��r�}�(�w⚓�M�N�D�5H�لp�����b�a��s���3�<��'�p�����^���/�)�����H:��w�������ڵk���]�v������'�!W��9�۶m�`?��o��/��|0�?���n��Haׄ*G�|���8����/琷6��`$���O�X�0K���w�������7��$����J���#m7�m{�ߛ��H#Z	����o�
o% �%j�f���x�rKd�!�l �n���j`��sn��%o���@�w��d ����]<uD����V�a(�sFOD {�z$�Htv���@��ã�d yT=��$��G�ފ끿����O�FP����{n��+��2R
�%d�[�l)�{Oh��x����)��@��:u�Bu����ߣ��Q$���xP���(��hI�^���F�;�1 QD �;l���9r�=/^��OE)�!�V�4���#�G|\#HU�"�E 2�4��M���a����a��	ò������6k�'" ���\��l���a�̈́�"鎀*Gw�|�D�3�_���H&(7��@J���u� �l�BH��U��tQ�ge)I�C�#0����hR�9k&c�2u�*���?�^����/
�N������dz��+��X�ϛ$��(x	1`aϞ=2��/Ie@�$`_�q���>�>�E]$�
��b+A���;����|>*&oyI0�L��j��r(	�N���I�g�w$��AD��� r�F�jժ��
Bh	)"P��J���� c�<�Xd^M��J[��Hy�vL�
F@D`����e ��"hF�F�c$ыFQ��| 0��l�م�!+���[��R]+���a& ャ2I����}@�9�Γ��P�2�T9r�z)��L��{�1(����Y~j�MD@r%@�:{�t}ҟ|��<�x�����;�2��!�~mPD@��Oj���E��/�HI#HE�o��O���xr*	���Ą�ZI
S���`�hO��#�Fj(_,�$�*�:-�
�[QР�)���������Y�E@D��Г��� ���W��I���-�-S��m���C�S5JD�D�B�Nd'�C�o+�D�"MVB�4i�!?~�p���e$�D���^��� ٫5/����G���J����
���-��ED�xu��#���i	0�(�F��(�A{��4h��
�=�yH�k��ZD�)��=�;6r�ԓ�����͇�pdP�����o��ʆ�����Id� V�߃�D"�=��δ�Y��@�|A�4bd yT%��Lu�������82ٚC�I��'r��xRe#~��V�BV�D�S=��h���.� �F�<�G�V�I�`@EV�HE!"�gm!�H�.��|�@ʏuǔd uD$�bR]� ���@�����gT�$���5�>W�<�t���AVյ�k���0	���4{@�n4	:rarrR#HU3uZF�����F� Z��P
""�1�x�c	��F��:Nd yP������Db��^Z�D@z" ��866�թ9b�ݨQ��H.r2�z*�
�sX����	���sR���������4#�'��?�l��kW��b����L:vG�|w�r�����+9���*0(��+�z
�յnhɯ�@&���݉�I=��f�J �\+�,$+Kq*����Z@��Z@�%QE�,��Q�WF�q�>�$���Q��'ыx2�7t��Ena�Pdn�����C iS9�u�s˧S��@
��'���E� �*�`�i%�T� "0H�7F��3�H�so�@}�6Ț�[��T���W(4~k��P]�$��� �1d��?�W9�׾A�D��(1�(�Wl@T" ]�+6�^��k�0�̭�4���.od�"?e�CR���'#.�D�۪�QKt�p	P��a�9Y0���� }��v�ZIN!}�K�(�C���ā��D��%��@���82�{_lx�&ɣ��{�����xߠ`�����`" e&����y�I�A�&�Pi<��(��K���@�5�������(l{����$䜟���	m����IA�YG4��2�Qy� &i��=��s��ͯ:�[񋎤Ɋ ��ZV4��@j0:��?G�|�A��$秧���J�$}�0%�;�l`H6�Ƅ�O9��6ȕ ���qj�P�t}С�/b�+�i�`���
�l�R~�"0%%ɯ2�4"0�{*ܙ��a�F��Q�A:��e 5P)��]�XI�z/8�/�2�OH>o��m�g�$��@9	@A�q�;�$Fn��� �ߊ��U�e�|�-Ս���CiL(��+s 8�)GU�qd#�ލ$��HM@RjT^z�Pk����yY�$��� "�J�F�w�(~��Coi9/��$��<�\�j0�g+��m-�lcVl" "І �$$�u�h��}vl��o�#\2������]I,�.� F�(0^��t׹��� ���={�l��1#��={�6h1����=��O�nZE)S��&/hP2�����Q�	���ú}�;��c����9ĦQ�l�f�[Y2�P��G �*���'$|Ŷo~d������X\�_����x3��&l�{Q�H6G���P�	2�@B�D�����PR'y/�(螃�)��HR_��K���YX�J�9H͹�Z�VG&&&�iୠau����T0�[�C�" ���wl��0@� �~���켰��rE�]�	���(�r4�J��`)�����T��'Ȑ����j':���`��+�H<|�∩SXe�A��%<ypL6�VU��Ov�=y��	�@�&a��J����K6<��[ߥ�mVI��U��B *��r�g���
%""���]R�З�l���WP�X�$�ʸ�[���j>V]�$��� ��8s�� Woz��b}�Q$���7��#&!���F���vH5K��@9��0�Ȭ� �E.�x�fB���&����o�����i3�15���nj,3�ymc�v�S}�����7�޲�����0q�n����u�&�Y�i�n<i�7��)�N����*�d���=o��1|;������$�F��	�����N�v��rws�I�n��_2{ꩧ��@zҢ�I�w�=�+��pZ�yy��$��0%��PeaJ�.�5����E;v��ׯ_��MYQ1���&��Ɏ����;W�ݍ}�i�S�9jfƒ�P�G;�i���:�ة���etZ��=�׌c�:	*`'^��=2��c��y͝y�5Gs�8���K��{���n�����hi�G�[�v���'���<O�Ixʹ��M�isk�tg9��A���d�2X]�yr��x�������=�<�s��u��y�;7�o�Ƞv�g�o塇����U���k�ư���Bct��Ջ0 ����y$ϹYtv�0��]�>�uĄn��}~~~�t,q��|��ώ�pnm�7�� #�Em���4�N���i���p��i���Ҵ�����"
��_s�5����/X�f�Ba�❀��B>�;�yY����5p��]�~��ގpO�|
Jo�y\G
�=�	w����u��0��7w�A�����g���oarr��hC�Ďb�8-�}��~�7~��������	ܯ��� |�(Ҍ6�_��O<b�!����q=��j��!��9�D�p��c��{�!Wƭ�N	Y^#C�?�WA|��y�F��i)�6�K�R�pc�Lh�^-yY����>����08g����Ȁ��7�R�1��u��e��~-�ȍ��&�rc�j�#Ó#7�A�!�q/��7��9�<(xĆ~͟��5��xDZ��y����Ҥ��㫩�N���D�#����"�n�؉8�_�VTO�7
ä���[E�c�'n��>�2K�)�T�7��r������y����������0'�����#wsc� �d[@V��B�(]��;w�E��ڵk����;�1�m���0��^�׬��|�:�����_���������#u��L%=�HQ��^���o�}��;��U(ճ G���<�7 \��A�r��0����w�p7�)����t77��7S���X;2��G~
uHP���X�I��FFH|�5��}��^s��~y���<�~qY�1���ͽf>�y1����pL�u㹥���1 k�1~��[2�%�ew�ZE��a��p�,�/�ܢ��N��Z�v�q���嵻����g�0~��p&3�N������q�1�o���<����XZVN�ߧ?��l�f�2[��m�f����]�ym��Gz���h��n<2-7����>���#�6��k�;N�1��O���6����x�K��zmN�i���/yFV*m��B�Q��s�|�k
�GnT�-�a��#���Ӻ����^�mP�dZ�#�a��weqe3?��Aəy`������d�V��$��ֹ�.Y�V�d���FW�G�G7�Ӱ�_sg\�=;�f?[�-�Q�\����&��s�BC.�nx�n�\:K�ۍ_':W.��ֽ�,��"N �kp!��Lh�1%���O����nY�Hi�cI({*�fu����󚛫��CY�3�_WNW�Y��ǔw��D��,�t������̯ݏҷ�M��U��>��o�����a���2y��K����&�Y�f��w7�y�0[���-�ò�nn:�7����d�8����҃���4����l��p������z{I�k�Z-��!�Ĝݣ���/臬��n8_�##����T��"��Q��Ö�2�wժU�)�J��,G�,��UX4�8$ްAIP�Օ���������nzI��4���&�X|��-������4;v���~�8�~�1��)�N�-����?���q÷�io"�n\-ø����Rí8�'��]$�K���ڋ�������n���|tL+���x�Q#�5>&KZ=�&������e�߁p�1RH>�Jz��I�=(��)d��X߸S��H㨮�縌�N
��}*�V~�t4�7ם�&�#���0.n��4~��caܸ�����g��9Z�n��ė���ŝ&�Va�i$������t����<m�^�o�f7n��K��M:i�2]K�x���?M���u�F�
-����@Z�$$�d�ܮ3eF��Ĭ�fnv/�1�8Z)[S�IYZ����2��g���,L37�����XT�i�M㧟�3l���&�Vr�rO� �X{�C>77]�g�~���qc*��l�N�$�V�"�P�=��gN����F%eFG�LqQn���cʍ��u+w���<�vs����XZn8���Y<�׮yl毙��ٹ�~��&�h�Nn��?��L#m]h�f�O���,�,ܺ�+�4�8��ȍz�hY"A��`��ʈ_+j�uZ�$Q��>�m�|�F��?WF�sdnɣ�d�nun~{=��vG2\�U\��5sk�ܓa������§����y'9�v�q��w�_�S���)�V���$�[����������%?�ϓ�%SeB�)g�AD@D@D  2�*���xg�I}6<���k�	�@���������������֙�p.$������G@�e�Z"HzŖ��<�����@z2�ҳ��'�����P�����@�d Zp;A
8]D@D@�$�ᧄ��%���E"K��қÖ��(��|�\�<�!3*�2��� " " "�)H��Td" " " e  )�RT�_�ʁ����gԹzV GD@D@D�x2��/��%XXXE`�a�PD@D@�P�ڜK0���A������@�d e�3��4��7q�'" "0d \�X/��W�u�.�." "P2�.H�^�����O������K@��e�Q2�G*����AD@D@�'��{fބ�_�y#�����pI�3�_��'�E@D@�%��߲�(Y<�;�����ֿ�Q��_����#Hxͦ�ک�ɣ�����# )'/}�+6/�EB����������5���s �E@D`�	p��q?�$?�%�T��_���B%O" "�5�A�xd �W&�%�g��Qɣ��xI�#H��$ ��rI+�b�&" "(�^��d �[6%�뵎��AD@�&`�^��WL2��+���ai)5-y��d �g�O� ��w�"�D@D@�@�V�Lyʑ�A�zZ��D��|�@ʇ�@R�+6����.p�+~�N������Q�w2��yon1]k�#��X�ݸ,���c~��;��x���Q񿔋{C�F�g�6�A<�ooK��\�g̔�-ޮx�����g�0�(-G7H�s'�������$B�Xܸ�}�T����CXֱ�;���@�2�J2	S*�``L!S��Yĝ�(�Q�/H���1�@� º縴m���pu��E@ѥ�{<e|�<�'~��5,;E��	/L҉���5�������36665;;���o���ɥ.{ǟ˪c�N��~��kI67;��"#ibb�6333nFܥ�#<���a�Ue�f�SN���_���3��j5� Y,�PGG��/�V�6?�'��o���Ko�(�m���Y�&��R�40���.���M�MM힯V�+�w���O|��^�6��q*�42�┧֭[��+^����@�I;w!�ø�#�Q������'��57sjz4vl�)YG����U���fq�r�����V�W�������& �d��XF��y�o��w�s�]��YP�{�H��!Ⱥ�Y�Dqz�˒
H�"V�^���Yg���}�C?�Z���qx+�����Я}���}��G��ͧ͌;kGy���z׻����Oo�y���!�e�>��S��#��ۜW�CB@�l �gE3�n�p2�
/���q�{�C�Ṳz��G��UC��g��O~��"6������Y�XX�~��g�q�l��Wl�@g�4����v9���%�/�����$�
җ���	D"6� �=0������x�rg<�D��up��N�~�cf��3��3䑻6O	�@�`�+�2�ܽ{�u�]d�?�{�����'��Wy�HȎ�F�Wl�.oO�f&��"v�h�Y܊HD [!t���X�A���D	g���y##���ǇQ �l베�?�+�l`ԗ_��!d�bȔ��23řodx�HF����Zmrr�F��N��#��d=0���[�|��Sa*P0��)�`����.F��X;1u�O���'��� �*ʕ�)���{e�]�s��>�!��K�u�3��e�d\oXNzH��Wn"��Pa�,*>i�^+���O�>�?2��#�׀���= ��ᨑ�H�v||�m'��H ~E�*@�[�}:HC���ݣ�l�ݥ
GI'	�l6�nQY%��ZD�2��(����k� �r�`��N�����ܹ����X��w�rtHo�K��B�|ysM��(R,|m8H�Z�$���'�"�C�r�C�3Ey�?ٖޏ`�'��,��R��,��1H����X�JVD�W���[>`G�-�2�Ss+Zv*g���8F�|�����NY���	'�W�R(E����\��@7�  C�=~��v�u��^�D���(�`A�w@��dA@4��E;HG�W	�X��WOOOG�&�|�!R��kdT-�l���wy�^��.��!�n���D�jN�)�,	�U���h��0A{4����+�R�)�$8/0�8?̌Y���JP5��K��9�k���3H�p�)o&�2�<m�;;Y�:䩤K���)��v�U�9���7G�B�3ǒ�')H�H#ID@Z�mEF�"Є����y�vd 5)<O��������TC%�ܜ><����H}+�.�	��[63,�ȡ�^m��RkϜ�[F�>p�[���q$>՟��D�l|]ϥl����F_q���^ƾ2�_��M��n��ý0���E��B@u�ߒT��o�H2O	������ڲ��yZ����?.���L��!���Gf��!�&7���0O`���ԇݗ����đaMh�6
��=�CѺG�wt%"�_�OL$K�hH`�g�sm��6�u�@XG����PI�@.d �y���rYF�<-I��8Z�Q�$O#H���fGOE�X"0�\�:� B�<��6t�C��$2Ρ^h��������=�_O�Hb� 	�+���m0
��Ag���u�g��Cx���T�Q$I"� �����@G���g��s�g"�M���6�Wl�."++���h" 2�TN�O�0�J3��9$uf?��a9�I�	G��G�d,O�+����^�5H��Y)>�7���1{.C �
˳#�M�lp*�Y��-�S�NZ�u ����緗�2�������٫�J�V�R͞)F�f�QUJhe橴+4�8���/*�ʣ+iШ��[]�)�sr�b̵E��
�G�n[�|AT����{�_�E���������O�U���F9� ��i �f	Oz��~�x��={T�DA�qרR��%w(��g��O�4<�	�s�R� %�y:P7����xXI�5��H��4%�u��b�c���y����hyh E�x{5��q}
::� ��ò��jC~Tt8t!�i�0H�'D�(E��O������5���=o{���9Hn�5� 5��t����Sq)F����}�ڄm�����=��c�hQ�1�����E@J4/҃K'�2�R)$#����oq*�����K04�S�+6.�ٲd�4�������/�0�L-�Y���S��h�L@Z�_�xڶQ6�A¾b�EF��Tr�%�E�'?\�3ȭgt��B)������幈{.c��Y�f�Ǧ�i�F�"�5T�J�KY�$�A�!��R�b���a>|d� S@�s��>|�,�x)�?��s��C�uA�����"J�Vа�iY�ʂ���Y���hw���.�e������V���$��N�e�Z",� ��A)V҆�q�^�`��/QJ����E i �=��w5Г�"�� :��p(�A�1�a�uv�Z�m�I�(�:�0����� e\�
�C���' �=��B�� K�a����$���h�����!O%�XE�+�"��O�g%�^r�5ޗ!�Z`ɘ3�+��ӿ�̹P�� �(=?�T6~�RP?j���Oj�H�����+�$�8ڌ?U ���1�|���I�d�8��n�u貫�D@�"`��+�$L:�9R��s���'�R�b�08l� �t
�x.�j�t`��a�DE�2�|(��e�Ư|z�!���4\�;·���w>�3�T`d�||�C�B����5��̾���V��:�R�b�"e$���6�����nC+qE ;2��cYDL�(Z��H):l���@�ݘl�ԍ"�M�i�e4�P�J\r `�4���D��h�粎w�A�PF^�f?~=B?�M�r�����d�7�nL^I���$�����ޠh�xq�����2��|�ƈ/U��-�wõ/BJ��nB!"�9)Q���xP�!�_H�����l>Iu�1���Nï�P�_�$��O��V�ؔb7�!�f^�qU7��_�._7U�t~�&X�0
\��)C"P2�.����0�2���G�A��+�"u�V���C��k���Κ@����Y�U�$��<VJ��uZ�`�D���N��\s���9H�6;�8�TB��7�j͛x��d ���/�̰��/C6~����{�Oz�X��K<S�8>???��e�����!��s��Gr�;E�dj%�JSא�7�.�"���T�v�d	#P�� bQQ��Ο����F��}����v{L��U����5ɿ���L$���D5Ńq걔�g��0�#�D�\P�m�	�@
�
�I����>�u�{!S��<vj\c�k;�f(��9���)����Y�ny�.�ʐ�N@4��+�b
�F�F��a_�T��aJQy2�����#GZ��as��K��2�Khypڃ^��Vx�wh�@
���`s,C�q#s�MD��˔�#>-H���P��RP#�X�gm.C��K􉉉hM'I��?
�K;>>�>:�HCLCY	�@�l�J����2���#��95'E�[����ȉ�gN��9���^��5J��eQY�=R��@�W	T�r�]�^��E�:WгT�A(Zt����N�n]2�#�	�~S�FE�Dd \��g`wpM�7�F0�JQ��7�.�R���
T>��Gy�74�T�W�]�$Ϗ]��� j���Pg��ڙQf>`�r$1ό�PFd�ؤ�����P���RRM��SG5����� �7�.r� G�T��)��%�~�j)�V i�p0��ɞ9G�rNRɕ� $m" ����y����:��=<鹝���R��N� E�3���I�ǯ��(������KVsa�/�ylH�[�("J�[j���(���b�g�*G����΄f�H�Wlb��|5'��B6�!W��	�@*�z�s�z����_��@���6]�!���xJ@��SB�J�Ԍ�����Z�U���'�x!��g�4�G���-I&��F�%�)H��oG/e�E)V.�n�Bi��>*��D@RN��L��gQ"N�����a��L<��6���@�@<��~�?	�@�\�JU
�#mf}���#���_�����!�/�I(���i�3J30E[
c�Z�2n�)E�2���&�x��>�ED�H��/R���ef�s�$A��+�3�/��,t%n�pz�VxH HE@R*L~z����=~
�H��#-`>��;�k�kC`�LNU�Sg�mb�4 z�� � ��" Լ���(�����yݹ�/�j�ݧ�:�}(�ț����g��D�h�]�R�>�a��
̧пq�ێ�u���#�9��2��AJR�@��@��o������𘃔|�Wt�pؽ�2�m��I�Haׁ`&is)	���b�$�9jCFB�T�9H���S�	�>�P�赸�,��_���(�$*�2l����$m���p��:t�q�?2-�;t%��F@�4�s䍟DC�	EN����U�V�Б��J<rIA@#H) ɋx@@JރB�C��^���M���̸���#�$	�@<�DyK��x	*]���%0���5
?9�I�����*�i��$mup��#077W�7!��t��/(H�)�k]����d �D� &���&T�%�H5�
�H��\7h*`�!��ׯ����M���2�X"@j�׃�CK3z�?���7j�Ǝ�"��7���R�ԕ�tO@
�{fބ@G�Oν�G���t&��yT���K>D�(2��"�A�x
����L(rfP2�BZ�(d���F�Zs�(����K���iI���������J!� {��Ha�Dҋ@�	�@
�|9�!�xoTt�Ly�"��� eAQq���	�@<づ�Q������M'B�ߒ Vc��ݒ�n��?���)��%�ϐmH�v]
 i	���3�6O�'e$ )�R�B� s���W#l3�܎>�"�DK��'�Yɲn�:wu(��*�l�M�[^�$ )O�J�,�n�R�ʇ���  E�L�x��(A�Ņ"�$�~:MG ��j��PɗJ@
�P�J<Dx]h�Fc�!�2[ݱ��T�BD�N@���"�t��h���u<5{+_�����:�n�ʿ���@ d RPSD@D@D ?2��c=����=�_�6�Jڍ.���h4�/|
,�# ipl�9�Wly��9uj9Wr" "�7�Z�	*�����*F�B�Kc����1/�3_�^d���6�j��>d��%q8�j��dk�$���K1�511�WlA0�VP�̶k:����&�����`��a��q)M]ty-M�SCk3���|X�QHաf��&P������6�2EΎŁ���K��ʃ��))�!-�������6==«�8�ړO>B�`	%ӫR?U���J�Pޯř��R���'����"���"K.�į�<�J�M@V[t	�L_�J&rɘ ��)ˈ$�Q�6�q}){t�V��F�P�ʞU�O�& �t�#|0��;�B쮁�)��@�Z�֕e��V[�{���]D �R��H��R�b���Y�/�1>555�'��B���w]u��-'{��e�#I�RM�/Ud����^�yW,����*��J �G8���w#��E|�P����N�̕腀�J���U� :�zy@�R�V"�Ȕ�M�du�-��#���-�r����+E�_��R"4�R|�Hޗ����7H�jNg(<H؊[� ���<�@)F�0ik!u�qy� ��1� a_��)��t."�HF�E�d�RHx�@9qވ�sGL&�k��H�(�D@@@�T�`������R�L������k�^�<N`fff�c�$��@L�O�*M�	`�,�}�f�9jS��Y�t ���:�WlLEQ���K@��_���с��f�,`/�1��;�{�?i�irK�m�]ҨCk���!W,����(E�5��EJ�S/��{�����v����?����5��_�H"p	H��4t>H��k0�V㉟R}i��w��0�<6�>��M����#X"��� ���_���t�M��	�EWv\��3_H��R嗣u��5�'�9;7K�CR�ʛe�o߾
��D��2�����D ;�贲á�D�=tf4����]hK`u\���b�M(��h���"u>!c/E]C>֢��ya�|�|��GV��yl�<@^I�@ꊾ�0�*CK �Ǫ�+6ER���[�Q�����Qo�)����H���#����eeY�g5�4�ݷ �������o������)�ڽΌ���R-q�*k���?�&B�&{��c5�g�a*�U�	H�/��ـp>��l�B�z=R�B�9A��圶�HI@RJP����H��H��nd��WEs�ѣZ<��c=ʍ��	��໬�/A z�p��L�fggm.�?���R���D���.�'�2�L����"І��`��ѭ��e	D�3�s����0�dF�0�Yy��H�Wd�	\�'b�ܬ�h$)�*Y��Q*Y�(�����	���<bE(.�� ��D��Dyr�J�&���w�Uٛ�I�% U)*",*���+���(���
�X� ��"�,�""��4�""�C��o�����$���޹�߼�o�ܙ3�̜9�̙L�%��rv��"����	�K^�ҰH���0�*�b1�%�����j&���lK)�>ZGa^�U�A�u���5N�!e��7��]C1�B�h���_�c%D���b�Ҁ��$��F���[��V���Uܖ��]����6��E �HG+��"Ah����r3��=rs�(m���%ˊ�"�D>��!G������,6�b���!Sg���J�"E���B(��"�r ��C��AR-��+KɋiT@������/�{���Z�P#^���AR�Q� �Ȋ@�P)��k���"�x��j�b�!h�ݍ@T�M�n��G�k!R�0���)����Ag�Ь��@�ME\}j��
I��Ftp$�6�ߎ� Dc����R0M[��WP�
Ha>��*� ��%��}{�)�b2]K[i�sE@P܀�
Hn��(�!ʦ"A��e���S�{�_GJa�#��4�@(�O))))Y�"����ߨ)M��y�����d��"EhG��ʄ!�=��ڒD�	��ТErk��Ihtm�P�E@p3ne�n�Li�m~G�E����mAK�(Q��2�(�\-Z��f�3}e�$�j�@��z)��"����	�^�ra�)������}'Q��B�0���+��-���i<E@1nf�!�B�S�B`���9�W��D:��� ��*�@� �R�ԥ�$@����@C�־�����BP��2��G>p%�1pX��R||�ψ��F�:M�}��Z{���W�����v��1rm�j��ځi/�����Km�\]=�hG�#W��)���
H��BW��hk			�dqhm�Ws�G*���S@TZa�O��18�)M{ZӾwn��-ظ��"��:�E�* �#��`�M�V�L��/�݆��Z
��u5�UE BP)B*����,�^H�P��#�N_0	�����B�@;�H�8n�C7С4� ��n?GGА�B@�����1U�H(�2�H��bh�u��\��&�K��@TS-���PE�B@$�H���)��ig��GUG�$RV�EM�"��G0��n"����@@;i׳j�B_y�b;�&�>�������A�ب]�2�5#E��(-?v�f!�)5������R�hG"Z$�!�����2�Lb�gϞ�]�vU�=�ǻs��A���)Z��ӈ�@h�xfZ�\��� ��J*O�6햧�~�* 0�q`���3a�u��/�|̻�[�������^{�o=z�x��:�A�z)��"4��ZM8�p��Ӿ��J�ӟ�}������rQ8���Sm��ԏ�v�G�4��u
1ݼys˻���9s����'��� �W���/��}��y��\�߃���|�ID}(�<�pgk�P�E�-�����#8D�@���:S�L�������� Z�t,���e;$7�ˍ4۪�'��ڿ���E�>�h�ԩS����[�! �s���k�ֻ��+/�ݻw�Q�F�رc��a��r7�.
vt��� ��TE �P)��GA���� ".X��g�N<��s;,^��~GkT�����o��#^a�s
TE��l�t�,��O@�.��.Si&M�t�'�|R8S�̙�Q0e<�����Y_|���;w~��ށt�A8���6��s�T8����"|T@
>������AwjM�  @ IDAT0�1Ц�[������Y�f%��嵃�Kj~~~��B ��Ϗ?�4F�����47��믻:���ի����/�-AӦ_@F�ݻ7SpV�Zu��������w֪U�#��Ä�~���N�ҧ�*6�U"�܅h"AH�5��w@h4�`4;v�U�����D�C����S׭��5e!!]�� 9�Q����Zeܸqg���;�֯__�Pv%�H�"��|�plSM�n�:�$Μ9�?�Oچ�W"�ڧÈ��]w�.W֍�R��0#�R�+�"�c0p� PL�\)$ì�?��ט1c�0�����H��H�!�Ԋ)���E���A8����������O>YZ�3�Z-ax*���3�&�z��?�wa{�i73��|��7��\��O9r��X���mF�y��[|Х|�-��:�\@������P��0�$$�Y0$�v��㎖�?���U!q �m�I����,D�~��m�i�M�6e2�?l�F�,���@+w&O>x�D%�S^>cYDX2�c�d� >m����{��\�r��W_�2��u<ۂg�O׌B�)	����m_x�	(G�O@���*��k�h�������d��[hL\J~�o�����)X-u*�sе��܋�)�sy��{B'�^ao� ̴���{S_|���;w�0(��ʊ@�$B�i�p$�,��kד���ͭ���ϟ;��+��b�_���͠�[����4`���x�E�(�`��꿈@ ̞K{d`p-��\A與@T�C�͛w!���|<�K�4��`�"t���!�1�����O-���_�۠��o�^x�r}L�Q���V"o���,�݋/�,H*�O:�4t{ꩧ@P�pĈB�d�H[8%� �Ս�J/E@('�T����N�d���IBD��	�6~��Z�֨�4jɁa�4�qD�ыȣ&��A��`}�Z�y睕?���� ����Y2̅Ĉ\pZ�?ic�G��>�3���q�{�(lѥbe�!K-o���~ӧOo�����A�V���IP�A�^��t��}-A$�Չ�a�����w���l���+a'�ԁ���� gO�?��\5ˠuT� �.��vi,CX���駟Ry�??��@�C:�6��z	�܋�+L���8���s�/%ơPv,��`�t �M�֫W�y�&�j��+<�w�f�P\2�&�"O�CPʈ�a^e|G����q�Rfo� ��l0� L�'k�ƍ�b���SN9�1���S���1�}4\���BQ k��pƌ�O8��0�>��x��i�w(�).�W�m۶-;u7�k���A�?W�^}3^�Z�u
ŕ�L4E@��P+���0�:PX��7S|ɇl�vhJx�g�u�����^{m��'��s��#�;?
�&��9��˃1�J(s��^�,Y��3�v�e���_D�`E�h���c�T��TآݍՋ/v���9����v!�P?)�����OhIޚ�� wQJ�A@5H�0�G�*6���4��E=,�#(�pŹȳ!¨ݠ!�AL�/ٌ��o��� ����KX����Z}?W�!��P�d��,`�ʁ�x#m�臛�.��I���C�?lذs H�㸓�wޏ��������i�hj��M��"�������j� #n���Ew��lF���USc��8�k ���TJ�Ȃ�pd�CO[wo�%I|�E�%�R0�F6d�C|oۼys50�j -��&��] �`�����*�Å��y�K.�d�\���iѢ���3���u��͹�j#���W�nb^�C����������&irZ��ܹs�1���)w�i�0���qd`ĭ����ˀK������`]�ʧ�~z��>���iW�B/��n�Bב��:�`��t 7	̈́K��Xݱ�z�w[��Pvdee��<\6`�����˦�H��*��k����� C�Yl�`��ˡ��#P�8���{��6mZg`<;-2��,��]�`%q��b��|'R/��o�=��V�8���O�!�ձ@�.�6�i�Ǜ������$�ߴX�"4��`�vC�6[�)))UQ��;v�8q����o���bl&�W^����+t��V(}YPB��7cI��I`��)���I4x��W4i
EH�Sg5�x�b=�3sOr�F��cG`90{C��@-a����{IyX Sf��Ҵ��9eʔ����3�Q9m���+��yr�M9��<�I0�~���g��{.
I���%��j��!��d����j;�M�f�;���G�s/�T[�SY�o��E@p'* ��^��
_�E�_/�'�V�I+V��5t��K�/_^S#��X��iǸg���l�K޾��Y$�vy�MT�E�������9�F��	�#zs"x0̾l���p�����z�v�pjY�0�{>����{����!�"�&�L��!�;��޽���"� ����4	E�$>)�aq�0 �촪X>�����<��g���0���Pj��AK�M�tO�j�3J����k������8
6�!�Qw��Ga���F��ݸ��׿�U�W��p�_⼷�����(�-��>���R��8�����"��"xl���5Š" 
m"a�O�Ⲃ�Ϲ�&؀��[o����?�\Z���2�d� Ҥ툶���р���)+�<�{�J����I�t�)��J�mM	�<�4�v���Z&�[+�7`�ѽ�g�ތ-�����e�>���-�n��F#���BZ�3�܅�.2Q�)ƞ!�l�p��5��!U`��S}0��q��M�E��
$ӌ�x䬶������xVš���X��c�&��f�5����^ƍv..X
|\h� V�X��?��ӝ6l8���oo���Y�f����5JHg�s�3n�R7"`7�4�� V�D�*�?0��*�DGb@;�t��у&O��Z������7m}��*�K��#��E,���_��a�\v57a�D� l���xp%�r�"|���68|V�������i+�L� �Yi�aw�hYв�Ʊ%�,X�uȐ!_�x��3337�Y���Mo�j9i�E�f�z)��;(���A�R�/�����W�/
���e���N�$�hܼy�3�o�~1�*
Gr�	s�|��8$�(��@���]֌S�%bC�Jݺu�o߾�Ж�BH�"
^X�O4��ͫ�G�:��?.l{ ��z[�l��~%V��CHJƳx�i��>p�05H�nK���R�0!ML.L�/[~�"���ᣮH��srr(�w��Z��ba��?�Ah1:b�iG#�?�s0���i��rd4��p�I���������gL�>�"��^�z5�蟀��(kN1�c�e �/�NRƓxvX�߳Lr�����i7����S�t�ҫ֮]�孷�����ڵ[�g���$�]�p�S"Ӄ���c�z� �{1XjwYk���S"u��"A8b��V�J!�3��O5O9rd��a�n����y
<n+@<���Dg3��si>�����*VX�}��@Ҧ+��/��;��O���b�$�j� �Acc���0@\E0��d�θ�ɗ�G� 8��%���/��8j�j#�&�q�0]y �n�ƴ�Ϸ�r�f<�ϨM��ḿ�����˴[H��(�<���Z�`��^��"tp	�!I��6$U<�x�\��d>����ꫯ����ٳ�!���qŔ���I���w�g>�ȁ�'��
2<�7Z�&(������?t����l����fOG<x�r���e�ccΰb��|�_��9�W*
G�3�_	vF'M�0��ƽ[&�8p່GA)us5|�
�a>�Ұ�3��=?�P�
#`3�
'�	(����YW0�%|>o޼8ؾ�Ww��	�8�&ǂ�A��py�	���0�8WƮ�'@c�����w-,��3�eHmErr�h�� *	� ,H��'����)��������¶ _cZ�>}���}2��LkR�5'�+���\_R���
HA�X3�¡�����֭ۄ�b���%���gXD8�-�E
\� vt�6c���t�С�c ���L�@�'ӗ�!�l�ilo>J��s�z�����X�Y���QӚ�c2Sg��<h��>$c��.-�w�v)�JV�#��{�;q�ĿB�� ����H1��S�r�'B�k���≝�xfb	zOh0�h�DMnQS'�� ����Ua�n�i�v�6^ur����`�¸����UP�� P�#%MT����ׅ����ՐA���8|=��������L�`�&�L�����H0�<W� �$�E.`O��	G{O��a�K��H\��(�A@�{�̔����uh��2�@!�������6 �:*#7'���ݧw��	��,���F��Y��}&��Ze
Y��χz)�����>ʔ"��/S�"�/��"��A�{P�sƥ�����*����nR���*MN��ᣂ�Gv2"I\�a|�����}"�6H�ta��L)�6��8HpP�������p�3�$v|>��7���Mb	~��)�%��eG@گ�O߾�1����)� A/E���t#mJS��x�S鯇<���&���{��x�E�N��_�}�)���+���x6��;�Yq�k�"���a ]�TE@Pw#����D�`%�ч��"�(��"PvT@*;f�yK��2a�T��(��"E�����e�j�����+��"@�������.T@rW}��l�[!���T.��(��"����]��v�9N��HM_UE@<�X�A
�%�R�����s�e���j,�8E@PE�F���;�z�2�A��N\�^h�U���!��������?M�Ѽ�!U�=����ת/bEG<m�x�˻n�8Gb�ץx����4�ǜ�78�@AAό�v����si�v�ѫ������5o�Ĭ4�` �NE�W���1ǔeS�x|(�(a��GeWe�#�^%#@�d@fL�_0�v.�����>(�m?B�,����Fxr�~_ua����"�WT"`3��,`4���Q>W�"w2}��˽���b�j�C؃j?��P
7n\���͛k�yuF�%����%!����f�|�~&u%q�����:��Ol���r�hҤ�!��\*@іk ,N.�>XW������W�� �2���C��4�P�yj0��0��A��J�d`�B�8H�BP���/�fΜ9�,X�u�z���>�tv)��8yW��� L���Sꂾʼ�p_�h�3t���=��kv}��G[��++++aypl�rI|���I=H<���B�n�QU�X(LFFF��D�� ֵ��=��o
Sܧd%�/���N�:�9rG�^�����w�}�n��N�.E�z�*�6
I��H$������0qf���>�h��A�祖�^��E[����߿�����o?����=:n����<�@��v��L����~c���ԋ2��q�'��"N���Z�5Z	d�M��aQ�`(>q�{|�^��~�v��m&M���S0X'9.����������;���&�`p΃P������N��D8�u�=�S�0��,��_�p�f�ҥ�N[N^�fM2��;*���k�[�j�
��q�. ގ�NO���z('h��k�\��~��2�I��a9��^�������������k/��ҏ���M�6�}^d6������}����n�/o:>�j�Q���� X.v;�;�}C�=-�_}�U��O?]	S�I�4�����q_�w��p����˪V���wܱ�cǎ�S���{��Ϧ�c��g�}�����C@�m����|�;9�/�� ���� �jժ�� ���%~��s�񱿌��v�i]�v�<�|���hT��=�XuLY<�w�:���O�mTp�̞�@���ﮅ�]x�åчЙ��T>��B��qgQ��h��16�P`�y�-.|������ϋ����M�t[�Ν;���#2?��ԙ�^2��#<B5H>��*�C �N�A@Z��K�1�f�r��� P�L����姀���S����8��_�%V�ٝ���GDNI^��Y$ף���ڙ�K|)�������a=pz	n4������|���%�g�3gά~�g\����Hg#|10����_��<}~J*7�Y���?�aI�"^��q!(Ն��m�{|������׻��瑈kHh�/�˘"��E@(?��kܸ��H!$9��!�g3ms�AC����Fn�c`��������#�k.U�ݺu;���W7����!R���#:x3~��?�K�.��y�
F�p�j6�S��n�S���3�da�zW� G��'F�����K�čT̽���3	��B�����Ǫ���̛��]�vU�ru��]���Oԟ7��o�K��Ց�B$�$��@#@�J��2��a@f����`R+�U�B۶m�|��7��g�_�֯_�f�Ӑ^�Xg��ǁ�yϲ�Iy��?�~�����:�aÆa��v-����[u����#���"�Up��ΦM��&�"��U���]o�{��Ѯ+l���o�5�`:m�%������e���/���Nh�h��vz)�@  ��i	�RfS2�ֱ��0s�Ɓt�F�h��3�V�A��˯�)S����8_S�`�u(��vy����a)ܭJ��u�]�N%j��ċ8�U�!w���>�DDG�#v��=}�%���F�E2e�=ܼc�9��ܹs��������˓(��^��٠A���o�N��	��_4�+e�oi�T@b�KZ�l�Sl%G��k�'�B��q��t�l|�=��a�-:x&�^�4XG�]w�Y{�KՑ����ux7`�8Di��8��E97����s:��JkCa���@/����SOu��;�q�m�NL3�F�4L���`���Q�U�n�>}:TX8Bz��%����+��2��g�`6�e��ǀ�k���;��a*��`�R�@�֭ ��g.�a B�� �8��.�oC���ƿ��+�Rm_�n�.jINŅ������%t����˝�}�H���pS�;VB5�6m��R����'����O���������흈#i�fC��܎�?�	����>�������w@����s!Mڂ%r��1c�t�\��LD0|�۟2�t���|�\�Q��#p�)�|�Tb���Q~jm8(�J�*3n��櫜e���.�F?�쳴�իߊ�i�DzD`+"0!���~��-��>P���Ml���g@�w���W8��y��e�k��N<�J������4��Ê�!��}qc��u��9+/��!�p��+N>���|�z�MaV�~|���!�믿>��(�B ��yH�g���#�`� >4�ڽ{��/n�h����@>G]�a�t,6����GA���Q���#�H��m�y�	1������B�˼r�(��|�rrrja��V�x�B$Am���0�k�G�A�B�9���ٳgSc�� �q��={�4p�I����u$�t�QW��=���� +�E P����[�d$җ�M_����,�]F��d���nEvv��'�x�:,U�����o"κ�@���#3��A����G|��P�6��ywy��A�^�X��O��X�>w��`�\�y4����~%���֝p���6���m�./�I���L�;O�?�ݖ��|7�j���'a�����{�,E���9��c{�񵱲�b�G�}fff>����R�@!p�UWq�2��w�L��첱<������w��W_}*W�`y2��b�[��@C�>]�wV8��2X�~:�ye�{�:c��Qh�<�{���� S�r�k�7o��x5v���^!�^ �R/��3���M`(��O�K4 �
,��g����x��/��	���l��^a|�z|~ԨQ-Qְ�u�SU�nM�z��0����6`�m(��<�0dlhݘ^a�5����/7��z)�@���{8��No3O�ލ!4y�O�jf6�/;�sF����4P�T�.�z��b�5g�5H�v�"�W]2_�6��0�K��6�-B9��}�a�|^�3��w��{���O�v�s�	��_ڧ��X��������a�_���v�����NܲeK/|�������nq_&n�J|��P����r_���᜻�]QaJ�"-��/NS������\�`e���t���=w��^����t�B�9�J����*�v"����׳o�#Q{D��ʆo�5X��n�~q���4s��<W��ׯÊ+�Q.�ʠ���r����;nܸq�a������F�RV�q���{�x��o�Q\������硇b�w��.ڑ�ݻw��
�:t�0���{�ӾY&b%��0	��L�`��Y8�>ʬ�"�
$�X�Z�r�l���?|W2�
�%̓e3�es�j)��Y�8��R��s�v��h�y����.��J<�����h��]o� ����iS3�cP��x7 �כ6mz�D�Mh	ȅ�H�tP�K/�t8\��mG]А�mJ0�q���y�aVC�>�"l����m�X��-΃{�I?�!?7j�6��Qȳ1��j�G�=�Z��#"6(�^��"( �	���H�LC����H�LFh�����\���0�4��V\�F�:��w}��8�օ=� �<���O�7��N}���_���m2�ǁ���1%�m�ر-w����#Fk�]�uᴙ�������g�B8��j�����_�Q(X;/֍�?hd�y�} ;�#��^<�m��7�|�	ǟ��4e��dl�,�L��SN��Q�?��jû��
�&���TU��^�r�ܾ0�ė�H��4�v�%3����t�Y^��\f͚U�"� al�p/��R�`�E0���t���{���*R���^,?9C��@kƳ�h�$��8IX(|�/���zك3�w��Q�@Pkld9����#6�RF;,��a3�m�ƍ�����Q�2  &�x�7��+63��h��b�80���(==��m�����c�UF�e�>I8�ޙ���$2 H�������B�b�}4]�N�:�#���ie�'qQFj �_����{>�����Z�n�>E���֏��(-}C�{�9W��.�.�����O?�٩S'��z��x�llC�>ړ'��������k���(�F �q�bp%��f���=�q�t/_������T��߳g��?��㨙�瀌CV��N8 Hy�����+�+i3=�{��E� �|V���G����6��17��y��W{CS���1�.��O�Kc	+�-߯����隳�@�dQẕ���Lp��J��'��Un�<�Y�q_��x�z�0oQo�.��|��5����2U�FVB� lY��n��:3����{wN	w�O��� (�up��$ԭ[�7V�t�ʣ��4XspX�l�1(�](�ؓI�����8�>���!�674P���:c�[� }�"VK�2��b��jaEd'L���t�h$ƾ��l[�/i��?��Dp��S�0��	砥���.z8'sU!��9m�B���h��@"7����g�Ӑ�#_��c�#�[��n({�}|���))ю 4g�N�hC�*��΍A��>5*obP:K�y�)�i���@S�
Ls!�lk���V_[`�t$]3�S�D܁��5k�p�N�I���p�^�����:�)�CE4~2�/�w�<+��:3��������q��������O�q%8�o
��#n�ݖ�p��i����7n<���FMjA7"���.E�[��]F� ��H����ۛV<Bkt	�x:N�0!lG&���1(T9rd�9�0Sԩ���ik���^�=�Ύ;�ܶm[���m@sX.��޽{���_���U�Vw@����[�q��>���=��ݍ�(n����ebߤH�g��.�
G�T>�y����2�O�4��n7�*�u��k H/E h@�^�Y�f\�&A{ %C(k^6����NG'�`Y�)���6�ˀ��m��N2�O��l38S[d�g>O�x�]���U0 %]l�pI�֭�����P�Eм��p�^�%x�ۧv�K?y����w�~G%�W�g���?ڤ�N8�
��x�K�(7�H+T�ڴ�{LѮ�y�]˂��U�r  &�2lذ��tTG���2�@GA��_�Q"��ϩ9l�F�0��l�(���*�ܬo ����3␷~ɖ�/�vk�����/��a�~���3��?��(W�9�y(ҠpD��6bo����AT��FET.���_��}c-p0d�`���N�3��vA���SO��}ۢ�r����X�r�qu���t	U��:	v�F���<���x�܎w��C��L�r�q�0�A�\-�c��rЦ=Ǵ�}����9�/��t�#`�
.a�֭i,h�)a��&�5�"�
���a|�0��jժ݈:��)g�Jb;���O���i�-m����9��t�i������ L/E@6�l�|��v /av�0��B�����S\Vl�ܜ>�2	�	]!������!�����ܛqV]w�7cI�q���yc�&O�|4sc!(�����n�o�Ϝv^��	�miB��o"�K�,�!M�˪����A;��_���6mj(l4E@(2i��iF��0:b�a��82Z��ظ8ϊ�G��dBd|��� �Wv�|��.]�\<�@��a�N}�P)u#��O���8�|w;6����M�,�����
���5;#7���} $�D򦎠�:�:3u��v�2�q���C���1�m�
G(��s�`��������A����"������+�VtJ���"*��2���z�kD5o1a*�����#-����8�DVr�#���ll/�������)#���V�����p�zЏ���إ��%K���4S�_� # �i�TwҤI�ἱ�Q<7�@%�%�~��9��s���U]H3�Z��a:�ķ��o�.ëV\_{8i�p��8��q�q�M¦��b�.QWz)�C��nժU�5j4�Q�X�1���%!�a>�Q�P8[H�2�7�v�������O��HU�$h Į�c��p��u-�/�Z��a�~,��� ip��
`Bqkj�hە��4�a���G�G�L|��=� ��s�s�N�	G(�9���w���o"3B��ܙ]�I7>X�Ch>�BW����RB� �#�<rF�SR0"1�ع7a�����P0 �����e��n>|8O��u!)e�ر}P��і��>؃,˥p���ǎ=�'�S�������?�:�0`�X��i�g��E(���B���͛O��Ox@p���9���C�i���~��9�,��By8|v�{�[��,z)�@� c�С�}ȟ��=���36Z�҄$įs(���>K�	ۃL�������_��Z�
�H��ς�5	ۗ3`C��Z���:�����Z�SdY���Z��?�9��:�ɕn\�d�"���u<ۍ���C�5G���N�U
6��l^���M8��"��� U�G���_��ˇx�����Ѣڣ�6��lB�F�/ ]���a.dĞ��E��/&�8AvB�7��/�A����H��L�j�/����=�-����j|��6��۶m{�o�q2�V�S����B�T�=Q/<�s�8w㦍�&,����������X�`�����7�[��}�$+�T!	����>i����X��ڣ`7M_�0�T]�Lw6���t��"��b6>�%�U"��"�!��,^�ǉd���;Z���+V����̼��6�IwV+v��?���)�88�qr{��~���aS�������r���D�� ��h��uIA����=����������{�<��i�6���΋��.��)X$A��D��KP܀ :d4�1��=���������{ĳ;}��E0b�ro|9�=�N��ݞcz�g��M����U�鲁v���8uӸ ���Pw�?�p3�t!
ѻe˖�bYc
<�OW/G�Y�D ���D!�i���wёǮ�Mh�K��^��k@�����T�/�([@2/��;��y�h��֭[�mU}��5 ��2Z�l�����pO;#��P�ʒ����Q�����a��J1��Q�իW�����p��D�ǛW���z�yI��͞G���~�2��|br��@�MG`:����d����
��J]ц��f*�����<1�?�C/E ��P��Qk�y�c!q�����[PB��@�+��{[FFƛ���=ʦ1Q�b�@Q� \Ջ.����iZ&����deNӃ�t��n�/���:*Z�B8��޽{������ X,C7���܂�h��F����7���\`�&N �J?RB�U�"��O?5nڴ�S`{���%2!(�����l;BR��cm
~�[	S�`_~���O�Ȩ�>5G��F�>%6G%�(�|� �T��8�׊{Xm��Cv�ء���# &���{﵀�1Ĳ��|/��W^fJ���Q�[�����WK�$ ��"�l��mv�֭D16�@a��� ���0I/��C:��C�N|�>�mV�jM�� �^�@D ��x�=�\b�P��T!	q|	-��ۄ����z�<��ZD�<%R�� ?r�v!��m�A�b�[sd	/��U�Wl�r1E8��=�k}�XCE��pEE߾}/�q�G�	Hܑ����V��d,�����\�Д0E� D$��IJJ���*Na��T"ԔʟD*ηҒ4�3_���j������O�ԕ+L� ��DX._�c���1	G��2�r�'_�F�d�(�b���X��F���`E ��b�Z�zu�b�-}�<�3m%��<>�	*���~��=��h�*�@#�/7�#��-i��/F�>,&d���\@�|���C�����7/���Q�\J�"sp�څ^x)��28�� A��AF{��p�;_�ɽs�vv�KІ�/ҩ��k�Z�C 9��������r�SXA	�6�罨�I�aJ�� Bކ�'r�_� �^�@$ ���O����R��S �� q����D8�0Ó@�nl�yyj$`�4*�@)�3�������:����{`��NO&e|
I"�C�/LI���������6	K���`���LC5�Z��|���e���Gs��$|�����/
_ZM�[�l�F�t���K�p(�)�j�Z�CC�a�E�m3([`c�0���ݻ���>j*F�D!"{��}'V�ns���52���=���vߧ`g�#�YtbI���?�X�N�U-�"P	�
�4�ڸ�Ü<_s3s�<E����&�DC]���[n� ��$ڮ"@���l�ބpd�H?�`dk����xW��7<����y8`���S��(�;ra{S��� @�'�ߍĎZՆ�P3"_��_q�Xɤx�m!$��fee-��y�GU� D/E�M,^�����>������>d��|�����)�k�z1�a����{�F��(�F �<a�ƍm�;�I`P;&e����[� �2�J�"â�Z$��l޼������
I@C/E��/��hO?����[����,��ᇎ����ȣIbX��7����]�t�oÆz���K�z���L�40/.�56 (t����ͨx/��E��5Id��.���P�4��(aF�+�����e�yXb�4���m�s�g{z�Ks*���y����ǲ\�O/E@���:�&��sQ%;_{¤D(��W��y8|a�Ƈ������ʣ�>�	�I��z�2*nE�BĜ9s�gdd����XN����"�x'�<��o�|Ao>�!]zz�������r�A�nmtJ�",v��]�SN�³� l�d�����0����a�F��R
J{`@96���t��`5MW(�U�VUnժ�}�����wu���0�r��'y����yW\q�m{���,���XP�I�}�Y7|��d^d",�푄���9̔L�h�@�lt��}��C(��-5r����m�����û��V�����!_q��<;��{ar��'�s�I'=������ԩ5T�^�@L" ��帽���]m`lA)\L�(�J58;�{A��!C�\���ym1ْ���B }.�7���˛p{�x��_�f�%����G8�r�v�̙MP.��ը4_E�-�dc��``�@�h�Dr�4�"�ս��B2mr�U�6�٫D���Ҹ���F��Ѻu��שS�q��}p엢-��T䞼'��D 2��� ��8J�V�K��ꖫ�S�D�_J8�U�5>�+d��F�-,�����Ë�z�#$Q�ێ�n'�\��-��g�5�"���~�!�ꫯ���A���[��,�("9}�H����.|�y���ٳ�m۶�� G/E@p�@�>eʔ���a�J�����LB�Ȏ��b�ތ7��H�FopGNN��[��["؃,��Z#���w�i��^��PdJH�>�0����{�{��?<Q?���h4iE  S�����j���g0�7��y��Z$��������x����`�ہ(�N�EbcT�#�����Ժu�N��?��#��|�K��*!��`��P$��>oy�':�g��ZD�>%R1�֮]���N���w�y���B���vO&KM��<0�Ys��m����"`�nݚ�C�G:�����07�ˮޤ�ۛ�ƽ�0�k׮*��KP�@�H�������02�H(|��+�����:�%��E����{��u$�խ��@�@����Cd1^�
R�W�����P�'�p��͚5[̆,ʠ�"�(�# F�r����N��CH2���TB��*�U�����'ʓ�BR�U�O�`?��i�q��\��t��'D���H&N�8�J� ��(�� � ��k�n��NWj����ˌ���R �-|��.D��(��n�Z�  ��X3:t�p��'}<Rx�7���;＾�u�F�P�XB`����jժ���=���/�;���� �A�����4���*�Xj�Zր"���8bĈ��Wۑ�� j�)xx�<��-�ƈ���-00��=�j�^/E@Pʆ bғO>�	o��&I����@�G@�P�v\�'�~�ˆ��V" ^7cƌN�����Ã���@�Y��2̘0a©�X>�E@(3` Ƀ~/np��k�A#����8W��������x��P�"����� �#�K��EO�?�=Ǩ�&��"BX�<��`��m@�b�^�슀"PA(Plٲ�Y�&M�I�jŸ���;j֬9uɒ%��vۄ�[����pV�.%@�͇}ˉ�d��������� ��7n�C���RE����̛7�-�ZN�aCF��RtSM>�2�ebR�n=zLپ}�h[��o��@�4iR7F��ӷD���\pO~��I��܃vN�S���G҆��~���RE 0�QV5j��`:����p���L�|U��0P7ݓ�ӥ��NMK[<j̨�Q��� ��(щ �������=�0\ٿ�~qt�Y�M8��<��rt֘�JP ��v���]�CCMGeM���j�}q�*l�" %��J�q��6^0���H�X� xm�=> �������|���#,��}��}wǎ*�E ���+;ζ�Z���f3��	C?l���3o�$�(! N��`\R��.ݻ���o��7�mD��8}��^��l�J!�  @ IDATB�>���á��!��ׯ��իO"���R(��+x��g�C�؛��R@{$�nǯ�xL�%`NbB!�������n��<W�D)aF`֬Y�0����-������\��c�~!V�n{���3��f�(�� ����+�87edd�)�v�W&�#
H� (�KL�Q�^��gΚ��Q{�Xh�ZF����E�Zbck��(E�R~���Z�Æ��j���z��(�@`�޽U�D瑉��&ɽ_���
i�d��������S;uX�mt�@4
M#�� �}�zB������qo���h�PF�;��S��, 9�+F�(�� ��>����G�DU�e��>&�L�9$�W�������q��7ހ�ԋ��RE ��$����0u�Rg?�#��}}��"�Q۵=33s�G}������\4EE@(	0�x��}��ɱU�Vœi	�
+c5�Ѩ��(�hBRAFV��'�~zXIe�g�@�#��_Ԩ�ig�Ӝ�_���a����8!M�+Ĕ�����V<���u��δ|��"�b~���:8�F��M����SV��?���`) �i�#R!��UN/LLJʩߠ��_~�����z)1���]���{����g_ �@"BHX�0hb��Ŧ��(���K.������E LP}�y��j8{�# Q(r3�0t2}���H��p� )5�Fۻ���g�o��V#LPj��@X`ƒ�vк��-!�����-,y��}qB����83�U�V�~GaiM��"�A 6��_��zi��K�f���B�;Ra�#6If��G�.Ral�}����i7�H��"�P8������ލ"J��	s�o��Z��@;w��N,W�V�KP"0��믿�9�|~���h���D���ӆ��V�Z+�z뭖���ҫ��[�F�������-1L�;<\��B��#���9_�㐚�L�$��KP\��֭[��lǁ�}\�O�d\�.�j�u"c_���r��F��С�`��>m���UR��"@Ab���'���r>h<�2���}�>�$
J������cQ���(��KPw! ��v��ի�����E���0���� d7���)X��f|��4h�x�G���Ĕ� "0s������ϡ��a�GҶc{���ɣ=��~f�y}�&M�,��L� ��KP�! ���C�������+�@S=�/}��a�U�T���OҖA�H��̔�
"���6l���� |[ �H|yN?�N4�Gh��ێ_'���+ǣ��Ʒ��B_W� "�/8
}��)��I�+>�mȄ'
k~8�Q�w�1Ǽ�dɒ�A�K�VB� ��/����m8�/�[��?�-o���,n�ͷ���t{ ��"�D ?��s��͛O�ש����'�/FH͍�����!	6����ի�p.����+��@�P8�>}z��[q/��}� �2�g�~+}����>�SF��*��RE 2 #N~�7N���v��"�сz�#9c�b���Ib�M5~!��Ђ-��;��<i���R�����˳��r��
�
yD���(�JͩY�����^C
}ŗX�(��"�B��R�zH�o��F���$}�yǩ�0W_BQIa�&��q�k�G��.lgJ���&����4�R��V��#M�ߊ��uw���W���>�'��{��(.C ̋�H�p��@0��`����o3�0�2HB���^�/��q��:.�X�Q�B�}q̘1و��8�>�����?�� ��ǖ��%}���@Cs���RE 2�Z�a�5^�����QMn��Q"2_�1��A@�`�aм�p���ŪSm D��A�B�`z�:u�B{�C� Jt�?�Q��������kթ5�=J$r�R�(�# ��e�� �22;�A�7s,c�+�0�|��zhC��#B�{}�ĉg�<zf�խO\� 7p�޽{'�5mY��{�7�ݠ=��)r���|�X۝��4	W3�A�;rY;SrE�������׏�lo�]�E �,����J�<j|'��d�@���yV[!�§}��jZ�v�������!4G�ю�S��-�o���<�OZ=쏸碉}q		��<l؟P��Т��)��"D���v��U7;;�yd�m�a�¤�ɔ��$C4$���=���ٽ{w=�)��iҊ@�`�|�w�`�ӡh�K�XX����O0+_1�M�!�-�ܹ�9�~�mʥڣ
�}YP\������+v9�3;��wӦT���o0띷�v�`�:���V�D�K֢E�^h����5}����H��d�����U�6n����X.�E@�J TԸ�[. �[Ca��(�/��0�S����Hز �r��/��_��BRT6ӈ/Ԏ;*0�;
�,�n���/��O?&�6�4$�=y����t����"�D1`t��v�����(&��l��J���#>�f��Q��l�r���O{$�j���iEC{��@��~/�vٲ"(}�2]�/���S��M�]�2%�^/E@P�0������)��B�؃�
S$�-sZ�	H�s9,����_|��'+�kLK)�-rI����[�>9�F�ۖ��7��`�H�h5�P��l�+R�@�TE��<��<M|9bDh�H'����r##�}衇:��'TM@� h��0f>mt�*Qq�s���@[�(z�>jVAH�uE@P"0��P�_���BJV�N�\��Z�N�����_�dI[�"�F��F��e�����k����+�Pj�f�C<�$��WF�u&ʤ��E ��8<s�N�z��4�qJ�Dx2;�;�pRRbaBb��.]�L��1X�Zd� 0w��h]�C�䔚ҧ\/(9}�tn�ٳ�Gڟ\Ҷ�E@`��.<������0��|a��ɠ�tEhKH��KJJX|�m�p�f`�,c,鯊���t��\��l�ނR�����?��7��]� Һ�^�zw�Z����N[�E � #L�A�#!�졀��+�I !C���P�#�]td�� �NL���Ȩ��צvDyt#; �Wh� q�Wv@��9�A�w��pi�n��o�>c����<�H/E@P0������g�qƃ`�;-D�:�}f��g���G;${�)������j���իW�YQڬC� ��k�����Ţ�mh��3t�_��>�|ʒ&i��=�o0x���P���KPE@���/Ϭ]��
CB-����C8��y苏��+1.?55�05-qǥ�^<L^�'�b�k֬I�"�A�`40�A�cq����`��<��=}tK�ym۶}h�ڵ5��&�(�@�" ��:6����!�d�d�Ə{a����d%��M��yd�G�`��MҼ���9(���(z���K/��9R�H{�h@�N�O����H'�}�+M�̂�f>4�o�a�,h�2�n��i.��"�D2`�qpU��G��) ���>$�����*�>�A)�L�eee�Y������Er�t1�S�N���N�8�]�($���Є4B���|������{�W�# ��"�(�"@�⧟~:�}����T�G���e�~
H���G�f4]�*��pjjRn���܆��5UH*���A9`{ںukZ���O����Q m��>]V{v��d�F�\m���sιh���jw0�RE�D0 ���'V�Re>$��^�0�+=k@)�e�n6��@�h�<� �´��\L�����A�P����2 ��1p���7��k;y�2|�?�xo��"��v�ծ�޿@c������p����kP�+UP��E 3�{� S��|y���-��E/������C�'^~���'>��'�<z�f�6瀕�����B�7���������~ ���Oz@�h����s/���(���E@�p�;v�x+^��d��t�Ɇs0(.om\I��iӦ-^��)ʣ�#�U��8������}Ya#������&�.}��z}ީS���)ŕU�E@P�A�B�W_}ub�5^@~q
��"_�>�W�	�o��@F!iu���o۶M�P1z�����7���SH���ʔ�Ӥ?���{���@ ���
���{�7�����CB�RE@��A��_>_�K�-ɠ �7C���򳲲v��EÇ��I�jUʊ ?���fW�\�.C��>�m;���e��ߤ�/}��
u�3~ҤI<JD5� C/E@Pʍ i�+���VK�`=��:�V�[|����0Ι���̜�ꫯ����v�[Cl�Mj5hR/@�R+	_��7o�D���?�Ct��4hPw��;�ͦ��V�@"�/�]�v��ܹ�(���g�q@p۠��H�"�����ZL-L�`�e�U; K���0ѣG�>��.j#�Ƥ�قH��!�W��������|���a��*��Zc(��"��� ��y�浇&f&4Gb�m3`�)�v�o3l��v�����'C�$��>�#��c5�1.&��PІo�k�{��{�Y��z������̙�\�}L7i-�"�0֔#F�����6��0�P��g�%���@w����F�:�ѥ��h(Q�&���{�&���	EZ'Z#�E��5��!䌇~��p�T�CPw!���S�K�.c $�eT(�#.Mp	�sLR@�&����s窡��������R[�l�D�G�	k�����@|sA��/8묳B8ʢ��*��E@P�0��+V4���Q&�ܑ���B�0l�{H∐-���4G,��A#ZZg�ʁ6�w�B{y�n�I�@>��p'��Oj�L�CHSRE@8
0��&|&p�-_����w� b6z�$���,0`��P���
�1���iӪ��E���v�6N?B�$.J���?��^��"�(�@�B����/C^;���m�+5G��3�qځ4c�p4a/a���P]���yp��u�^�5D�R�m{���x�ӌ��;�G���]�;%QP��_��	l4�` ٍb����W��N����-Z�ô!���+��0�bc�@��{�*�m4�9OhFi���Y�fWaI�
G C/E@PB� �$�6��U>ӑ�����FMi�g�5
H��8�E]4 �R 53W!@�hܸq�0�:B!�M�`/��o7��mCC�e�	+��L�Y�QE V �<f̘P^�j���H�{�(��@H��l/�8qb;Pb��]Ι3g&W�V�Ox�%��m���$F���<l��L���u�!��"��0�����z8v2�G!I�!{����y8|�H����$.4h0���>;�e�3�b��˗'�����987��$���y�k߾}���>-�"�(�E��o�mR�N�9���� �z;�H� �{��`��GJ���ں���2,鯉�g���y��e��U��h�����
���>.nwbR҄�����RE@p*���� =ȩ���d(��b��P��) Q����i������Q5nuC�
2��8l���: Y��ڬh��}�����i˧p���W)>~��w�9e��An7��"�(eB �9��+�<��
<��{62�ݧp�B�}n����ڵk�4��e*�F�H>����6m�t@;X���îm�����'$9R�H{o������pD�D%ZP���۷�lԨ�=(h
Ht����]0MEh��D��B�[yꩧ�.��:� �(�P�	�O�0?���H�����_��P��t��'F��N8�ġ8�j�V�KP��G ��l��*�j3�hj&��u>h�s4_yU�V]}�7^����T�ҁ���u��4�OF�f:n�H��F$��g�y�;�OA�ow�%![s$���ni��tp�-%-m%��ʎ�:P�E@�)0`V?~� hbQ�@�����-�QtP���2ߋ��3�|��N(ORLU�UX�=�B$�(Qhr��DƱ^��[N��|���@��pN;=�=����MH:BW|�̱cǞ�:�yA>"��(� vV�n�Ʈ���#��Vs	��s���?A�^��(�1��G��YRDj�z��]u:�G��j����6͇��Gy'�|�u����c�_j�E � �NذaC묬���̩Ar��|�2%�-��s�9g �S.�4%mB�Gj�($�>Q$�V�<B�>�ǆ�Ց�p��X�b�#ZN��2��ﳽ8���"qXҿ-�r��K�/o���RE@�$8��T���y�+��� 桕�]rJʊ����ܗ:��"�#�K|Im��/�s	h^
�m��O�ei�F��r~gI?�^��I']�IPiUE@ �:t� �{ad��_�d�2�r���Qtp)5�2��U��:4'F�@ �Pe��K�PA-}ۉ�T�����r�i�����,���6�h��WDp�h��)$$ě��w�<���KPE p��^FF�2xH�����q8��ЕpdC��M�=���ch�b�]�Gb�D[$
Kb�M�#R������z0�~Ӧ��5״7m�}���L�5h��:g�3�|#��)���"��� �����7Ū��xA�!�9@����ʦ�Ѓ���9pI����T���"�(�ر���f���h�\?�����[oՀ��"T�:8jhܤ9���Q}�����"..�e?7cƌ�޴�|E@PA �T�Y�:��g����ȠpԀ�w�Y8��$
G�yW�����|��G{�<e{#�௏�ŋ��B5�����D����7m��&����6���6(�O��(���KL؉ݲ;G
���5��(�@�# ƞu�W�¹W�0}E�G�n��
f40ǁ�8�0!9q[����裏�<�מ���q��dO�E���r�4�p�!C���hd�g�T���/�K���$���ܹ�[���
<�E@P�	V���{�-�+1��%�T2@��bY���m9�_���vwn޼�Z4Տ]ԕ�^��ڮ]��P8���5��z-ڔ)S�ԪUk�ƕ�" q�<�X�4nj���B��!���ݯ��騗��������"��d�_|�E_;��T��8x��-�=p��IF�:i��lȐ!]Q��������0}Ϟ=�"$Y��k�Y�~�N����g�#��mMb;,\���8
G��S'O��vGQ�˴@��"�x!���2�̟��Bi�$;Wˠ�k��&�C�s�������ի�����h�Ղ��~��p�Xˤ��B�����#FH�g�q��(0wG�l�Xܽ���
���m}���c����FRE Z�����Gc���s�h���� A�%�������G2..nO�&M&@h��w#� �����-�ݳ3! UߴiS�m۶5�-R]h�j3��$�&!>7���]��4�����r��P){�z���|
K�[b��?�Y���U0.XW��ƥD+~"�=�,�FS*� �B�C@z�m�]�t����6��9'����yW ��M���27��CO��aP~	e��D\���҆(��ƌaR"
�2�K�S�Nƾ}�R0HWf�|<X����=555���� �!�=�4YO>��V/����z�ZD���6��qi4��� �%�+&�jܸ1���R����j�`�A�DwN�>�����?`p=�$�g�p/}&���Wَ�t��J���8N���;��[���]���
>�e@f��Se	0�O����/�����C J�@�\X�͚�᧤��S@�R�r�x�<�e; A�n���=n���y��j?4M�4PP<��R����椓Nj�����D��l�;D��+�����'#F��ۯ_�����\��K�@9p������k�@P���4z��Ncǎ��z�O��N$jm�>(4��(�cTpA8�K,((�y�1����wߝ��7��^��Q8@��Ĳ4:ͱ9g͍7&���������V���Iܿ*���~�-eH�;�*8@S���J���� (�A�*�V�Z!VS֫W/���w�q�ap�K�F�~�+;@�N����yyy��~Ȕ�����.���)�-����<�S���7x�;(�����>}��0gΜ�Asn�����P#�R���"L�:uz�mgA���v|��σ~���+_S'��K�����y��QУ��0j�<<eÆqH?���C�au�υ�J�T�f��\����_��8�&�����n%�����>�Sȩ��@ :����4H�`Jn+��U͚5��u�֛۴i��g�#��8=w Sry�{�l�pi���G���{0�:i#%���I{I�Sޒ��YImy+��ߞ?��pW�2�t7# ��4*m�@��}��Ǟ}��?c��&��C8�p���3ZGh�̐��A��x`'�a0�=����<���i	c�ڰ�J~�w*AKT	�%bʬ�k	r�@8Jw�Bƾ�r`6��cy��	�ĕi��[+� ��<7>-�� Ӏ`����� �lB��qڍ���֭�{�v��c�k?V������6�ƽX%w�U�V���d^$�2��;h]�⵳�l�)��2�?����E�ۏ*���/L f{�I��(��"�"�z�31`�I�ҡ�A�g\�Gh����*�vD��Y�������E�����k�m�o�,������p��`h7h�`/02����+^���oVkɽ�|�����w�<���ϲ!>�řt�w
0�F:&.}��{ħ���իW_-�S��_.� y��[	�JbY���<xp���f�X�ZLËs ��[��7�e8Jd |�E@P��!��.���/�ڱp���!\�/O��V�N3�r`�� �ɨ�~������W�÷�~{>Vd<���o�R�����[�p>|{�8N��E�,x����/B돛�RH��i܌�5k>Եk׻&M�t�U���O8϶�[�{jeA8��/��Yk�����#BmI4)��"uD��#�e��K`�^�z)��"�(E��H�۷���mp2���v0-��t�"�,i��9���СC _&��;.�Ƨ���h�6b �2oj�
!`��+o��!���i��;��s�7���۸0�+܄vn����o޼��Њ�	�6D�3��d����0ol�"
�̃��=��E@2�8�-ˁ��6����O>����RE@P�F ^«���
K�G�)�E������`�;��=����σ���7�x��S���8p�)��ƍ;�t�@xx魀 a0`ޜ��`�p��&+��`c��{�������v�M��Y��V��/�>�6��\��-l�j;Q��݀����H�g�I}��H��E@:
Cb ����rc��Hَ d�(��"�Uh��7�ɀ�kp	i�5 ��[�whei·��zׁ�/�Z�r���_�p�5���1)�Q4����7 �N��2z�������q��㿩[��e�4�
�|{�%�̣W��ָ����Ly5��&Oy��!���VB:�D�ļx��K/����RE@PJG �c�s�=�������=�y�G��p��y�g�v�o�袋.DY�I�ol������������ 	/1>�Q�¼��AV���������=��Lh6����cY�Q�m�BL+N�!������ƪ�F�+����ª�*�ͻ��)���������9�ͦS���.�)�����H]ȣ[<�E@PE�4x����v�c�b�!�@�Q��@�9�c�߀���e�`���0:�p�	�/����Y0!��L�9�������S���W%
!^���v9m�X�}�.`Y�޽o��R���c�����/��4GK���_���h(.�S/�lzuoꈂ�E�xe����p��"�(��"�?�Ν�	K�ߧ�Qڀ��5��L���񜃴�N҃�{���m����#�+:�{�g�o�� �-����KP��n�U�p?��.J��b|�KhcY��,?�����߄��X��+;`'��S�N=�Ɖ��c���h�3�J��-A�A�F�5��{�mc~�KPE@��!C�L@l9���Aq�=���3(�@M߳J	���=z�؎Mwv�֍F�4��E�BL����������{�J��2�Vf�9�-���ީ#�8�%��[&���h��	��+`���us*2Np�_B�]F��tE�]z�gv@�^��"�(�@������1�!j8��A�̼]���e�'ݾ7��f���z���{��(�q�i]�i��� �z)��"�(�G �q8g,6K`�k쑐��@��A^8��J���w&�uw���v�B�,�2��%��!��$c��	ˈ���xXB2@�$<�!C�'Ĝ��!� ��!	�8&G���md��&y�dIW��J]W���.���~}Nݪ�����uu�w�U]=ʕ�㬸���[�D���*l�����r\Z-���� ���"" " }' ����b�CN�@w�����]w%��
�T�a�N*_O�9��uӄ!��X�`�w2ZD@D@�� �f���7��8��?u�}�z* ��{��
%������m��m�t�#��-�;�J?Hh�;w�>eʔ� ����7�9fp���H��w-�Jt��	�if;����ޒe˖������+�����@�`���NB�� �W�(Q���8ג`ˑ(�n���k8hE����^��������7� ����;hhr��_���W�(|��}�\��#U�Y!4X�-��a����̙�����f�G�r Z�������/�6N�l��R����sֱ�R��_�W���xXgu��������شi�饥���`���$��m��
;.�n���I,����#�-�8��������X߂����?縣�ZD@D@D``Њ��_�j&�����+��T"qd7	���J���/G���^����?���s7�(" " "�@�w�7^����H��H�a���Kj�7���}.��DQ䈤欜��H4��Ȭ�<y����2�ZD@D@D`�	@ kjj
O;��[�X�S$���@�����6���Ģ�,��u/	Wede������B�T���?tDK�"�w�)+,,|��N;7���%z)�P��2��6�;5Z�u�G��X��r˹���������@r	�Aʼ��������d1jۨK��/���[�#�=jI���l�̫6�ݛ�ܻAG�@uuuAyy�-����a���N��&���Xt����q���:}�O�/_>�M�Z*(" " �%��)�aÆ������|J��6f֗����l�~�G]E"�-~p�d�����:���K�k�����E�tɒ%��qHP�p��i��s��s�+,��}����\���o���3����勀�����"��y��rK9��֠`�������,�o��t�[��E[�?-㏼  �^8���/���յ6�*����@"���+�9s�}ض�6jV�B�"��$Q�V�G+��p�����;����G��Bŉ���:��k�M)**Z�Y��Q@�qc�﮻a	�VA >E�+t���}��R�5�� ZD@D@R� ���~������E���Z�l��Z�$�|b �,'�-,�'E ��c>%��ׯנl��"" "�b �N��K�B��
Eg�f- �F�K�mZ�X�u�	��=��~�[o�U��el�؝�⊀���=�-�0a ��d��s�E�^�m �KuTh�<���������3$�@C����@�@C��bŊ2̰�0΂�\�dŒ�;j/�T�qG}���?k׮]��{G��" " "����n��Rخ����g!� �o�AAn]0ݮ�3�W_����"�U+y" " "�� ���*>��sB��ٰ!d��En�h���I'F�Z�:�1Gt�O�6�֕+W�a]B�8~�Y�f|aa�38#����l���[�;P?.��7�j0��g�>��xZ"���Ag"" " 4pY������n�e��"�NA��l/��`���.\x*�g{�H����� �ro����qf���	��BALZ�aߞ7o޹�3���{�D@D@\�&�����lnC<'��g#$$�l��u��)S�\���)�RXD@D��% �\�z�����Gp���r��;�\�2�]lM��x�ҥcYW��;Ag&" " >h�2�|��s1 �ql:'a$��+�a����͛3�"" " �E ")�;��ts<��"Y_���Lm�v@7���y��ی������J�׳@g+" "�#�gϞ�������k$]qt��©��
_�f��5��6E���;��J�Hu�����%��0�v���<�MhK��i���Qj
��׍��sIQ̰���uϝw�9u"��w��\D@D@<h3y�������Hn�L��(t9�^�"c9�H
���W̟�֭[��F������ �S��1!�h0w��DѣY�SC��^����p�> �䲓�����Ϻ�;BD@D@D�#��q���c1?�bD�4��V�`_��}cܚ��Hkl�$�j�Fy-��v飏�,q�ǁ����$ �2��H�1�w����6�5�5��=>�,	7G � ��߰p���H�BQ" " "`	@$e�}���`<�r4��f;>�Q"�E��ʙ�f�]QQ1�^�" " " 	��n�e�]v)6�H�[��QC�(^q�y%�����;j1j�Ͼ��(ZTE�������	lٲ����ҧ!�>�6�H�'��G�t��30�����@sfV֫��ַ�B���^�" " " @��[M3srr���B�/F\�����}s�X�"a����!��;/��(׸�*��E@D@D�3I����F��� �8o�;h���
#7��5�8���%#��Fm=f���?�|Ig�^�D@D@D@:  ��裏Fϙ3�_ ��30�2���$+��/�KC����_cɂ��������͢���ˮh��P$���;�5j�sH[�I$��JCA��&��8b�(R0Y����.�h��8��k�����tE ")s���g!�Ӱ$�;M]j�(b��_�CN^�8j�8����g�}-^�N���5�v�n@�����oD��V$ͬ����ӗ|(����`�E�S"�ǎ]��SO��6-" " " �E�V����q3f̸yr~$w,�,JII�:x~}\s=6]��Hd���y�m��GD@D@|^|��1yyy;233k� K��('݊���]��q�5{cŚ�z�ܿ=�a�#_E֪�����'X�����א��pMޛm��$q�#W(Q(���+�?y��7Kq�4!$�h�cF`���C�͛�8��A�pig����s�	$c=B\�)_0X�hѢ3�YEP�" " " �8`��������H�B8�L��\��Y�y��������/سgOֵ�������^�t�98V���d�P�	����z�#�ׯ����c������8 �
�����UM+|�`��b�ݜ���ZkF���G�|��X�r)(" " "0P�o�~�ԩS7J �8tő���@y�Uo����{�@]GD@D@D �Gz����.77�'x��·d}kQ�[n}�,yB��q���m�Z3sR��Ԇ��W˿�������$�T�HI?��O��xs^��7�Z�JH�H��a+��{B���5e��T�8���1�H�����X" " "��-u�%���l�� ��Z���B$9����Y�02��.^�l�T�U�w�YE�6H�z�����8�CI�n[+˥�~[A�5��9&��w��u���?Β8��c�����@7	���7������ٿ�>h+q�q�v�����G�Y�W�W���/�����eR2��& ��y�w^��V�YK�;.���o��!�V�7�X#+���5�w�9|����x��h��k�㉀�������C���Ν{v���;CkG�"@�:f�"�Z�9c� �v)(���,S�Z*�������@������FM�8�]m��$�� �X� ���w��G�U_���g�u$Y�Y��!4���{좬����k�cEr�%Ѳd�Hwe�l.��8Ky�)�6��у�`�Óf�~��͚輻�R�E@D@D � ��,X0%�g��o���d���Og�G#����Tg�,~�ߏ_�;B��"" " )G �x��ٳ�A�+aE:_�V�� #]6{�1�p�!��f<w�ͷ]D]�UXD@D@D�� ��iܐ!C�!�~�
��&+�O4AL:b���֣�/�s��m����Z�&" " �N�֎x��p������6�7��\?��])a���X�+���
F���?���Nl�"" " "��Ш��c[ff�+�(���^��o�#��#���u��2�����}`"8FS�.��" " " �;v�)))�%�BQ�z��"	y��@��(���DpN��hvn�E�_��#����'E@D@D� �~ŊeE�=�d��$�Z�H��Z�|G��1'߾��ƀ��֎�;A'!" " >�"Z�h�"�o��gdd$��x�%���;�C~	�I�xO(b��0�G�`U���<��s�2�C�U�� ���ڱӧO�6D�G8/
۽d�~aԥ���'�Ef����@0���ya�����Ν�9����y������tB��7�(�mo 	�F�����3�
";N����^�.��1Zt��"��ܽeg�{�6��ܴ�������X�r��ދq��9	��d�]ǶnM����k-��k����o~;]]k��ZD@D@D �8p`�g��	$T���9��q�dÌ��y�쾩�k��(#o�m���đ�ZÅ�"" " iE  ��;�|>//����V�Pr�M|lRg��U�)��#���E��o��|��O��Go����������#��N�#��E��Ⱦ�ީ�(��N��-�=<rܤ%/��V��GA�t$p�ȑ1�wޭx�οٱ"Y���8$�7��+��:v+���/����SiYK�z�s�زeˤ����ͮ6;�Z�Rނ�e,썯���<qN�V�->���|�OW^y�Q��VE@D@D@ҕ �A�O<�7�Hd9_���(���:J�6�-HH�p<'kc�)�✢�N�z��u�5�(]� ������t@ � s��w���b(޽��
#+��f�;{>�rF�Ѧ@8Z����<�O�tP/-" " iM�֓O?�t�ĉ���ǅ	��	#B6`J|N$\��}���q>�!�h��(��z꩙YYY+hB
���� ��E�q���"�ʏrr*�0�_x�Ξ}���[Pv-" " " "�1����o�CT�
KK-R�?O�K�f0ŵ����)�е�X��݇~���8_M�qu��iϞ=y�j��㑜���B�Gs���<�k�G́h�#�.�u�5�s�"" " " ]�HZ�r匜��%;�C����Z�3��Ks��y�f�;�&(������@I�6R  IIDAT{���Co`�H	�If�ݞd�/վ\��(�֜0r��O��r!E`�֊������t� D��3�<s!Ү�P���H�X�:�������{��E97e������יX�"" " " ='@+KeeeqQQ�!���Q�P�$%!���p�A1Ĳ���������Ҋ�
}Jp�������� DR�l��FC6z��@,�(�e�Xz{ڴi�/������~  ��y��π�AdWk�4V�$�v��$Y>�f-^U����ݷt�pZ�����|�]mB�{m��k�I$�Q��m�Q�m(�#<�`-ak��#@�˒%K�`E��c=r��V�d��Dǌ�]�� -���˧�����ID@D@D ���珁�x��͏��D�e�� �x,Z�*!�7n�EwZD@D@D@�-X�"��r�i�H�9���"A	L�X�v�9�CҽT^�hѢ�;-" " " Ǟ�+�������V�8ڠI(��n�J�K ��5��"" " "0@8����n����233s@�E8f��[��>�5�����;o�,GTt�V[�n�5j��"&R%����k�e��T! ��d/[��f��,�c�~��5�w�W���0"�����WOe?�	����L��n,�k���2'N��5a�7n��e�]�f��ٟ��-�V�.��q�'wĆ<�Ŧ�ǳ���� ݴ
��$���a�\^҃ CZ/x��1LǏ��>V�����t�N?��:n�3y655�_�0.H�ȑ#�����ѣGMښ�� �6��l�:����53|��� }����7�b���8vy�544�,H�8p� ^��!@

�����ݎ;���I�&��]�^��P��������a�A�|..�� �3.8dȐ בW��������@NN�ن���^4g˸���&�Höz���}w��������z|�@�u�,����H�N	Ȃ�)m��!�5jA9m��D�L���C���"�ؖ����R W��HS���L�gϞ���Z
��� }��q��R@XB	:�3�2�72�e�b� Ă�@z6��up�:�S�ӄ2$��2apvB-Z]]MqI1޲eK>�R��pep��=����ʆˀ#ƅ<�2��v,��?Fq!��8�A�A � ��j��	�{��m�ծ��⚑#G�~�f�\��8\�d��`�r�[�%~l�P�>�5yy���-" ]po��S+��142�_�{��?ϡp��
iAA�h� ����Ā�gQ�a΄����O��g��΢���ɂЉ�E�/�N�L��X�"/6�ypC�ظ���߅1H�ſ���� 018Oߖv������4�ؑ���#\r�X�-2Xh�y"p)�}pTw��΁�@7��;���tE^�
%l��B6�Y�-XUp;�����jP�j�G�8W��&QlF�j���֭��L��ĕ�h>< �V+�:thpذa�#F<�����R��B�"7�^5`��,Z���gbXfY� AK�po����3����'6�C`)as.����v�ܙ�v��PUUUd׮]X,w����iM���a�6��������>L�.���ݧ���?a���r��Ba��/�Zb��+�A+�d8ZRXƉp��̀+����犠	s�}N���4�Y����)���z ��	�DQ�p��N�C�1e�·֫xY�n-��^ �O�u��,���T���C�b`��э�'O>TRRRQ�	oV �gl� �yQ4��s�Ãh�t!`�t9Y��Xx�Ga�)A�A�����	�a�7��_vp�����fװm۶�W�^�b�����<�H7�yqg,m��(�Mc���Ά�t�����!��8�4�LF:�m ;��$�:؂��K���]���ˣ��U�X��~�j#´M��G�DAǲ�i�<-'���b��3L�c��XV\�q����W/lT�>�i�k�a��|xLZ����[o,Q���o/�GN:��)S����h�:���\�c6�>a���o��-`{qZ���@��@J�K��4�47�� �c�G����z뭷BC������M�B�qO�@yH��4bh�7"�B�:+n4�$_L�����1@\a�����}�Ì2�-?l�܆�;��D9Mn�������;/smP��q~�b�2�8۝f֭��� �u��Zczb���<��0�e���_���uh�[�kf�i�q���A#�ǜ���G�u��<�Q�1�{$FQq3fL .6}���رccS�Nm�xj��ڇ��`�����|�sRXR��R�]2����gC��cK2 r8f����bJee�5�֭;y͚59C�U�VE�[�H���1���A�(���Ƌ>���nc:wa�]������m�;�l���;I;چ��}�6����d�c7cS�vT<�׎m/x��[�_?�q����|��'c��MCe���f����Ǭ&ʟ
c��f`#���������
��?����0��|	�/4���֥]86�`h�� �SR��*�� ��1�Z�ǿ�����+W���?�|��!t��?��!2o&��y6��i���m4�V6v�m\wA�i'?����N��MN��/��3I�����u��ș��ٝf���^K�)m�7rq�k���/����%&�/�gӛ�8~��zʷ��q�Ƶp��׼��|`mċ����)X�j0���̙3#�s���O?�	V����?��A�O�_��۵���! �4h.�
�[x8��A]��oc!�Ut�޽�W�X������E���z!K��MƮ���D��{C�8o����z�m6]��Fv�{����Q�>�;�ٗ�X^.���ϵ%�����Y���|	����^K�ЖͰ���w|v��cn3���ߌk��}���6'�݆�օ�����߼��'���6q���&ı|��x�i��;w�ڳ�:둲��u�>�1J�_�!�v!�CH/�ԊX�AB ���"�ch �p� �7�����KO<�D֢ &��<<�99����18
&� ]W�v0ۀ0����l�v{Wy��ލr�ۧ/��/Y%�w���_���rDm��_�����u_~6�;��?n�H�&/�kS&��zO�&(����6���B1ąa��͹!޼}�c�|��5kV��^x�K.	²�)�X�'l��"" "�Wx�f�Q�L�;�	-��~P��/~�	[:3�}KNT�_h92�c����0�笠����1����ǽ�H�/"��`���cx��]wݵ��¿�&���!����V(��G1PH^��J�o|ܧ�כ`��t�W��_�����9�9�����Ó�jG�݂���0�u�DM��yB)�6��FRT�W̽�#Z���~ކk���{+1��}��O��ۅ�$��ᨴ" �M �;��!z�UW]��a��<t�aW �O%�QL^�(�b��I1�l�~����}z��/޶u���A����~���E@D�kx`�`��k��˷ 5�F��g9����Y��kՁ���?/�g}���O���y�j�p���h��!�" "�n��͹�+ހ��0����2��|��p�a�8��Ձ�ց�}�O�����7ܰ	�\�{>���C��"" �� �9�?���(!��aK��T��D6�"���$��/�E�����/V��k>m���/<�����k����2)�uО@�ڸW^y�4��F8So9!�z�,�v�7[�I�QXD���}�9�����1�q���>g9�d�!�3<���'��.f�H��&��:�t� �1g�x��o�:>`Y�ﳣz�Q|���D" �B�އ�g��`��D�)��$�˗/_]]]�/%P&"�n�����E� �X���h�*d�uf��)��""��x�?<&oX�C�������u��&���E@�[��(�`jo�1Q���)�E��E@����(����	a�aa�=�?GQ."�U�. i�� ���᭖�Ni(��]-�a��"��hE�v�UxȐ!u'N�A<�k�'��e��뀽$����_�}� �����-" )K�
#�9�S>�m%�R���~�%�R������(�������i#�C����0H;]�<E�x$�v�����~��>�}��|3m�� �W=�I).��h�N�0a�(�`E��b� \q
��@j�[�pz��W�;gΜ8���>-�^D@� ��p̏R�ٴ���TE�p���ڭ3����:@�P��En���{����8p`��`C��"" �!@�t�ȑ{o�馏���Z|��̬��BvF^��Ø�s��](������g��Ż�(ܖ�x�.��εt�It��ۙ����~��[&�]ޯ����<��<���<C������@w	�ə�����+�y晗�I��zO�1E�����RGi����)�s��|X���^;��`�������w����Cc��?4�礓Nj~��g�>t����yG��ED@zC ���x�މ�~�_�`��#F�D"5F棵��
 ����0�r�c_�M�X�S������{#Qw�ݗq��s�(��{u�رc����ݟ|��&X���=�q���ep��?��:�=$�i����o�����m۶e��8	������L��+�z������%;@:��!�@�p?;y�y�G���h�w#�~PZZ�����W^v�e�ǏƟ��u8�A_Z���@Jz�?	����-��m�l޼��W_}u>vX�jU|���!�t��̓�>��m|����?���y�MJ�_�� �	+`lb#n�����c��O3\����ηI��a��V0��q_r����ٳ�~��_~n�ܹ�n�>fgf�E��튨<�&��s&�&���x	2�����۳�|��)L�]�v����`F�`6B�?���?�p�HǥF�"-�����2���V��	q�~`�7B?~��ɓ'/?���7�}�ٵӧOo*((����Cڊ<�%P�t�H�'~�\�/�g���w%&��jÆE+W��x���C��n�Ν;c{���>���������,Hmp�+�O�{�1���ƹ�c��p�СCxY��b%%%uB����*�~tذa���/Đ̐.U�S��RJ\&�/��ga ���ϵV%��f~�z�nٲ% ���_�2dӦM�>��˰�p<�c�J�ES_ʑ��J ���q�]�.�::X{��;����hk��ݰ
�Ï�|����ƍҡ��.��k�}�	�}�{��i��# ��r�L�-4���wnc]	^5�zǎW}��%�7n�-� �N�����.v+��0�. �L�h�B .�(��:�o�ip��mfg��رn4?�b�|p_o��v�z|��[�ǳ�ַ��x+~>vC?����Y�ev�<���M!�k���x^c:v_�uv]�g�<�|x\.�y]af�=����<&�-B1t��F��8iҤ��#G�1cƪ���N<��7�M��n1~$��ǒըKJJ0�	ğ����*�Od��4���p���8@|`߾}� ��xs.�{�� ,P��2�X����h�q���i�"��p����y���6R�o������ֺ6������/A�vQ�q��_��i�e`�K�a��l9{z�6��?�n��:�f�ql>V�t���x=�5�5�a ��ǰV�*�?�[�u� ���}�@vvv 777PTT�
>< kP3�P( !��x�%8��O�����L�
_��$���K��)4>lpz{oai�B��n�ԹX?�H�w��a�@E0wSo�Ejjj(�b�aʂ U�>��S�������i�t6�&�6�g��&M�y'L��13oH:���\ζvA�Z���u7�;��9����@��>������u����'�g��
������b�@v�՞��"��z���	��"p�	�Q�}�7n��8�)�s3!�B��d��Q3��OF ql��g��]g:���<��1L׹��8�l�X&�AT ���b8~�j8�\8��X���Ḱ�gw�m�Md?v�a�o�[ߵ��8�v?7Ά�}:
۴~?Q���������2�n%N~�0-+����n:��C`[���p|�no��q�viѪC�Ƅ1^�����q��ҢC���
#��~�G>���L͜��q{��6�}W��Y��U-" �% ��]RJ'=$��ʈ���T�����:M[YY��(���sjc!��"<V�`���z�3��z�-��2o����a���t<�$2�@q�P�مyQ,���=���0��Q`q�8���a��s��[�<Aa�C:�s� B7T#�j +���QҀ�#HWG�s �5"�1��w`pr5�?�v��z���r�0a��lI<֬Y��~Y��"�O��T&�J@)]���;-	x�"�5�(����!�	�!DKQ‖##���g�}�b%���ǭ1�f��a�1�e��M۲1񯛞)�Bym�Fv��b� �"�:Đ[.�i)⤈��u����	>���RD���ܗN���@*�?@R�\Tv�n��Ὗ�����`ē�[>���qD��|��#���&���[|�    IEND�B`�
```            
### package-lock.json

```
{
	"name": "prompt-context-builder-plugin",
	"version": "0.0.8",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "prompt-context-builder-plugin",
			"version": "0.0.8",
			"dependencies": {
				"handlebars": "^4.7.8",
				"js-yaml": "^4.1.0",
				"prompt-context-builder": "^1.1.0"
			},
			"devDependencies": {
				"@types/vscode": "^1.73.0",
				"webpack": "^5.89.0",
				"webpack-cli": "^5.1.4"
			},
			"engines": {
				"vscode": "^1.74.0"
			}
		},
		"node_modules/@discoveryjs/json-ext": {
			"version": "0.5.7",
			"resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.5.7.tgz",
			"integrity": "sha512-dBVuXR082gk3jsFp7Rd/JI4kytwGHecnCoTtXFb7DB6CNHp4rg5k1bhg0nWdLGLnOV71lmDzGQaLMy8iPLY0pw==",
			"dev": true,
			"engines": {
				"node": ">=10.0.0"
			}
		},
		"node_modules/@isaacs/cliui": {
			"version": "8.0.2",
			"resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
			"integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
			"dependencies": {
				"string-width": "^5.1.2",
				"string-width-cjs": "npm:string-width@^4.2.0",
				"strip-ansi": "^7.0.1",
				"strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
				"wrap-ansi": "^8.1.0",
				"wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/ansi-regex": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
			"integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-regex?sponsor=1"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/ansi-styles": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
			"integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/emoji-regex": {
			"version": "9.2.2",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
			"integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg=="
		},
		"node_modules/@isaacs/cliui/node_modules/string-width": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
			"integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
			"dependencies": {
				"eastasianwidth": "^0.2.0",
				"emoji-regex": "^9.2.2",
				"strip-ansi": "^7.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/strip-ansi": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
			"integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
			"dependencies": {
				"ansi-regex": "^6.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/strip-ansi?sponsor=1"
			}
		},
		"node_modules/@isaacs/cliui/node_modules/wrap-ansi": {
			"version": "8.1.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
			"integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
			"dependencies": {
				"ansi-styles": "^6.1.0",
				"string-width": "^5.0.1",
				"strip-ansi": "^7.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/@jridgewell/gen-mapping": {
			"version": "0.3.3",
			"resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.3.tgz",
			"integrity": "sha512-HLhSWOLRi875zjjMG/r+Nv0oCW8umGb0BgEhyX3dDX3egwZtB8PqLnjz3yedt8R5StBrzcg4aBpnh8UA9D1BoQ==",
			"dev": true,
			"dependencies": {
				"@jridgewell/set-array": "^1.0.1",
				"@jridgewell/sourcemap-codec": "^1.4.10",
				"@jridgewell/trace-mapping": "^0.3.9"
			},
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/resolve-uri": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.1.tgz",
			"integrity": "sha512-dSYZh7HhCDtCKm4QakX0xFpsRDqjjtZf/kjI/v3T3Nwt5r8/qz/M19F9ySyOqU94SXBmeG9ttTul+YnR4LOxFA==",
			"dev": true,
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/set-array": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.1.2.tgz",
			"integrity": "sha512-xnkseuNADM0gt2bs+BvhO0p78Mk762YnZdsuzFV018NoG1Sj1SCQvpSqa7XUaTam5vAGasABV9qXASMKnFMwMw==",
			"dev": true,
			"engines": {
				"node": ">=6.0.0"
			}
		},
		"node_modules/@jridgewell/source-map": {
			"version": "0.3.5",
			"resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.5.tgz",
			"integrity": "sha512-UTYAUj/wviwdsMfzoSJspJxbkH5o1snzwX0//0ENX1u/55kkZZkcTZP6u9bwKGkv+dkk9at4m1Cpt0uY80kcpQ==",
			"dev": true,
			"dependencies": {
				"@jridgewell/gen-mapping": "^0.3.0",
				"@jridgewell/trace-mapping": "^0.3.9"
			}
		},
		"node_modules/@jridgewell/sourcemap-codec": {
			"version": "1.4.15",
			"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",
			"integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==",
			"dev": true
		},
		"node_modules/@jridgewell/trace-mapping": {
			"version": "0.3.20",
			"resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.20.tgz",
			"integrity": "sha512-R8LcPeWZol2zR8mmH3JeKQ6QRCFb7XgUhV9ZlGhHLGyg4wpPiPZNQOOWhFZhxKw8u//yTbNGI42Bx/3paXEQ+Q==",
			"dev": true,
			"dependencies": {
				"@jridgewell/resolve-uri": "^3.1.0",
				"@jridgewell/sourcemap-codec": "^1.4.14"
			}
		},
		"node_modules/@pkgjs/parseargs": {
			"version": "0.11.0",
			"resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
			"integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
			"optional": true,
			"engines": {
				"node": ">=14"
			}
		},
		"node_modules/@types/eslint": {
			"version": "8.56.1",
			"resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-8.56.1.tgz",
			"integrity": "sha512-18PLWRzhy9glDQp3+wOgfLYRWlhgX0azxgJ63rdpoUHyrC9z0f5CkFburjQx4uD7ZCruw85ZtMt6K+L+R8fLJQ==",
			"dev": true,
			"dependencies": {
				"@types/estree": "*",
				"@types/json-schema": "*"
			}
		},
		"node_modules/@types/eslint-scope": {
			"version": "3.7.7",
			"resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.7.tgz",
			"integrity": "sha512-MzMFlSLBqNF2gcHWO0G1vP/YQyfvrxZ0bF+u7mzUdZ1/xK4A4sru+nraZz5i3iEIk1l1uyicaDVTB4QbbEkAYg==",
			"dev": true,
			"dependencies": {
				"@types/eslint": "*",
				"@types/estree": "*"
			}
		},
		"node_modules/@types/estree": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.5.tgz",
			"integrity": "sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==",
			"dev": true
		},
		"node_modules/@types/json-schema": {
			"version": "7.0.15",
			"resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
			"integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
			"dev": true
		},
		"node_modules/@types/node": {
			"version": "20.10.7",
			"resolved": "https://registry.npmjs.org/@types/node/-/node-20.10.7.tgz",
			"integrity": "sha512-fRbIKb8C/Y2lXxB5eVMj4IU7xpdox0Lh8bUPEdtLysaylsml1hOOx1+STloRs/B9nf7C6kPRmmg/V7aQW7usNg==",
			"dependencies": {
				"undici-types": "~5.26.4"
			}
		},
		"node_modules/@types/node-fetch": {
			"version": "2.6.11",
			"resolved": "https://registry.npmjs.org/@types/node-fetch/-/node-fetch-2.6.11.tgz",
			"integrity": "sha512-24xFj9R5+rfQJLRyM56qh+wnVSYhyXC2tkoBndtY0U+vubqNsYXGjufB2nn8Q6gt0LrARwL6UBtMCSVCwl4B1g==",
			"dependencies": {
				"@types/node": "*",
				"form-data": "^4.0.0"
			}
		},
		"node_modules/@types/vscode": {
			"version": "1.85.0",
			"resolved": "https://registry.npmjs.org/@types/vscode/-/vscode-1.85.0.tgz",
			"integrity": "sha512-CF/RBon/GXwdfmnjZj0WTUMZN5H6YITOfBCP4iEZlOtVQXuzw6t7Le7+cR+7JzdMrnlm7Mfp49Oj2TuSXIWo3g==",
			"dev": true
		},
		"node_modules/@webassemblyjs/ast": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.11.6.tgz",
			"integrity": "sha512-IN1xI7PwOvLPgjcf180gC1bqn3q/QaOCwYUahIOhbYUu8KA/3tw2RT/T0Gidi1l7Hhj5D/INhJxiICObqpMu4Q==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/helper-numbers": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/floating-point-hex-parser": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.6.tgz",
			"integrity": "sha512-ejAj9hfRJ2XMsNHk/v6Fu2dGS+i4UaXBXGemOfQ/JfQ6mdQg/WXtwleQRLLS4OvfDhv8rYnVwH27YJLMyYsxhw==",
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-api-error": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.6.tgz",
			"integrity": "sha512-o0YkoP4pVu4rN8aTJgAyj9hC2Sv5UlkzCHhxqWj8butaLvnpdc2jOwh4ewE6CX0txSfLn/UYaV/pheS2Txg//Q==",
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-buffer": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.11.6.tgz",
			"integrity": "sha512-z3nFzdcp1mb8nEOFFk8DrYLpHvhKC3grJD2ardfKOzmbmJvEf/tPIqCY+sNcwZIY8ZD7IkB2l7/pqhUhqm7hLA==",
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-numbers": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.6.tgz",
			"integrity": "sha512-vUIhZ8LZoIWHBohiEObxVm6hwP034jwmc9kuq5GdHZH0wiLVLIPcMCdpJzG4C11cHoQ25TFIQj9kaVADVX7N3g==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/floating-point-hex-parser": "1.11.6",
				"@webassemblyjs/helper-api-error": "1.11.6",
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@webassemblyjs/helper-wasm-bytecode": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.6.tgz",
			"integrity": "sha512-sFFHKwcmBprO9e7Icf0+gddyWYDViL8bpPjJJl0WHxCdETktXdmtWLGVzoHbqUcY4Be1LkNfwTmXOJUFZYSJdA==",
			"dev": true
		},
		"node_modules/@webassemblyjs/helper-wasm-section": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.11.6.tgz",
			"integrity": "sha512-LPpZbSOwTpEC2cgn4hTydySy1Ke+XEu+ETXuoyvuyezHO3Kjdu90KK95Sh9xTbmjrCsUwvWwCOQQNta37VrS9g==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-buffer": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/wasm-gen": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/ieee754": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.6.tgz",
			"integrity": "sha512-LM4p2csPNvbij6U1f19v6WR56QZ8JcHg3QIJTlSwzFcmx6WSORicYj6I63f9yU1kEUtrpG+kjkiIAkevHpDXrg==",
			"dev": true,
			"dependencies": {
				"@xtuc/ieee754": "^1.2.0"
			}
		},
		"node_modules/@webassemblyjs/leb128": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.6.tgz",
			"integrity": "sha512-m7a0FhE67DQXgouf1tbN5XQcdWoNgaAuoULHIfGFIEVKA6tu/edls6XnIlkmS6FrXAquJRPni3ZZKjw6FSPjPQ==",
			"dev": true,
			"dependencies": {
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@webassemblyjs/utf8": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.6.tgz",
			"integrity": "sha512-vtXf2wTQ3+up9Zsg8sa2yWiQpzSsMyXj0qViVP6xKGCUT8p8YJ6HqI7l5eCnWx1T/FYdsv07HQs2wTFbbof/RA==",
			"dev": true
		},
		"node_modules/@webassemblyjs/wasm-edit": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.11.6.tgz",
			"integrity": "sha512-Ybn2I6fnfIGuCR+Faaz7YcvtBKxvoLV3Lebn1tM4o/IAJzmi9AWYIPWpyBfU8cC+JxAO57bk4+zdsTjJR+VTOw==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-buffer": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/helper-wasm-section": "1.11.6",
				"@webassemblyjs/wasm-gen": "1.11.6",
				"@webassemblyjs/wasm-opt": "1.11.6",
				"@webassemblyjs/wasm-parser": "1.11.6",
				"@webassemblyjs/wast-printer": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wasm-gen": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.11.6.tgz",
			"integrity": "sha512-3XOqkZP/y6B4F0PBAXvI1/bky7GryoogUtfwExeP/v7Nzwo1QLcq5oQmpKlftZLbT+ERUOAZVQjuNVak6UXjPA==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/ieee754": "1.11.6",
				"@webassemblyjs/leb128": "1.11.6",
				"@webassemblyjs/utf8": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wasm-opt": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.11.6.tgz",
			"integrity": "sha512-cOrKuLRE7PCe6AsOVl7WasYf3wbSo4CeOk6PkrjS7g57MFfVUF9u6ysQBBODX0LdgSvQqRiGz3CXvIDKcPNy4g==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-buffer": "1.11.6",
				"@webassemblyjs/wasm-gen": "1.11.6",
				"@webassemblyjs/wasm-parser": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wasm-parser": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.11.6.tgz",
			"integrity": "sha512-6ZwPeGzMJM3Dqp3hCsLgESxBGtT/OeCvCZ4TA1JUPYgmhAx38tTPR9JaKy0S5H3evQpO/h2uWs2j6Yc/fjkpTQ==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@webassemblyjs/helper-api-error": "1.11.6",
				"@webassemblyjs/helper-wasm-bytecode": "1.11.6",
				"@webassemblyjs/ieee754": "1.11.6",
				"@webassemblyjs/leb128": "1.11.6",
				"@webassemblyjs/utf8": "1.11.6"
			}
		},
		"node_modules/@webassemblyjs/wast-printer": {
			"version": "1.11.6",
			"resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.11.6.tgz",
			"integrity": "sha512-JM7AhRcE+yW2GWYaKeHL5vt4xqee5N2WcezptmgyhNS+ScggqcT1OtXykhAb13Sn5Yas0j2uv9tHgrjwvzAP4A==",
			"dev": true,
			"dependencies": {
				"@webassemblyjs/ast": "1.11.6",
				"@xtuc/long": "4.2.2"
			}
		},
		"node_modules/@webpack-cli/configtest": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/@webpack-cli/configtest/-/configtest-2.1.1.tgz",
			"integrity": "sha512-wy0mglZpDSiSS0XHrVR+BAdId2+yxPSoJW8fsna3ZpYSlufjvxnP4YbKTCBZnNIcGN4r6ZPXV55X4mYExOfLmw==",
			"dev": true,
			"engines": {
				"node": ">=14.15.0"
			},
			"peerDependencies": {
				"webpack": "5.x.x",
				"webpack-cli": "5.x.x"
			}
		},
		"node_modules/@webpack-cli/info": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/@webpack-cli/info/-/info-2.0.2.tgz",
			"integrity": "sha512-zLHQdI/Qs1UyT5UBdWNqsARasIA+AaF8t+4u2aS2nEpBQh2mWIVb8qAklq0eUENnC5mOItrIB4LiS9xMtph18A==",
			"dev": true,
			"engines": {
				"node": ">=14.15.0"
			},
			"peerDependencies": {
				"webpack": "5.x.x",
				"webpack-cli": "5.x.x"
			}
		},
		"node_modules/@webpack-cli/serve": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/@webpack-cli/serve/-/serve-2.0.5.tgz",
			"integrity": "sha512-lqaoKnRYBdo1UgDX8uF24AfGMifWK19TxPmM5FHc2vAGxrJ/qtyUyFBWoY1tISZdelsQ5fBcOusifo5o5wSJxQ==",
			"dev": true,
			"engines": {
				"node": ">=14.15.0"
			},
			"peerDependencies": {
				"webpack": "5.x.x",
				"webpack-cli": "5.x.x"
			},
			"peerDependenciesMeta": {
				"webpack-dev-server": {
					"optional": true
				}
			}
		},
		"node_modules/@xtuc/ieee754": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
			"integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
			"dev": true
		},
		"node_modules/@xtuc/long": {
			"version": "4.2.2",
			"resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
			"integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
			"dev": true
		},
		"node_modules/abort-controller": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
			"integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
			"dependencies": {
				"event-target-shim": "^5.0.0"
			},
			"engines": {
				"node": ">=6.5"
			}
		},
		"node_modules/acorn": {
			"version": "8.11.3",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.11.3.tgz",
			"integrity": "sha512-Y9rRfJG5jcKOE0CLisYbojUjIrIEE7AGMzA/Sm4BslANhbS+cDMpgBdcPT91oJ7OuJ9hYJBx59RjbhxVnrF8Xg==",
			"dev": true,
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/acorn-import-assertions": {
			"version": "1.9.0",
			"resolved": "https://registry.npmjs.org/acorn-import-assertions/-/acorn-import-assertions-1.9.0.tgz",
			"integrity": "sha512-cmMwop9x+8KFhxvKrKfPYmN6/pKTYYHBqLa0DfvVZcKMJWNyWLnaqND7dx/qn66R7ewM1UX5XMaDVP5wlVTaVA==",
			"dev": true,
			"peerDependencies": {
				"acorn": "^8"
			}
		},
		"node_modules/agent-base": {
			"version": "7.1.0",
			"resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.0.tgz",
			"integrity": "sha512-o/zjMZRhJxny7OyEF+Op8X+efiELC7k7yOjMzgfzVqOzXqkBkWI79YoTdOtsuWd5BWhAGAuOY/Xa6xpiaWXiNg==",
			"dependencies": {
				"debug": "^4.3.4"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/agentkeepalive": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.5.0.tgz",
			"integrity": "sha512-5GG/5IbQQpC9FpkRGsSvZI5QYeSCzlJHdpBQntCsuTOxhKD8lqKhrleg2Yi7yvMIf82Ycmmqln9U8V9qwEiJew==",
			"dependencies": {
				"humanize-ms": "^1.2.1"
			},
			"engines": {
				"node": ">= 8.0.0"
			}
		},
		"node_modules/ajv": {
			"version": "6.12.6",
			"resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
			"integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
			"dev": true,
			"dependencies": {
				"fast-deep-equal": "^3.1.1",
				"fast-json-stable-stringify": "^2.0.0",
				"json-schema-traverse": "^0.4.1",
				"uri-js": "^4.2.2"
			},
			"funding": {
				"type": "github",
				"url": "https://github.com/sponsors/epoberezkin"
			}
		},
		"node_modules/ajv-keywords": {
			"version": "3.5.2",
			"resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
			"integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
			"dev": true,
			"peerDependencies": {
				"ajv": "^6.9.1"
			}
		},
		"node_modules/ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"dependencies": {
				"color-convert": "^2.0.1"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/chalk/ansi-styles?sponsor=1"
			}
		},
		"node_modules/archiver": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/archiver/-/archiver-7.0.0.tgz",
			"integrity": "sha512-R9HM9egs8FfktSqUqyjlKmvF4U+CWNqm/2tlROV+lOFg79MLdT67ae1l3hU47pGy8twSXxHoiefMCh43w0BriQ==",
			"dependencies": {
				"archiver-utils": "^5.0.0",
				"async": "^3.2.4",
				"buffer-crc32": "^1.0.0",
				"readable-stream": "^4.0.0",
				"readdir-glob": "^1.1.2",
				"tar-stream": "^3.0.0",
				"zip-stream": "^6.0.0"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/archiver-utils": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/archiver-utils/-/archiver-utils-5.0.1.tgz",
			"integrity": "sha512-MMAoLdMvT/nckofX1tCLrf7uJce4jTNkiT6smA2u57AOImc1nce7mR3EDujxL5yv6/MnILuQH4sAsPtDS8kTvg==",
			"dependencies": {
				"glob": "^10.0.0",
				"graceful-fs": "^4.2.0",
				"lazystream": "^1.0.0",
				"lodash": "^4.17.15",
				"normalize-path": "^3.0.0",
				"readable-stream": "^3.6.0"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/archiver-utils/node_modules/readable-stream": {
			"version": "3.6.2",
			"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
			"integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
			"dependencies": {
				"inherits": "^2.0.3",
				"string_decoder": "^1.1.1",
				"util-deprecate": "^1.0.1"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q=="
		},
		"node_modules/async": {
			"version": "3.2.5",
			"resolved": "https://registry.npmjs.org/async/-/async-3.2.5.tgz",
			"integrity": "sha512-baNZyqaaLhyLVKm/DlvdW051MSgO6b8eVfIezl9E5PqWxFgzLm/wQntEW4zOytVburDEr0JlALEpdOFwvErLsg=="
		},
		"node_modules/asynckit": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
			"integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="
		},
		"node_modules/b4a": {
			"version": "1.6.6",
			"resolved": "https://registry.npmjs.org/b4a/-/b4a-1.6.6.tgz",
			"integrity": "sha512-5Tk1HLk6b6ctmjIkAcU/Ujv/1WqiDl0F0JdRCR80VsOcUlHcu7pWeWRlOqQLHfDEsVx9YH/aif5AG4ehoCtTmg=="
		},
		"node_modules/balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
		},
		"node_modules/bare-events": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/bare-events/-/bare-events-2.2.1.tgz",
			"integrity": "sha512-9GYPpsPFvrWBkelIhOhTWtkeZxVxZOdb3VnFTCzlOo3OjvmTvzLoZFUT8kNFACx0vJej6QPney1Cf9BvzCNE/A==",
			"optional": true
		},
		"node_modules/base-64": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/base-64/-/base-64-0.1.0.tgz",
			"integrity": "sha512-Y5gU45svrR5tI2Vt/X9GPd3L0HNIKzGu202EjxrXMpuc2V2CiKgemAbUUsqYmZJvPtCXoUKjNZwBJzsNScUbXA=="
		},
		"node_modules/base64-js": {
			"version": "1.5.1",
			"resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
			"integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			]
		},
		"node_modules/brace-expansion": {
			"version": "1.1.11",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
			"integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
			"dependencies": {
				"balanced-match": "^1.0.0",
				"concat-map": "0.0.1"
			}
		},
		"node_modules/browserslist": {
			"version": "4.22.2",
			"resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.22.2.tgz",
			"integrity": "sha512-0UgcrvQmBDvZHFGdYUehrCNIazki7/lUP3kkoi/r3YB2amZbFM9J43ZRkJTXBUZK4gmx56+Sqk9+Vs9mwZx9+A==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/browserslist"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/browserslist"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"dependencies": {
				"caniuse-lite": "^1.0.30001565",
				"electron-to-chromium": "^1.4.601",
				"node-releases": "^2.0.14",
				"update-browserslist-db": "^1.0.13"
			},
			"bin": {
				"browserslist": "cli.js"
			},
			"engines": {
				"node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
			}
		},
		"node_modules/buffer": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz",
			"integrity": "sha512-FTiCpNxtwiZZHEZbcbTIcZjERVICn9yq/pDFkTl95/AxzD1naBctN7YO68riM/gLSDY7sdrMby8hofADYuuqOA==",
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			],
			"dependencies": {
				"base64-js": "^1.3.1",
				"ieee754": "^1.2.1"
			}
		},
		"node_modules/buffer-crc32": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-1.0.0.tgz",
			"integrity": "sha512-Db1SbgBS/fg/392AblrMJk97KggmvYhr4pB5ZIMTWtaivCPMWLkmb7m21cJvpvgK+J3nsU2CmmixNBZx4vFj/w==",
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/buffer-from": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
			"integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
			"dev": true
		},
		"node_modules/caniuse-lite": {
			"version": "1.0.30001576",
			"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001576.tgz",
			"integrity": "sha512-ff5BdakGe2P3SQsMsiqmt1Lc8221NR1VzHj5jXN5vBny9A6fpze94HiVV/n7XRosOlsShJcvMv5mdnpjOGCEgg==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/browserslist"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/caniuse-lite"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			]
		},
		"node_modules/chalk": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
			"integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
			"dependencies": {
				"ansi-styles": "^4.1.0",
				"supports-color": "^7.1.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/chalk?sponsor=1"
			}
		},
		"node_modules/chalk/node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/charenc": {
			"version": "0.0.2",
			"resolved": "https://registry.npmjs.org/charenc/-/charenc-0.0.2.tgz",
			"integrity": "sha512-yrLQ/yVUFXkzg7EDQsPieE/53+0RlaWTs+wBrvW36cyilJ2SaDWfl4Yj7MtLTXleV9uEKefbAGUPv2/iWSooRA==",
			"engines": {
				"node": "*"
			}
		},
		"node_modules/chevrotain": {
			"version": "6.5.0",
			"resolved": "https://registry.npmjs.org/chevrotain/-/chevrotain-6.5.0.tgz",
			"integrity": "sha512-BwqQ/AgmKJ8jcMEjaSnfMybnKMgGTrtDKowfTP3pX4jwVy0kNjRsT/AP6h+wC3+3NC+X8X15VWBnTCQlX+wQFg==",
			"dependencies": {
				"regexp-to-ast": "0.4.0"
			}
		},
		"node_modules/chrome-trace-event": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.3.tgz",
			"integrity": "sha512-p3KULyQg4S7NIHixdwbGX+nFHkoBiA4YQmyWtjb8XngSKV124nJmRysgAeujbUVb15vh+RvFUfCPqU7rXk+hZg==",
			"dev": true,
			"engines": {
				"node": ">=6.0"
			}
		},
		"node_modules/cliui": {
			"version": "8.0.1",
			"resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
			"integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
			"dependencies": {
				"string-width": "^4.2.0",
				"strip-ansi": "^6.0.1",
				"wrap-ansi": "^7.0.0"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/clone-deep": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
			"integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
			"dev": true,
			"dependencies": {
				"is-plain-object": "^2.0.4",
				"kind-of": "^6.0.2",
				"shallow-clone": "^3.0.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"dependencies": {
				"color-name": "~1.1.4"
			},
			"engines": {
				"node": ">=7.0.0"
			}
		},
		"node_modules/color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
		},
		"node_modules/colorette": {
			"version": "2.0.20",
			"resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
			"integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
			"dev": true
		},
		"node_modules/combined-stream": {
			"version": "1.0.8",
			"resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
			"integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
			"dependencies": {
				"delayed-stream": "~1.0.0"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/commander": {
			"version": "2.20.3",
			"resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
			"integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
			"dev": true
		},
		"node_modules/compress-commons": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/compress-commons/-/compress-commons-6.0.1.tgz",
			"integrity": "sha512-l7occIJn8YwlCEbWUCrG6gPms9qnJTCZSaznCa5HaV+yJMH4kM8BDc7q9NyoQuoiB2O6jKgTcTeY462qw6MyHw==",
			"dependencies": {
				"crc-32": "^1.2.0",
				"crc32-stream": "^6.0.0",
				"normalize-path": "^3.0.0",
				"readable-stream": "^4.0.0"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/concat-map": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
			"integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
		},
		"node_modules/core-util-is": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
			"integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="
		},
		"node_modules/crc-32": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz",
			"integrity": "sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==",
			"bin": {
				"crc32": "bin/crc32.njs"
			},
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/crc32-stream": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/crc32-stream/-/crc32-stream-6.0.0.tgz",
			"integrity": "sha512-piICUB6ei4IlTv1+653yq5+KoqfBYmj9bw6LqXoOneTMDXk5nM1qt12mFW1caG3LlJXEKW1Bp0WggEmIfQB34g==",
			"dependencies": {
				"crc-32": "^1.2.0",
				"readable-stream": "^4.0.0"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/cross-spawn": {
			"version": "7.0.3",
			"resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
			"integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
			"dependencies": {
				"path-key": "^3.1.0",
				"shebang-command": "^2.0.0",
				"which": "^2.0.1"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/crypt": {
			"version": "0.0.2",
			"resolved": "https://registry.npmjs.org/crypt/-/crypt-0.0.2.tgz",
			"integrity": "sha512-mCxBlsHFYh9C+HVpiEacem8FEBnMXgU9gy4zmNC+SXAZNB/1idgp/aulFJ4FgCi7GPEVbfyng092GqL2k2rmow==",
			"engines": {
				"node": "*"
			}
		},
		"node_modules/debug": {
			"version": "4.3.4",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
			"integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
			"dependencies": {
				"ms": "2.1.2"
			},
			"engines": {
				"node": ">=6.0"
			},
			"peerDependenciesMeta": {
				"supports-color": {
					"optional": true
				}
			}
		},
		"node_modules/delayed-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
			"integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/digest-fetch": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/digest-fetch/-/digest-fetch-1.3.0.tgz",
			"integrity": "sha512-CGJuv6iKNM7QyZlM2T3sPAdZWd/p9zQiRNS9G+9COUCwzWFTs0Xp8NF5iePx7wtvhDykReiRRrSeNb4oMmB8lA==",
			"dependencies": {
				"base-64": "^0.1.0",
				"md5": "^2.3.0"
			}
		},
		"node_modules/eastasianwidth": {
			"version": "0.2.0",
			"resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
			"integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA=="
		},
		"node_modules/ejs": {
			"version": "3.1.9",
			"resolved": "https://registry.npmjs.org/ejs/-/ejs-3.1.9.tgz",
			"integrity": "sha512-rC+QVNMJWv+MtPgkt0y+0rVEIdbtxVADApW9JXrUVlzHetgcyczP/E7DJmWJ4fJCZF2cPcBk0laWO9ZHMG3DmQ==",
			"dependencies": {
				"jake": "^10.8.5"
			},
			"bin": {
				"ejs": "bin/cli.js"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/electron-to-chromium": {
			"version": "1.4.623",
			"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.623.tgz",
			"integrity": "sha512-lKoz10iCYlP1WtRYdh5MvocQPWVRoI7ysp6qf18bmeBgR8abE6+I2CsfyNKztRDZvhdWc+krKT6wS7Neg8sw3A==",
			"dev": true
		},
		"node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
		},
		"node_modules/enhanced-resolve": {
			"version": "5.15.0",
			"resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.15.0.tgz",
			"integrity": "sha512-LXYT42KJ7lpIKECr2mAXIaMldcNCh/7E0KBKOu4KSfkHmP+mZmSs+8V5gBAqisWBy0OO4W5Oyys0GO1Y8KtdKg==",
			"dev": true,
			"dependencies": {
				"graceful-fs": "^4.2.4",
				"tapable": "^2.2.0"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/envinfo": {
			"version": "7.11.0",
			"resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.11.0.tgz",
			"integrity": "sha512-G9/6xF1FPbIw0TtalAMaVPpiq2aDEuKLXM314jPVAO9r2fo2a4BLqMNkmRS7O/xPPZ+COAhGIz3ETvHEV3eUcg==",
			"dev": true,
			"bin": {
				"envinfo": "dist/cli.js"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/es-module-lexer": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.4.1.tgz",
			"integrity": "sha512-cXLGjP0c4T3flZJKQSuziYoq7MlT+rnvfZjfp7h+I7K9BNX54kP9nyWvdbwjQ4u1iWbOL4u96fgeZLToQlZC7w==",
			"dev": true
		},
		"node_modules/escalade": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
			"integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/eslint-scope": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
			"integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
			"dev": true,
			"dependencies": {
				"esrecurse": "^4.3.0",
				"estraverse": "^4.1.1"
			},
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/esrecurse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
			"integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
			"dev": true,
			"dependencies": {
				"estraverse": "^5.2.0"
			},
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/esrecurse/node_modules/estraverse": {
			"version": "5.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
			"integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
			"dev": true,
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/estraverse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
			"integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
			"dev": true,
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/event-target-shim": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
			"integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ==",
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/events": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
			"integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
			"engines": {
				"node": ">=0.8.x"
			}
		},
		"node_modules/fast-deep-equal": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
			"integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
			"dev": true
		},
		"node_modules/fast-fifo": {
			"version": "1.3.2",
			"resolved": "https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.2.tgz",
			"integrity": "sha512-/d9sfos4yxzpwkDkuN7k2SqFKtYNmCTzgfEpz82x34IM9/zc8KGxQoXg1liNC/izpRM/MBdt44Nmx41ZWqk+FQ=="
		},
		"node_modules/fast-json-stable-stringify": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
			"integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
			"dev": true
		},
		"node_modules/fastest-levenshtein": {
			"version": "1.0.16",
			"resolved": "https://registry.npmjs.org/fastest-levenshtein/-/fastest-levenshtein-1.0.16.tgz",
			"integrity": "sha512-eRnCtTTtGZFpQCwhJiUOuxPQWRXVKYDn0b2PeHfXL6/Zi53SLAzAHfVhVWK2AryC/WH05kGfxhFIPvTF0SXQzg==",
			"dev": true,
			"engines": {
				"node": ">= 4.9.1"
			}
		},
		"node_modules/filelist": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/filelist/-/filelist-1.0.4.tgz",
			"integrity": "sha512-w1cEuf3S+DrLCQL7ET6kz+gmlJdbq9J7yXCSjK/OZCPA+qEN1WyF4ZAf0YYJa4/shHJra2t/d/r8SV4Ji+x+8Q==",
			"dependencies": {
				"minimatch": "^5.0.1"
			}
		},
		"node_modules/filelist/node_modules/brace-expansion": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
			"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
			"dependencies": {
				"balanced-match": "^1.0.0"
			}
		},
		"node_modules/filelist/node_modules/minimatch": {
			"version": "5.1.6",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
			"integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
			"dependencies": {
				"brace-expansion": "^2.0.1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/find-up": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
			"integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
			"dev": true,
			"dependencies": {
				"locate-path": "^5.0.0",
				"path-exists": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/flat": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
			"integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
			"dev": true,
			"bin": {
				"flat": "cli.js"
			}
		},
		"node_modules/foreground-child": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.1.1.tgz",
			"integrity": "sha512-TMKDUnIte6bfb5nWv7V/caI169OHgvwjb7V4WkeUvbQQdjr5rWKqHFiKWb/fcOwB+CzBT+qbWjvj+DVwRskpIg==",
			"dependencies": {
				"cross-spawn": "^7.0.0",
				"signal-exit": "^4.0.1"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/form-data": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
			"integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
			"dependencies": {
				"asynckit": "^0.4.0",
				"combined-stream": "^1.0.8",
				"mime-types": "^2.1.12"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/form-data-encoder": {
			"version": "1.7.2",
			"resolved": "https://registry.npmjs.org/form-data-encoder/-/form-data-encoder-1.7.2.tgz",
			"integrity": "sha512-qfqtYan3rxrnCk1VYaA4H+Ms9xdpPqvLZa6xmMgFvhO32x7/3J/ExcTd6qpxM0vH2GdMI+poehyBZvqfMTto8A=="
		},
		"node_modules/formdata-node": {
			"version": "4.4.1",
			"resolved": "https://registry.npmjs.org/formdata-node/-/formdata-node-4.4.1.tgz",
			"integrity": "sha512-0iirZp3uVDjVGt9p49aTaqjk84TrglENEDuqfdlZQ1roC9CWlPk6Avf8EEnZNcAqPonwkG35x4n3ww/1THYAeQ==",
			"dependencies": {
				"node-domexception": "1.0.0",
				"web-streams-polyfill": "4.0.0-beta.3"
			},
			"engines": {
				"node": ">= 12.20"
			}
		},
		"node_modules/formdata-node/node_modules/web-streams-polyfill": {
			"version": "4.0.0-beta.3",
			"resolved": "https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-4.0.0-beta.3.tgz",
			"integrity": "sha512-QW95TCTaHmsYfHDybGMwO5IJIM93I/6vTRk+daHTWFPhwh+C8Cg7j7XyKrwrj8Ib6vYXe0ocYNrmzY4xAAN6ug==",
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/fs": {
			"version": "0.0.1-security",
			"resolved": "https://registry.npmjs.org/fs/-/fs-0.0.1-security.tgz",
			"integrity": "sha512-3XY9e1pP0CVEUCdj5BmfIZxRBTSDycnbqhIOGec9QYtmVH2fbLpj86CFWkrNOkt/Fvty4KZG5lTglL9j/gJ87w=="
		},
		"node_modules/function-bind": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
			"integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
			"dev": true,
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/get-caller-file": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
			"integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
			"engines": {
				"node": "6.* || 8.* || >= 10.*"
			}
		},
		"node_modules/glob": {
			"version": "10.3.10",
			"resolved": "https://registry.npmjs.org/glob/-/glob-10.3.10.tgz",
			"integrity": "sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==",
			"dependencies": {
				"foreground-child": "^3.1.0",
				"jackspeak": "^2.3.5",
				"minimatch": "^9.0.1",
				"minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
				"path-scurry": "^1.10.1"
			},
			"bin": {
				"glob": "dist/esm/bin.mjs"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/glob-to-regexp": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
			"integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
			"dev": true
		},
		"node_modules/glob/node_modules/brace-expansion": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
			"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
			"dependencies": {
				"balanced-match": "^1.0.0"
			}
		},
		"node_modules/glob/node_modules/minimatch": {
			"version": "9.0.3",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.3.tgz",
			"integrity": "sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==",
			"dependencies": {
				"brace-expansion": "^2.0.1"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/graceful-fs": {
			"version": "4.2.11",
			"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
			"integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ=="
		},
		"node_modules/handlebars": {
			"version": "4.7.8",
			"resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.8.tgz",
			"integrity": "sha512-vafaFqs8MZkRrSX7sFVUdo3ap/eNiLnb4IakshzvP56X5Nr1iGKAIqdX6tMlm6HcNRIkr6AxO5jFEoJzzpT8aQ==",
			"dependencies": {
				"minimist": "^1.2.5",
				"neo-async": "^2.6.2",
				"source-map": "^0.6.1",
				"wordwrap": "^1.0.0"
			},
			"bin": {
				"handlebars": "bin/handlebars"
			},
			"engines": {
				"node": ">=0.4.7"
			},
			"optionalDependencies": {
				"uglify-js": "^3.1.4"
			}
		},
		"node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/hasown": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.0.tgz",
			"integrity": "sha512-vUptKVTpIJhcczKBbgnS+RtcuYMB8+oNzPK2/Hp3hanz8JmpATdmmgLgSaadVREkDm+e2giHwY3ZRkyjSIDDFA==",
			"dev": true,
			"dependencies": {
				"function-bind": "^1.1.2"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/https-proxy-agent": {
			"version": "7.0.4",
			"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.4.tgz",
			"integrity": "sha512-wlwpilI7YdjSkWaQ/7omYBMTliDcmCN8OLihO6I9B86g06lMyAoqgoDpV0XqoaPOKj+0DIdAvnsWfyAAhmimcg==",
			"dependencies": {
				"agent-base": "^7.0.2",
				"debug": "4"
			},
			"engines": {
				"node": ">= 14"
			}
		},
		"node_modules/humanize-ms": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
			"integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",
			"dependencies": {
				"ms": "^2.0.0"
			}
		},
		"node_modules/ieee754": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
			"integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			]
		},
		"node_modules/import-local": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/import-local/-/import-local-3.1.0.tgz",
			"integrity": "sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg==",
			"dev": true,
			"dependencies": {
				"pkg-dir": "^4.2.0",
				"resolve-cwd": "^3.0.0"
			},
			"bin": {
				"import-local-fixture": "fixtures/cli.js"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/inherits": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
			"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
		},
		"node_modules/interpret": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/interpret/-/interpret-3.1.1.tgz",
			"integrity": "sha512-6xwYfHbajpoF0xLW+iwLkhwgvLoZDfjYfoFNu8ftMoXINzwuymNLd9u/KmwtdT2GbR+/Cz66otEGEVVUHX9QLQ==",
			"dev": true,
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/is-buffer": {
			"version": "1.1.6",
			"resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
			"integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
		},
		"node_modules/is-core-module": {
			"version": "2.13.1",
			"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.13.1.tgz",
			"integrity": "sha512-hHrIjvZsftOsvKSn2TRYl63zvxsgE0K+0mYMoH6gD4omR5IWB2KynivBQczo3+wF1cCkjzvptnI9Q0sPU66ilw==",
			"dev": true,
			"dependencies": {
				"hasown": "^2.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/is-plain-object": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
			"integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
			"dev": true,
			"dependencies": {
				"isobject": "^3.0.1"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/isarray": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
			"integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ=="
		},
		"node_modules/isexe": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
			"integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw=="
		},
		"node_modules/isobject": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
			"integrity": "sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/jackspeak": {
			"version": "2.3.6",
			"resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-2.3.6.tgz",
			"integrity": "sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==",
			"dependencies": {
				"@isaacs/cliui": "^8.0.2"
			},
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			},
			"optionalDependencies": {
				"@pkgjs/parseargs": "^0.11.0"
			}
		},
		"node_modules/jake": {
			"version": "10.8.7",
			"resolved": "https://registry.npmjs.org/jake/-/jake-10.8.7.tgz",
			"integrity": "sha512-ZDi3aP+fG/LchyBzUM804VjddnwfSfsdeYkwt8NcbKRvo4rFkjhs456iLFn3k2ZUWvNe4i48WACDbza8fhq2+w==",
			"dependencies": {
				"async": "^3.2.3",
				"chalk": "^4.0.2",
				"filelist": "^1.0.4",
				"minimatch": "^3.1.2"
			},
			"bin": {
				"jake": "bin/cli.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/java-parser": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/java-parser/-/java-parser-2.2.0.tgz",
			"integrity": "sha512-20/Rpuv4FnzTNgWkJBqs2M4qwBuPLMqOqNiwU5j7vKvrw4Ej+re8Aoc92KbDFb61M1u/Sd4Ygst+CpEcKXvhBQ==",
			"dependencies": {
				"chevrotain": "6.5.0",
				"lodash": "4.17.21"
			}
		},
		"node_modules/jest-worker": {
			"version": "27.5.1",
			"resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz",
			"integrity": "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==",
			"dev": true,
			"dependencies": {
				"@types/node": "*",
				"merge-stream": "^2.0.0",
				"supports-color": "^8.0.0"
			},
			"engines": {
				"node": ">= 10.13.0"
			}
		},
		"node_modules/js-yaml": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
			"integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
			"dependencies": {
				"argparse": "^2.0.1"
			},
			"bin": {
				"js-yaml": "bin/js-yaml.js"
			}
		},
		"node_modules/json-parse-even-better-errors": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
			"integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
			"dev": true
		},
		"node_modules/json-schema-traverse": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
			"integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
			"dev": true
		},
		"node_modules/kind-of": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
			"integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/lazystream": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/lazystream/-/lazystream-1.0.1.tgz",
			"integrity": "sha512-b94GiNHQNy6JNTrt5w6zNyffMrNkXZb3KTkCZJb2V1xaEGCk093vkZ2jk3tpaeP33/OiXC+WvK9AxUebnf5nbw==",
			"dependencies": {
				"readable-stream": "^2.0.5"
			},
			"engines": {
				"node": ">= 0.6.3"
			}
		},
		"node_modules/lazystream/node_modules/readable-stream": {
			"version": "2.3.8",
			"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
			"integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
			"dependencies": {
				"core-util-is": "~1.0.0",
				"inherits": "~2.0.3",
				"isarray": "~1.0.0",
				"process-nextick-args": "~2.0.0",
				"safe-buffer": "~5.1.1",
				"string_decoder": "~1.1.1",
				"util-deprecate": "~1.0.1"
			}
		},
		"node_modules/lazystream/node_modules/safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
		},
		"node_modules/lazystream/node_modules/string_decoder": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
			"integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
			"dependencies": {
				"safe-buffer": "~5.1.0"
			}
		},
		"node_modules/loader-runner": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.3.0.tgz",
			"integrity": "sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg==",
			"dev": true,
			"engines": {
				"node": ">=6.11.5"
			}
		},
		"node_modules/locate-path": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
			"integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
			"dev": true,
			"dependencies": {
				"p-locate": "^4.1.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/lodash": {
			"version": "4.17.21",
			"resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
			"integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
		},
		"node_modules/lru-cache": {
			"version": "10.2.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.2.0.tgz",
			"integrity": "sha512-2bIM8x+VAf6JT4bKAljS1qUWgMsqZRPGJS6FSahIMPVvctcNhyVp7AJu7quxOW9jwkryBReKZY5tY5JYv2n/7Q==",
			"engines": {
				"node": "14 || >=16.14"
			}
		},
		"node_modules/md5": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/md5/-/md5-2.3.0.tgz",
			"integrity": "sha512-T1GITYmFaKuO91vxyoQMFETst+O71VUPEU3ze5GNzDm0OWdP8v1ziTaAEPUr/3kLsY3Sftgz242A1SetQiDL7g==",
			"dependencies": {
				"charenc": "0.0.2",
				"crypt": "0.0.2",
				"is-buffer": "~1.1.6"
			}
		},
		"node_modules/merge-stream": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
			"integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
			"dev": true
		},
		"node_modules/mime-db": {
			"version": "1.52.0",
			"resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
			"integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/mime-types": {
			"version": "2.1.35",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
			"integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
			"dependencies": {
				"mime-db": "1.52.0"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/minimatch": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
			"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
			"dependencies": {
				"brace-expansion": "^1.1.7"
			},
			"engines": {
				"node": "*"
			}
		},
		"node_modules/minimist": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
			"integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/minipass": {
			"version": "7.0.4",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-7.0.4.tgz",
			"integrity": "sha512-jYofLM5Dam9279rdkWzqHozUo4ybjdZmCsDHePy5V/PbBcVMiSZR97gmAy45aqi8CK1lG2ECd356FU86avfwUQ==",
			"engines": {
				"node": ">=16 || 14 >=14.17"
			}
		},
		"node_modules/ms": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
			"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
		},
		"node_modules/neo-async": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
			"integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw=="
		},
		"node_modules/node-domexception": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz",
			"integrity": "sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ==",
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/jimmywarting"
				},
				{
					"type": "github",
					"url": "https://paypal.me/jimmywarting"
				}
			],
			"engines": {
				"node": ">=10.5.0"
			}
		},
		"node_modules/node-fetch": {
			"version": "2.7.0",
			"resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
			"integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
			"dependencies": {
				"whatwg-url": "^5.0.0"
			},
			"engines": {
				"node": "4.x || >=6.0.0"
			},
			"peerDependencies": {
				"encoding": "^0.1.0"
			},
			"peerDependenciesMeta": {
				"encoding": {
					"optional": true
				}
			}
		},
		"node_modules/node-releases": {
			"version": "2.0.14",
			"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.14.tgz",
			"integrity": "sha512-y10wOWt8yZpqXmOgRo77WaHEmhYQYGNA6y421PKsKYWEK8aW+cqAphborZDhqfyKrbZEN92CN1X2KbafY2s7Yw==",
			"dev": true
		},
		"node_modules/normalize-path": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
			"integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/openai": {
			"version": "4.28.0",
			"resolved": "https://registry.npmjs.org/openai/-/openai-4.28.0.tgz",
			"integrity": "sha512-JM8fhcpmpGN0vrUwGquYIzdcEQHtFuom6sRCbbCM6CfzZXNuRk33G7KfeRAIfnaCxSpzrP5iHtwJzIm6biUZ2Q==",
			"dependencies": {
				"@types/node": "^18.11.18",
				"@types/node-fetch": "^2.6.4",
				"abort-controller": "^3.0.0",
				"agentkeepalive": "^4.2.1",
				"digest-fetch": "^1.3.0",
				"form-data-encoder": "1.7.2",
				"formdata-node": "^4.3.2",
				"node-fetch": "^2.6.7",
				"web-streams-polyfill": "^3.2.1"
			},
			"bin": {
				"openai": "bin/cli"
			}
		},
		"node_modules/openai/node_modules/@types/node": {
			"version": "18.19.17",
			"resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.17.tgz",
			"integrity": "sha512-SzyGKgwPzuWp2SHhlpXKzCX0pIOfcI4V2eF37nNBJOhwlegQ83omtVQ1XxZpDE06V/d6AQvfQdPfnw0tRC//Ng==",
			"dependencies": {
				"undici-types": "~5.26.4"
			}
		},
		"node_modules/p-limit": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
			"integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
			"dev": true,
			"dependencies": {
				"p-try": "^2.0.0"
			},
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-locate": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
			"integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
			"dev": true,
			"dependencies": {
				"p-limit": "^2.2.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/p-try": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
			"integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/path-exists": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
			"integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/path-key": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
			"integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/path-parse": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
			"integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
			"dev": true
		},
		"node_modules/path-scurry": {
			"version": "1.10.1",
			"resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.10.1.tgz",
			"integrity": "sha512-MkhCqzzBEpPvxxQ71Md0b1Kk51W01lrYvlMzSUaIzNsODdd7mqhiimSZlr+VegAz5Z6Vzt9Xg2ttE//XBhH3EQ==",
			"dependencies": {
				"lru-cache": "^9.1.1 || ^10.0.0",
				"minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/picocolors": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
			"integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",
			"dev": true
		},
		"node_modules/picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/pkg-dir": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
			"integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
			"dev": true,
			"dependencies": {
				"find-up": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/pngjs": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/pngjs/-/pngjs-5.0.0.tgz",
			"integrity": "sha512-40QW5YalBNfQo5yRYmiw7Yz6TKKVr3h6970B2YE+3fQpsWcrbj1PzJgxeJ19DRQjhMbKPIuMY8rFaXc8moolVw==",
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/process": {
			"version": "0.11.10",
			"resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
			"integrity": "sha512-cdGef/drWFoydD1JsMzuFf8100nZl+GT+yacc2bEced5f9Rjk4z+WtFUTBu9PhOi9j/jfmBPu0mMEY4wIdAF8A==",
			"engines": {
				"node": ">= 0.6.0"
			}
		},
		"node_modules/process-nextick-args": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
			"integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
		},
		"node_modules/prompt-context-builder": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/prompt-context-builder/-/prompt-context-builder-1.1.0.tgz",
			"integrity": "sha512-eLTkn8HHj1x8j/kaHNznuqtaogEvH3JsZcMcMJUmZrEvMl/wMBcH/BtyjTE0G2VI9Irm59o0wpNEbM3bWBH8jw==",
			"dependencies": {
				"archiver": "^7.0.0",
				"ejs": "^3.1.9",
				"fs": "^0.0.1-security",
				"handlebars": "^4.7.8",
				"https-proxy-agent": "^7.0.2",
				"java-parser": "^2.2.0",
				"js-yaml": "^4.1.0",
				"minimatch": "^9.0.3",
				"openai": "^4.24.7",
				"pngjs": "^5.0.0",
				"readdirp": "^3.6.0",
				"xml2js": "^0.6.2",
				"yargs": "^17.7.2"
			},
			"bin": {
				"prompt_builder": "prompt_builder.js",
				"zip_builder": "zip_builder.js"
			}
		},
		"node_modules/prompt-context-builder/node_modules/brace-expansion": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
			"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
			"dependencies": {
				"balanced-match": "^1.0.0"
			}
		},
		"node_modules/prompt-context-builder/node_modules/minimatch": {
			"version": "9.0.3",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.3.tgz",
			"integrity": "sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==",
			"dependencies": {
				"brace-expansion": "^2.0.1"
			},
			"engines": {
				"node": ">=16 || 14 >=14.17"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/punycode": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
			"integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/queue-tick": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/queue-tick/-/queue-tick-1.0.1.tgz",
			"integrity": "sha512-kJt5qhMxoszgU/62PLP1CJytzd2NKetjSRnyuj31fDd3Rlcz3fzlFdFLD1SItunPwyqEOkca6GbV612BWfaBag=="
		},
		"node_modules/randombytes": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
			"integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
			"dev": true,
			"dependencies": {
				"safe-buffer": "^5.1.0"
			}
		},
		"node_modules/readable-stream": {
			"version": "4.5.2",
			"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-4.5.2.tgz",
			"integrity": "sha512-yjavECdqeZ3GLXNgRXgeQEdz9fvDDkNKyHnbHRFtOr7/LcfgBcmct7t/ET+HaCTqfh06OzoAxrkN/IfjJBVe+g==",
			"dependencies": {
				"abort-controller": "^3.0.0",
				"buffer": "^6.0.3",
				"events": "^3.3.0",
				"process": "^0.11.10",
				"string_decoder": "^1.3.0"
			},
			"engines": {
				"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
			}
		},
		"node_modules/readdir-glob": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/readdir-glob/-/readdir-glob-1.1.3.tgz",
			"integrity": "sha512-v05I2k7xN8zXvPD9N+z/uhXPaj0sUFCe2rcWZIpBsqxfP7xXFQ0tipAd/wjj1YxWyWtUS5IDJpOG82JKt2EAVA==",
			"dependencies": {
				"minimatch": "^5.1.0"
			}
		},
		"node_modules/readdir-glob/node_modules/brace-expansion": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
			"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
			"dependencies": {
				"balanced-match": "^1.0.0"
			}
		},
		"node_modules/readdir-glob/node_modules/minimatch": {
			"version": "5.1.6",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
			"integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
			"dependencies": {
				"brace-expansion": "^2.0.1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/readdirp": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
			"integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
			"dependencies": {
				"picomatch": "^2.2.1"
			},
			"engines": {
				"node": ">=8.10.0"
			}
		},
		"node_modules/rechoir": {
			"version": "0.8.0",
			"resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.8.0.tgz",
			"integrity": "sha512-/vxpCXddiX8NGfGO/mTafwjq4aFa/71pvamip0++IQk3zG8cbCj0fifNPrjjF1XMXUne91jL9OoxmdykoEtifQ==",
			"dev": true,
			"dependencies": {
				"resolve": "^1.20.0"
			},
			"engines": {
				"node": ">= 10.13.0"
			}
		},
		"node_modules/regexp-to-ast": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/regexp-to-ast/-/regexp-to-ast-0.4.0.tgz",
			"integrity": "sha512-4qf/7IsIKfSNHQXSwial1IFmfM1Cc/whNBQqRwe0V2stPe7KmN1U0tWQiIx6JiirgSrisjE0eECdNf7Tav1Ntw=="
		},
		"node_modules/require-directory": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
			"integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/resolve": {
			"version": "1.22.8",
			"resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
			"integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
			"dev": true,
			"dependencies": {
				"is-core-module": "^2.13.0",
				"path-parse": "^1.0.7",
				"supports-preserve-symlinks-flag": "^1.0.0"
			},
			"bin": {
				"resolve": "bin/resolve"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/resolve-cwd": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
			"integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
			"dev": true,
			"dependencies": {
				"resolve-from": "^5.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/resolve-from": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
			"integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/safe-buffer": {
			"version": "5.2.1",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
			"integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/feross"
				},
				{
					"type": "patreon",
					"url": "https://www.patreon.com/feross"
				},
				{
					"type": "consulting",
					"url": "https://feross.org/support"
				}
			]
		},
		"node_modules/sax": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/sax/-/sax-1.3.0.tgz",
			"integrity": "sha512-0s+oAmw9zLl1V1cS9BtZN7JAd0cW5e0QH4W3LWEK6a4LaLEA2OTpGYWDY+6XasBLtz6wkm3u1xRw95mRuJ59WA=="
		},
		"node_modules/schema-utils": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.3.0.tgz",
			"integrity": "sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==",
			"dev": true,
			"dependencies": {
				"@types/json-schema": "^7.0.8",
				"ajv": "^6.12.5",
				"ajv-keywords": "^3.5.2"
			},
			"engines": {
				"node": ">= 10.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			}
		},
		"node_modules/serialize-javascript": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.1.tgz",
			"integrity": "sha512-owoXEFjWRllis8/M1Q+Cw5k8ZH40e3zhp/ovX+Xr/vi1qj6QesbyXXViFbpNvWvPNAD62SutwEXavefrLJWj7w==",
			"dev": true,
			"dependencies": {
				"randombytes": "^2.1.0"
			}
		},
		"node_modules/shallow-clone": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
			"integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
			"dev": true,
			"dependencies": {
				"kind-of": "^6.0.2"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/shebang-command": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
			"integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
			"dependencies": {
				"shebang-regex": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/shebang-regex": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
			"integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/signal-exit": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
			"integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
			"engines": {
				"node": ">=14"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/source-map": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
			"integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/source-map-support": {
			"version": "0.5.21",
			"resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
			"integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
			"dev": true,
			"dependencies": {
				"buffer-from": "^1.0.0",
				"source-map": "^0.6.0"
			}
		},
		"node_modules/streamx": {
			"version": "2.16.1",
			"resolved": "https://registry.npmjs.org/streamx/-/streamx-2.16.1.tgz",
			"integrity": "sha512-m9QYj6WygWyWa3H1YY69amr4nVgy61xfjys7xO7kviL5rfIEc2naf+ewFiOA+aEJD7y0JO3h2GoiUv4TDwEGzQ==",
			"dependencies": {
				"fast-fifo": "^1.1.0",
				"queue-tick": "^1.0.1"
			},
			"optionalDependencies": {
				"bare-events": "^2.2.0"
			}
		},
		"node_modules/string_decoder": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
			"integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
			"dependencies": {
				"safe-buffer": "~5.2.0"
			}
		},
		"node_modules/string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/string-width-cjs": {
			"name": "string-width",
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/strip-ansi": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
			"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
			"dependencies": {
				"ansi-regex": "^5.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/strip-ansi-cjs": {
			"name": "strip-ansi",
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
			"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
			"dependencies": {
				"ansi-regex": "^5.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/supports-color": {
			"version": "8.1.1",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
			"integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
			"dev": true,
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/supports-color?sponsor=1"
			}
		},
		"node_modules/supports-preserve-symlinks-flag": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
			"integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/tapable": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
			"integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/tar-stream": {
			"version": "3.1.7",
			"resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-3.1.7.tgz",
			"integrity": "sha512-qJj60CXt7IU1Ffyc3NJMjh6EkuCFej46zUqJ4J7pqYlThyd9bO0XBTmcOIhSzZJVWfsLks0+nle/j538YAW9RQ==",
			"dependencies": {
				"b4a": "^1.6.4",
				"fast-fifo": "^1.2.0",
				"streamx": "^2.15.0"
			}
		},
		"node_modules/terser": {
			"version": "5.26.0",
			"resolved": "https://registry.npmjs.org/terser/-/terser-5.26.0.tgz",
			"integrity": "sha512-dytTGoE2oHgbNV9nTzgBEPaqAWvcJNl66VZ0BkJqlvp71IjO8CxdBx/ykCNb47cLnCmCvRZ6ZR0tLkqvZCdVBQ==",
			"dev": true,
			"dependencies": {
				"@jridgewell/source-map": "^0.3.3",
				"acorn": "^8.8.2",
				"commander": "^2.20.0",
				"source-map-support": "~0.5.20"
			},
			"bin": {
				"terser": "bin/terser"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/terser-webpack-plugin": {
			"version": "5.3.10",
			"resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.3.10.tgz",
			"integrity": "sha512-BKFPWlPDndPs+NGGCr1U59t0XScL5317Y0UReNrHaw9/FwhPENlq6bfgs+4yPfyP51vqC1bQ4rp1EfXW5ZSH9w==",
			"dev": true,
			"dependencies": {
				"@jridgewell/trace-mapping": "^0.3.20",
				"jest-worker": "^27.4.5",
				"schema-utils": "^3.1.1",
				"serialize-javascript": "^6.0.1",
				"terser": "^5.26.0"
			},
			"engines": {
				"node": ">= 10.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "^5.1.0"
			},
			"peerDependenciesMeta": {
				"@swc/core": {
					"optional": true
				},
				"esbuild": {
					"optional": true
				},
				"uglify-js": {
					"optional": true
				}
			}
		},
		"node_modules/tr46": {
			"version": "0.0.3",
			"resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
			"integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw=="
		},
		"node_modules/uglify-js": {
			"version": "3.17.4",
			"resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.17.4.tgz",
			"integrity": "sha512-T9q82TJI9e/C1TAxYvfb16xO120tMVFZrGA3f9/P4424DNu6ypK103y0GPFVa17yotwSyZW5iYXgjYHkGrJW/g==",
			"optional": true,
			"bin": {
				"uglifyjs": "bin/uglifyjs"
			},
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/undici-types": {
			"version": "5.26.5",
			"resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
			"integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA=="
		},
		"node_modules/update-browserslist-db": {
			"version": "1.0.13",
			"resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.0.13.tgz",
			"integrity": "sha512-xebP81SNcPuNpPP3uzeW1NYXxI3rxyJzF3pD6sH4jE7o/IX+WtSpwnVU+qIsDPyk0d3hmFQ7mjqc6AtV604hbg==",
			"dev": true,
			"funding": [
				{
					"type": "opencollective",
					"url": "https://opencollective.com/browserslist"
				},
				{
					"type": "tidelift",
					"url": "https://tidelift.com/funding/github/npm/browserslist"
				},
				{
					"type": "github",
					"url": "https://github.com/sponsors/ai"
				}
			],
			"dependencies": {
				"escalade": "^3.1.1",
				"picocolors": "^1.0.0"
			},
			"bin": {
				"update-browserslist-db": "cli.js"
			},
			"peerDependencies": {
				"browserslist": ">= 4.21.0"
			}
		},
		"node_modules/uri-js": {
			"version": "4.4.1",
			"resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
			"integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
			"dev": true,
			"dependencies": {
				"punycode": "^2.1.0"
			}
		},
		"node_modules/util-deprecate": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
			"integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
		},
		"node_modules/watchpack": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.4.0.tgz",
			"integrity": "sha512-Lcvm7MGST/4fup+ifyKi2hjyIAwcdI4HRgtvTpIUxBRhB+RFtUh8XtDOxUfctVCnhVi+QQj49i91OyvzkJl6cg==",
			"dev": true,
			"dependencies": {
				"glob-to-regexp": "^0.4.1",
				"graceful-fs": "^4.1.2"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/web-streams-polyfill": {
			"version": "3.3.3",
			"resolved": "https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-3.3.3.tgz",
			"integrity": "sha512-d2JWLCivmZYTSIoge9MsgFCZrt571BikcWGYkjC1khllbTeDlGqZ2D8vD8E/lJa8WGWbb7Plm8/XJYV7IJHZZw==",
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/webidl-conversions": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
			"integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ=="
		},
		"node_modules/webpack": {
			"version": "5.89.0",
			"resolved": "https://registry.npmjs.org/webpack/-/webpack-5.89.0.tgz",
			"integrity": "sha512-qyfIC10pOr70V+jkmud8tMfajraGCZMBWJtrmuBymQKCrLTRejBI8STDp1MCyZu/QTdZSeacCQYpYNQVOzX5kw==",
			"dev": true,
			"dependencies": {
				"@types/eslint-scope": "^3.7.3",
				"@types/estree": "^1.0.0",
				"@webassemblyjs/ast": "^1.11.5",
				"@webassemblyjs/wasm-edit": "^1.11.5",
				"@webassemblyjs/wasm-parser": "^1.11.5",
				"acorn": "^8.7.1",
				"acorn-import-assertions": "^1.9.0",
				"browserslist": "^4.14.5",
				"chrome-trace-event": "^1.0.2",
				"enhanced-resolve": "^5.15.0",
				"es-module-lexer": "^1.2.1",
				"eslint-scope": "5.1.1",
				"events": "^3.2.0",
				"glob-to-regexp": "^0.4.1",
				"graceful-fs": "^4.2.9",
				"json-parse-even-better-errors": "^2.3.1",
				"loader-runner": "^4.2.0",
				"mime-types": "^2.1.27",
				"neo-async": "^2.6.2",
				"schema-utils": "^3.2.0",
				"tapable": "^2.1.1",
				"terser-webpack-plugin": "^5.3.7",
				"watchpack": "^2.4.0",
				"webpack-sources": "^3.2.3"
			},
			"bin": {
				"webpack": "bin/webpack.js"
			},
			"engines": {
				"node": ">=10.13.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependenciesMeta": {
				"webpack-cli": {
					"optional": true
				}
			}
		},
		"node_modules/webpack-cli": {
			"version": "5.1.4",
			"resolved": "https://registry.npmjs.org/webpack-cli/-/webpack-cli-5.1.4.tgz",
			"integrity": "sha512-pIDJHIEI9LR0yxHXQ+Qh95k2EvXpWzZ5l+d+jIo+RdSm9MiHfzazIxwwni/p7+x4eJZuvG1AJwgC4TNQ7NRgsg==",
			"dev": true,
			"dependencies": {
				"@discoveryjs/json-ext": "^0.5.0",
				"@webpack-cli/configtest": "^2.1.1",
				"@webpack-cli/info": "^2.0.2",
				"@webpack-cli/serve": "^2.0.5",
				"colorette": "^2.0.14",
				"commander": "^10.0.1",
				"cross-spawn": "^7.0.3",
				"envinfo": "^7.7.3",
				"fastest-levenshtein": "^1.0.12",
				"import-local": "^3.0.2",
				"interpret": "^3.1.1",
				"rechoir": "^0.8.0",
				"webpack-merge": "^5.7.3"
			},
			"bin": {
				"webpack-cli": "bin/cli.js"
			},
			"engines": {
				"node": ">=14.15.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/webpack"
			},
			"peerDependencies": {
				"webpack": "5.x.x"
			},
			"peerDependenciesMeta": {
				"@webpack-cli/generators": {
					"optional": true
				},
				"webpack-bundle-analyzer": {
					"optional": true
				},
				"webpack-dev-server": {
					"optional": true
				}
			}
		},
		"node_modules/webpack-cli/node_modules/commander": {
			"version": "10.0.1",
			"resolved": "https://registry.npmjs.org/commander/-/commander-10.0.1.tgz",
			"integrity": "sha512-y4Mg2tXshplEbSGzx7amzPwKKOCGuoSRP/CjEdwwk0FOGlUbq6lKuoyDZTNZkmxHdJtp54hdfY/JUrdL7Xfdug==",
			"dev": true,
			"engines": {
				"node": ">=14"
			}
		},
		"node_modules/webpack-merge": {
			"version": "5.10.0",
			"resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-5.10.0.tgz",
			"integrity": "sha512-+4zXKdx7UnO+1jaN4l2lHVD+mFvnlZQP/6ljaJVb4SZiwIKeUnrT5l0gkT8z+n4hKpC+jpOv6O9R+gLtag7pSA==",
			"dev": true,
			"dependencies": {
				"clone-deep": "^4.0.1",
				"flat": "^5.0.2",
				"wildcard": "^2.0.0"
			},
			"engines": {
				"node": ">=10.0.0"
			}
		},
		"node_modules/webpack-sources": {
			"version": "3.2.3",
			"resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.2.3.tgz",
			"integrity": "sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w==",
			"dev": true,
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/whatwg-url": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
			"integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
			"dependencies": {
				"tr46": "~0.0.3",
				"webidl-conversions": "^3.0.0"
			}
		},
		"node_modules/which": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
			"integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
			"dependencies": {
				"isexe": "^2.0.0"
			},
			"bin": {
				"node-which": "bin/node-which"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/wildcard": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.1.tgz",
			"integrity": "sha512-CC1bOL87PIWSBhDcTrdeLo6eGT7mCFtrg0uIJtqJUFyK+eJnzl8A1niH56uu7KMa5XFrtiV+AQuHO3n7DsHnLQ==",
			"dev": true
		},
		"node_modules/wordwrap": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
			"integrity": "sha512-gvVzJFlPycKc5dZN4yPkP8w7Dc37BtP1yczEneOb4uq34pXZcvrtRTmWV8W+Ume+XCxKgbjM+nevkyFPMybd4Q=="
		},
		"node_modules/wrap-ansi": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
			"integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
			"dependencies": {
				"ansi-styles": "^4.0.0",
				"string-width": "^4.1.0",
				"strip-ansi": "^6.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/wrap-ansi-cjs": {
			"name": "wrap-ansi",
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
			"integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
			"dependencies": {
				"ansi-styles": "^4.0.0",
				"string-width": "^4.1.0",
				"strip-ansi": "^6.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
			}
		},
		"node_modules/xml2js": {
			"version": "0.6.2",
			"resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.6.2.tgz",
			"integrity": "sha512-T4rieHaC1EXcES0Kxxj4JWgaUQHDk+qwHcYOCFHfiwKz7tOVPLq7Hjq9dM1WCMhylqMEfP7hMcOIChvotiZegA==",
			"dependencies": {
				"sax": ">=0.6.0",
				"xmlbuilder": "~11.0.0"
			},
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/xmlbuilder": {
			"version": "11.0.1",
			"resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz",
			"integrity": "sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA==",
			"engines": {
				"node": ">=4.0"
			}
		},
		"node_modules/y18n": {
			"version": "5.0.8",
			"resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
			"integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/yargs": {
			"version": "17.7.2",
			"resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
			"integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
			"dependencies": {
				"cliui": "^8.0.1",
				"escalade": "^3.1.1",
				"get-caller-file": "^2.0.5",
				"require-directory": "^2.1.1",
				"string-width": "^4.2.3",
				"y18n": "^5.0.5",
				"yargs-parser": "^21.1.1"
			},
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/yargs-parser": {
			"version": "21.1.1",
			"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
			"integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
			"engines": {
				"node": ">=12"
			}
		},
		"node_modules/zip-stream": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/zip-stream/-/zip-stream-6.0.0.tgz",
			"integrity": "sha512-X0WFquRRDtL9HR9hc1OrabOP/VKJEX7gAr2geayt3b7dLgXgSXI6ucC4CphLQP/aQt2GyHIYgmXxtC+dVdghAQ==",
			"dependencies": {
				"archiver-utils": "^5.0.0",
				"compress-commons": "^6.0.0",
				"readable-stream": "^4.0.0"
			},
			"engines": {
				"node": ">= 14"
			}
		}
	}
}

```            
### package.json

```
{
	"name": "prompt-context-builder-plugin",
	"description": "plugin of prompt-context-builder(Based on project engineering files and other information, automatically generate context related to tasks to save the cost of writing prompt words.)",
	"version": "0.0.9",
	"publisher": "jtong",
	"icon": "media/custom-explorer-icon.png",
	"repository": "https://github.com/jtong/prompt_builder_vscode_plugin",
	"engines": {
		"vscode": "^1.74.0"
	},
	"activationEvents": [],
	"categories": ["Machine Learning"],
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
			},
			{
				"command": "fileExplorer.generateRelatedFiles",
				"title": "Pure Related Files"
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
		"prompt-context-builder": "^1.1.0"
	}
}

```            
### webpack.config.js

```
const path = require('path');

/**@type {import('webpack').Configuration}*/
const config = {
    target: 'node', // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/

    entry: './extension.js', // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
    output: { // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js',
        libraryTarget: "commonjs2",
        devtoolModuleFilenameTemplate: "../[resource-path]",
    },
    devtool: 'source-map',
    externals: {
        vscode: "commonjs vscode" // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
    },
    resolve: { // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
        extensions: ['.js']
    },
    module: {
        rules: []
    },
}

module.exports = config;
```            


## 任务

