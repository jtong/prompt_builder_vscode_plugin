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

<在这里填入相关文件内容作为上下文>

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
### package.json

```
{
	"name": "prompt-context-builder-plugin",
	"description": "plugin of prompt-context-builder(Based on project engineering files and other information, automatically generate context related to tasks to save the cost of writing prompt words.)",
	"version": "0.0.4",
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
### README.md

```
## 快速启动

打开工程所在文件夹，工程文件夹下需要有一个config.yml文件。内容可参考[https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml](https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml)

在File Explorer View中选择文件，在Template Files View下双击打开一个模版，模版地址为config.yml中“input/prompt_template/path”属性值。

在打开的编辑器中，执行“Related Files”命令就可以生成选中的文件所对应的yaml文本，该文本会基于一个模版输出，模版内容定义为config.yml中“input/relative_files/template”属性值。

一旦执行完“Related Files”命令，那么执行过的文件会出现在Recent Files View中，可以同时选择File Explorer View和Recent Files View中的文件执行“Related Files”命令，相同文件会被过滤掉只生成一份。

在打开的编辑器中，执行“Generate Prompt Output”命令就可以生成prompt文件。输出位置为config.yml中“output/prompt/path”属性值指定的地址。

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

## 输出格式

### yaml数据格式
```yaml
- path: <文件路径>
  reader: <文件的reader>
  reason: "<说明这个文件为什么重要>"
```

1. **路径 (`path`):** 表示文件的完整路径。例如，`src/main/java/dev/jtong/training/demo/smart/domain/controllers/UsersController.java` 定位到项目中的一个特定的Java文件。
2. **读取器 (`reader`):** 表示读取文件的读取器，默认是all。
   
3. **原因 (`reason`):** 描述为什么这个文件与实现功能相关。这可以包括文件的用途，比如是用于定义API端点、包含数据模型、数据库迁移脚本等。

### 支持的reader
#### controller
用于读取Java代码中的controller，会保留所有的field，可以针对性的要求读取某个函数，会保留函数的所有注解。值为`controller`。

#### model
用于读取Java代码中的 model，会保留所有的field，删除掉所有的setter和getter代码。值为`model`。

#### all
读取文件所有内容，不做任何静态分析和预处理。值为`all`。

### 外部xml格式

```xml
<data>
<![CDATA[
- path: <文件路径>
  reader: <文件的reader>
  reason: "<说明这个文件为什么重要>"
]]> 
</data>
```
我们在外部使用 XML 封装和传输 YAML 数据。这个格式将使用 CDATA 部分来确保 YAML 数据的空格、缩进和其他格式特征被完整地保留。

## 最终目标任务

我希望 支持配置项设置，主要是设置openAI的key。

## 任务

“最终目标任务”想要实现，需要从文件夹树形结构中的文件中读取的文件内容作为“最终目标任务”的上下文。
请根据已经在“相关文件”中的文件及其内容（其中三级标题是路径），判断是否提供了足够的上下文以写出“最终目标任务”中的代码，如果不够，你认为还可能需要的哪些文件树里的文件加载进来看看，严格按上面的xml格式输出额外需要的具体的文件，文件必须在文件树中存在，不支持文件夹和通配符。

