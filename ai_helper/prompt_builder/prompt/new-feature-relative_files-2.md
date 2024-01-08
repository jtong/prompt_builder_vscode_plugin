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

现在输出的relative_files.yml 格式不是我想要的，我是想要的格式是：

```yaml
- path: <relative_path_of_file>
  reader: all
- path: <relative_path_of_file>
  reader: all
```

目前的reader 都是 all， 以后可能会根据情况生成，这里要单独生成一个函数，方便将来扩展。