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

读取 workspace 根路径文件夹下的 config.yml：

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
    path: prompt_builder/template      
output:
  relative_files:
    path: prompt_builder/relative_files.yml
  prompt:
    path: prompt_builder/output/
```

根据 input/prompt_template/path 读取模版地址，每一个地址生成一个可以点击的按钮。