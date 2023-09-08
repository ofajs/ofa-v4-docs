# 配置 app 参数

您可以通过为 `o-app` 标签单独设置外部模块来配置应用的参数。

这些参数是一个 ES 模块，您可以配置以下参数：

- **home**: 应用的首页，即初始加载时显示的页面。
- **loading**: 在应用页面点击跳转时，在未完成模块加载前，显示的加载中内容。您可以通过返回一个字符串作为 loading 内容。
- **pageAnime**: 页面跳转时的动画效果，使用的是一个包含 CSS 样式属性的对象。
  - **current**: 表示页面处于当前页时的样式。
  - **next**: 表示页面在未进场时的样式。
  - **previous**: 表示页面在要退出时的样式。

通过这种方式，您可以根据应用的需要，自定义首页、加载中样式和页面跳转动画等参数，从而为应用带来更加个性化的体验。

<a href="../../publics/examples/use-config/demo.html" preview demo></a>
<a href="../../publics/examples/use-config/app-config.mjs" main demo></a>
<a href="../../publics/examples/use-config/page1.html" demo></a>
<a href="../../publics/examples/use-config/page2.html" demo></a>
