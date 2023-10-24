<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# Use hash router

Just use the o-router component to link the routing inside the app component to the current webpage. Once the page is bound to the router, the routing state of the page can be maintained even when the page is refreshed.

In this example, please click the <span style='font-family: "iconfont"'>&#xe7cb;</span> button to open and try in a new page.

```
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```