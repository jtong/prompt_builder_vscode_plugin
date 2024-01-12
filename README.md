## 快速启动

打开工程所在文件夹，工程文件夹下需要有一个config.yml文件。内容可参考[https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml](https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml)

在File Explorer View中选择文件，在Template Files View下双击打开一个模版，模版地址为config.yml中“input/prompt_template/path”属性值。

在打开的编辑器中，执行“Related Files”命令就可以生成选中的文件所对应的yaml文本，该文本会基于一个模版输出，模版内容定义为config.yml中“input/relative_files/template”属性值。

一旦执行完“Related Files”命令，那么执行过的文件会出现在Recent Files View中，可以同时选择File Explorer View和Recent Files View中的文件执行“Related Files”命令，相同文件会被过滤掉只生成一份。

在打开的编辑器中，执行“Generate Prompt Output”命令就可以生成prompt文件。输出位置为config.yml中“output/prompt/path”属性值指定的地址。

模版文件的语法为 [prompt-context-builder](https://www.npmjs.com/package/prompt-context-builder) 引擎的语法，该引擎基于handlebars提供了一系列helper函数，可以基于当前工程上下文生成提示词所需的任务上下文文本。

## Feature List

- [x] 可以在File Explorer View展示某文件夹下所有文件（当前workspace）
- [x] 可以在File Explorer View中多选
- [x] 可以将File Explorer View中选中的文件传给特定函数
- [x] 可以在Recent Files View展示最近生成过related files的文件 
- [x] 可以在Recent Files View中多选
- [x] Recent Files View中最多显示最近打开的100个文件
- [x] 在Template Files View下显示所有的文件
- [x] 点击模版打开模版文件
- [x] 在打开的编辑器里生成related files
- [x] File Explorer View中，如果存在下面只有一个文件夹的文件夹，则合并到path中显示为一个元素
- [x] 同时在File Explorer View和Recent Files View中选择，然后归并两者
- [x] 无视掉在File Explorer View中选择的文件夹
- [x] 支持修改config.yml中的template path后，通过Template File View的刷新按钮重新加载
- [x] 支持Template Files View的文件按最近修改顺序排序，按刷新按钮刷新排序。
