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


## folder to context

其实，有了长上下文后，我们基本上是无脑把一个项目或者一个文件夹塞进一个上下文里。所以再搞个模版什么的似乎是有点过了，体验也不是很舒服，于是我们制作了新的功能： Folder to Context。

首先，我发现基本上所有的数据都在config.yml里了，那我是不是多搞几个config.yml就行了呢，没错，我们就是这么做的。我们现在的config.yml是这样的：

```yaml
project:
  base_path: ./target_folder
  ignore:
    path:
      - "**/.idea"
      - "**/ai_helper"
      - "**/spike"
      - "*/.git"
      - "**/node_modules"
      - "*.yml"
      - "**/*.png"
      - "**/.DS_Store"
      - "**/LICENSE.txt"
      - "**/package-lock.json"
input:
  instruction: |
    我希望基于现在llm_pipeline/openai_client的模拟数据的装饰器，去改造我们的form_sender的test，支持模拟数据执行
    
    给出代码
output:     
  prompt:
    path: ai_helper/prompt_builder/output/working
    backup_path: ai_helper/prompt_builder/output/backup
```

可以看到，我们的base_path指向的就是我们的目标文件夹，然后ignore里面依然是我们准备过滤的文件或文件夹。而我们的任务直接放到了我们的instruction里。然后执行我们的新命令：Generate All Code Context：

![generate-all-code-context-command](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/07-build-lang-context/01-generate-all-code-context-command.png)

就得到了我们的Context文件，输出在 output/prompt/path 下的 context.txt 文件。之所以这么做是我发现拷文件的时候找哪个文件也挺累的，干脆就一个文件名，直接覆盖就好了。

### 详细的配置

那我们想保留每次的生成记录怎么办呢？也简单，我们增加了 output/prompt/backup_path 来制定一个备份文件夹，我们把原来的输出路径指向了那里。

同时，我们还把内容拷贝到了剪切板里，如果不喜欢呢，也可以关掉，开关在设置里：

![02-output-what-to-clipboard](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/07-build-lang-context/02-output-what-to-clipboard.png)

设置为none就关掉了。默认是text，表示生成的时候把文本放入剪切板，如果需要也可以指定 path 存进去，如果你需要在命令行或是什么地方用的话。

如果我们打开那个context.txt呢，我们就会发现，它里面的结构大概是这样的：
```xml
请基于 Project 里的代码， 完成下面的 Instruction
<Project>
<folder_tree>
{{ folder_tree }}
</folder_tree>
<files>
{{ all_files_xml }}
</files>
</Project>
```
你会发现我们现在输出的内容都是xml了，其实我们输出的格式有两种xml和markdown，一般我都是用xml，因为markdown里嵌markdown容易混乱掉格式，所以我一般用xml。这个格式也可以在设置里配置：

![03-generate-all-tempalte](https://jtong-pic.obs.cn-north-4.myhuaweicloud.com/wish-driven-development/07-build-lang-context/03-generate-all-tempalte.png)

## git repo to context

在有了这个功能之后呢，有人建议我搞个可以直接下载git库生成context的功能，因为很多人需要这个来学习git库，我就加了这个功能。首先我们的yaml长这个样子：

```yaml
project:
  base_path: https://github.com/joaomdmoura/crewAI.git
  type: git
  ignore:
    path:
      - target
      - .mvn
      - node_modules
      - ai_helper
      - my_coach
      - .git
      - .cache
      - "**/*.png"
      - "**/.DS_Store"
      - LICENSE
      - package-lock.json
input:
  git_clone_to_path: ai_helper/prompt_builder/git_repo
  instruction: |
    无
  skip_clone_if_folder_exist: true  
output:     
  prompt:
    path: ai_helper/prompt_builder/output/working
    backup_path: ai_helper/prompt_builder/output/backup
```

当我们把 project/type 设置为 git 后，可以把 project/base_path 设置为HTTPS的git库地址就可以clone到 input/git_clone_to_path 下了。不过既然下载过了，下次肯定不想再下载，所以加了一个 input/skip_clone_if_folder_exist 属性，只要下载过的，文件夹在 input/git_clone_to_path 下存在，我们就不再下载了。

## filter in 功能

当我们做到这里呢，发现一个问题，那就是git仓库不像我们自己的仓库，里面东西比较杂，而我们读代码的时候，其实只关心代码。一个个ignore有点累，所以我们又加入了一个新功能 filter_in。可以配置为下面的样子：

```yaml
project:
  base_path: https://github.com/joaomdmoura/crewAI.git
  type: git
  ignore:
    path:
      - "" # ignore掉的 path
  filter_in:
    path:
      - "**/*.py" # 保留的 path
```
只要设置为filter_in，就可以在ignore基础上再过滤一些文件留下。
设置完这些之后还是可以使用instruction来设置我们的任务描述，然后继续用Generate All Code Context来得到这个上下文。

有了这个之后，我们就可以轻松的制造长上下文了，希望对大家有所帮助。

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
- [x] 可以把Folder转为一个context文件，可以指定xml和markdown两种格式
- [x] 可以把git仓库下载下来，生成一个context文件
- [x] 可以把文件生成到一个文件里，在backup里记录了所有的生成过的文件的记录。
- [x] 支持在ignore的基础上再filter in