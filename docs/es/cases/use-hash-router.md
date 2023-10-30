<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# usar enrutador hash

Solo necesitas usar el componente o-router para vincular las rutas del componente de la aplicación con la página web actual. Una vez que la página y la ruta están vinculadas, incluso si se actualiza la página, se mantendrá el estado de la ruta de la página.

En este ejemplo, haga clic en el botón  <span style='font-family: "iconfont"'>&#xe7cb;</span>  para abrirlo en una nueva página y probarlo.

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```