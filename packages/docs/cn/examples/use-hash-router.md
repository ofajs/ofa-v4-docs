# 使用 hash router

只需要使用 o-router 组件，就能将 app 组件内的路由，和当前网页进行绑定；和页面绑定之后，即使页面进行刷新，也能维持页面的路由；

这个案例请点击 <span style='font-family: "iconfont"'>&#xe7cb;</span> 按钮，以用新页面的方式打开来尝试；

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.10/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```

<a href="../../publics/examples/use-hash-router/demo.html" preview demo></a>
<a href="../../publics/examples/use-hash-router/page1.html" main demo></a>
<a href="../../publics/examples/use-hash-router/page2.html" demo></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs" demo></a>