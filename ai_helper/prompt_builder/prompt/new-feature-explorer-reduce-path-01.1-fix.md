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

我希望文件树里，当展开一个文件夹的时候，如果该文件夹下的子元素过滤后有且只有一个子文件夹，则把子元素的名字加到该文件夹上显示为一个path，并一直向下递归，直到下面不只有一个子文件夹结束，比如

```
.
└── src
    └── main
        └── java
```

在展开src的时候会发现src下面只有main，会把src的名字改为 src/main，然后继续递归main，发现main下面也只有一个java，于是src/main的名字会改为 src/main/java。直到发现下面不只有一个元素的时候正常显示。

目前存在问题，展开的时候并没有修改src这个元素的显示，每个子文件夹也保留了。请修复这个问题
