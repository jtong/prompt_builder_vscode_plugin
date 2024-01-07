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

我希望执行 Select Files 命令的时候，读取的输入项不止来自fileExplorer选中的文件还来自 recentFiles 选中的文件。
当选中的文件两边有重复的时候，需要去掉重复的文件。
