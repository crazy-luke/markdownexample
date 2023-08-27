# MarkdownExample 

Welcome to the Visual Studio Code extension for Markdown.
MarkdownExample contains all the syntax of markdown.
Together with other visualization extension(`Markdown Preview Enhanced`)  you never need to worry about forgetting syntax again!

## How to use 
* Open any `md` file, right click the mouse to see the menu `MarkdownExample`
  
  `or`

* Enter `>Markdownexample` in the `Command Center`


![alt desc1](https://raw.githubusercontent.com/crazy-luke/img/main/desc_1.jpg)
![alt desc2](https://raw.githubusercontent.com/crazy-luke/img/main/desc_2.jpg)
![alt cmd2](https://raw.githubusercontent.com/crazy-luke/img/main/cmd_2.jpg)
![alt cmd1](https://raw.githubusercontent.com/crazy-luke/img/main/cmd_1.jpg)



##
------
The following is the extensions project complete project, for developers to refer to [Github Code](https://github.com/crazy-luke)
##
------
## 以下是插件工程完整项目,供发者参考，[项目代码戳这里Github](https://github.com/crazy-luke)
------
### 1.创建项目

1. 安装 Yeoman 工具集
    `npm install -g yo`
    ```
    Yeoman 是通用型项目脚手架工具，可以根据一套模板，生成一个对应的项目结构
    ```
2. 安装 `generator-code` 模块
    `npm install -g generator-code`
    ```
    generator-code 模块是 VS Code 扩展生成器，与 yo 配合能构建 VsCode 插件项目
    ```


1. 运行`yo code`创建项目
    * 选择 New Extension(JavaScript)
    * 输入项目名称 `MarkdownExample`
    * 输入项目ID `MarkdownExample`
    * 输入项目描述 `Full Markdown Example`
``` 
? What type of extension do you want to create? New Extension (JavaScript)
? What's the name of your extension? MarkdownExample
? What's the identifier of your extension? MarkdownExample
? What's the description of your extension? Full Markdown Example
? Enable JavaScript type checking in 'jsconfig.json'? Yes
? Initialize a git repository? Yes
? Which package manager to use? npm
```

### 2.代码
1. `example.md` 样例文件复制到项目根目录, 文件内容来源[戳这里](https://gist.github.com/allysonsilva/85fff14a22bbdf55485be947566cc09e)
  
2. 码代码
  * extension.js 代码入口,激活插件
  * example.js 注册 `example` 命令，打开文件 example.md文件

3. 配置 `package.json`
  * main 字段修改入口 
      ```
      "main": "./extension.js",
      ```
  * `contributes` 字段设置命令 `MarkdownExample`
    ```
    "commands": [{
            "command": "markdown.example",
            "title": "MarkdownExample"
        }]
    ```
  * `contributes` 字段添加菜单`MarkdownExample` 
    ```
      "menus": {
          "editor/context": [{
              "when": "resourceExtname == .md",
              "command": "markdown.example",
              "group": "navigation"
          }]
      }
    ```
  * vscode 启动后激活事件
  ```
    "activationEvents": [
        "onStartupFinished"
    ]
  ```

### 3. 测试项目 
1. 安装全部依赖
   npm install

2. 运行 `vscode 菜单栏 run -> Start Debugging ` 会弹出的 vscode 窗口，在新窗口中测试。

 * 测试菜单栏: 新建任意一个文件，文件后缀 `.md`，`鼠标右键` -> `MarkdownExample`
 * 测试命令行: 命令行输入 `>MarkdownExample `
 * 配合 `Markdown Preview Enhanced` 预览插件使用


### 4. 打包
[publishing-extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

1.  准备工作 
  * `package.json`，设置项目发行者和图标
    ```
    "publisher": "CrazyLuke",
    "icon": "markdown.png"
    ```
  * 安装 vsce
    `npm install -g vsce`
    ```
    vsce 是 "Visual Studio Code Extensions "的缩写，是用于打包、发布和管理 VS Code 插件的命令行工具。
    ```

2. 打包 
   * 执行命令 `vsce package` 
   * 项目根目录出现插件安装文件 `MarkdownExample-0.0.1.vsix` 

  ```
    注：
      1. 必需修改 README.md 文件后才允许打包
      2. xxx.vsix文件直接拖到extensions tab下可以完成本地安装
  ```


### 5. 发布

1.  创建 publisher
  * 登录 [Extensions for Visual Studio](https://marketplace.visualstudio.com/)  -> Publish extensions -> Create publiser

   * 输入Name和ID，Logo, 点击Create按钮
      ```
        Name：markdownexample
        ID：CrazyLuke
      ```

2. 手动发布方式：管理平台手动发布 
  * [Extensions for Visual Studio](https://marketplace.visualstudio.com/)  -> Publish extensions -> +New ezxtension -> Visual Studio Code -> 上传 `MarkdownExample-0.0.1.vsix`  文件


3. 自动发布方式：vsce 命令直接发布 
  * 创建 Token 
    [azure DevOps](https://dev.azure.com/) -> User settings -> Personal Access Tokens

    ```
    Name: markdownexample
    Organization: CrazyLuke
    Expiration: 30 days
    Scopes: Full access
    ```

  * 终端 vsce 登录验证
    ```
    vsce login CrazyLuke
    输入前面创建的 Personal Access Tokens
    ```

   * 执行发布
    `vsce publish`
    




## Reference
* [Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
* [Full-Markdown.md](https://gist.github.com/allysonsilva/85fff14a22bbdf55485be947566cc09e)
  


##License

MIT © 疯狂豆