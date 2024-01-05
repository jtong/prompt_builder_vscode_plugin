## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
<%-folder_tree()%>
```

## 相关文件

<%-related_files()%>

## 任务

我想要生成 fileExplorer view 的时候，读取workspace根路径文件夹下的config.yml：

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
```

过滤掉path里的文件夹，如果相对路径匹配则不显示。过滤掉文件每个文件夹下file里面指定的文件