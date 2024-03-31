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

我希望 选中生成一次之后，下一次再选只生成再选的内容，现在会记住上一次选的。请修正这个bug。