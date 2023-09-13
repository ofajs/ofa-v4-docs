<template is="exm-article">
<a href="../../publics/examples/use-page/demo.html" preview demo></a>
<a href="../../publics/examples/use-page/page.html" main demo></a>
</template>

# 使用页面组件

一旦加载了 `ofa.js`，全局会自动添加一个名为 `o-page` 的页面组件。这个组件用于加载页面模块，页面模块是一种特殊的组件模块，不会注册为自定义标签，而是通过 `o-page` 组件来加载。

页面模块类似于组件模块，但是有一些不同之处。页面模块使用 `page` 属性来定义模板，而不是 `component` 属性。页面模块的开发逻辑和组件模块一样，使用相同的模板语法和模板组件等。然而，页面模块不能使用 `attrs` 特性，因为页面的参数通常通过 URL 传递，而不是通过 `data` 或 `attrs`。

在示例中，`o-page` 组件用于加载 `page.html` 页面模块。页面模块中使用 `page` 属性定义模板，然后通过 JavaScript 函数返回一个对象来设置数据。URL 中的查询参数 `count` 会被传递到页面模块中，并被用于初始化数据。页面内的按钮点击事件可以更新数据并在页面中呈现。
