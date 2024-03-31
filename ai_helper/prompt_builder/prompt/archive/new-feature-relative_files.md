## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
<%-folder_tree()%>
```

## 相关文件

<%-related_files()%>

## 任务


根据选中的文件生成relative_files.yml， 读取workspace根路径文件夹下的config.yml：

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
output:
  relative_files:
    path: prompt_builder/relative_files.yml
  prompt:
    path: prompt_builder/output/
```

根据output/relative_files/path读取输出地址，覆盖该文件