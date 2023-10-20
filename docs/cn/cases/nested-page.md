<template is="exm-article">
<a href="../../publics/examples/nested-page/demo.html" preview></a>
<a href="../../publics/examples/nested-page/page1.html"></a>
<a href="../../publics/examples/nested-page/page2.html"></a>
<a href="../../publics/examples/nested-page/layout.html" main></a>
</template>

# 嵌套页面

一些应用程序的 UI 由多层嵌套的页面组成，例如公用顶部或侧边的导航。你可以使用 `parent` 属性来表示嵌套当前页的父页面。

父页面的制作方式类似于组件开发，你需要创建一个包含整个框架布局的页面，然后将嵌套到内部的子页面放到 `slot` 中。

这个示例演示了如何创建嵌套页面，其中 `page1.html` 和 `page2.html` 是子页面，而 `layout.html` 是父页面。父页面 `layout.html` 包含了整个框架布局，而子页面则通过 `parent` 属性指向父页面，表示它们应该嵌套在父页面内。

当切换页面时，会触发 `routerChange` 事件。在页面初始化和切换页面时，你可以使用 `app.current` 属性来获取当前页地址，并在页面中修正标签页的激活状态。