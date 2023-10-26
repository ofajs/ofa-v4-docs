<template is="exm-article">
<a href="../../publics/examples/use-app/demo.html" preview></a>
<a href="../../publics/examples/use-app/page1.html" main></a>
<a href="../../publics/examples/use-app/page2.html"></a>
</template>

# アプリコンポーネントを使用する

在 `ofa.js` 中，您可以使用 `o-app` 组件来创建整个应用的布局结构，并在其中加载不同的页面模块。通过使用 `o-app` 组件、`o-page` 组件和页面模块，您可以构建整个应用的页面结构，并实现页面之间的导航

当 `o-page` 组件位于 `o-app` 内部时，您可以使用带有 `olink` 属性的 `<a>` 标签来实现页面跳转。这种跳转不会影响当前页面，而是只会在 `o-app` 内部进行跳转，类似于使用 `<iframe>`。

如果 `o-page` 组件在 `o-app` 内部，您还可以使用以下方法：
- `goto` メソッドを使用してページの移動を行います
- `back` メソッドは前のページに戻ります
- `replace` メソッドは現在のページを置換して移動します

通过使用 `o-app` 组件，您可以构建整个应用的布局结构，并在其中加载不同的页面模块。同时，`o-app` 提供的路由功能使得页面之间的跳转变得更加方便和灵活。

この例では、`o-app` コンポーネントを使用してアプリケーションのレイアウトを作成し、その中に `page1.html` ページモジュールをロードしています。

在 `page1.html` 页面模块中，我们定义了一个标题和一个按钮，点击按钮会跳转到另一个页面模块 `page2.html`。我们还添加了一个带有 `olink` 属性的链接，点击链接同样会导航到 `page2.html`。

在 `page2.html` 页面模块中，我们同样定义了一个标题和一个按钮，点击按钮会返回上一页，实现页面导航。
