<template is="exm-article">
  <a href="../../publics/examples/use-config/demo.html" preview></a>
  <a href="../../publics/examples/use-config/app-config.mjs" main></a>
  <a href="../../publics/examples/use-config/page1.html"></a>
  <a href="../../publics/examples/use-config/page2.html"></a>
</template>

# アプリの設定パラメータ

`o-app` タグに独自のモジュールを設定することで、アプリケーションのパラメータを設定することができます。

これらのパラメータはESモジュールであり、以下のパラメータを設定できます：

- **home**: 应用的首页，即初始加载时显示的页面。
- **loading**: 在应用页面点击跳转时，在未完成模块加载前，显示的加载中内容。您可以通过返回一个字符串作为 loading 内容。
- **pageAnime**: 页面跳转时的动画效果，使用的是一个包含 CSS 样式属性的对象。
  - **current**: 表示页面处于当前页时的样式。
  - **next**: 表示页面在未进场时的样式。
  - **previous**: 表示页面在要退出时的样式。

このような方法により、アプリケーションのニーズに応じて、ホームページ、ローディングスタイル、ページ遷移アニメーションなどのパラメータをカスタマイズ���、より個性的な体験をアプリにもたらすことができます。