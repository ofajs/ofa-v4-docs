<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# 使用 hash router

只需使用 o-router 組件，即可將 app 組件內的路由與當前網頁關聯起來。一旦頁面與路由綁定，即使進行頁面刷新，也能保持頁面的路由狀態。

在這個示例中，請點擊  <span style='font-family: "iconfont"'>&#xe7cb;</span>  按鈕，以新頁面的方式打開並嘗試。

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```