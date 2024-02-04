## 快速启动


安装后就可以在左侧看到我们的图标：

![sider-bar-icon](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/01-sider-bar-icon.png)

打开工程所在文件夹，工程文件夹下需要有一个config.yml文件。内容可参考[https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml](https://github.com/jtong/prompt_builder_vscode_plugin/blob/main/example/config.yml)


点击图标后我们就可以看到三个子view：一个Explorer，一个RECENT FILES，一个TEMPLATE FILES，如下所示：

![all-views](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/02-all-views.png)

其中Explorer里面是我们的文件夹结构，TEMPLATE FILES里是我们可用的模板引擎，点击就能打开。接下来我们打开一个模版，然后选择几个文件如下，类似这样：

![select-files](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/03-select-files.png)

然后按下Ctrl+Shift+P（mac下是CMD+Shift+P）弹出窗口：
![04-gen-related-files-command](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/04-gen-related-files-command.png)

选择”Related Files“就会生成相关的文件填在光标处，而选择的文件会出现在RECENT FILES里：

![05-gen-output-files-result](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/05-gen-output-files-result.png)
然后我们再按Ctrl+Shift+P（mac下是CMD+Shift+P）执行命令”Generate Prompt Output“

![06-gen-prompt-command](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/03-wdd-gui/06-gen-prompt-command.png)

就输出到了指定的输出目录，然后就可以拷到浏览器里去问chatgpt或其他任何LLM了。

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
- [x] 按File Explorer View的refresh可以重新加载config.yml然后刷新文件夹树
