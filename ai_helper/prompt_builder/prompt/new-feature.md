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

我希望 添加一个命令，他可以用POST发送一个HTTP请求去指定的URL。在body中放入一个json，里面有基于 config.project.base_path 的 output.prompt.path 的绝对路径，还有一段外面传入的字符串，并返回response。