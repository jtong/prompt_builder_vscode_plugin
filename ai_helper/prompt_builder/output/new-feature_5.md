## 技术上下文

我们在开发一个 vscode 插件，其工程的文件夹树形结构如下：

```
.
├── .vscode
│   └── launch.json
├── .vscodeignore
├── LICENSE.txt
├── README.md
├── config.yml
├── dist
│   ├── extension.js
│   └── extension.js.map
├── example
│   ├── config.yml
│   └── template
│       └── new-feature.md
├── extension.js
├── media
│   └── custom-explorer-icon.png
├── package-lock.json
├── package.json
└── webpack.config.js

```

## 相关文件

<在这里填入相关文件内容作为上下文>


## 输出格式

### 数据格式
```yaml
- path: <文件路径>
  reader: <文件的reader>
  reason: "<说明这个文件为什么重要>"
```

1. **路径 (`path`):** 表示文件的完整路径。例如，`src/main/java/dev/jtong/training/demo/smart/domain/controllers/UsersController.java` 定位到项目中的一个特定的Java文件。
2. **读取器 (`reader`):** 表示读取文件的读取器，默认是all。
   
3. **原因 (`reason`):** 描述为什么这个文件与实现功能相关。这可以包括文件的用途，比如是用于定义API端点、包含数据模型、数据库迁移脚本等。

### 支持的reader
#### controller
用于读取Java代码中的controller，会保留所有的field，可以针对性的要求读取某个函数，会保留函数的所有注解。值为`controller`。

#### model
用于读取Java代码中的 model，会保留所有的field，删除掉所有的setter和getter代码。值为`model`。

#### all
读取文件所有内容，不做任何静态分析和预处理。值为`all`。

### 外部格式

```yaml
#数据开头
- path: <文件路径>
  reader: <文件的reader>
  reason: "<说明这个文件为什么重要>"
#数据结尾
```

## 最终目标任务

我希望 支持配置项设置，主要是设置openAI的key。

## 任务
“最终目标任务”想要实现，需要聪文件夹树形结构中的文件中读取的文件内容作为“最终目标任务”

请问，你为了实现最终目标任务，你认为需要把哪些文件的内容放入提示词给你，你在思考“最终目标任务”时才没有上下文的缺失？将你的判断以上面的格式输出。
