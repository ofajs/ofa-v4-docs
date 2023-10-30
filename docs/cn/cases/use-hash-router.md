<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# 使用 hash router

只需使用 o-router 组件，即可将 app 组件内的路由与当前网页关联起来。一旦页面与路由绑定，即使进行页面刷新，也能保持页面的路由状态。

在这个示例中，请点击  <span style='font-family: "iconfont"'>&#xe7cb;</span>  按钮，以新页面的方式打开并尝试。

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```