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

## 外部依赖：

### prompt_context_builder 包的index.js

```js
module.exports = {
    import_read : require("./import_read"),
    read_controller: require("./read_controller"),
    read_model: require("./read_model"),
    folder_tree: require("./read_folder"),
    related_java_class_analysis: require("./related_java_class_analysis"),
    resolve_java_class_full_name: require("./resolve_java_class_full_name"),
    prompt_render: require("prompt_render")
}
```

### prompt_context_builder 的包中的 prompt_render 函数

```js
const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const read_folder_tree = require('./read_folder');
const read_related_files = require('./related_files.js');

/**
 * 解析并渲染模板
 * @param {string} templateText - 模板文本
 * @param {string} configPath - 配置文件路径
 * @param {string} contextPath - 上下文文件路径
 * @return {string} 渲染后的内容
 */
function renderTemplate(templateText, configPath, contextPath, baseDir) {
    // 解析路径（如果传入的是相对路径）
    const resolvedConfigPath = path.resolve(baseDir, configPath);
    // 读取并解析配置文件

    const configContent = fs.readFileSync(resolvedConfigPath, 'utf8');
    const config = yaml.load(configContent);
    let project = config.project;

    project.base_path = path.resolve(baseDir, project.base_path);

    // console.log(project.base_path)

    // 定义内部上下文
    // 注册 Handlebars 助手
    Handlebars.registerHelper('folder_tree', function() {
        return new Handlebars.SafeString(read_folder_tree(project));
    });

    Handlebars.registerHelper('related_files', function() {
        const resolvedContextPath = path.resolve(baseDir, contextPath);
        const contextContent = fs.readFileSync(resolvedContextPath, 'utf8');
        const contextData = yaml.load(contextContent);
        return new Handlebars.SafeString(read_related_files(project.base_path, contextData));
    });

    Handlebars.registerHelper('related_files_from', function(options) {
        const templateString = options.fn(this);
        let trimmedString = templateString.trim();
        if (trimmedString.startsWith("```")) {
            const firstNewLineIndex = trimmedString.indexOf('\n') + 1;
            const lastNewLineIndex = trimmedString.lastIndexOf('\n');
            trimmedString = trimmedString.substring(firstNewLineIndex, lastNewLineIndex);
        }
        const contextData = yaml.load(trimmedString);
        return new Handlebars.SafeString(read_related_files(project.base_path, contextData));
    });

    // 使用 Handlebars 编译和渲染模板
    const template = Handlebars.compile(templateText);
    return template({ data: {} });
}

module.exports = renderTemplate;
```

调用代码：

```js
    const renderedContent = renderTemplate(templateContent, configPath, contextPath, baseDir);
```

## 任务

我希望添加一个命令可以将当前打开的文件调用prompt-context-builder里的函数生成文本并输出到文件，文件输出路径可能定义在config.yml中:

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
input:
  prompt_template:
    path: ai_helper/prompt_builder/template    
  relative_files:
    path: ai_helper/prompt_builder/relative_files.html
    template: >
      ```yaml
        {{{content}}}
      ```           
output:     
  prompt:
    path: ai_helper/prompt_builder/output/
```

读取其中 output/prompt/path 的内容作为输出路径。输出的时候，按照当前editor的文件文件名作为前缀，并且在后面加上数字后缀，输出到该输出路径中。数字后缀的计算按照输出路径里前缀相同的文件里数字后缀最大的向后+1。
另外：调用related_files时，如果存在 input/relative_files/path 则传进来来，否则就传个空让他报错。