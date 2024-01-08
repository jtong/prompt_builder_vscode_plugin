## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
{{ folder_tree }}
```

## 相关文件

{{#related_files_from }}
```yaml
- path: extension.js
  reader: all
- path: package.json
  reader: all
```
{{/related_files_from }}

## 任务

我希望 Select Files 命令生成的内容能够按照模版输出，模版可能定义在config.yml中:

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
    template: >
      ```yaml
        {{{content}}}
      ```           
output:     
  prompt:
    path: ai_helper/prompt_builder/output/
```

读取其中 input/relative_files/template 的内容。其中的 content 变量是原来生成的 yaml 文本。