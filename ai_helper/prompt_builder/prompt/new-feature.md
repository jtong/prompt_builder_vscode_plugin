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

我希望 generateOutputToClipboard 有三种能力： 不输出、输出文本到剪切板、输出已经拷贝的文件到剪切板，
