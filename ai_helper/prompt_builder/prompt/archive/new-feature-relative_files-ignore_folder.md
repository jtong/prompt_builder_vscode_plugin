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

我希望如果 fileExplorer 上选中了文件夹，那么不管是在执行Select Files计算relative_files的时候，还是更新recent file view的时候，都忽略掉。