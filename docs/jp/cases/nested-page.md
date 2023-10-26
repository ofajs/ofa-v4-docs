<template is="exm-article">
<a href="../../publics/examples/nested-page/demo.html" preview></a>
<a href="../../publics/examples/nested-page/page1.html"></a>
<a href="../../publics/examples/nested-page/page2.html"></a>
<a href="../../publics/examples/nested-page/layout.html" main></a>
</template>

# ネストされたページ

一部のアプリケーションのUIは、多くのネストされたページで構成されています。例えば、共通のトップバーまたはサイドナビゲーションがあります。`parent`属性を使用して、��在のページをネストしている親ページを表すことができます。

父页面的制作方式类似于组件开发，你需要创建一个包含整个框架布局的页面，然后将嵌套到内部的子页面放到 `slot` 中。

这个示例演示了如何创建嵌套页面，其中 `page1.html` 和 `page2.html` 是子页面，而 `layout.html` 是父页面。父页面 `layout.html` 包含了整个框架布局，而子页面则通过 `parent` 属性指向父页面，表示它们应该嵌套在父页面内。

ページの切り替え時に、'routerChange' イベントが発生します。ページの初期化や切り替え時に、'app.current' プロパティを使用して現在のページのアドレスを取得し、タブのアクティ��な状態を修正できます。