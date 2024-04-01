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
      - media
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

