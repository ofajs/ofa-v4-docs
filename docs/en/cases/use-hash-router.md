<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# Using hash router

You can associate the routes within the app component with the current webpage by using the o-router component. Once the page is bound to the route, even if the page is refreshed, the route state will be maintained.

In this example, please click the <span style='font-family: "iconfont"'>&#xe7cb;</span> button to open and try in a new page.

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.20/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```
