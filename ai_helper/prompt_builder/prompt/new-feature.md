## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
{{ folder_tree }}
```

## 相关文件

{{#related_files_from }}
```yaml
- path: package.json
  reader: all
- path: extension.js
  reader: all
```
{{/related_files_from }}

## 任务

我希望 添加一个新的命令，参考fileExplorer.selectFiles，可以生成纯related files，而不套模版。

