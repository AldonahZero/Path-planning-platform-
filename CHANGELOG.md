### 更新日志

#### 2017-07-08

-   依赖包版本升级
    -   react@15.6.1
    -   antd@2.11.2
    -   webpack@2.6.1
    -   等等

#### 2017-08-01

-   引入 redux 系列
    -   redux@3.7.2
    -   redux-thunk@2.2.0
    -   react-redux@5.0.5
-   增加权限管理模块
    -   使用 easy-mock 模拟数据模拟登录接口
    -   使用 redux 系列将登录用户数据传递给权限组件
    -   权限组件采用 Render Callback 的方式传递权限给需要受控制的组件（具体做法请查看源代码。）
    -   用户状态保存在 localStorage 中
    -   具体做法请运行项目查看
    -   PS：以上管理权限只是一种方式，但这绝对不是唯一的方式，也不是最好的方式。如果你有更好的方式，不妨加上面的群和大家一起分享下。😄😄
-   增加路径别名
    -   使用@别名处理引入组件相对路径过长问题。
    -   缺点：编辑器不能使用快捷提示和快捷跳转到相应的文件

#### 2017-08-13

-   权限管理模块增加页面跳转权限验证
    -   点击权限管理的路由拦截，若没有访问权限则会跳转到 404 页面。
    -   大致实现方式(非常简单)：通过向自定义 router 组件传入 store，登录之后可获取到 redux 中的权限 state 数据，并通过判断是否包含权限进行跳转。ps: 该 demo 的效果是管理员登录之后才能跳转到路由拦截页面。具体操作请拉取代码尝试。

#### 2017-08-26

-   增加响应式布局 - 替换 antd Col 组件的响应式栅格为 md(具体参数用法请查看 antd 官方文档) - 初始化页面是获取当前浏览器宽度设置菜单显示类型 - 监听 window 的 onresize 函数，设置菜单显示类型。PS：浏览器宽度存入 redux 中，方便组件之间传递。
    ![截图](https://raw.githubusercontent.com/yezihaohao/react-admin/master/src/style/imgs/mobile.gif)

#### 2017-09-13

-   依赖包版本升级
    -   antd@2.13.1(目前最新版)

#### 2017-10-21

-   开发环境增加 react-hot-loader-保持状态刷新组件(译：实时调整组件),可参考以下相关项目
    -   [react-hot-loader](https://github.com/gaearon/react-hot-loader)

#### 2017-12-12

-   依赖包版本升级
    -   antd@3.0.1(目前最新版)
    -   react-router-dom@4.2.2
-   大改动
    -   react-router 切换 4.x 版本，切换响应的版本路由写法(具体见代码更新日志)
    -   ps: react-router 3.x 的版本请查看代码分支 router3.x

#### 2018-01-12

-   增加 cssmodule 的支持（css, less）

    -   建议用 css 预处理器，文件名为 xxx.module.less，引入相应组件即可使用。

    -   具体做法参见新增模块，路由后缀：/app/cssModule。[点击访问](http://cheng_haohao.oschina.io/reactadmin/#/app/cssModule)

#### 2018-10-13

-   重大更新 :sparkles:
    -   升级 create-react-app 2.x，详情文档见[官方文档](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)
-   升级大部分第三方库，升级版本见[commit](https://github.com/yezihaohao/react-admin/commit/d8dc0ff0c6517c57a46d731adba69112a55145a9#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)
-   增加自定义主题功能 - 主题基础样式配置见[variables.less](https://github.com/yezihaohao/react-admin/blob/master/src/style/antd/variables.less) - 修改主题基础样式后执行`yarn theme 或 npm run theme`，默认主题即可生效 - 页面上可自定义主题颜色配置(根据此可添加字体大小等其他 antd 的默认样式)
    ![自定义主题](https://raw.githubusercontent.com/yezihaohao/react-admin/master/screenshots/themepicker.png)

#### 2018-11-07

-   完善 PWA 的 manifest.json 文件，增加按钮手动触发安装 PWA 应用
    -   最新版的 chrome 浏览器访问[ReactAdmin](https://admiring-dijkstra-34cb29.netlify.com/)即可体验

![PWA](https://raw.githubusercontent.com/yezihaohao/react-admin/master/screenshots/pwa.png)

#### 2018-11-26

-   增加问号形式的路由参数扩展

#### 2018-12-28

-   增加[react-document-title](https://github.com/gaearon/react-document-title)组件，根据路由设置页面 title

#### 2019-03-20

-   增加[redux-alita](https://github.com/yezihaohao/redux-alita),极简的 redux 工具用法，详情见其代码仓库

#### 2019-05-10

-   升级 react，react-dom，增加 hooks 支持（去掉 react-hot-loader，老版本 hot-loader 使用 hook 有点问题）
-   增加菜单可拖拽

![截图](https://raw.githubusercontent.com/yezihaohao/react-admin/master/screenshots/menu_draggable.gif)

#### 2019-09-04

-   增加 Git 提交 message 规范约束工具[commitizen](https://github.com/commitizen/cz-cli)
    -   Git 提交规范往往是团队编码必需，借助工具能形成更好的约束，如果你不喜欢用，可参照提交记录去掉[bd426fd](https://github.com/yezihaohao/react-admin/commit/a9401d191edd077bc3e59c8dbeeb61e5029cde95)

#### 2019-09-26

-   更新 create-react-app3.x 版本，升级部分依赖 lib，详情请查看提交记录（有问题请提 issue）

#### 2019-10-26

-   新增访客模式的路由配置+demo（主路由配置）
    -   [在线 Demo](https://admiring-dijkstra-34cb29.netlify.com/#/app/extension/visitor)

#### 2019-12-18

-   新增多级菜单配置功能（菜单可配置成无限的树状菜单，菜单嵌套过多时，样式问题可能需要你调整）

#### 2020-01-21

-   新增服务端异步菜单功能

#### 2020-08-02

-   新增多环境配置方案，环境配置任你加，源码详情请查看[提交记录](https://github.com/yezihaohao/react-admin/commit/d2cb53dca7e7179c794dc9e699d057ed549aec62)
    -   根目录增加 .env.ra.xxx，其中 xxx 是 package.json 中运行的脚本命令第三个参数，请结合项目查看
