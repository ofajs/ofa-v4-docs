# Using hash router

Solo necesitas utilizar el componente `o-router` para asociar las rutas dentro del componente `app` con la página web actual. Una vez que la página y la ruta estén vinculadas, incluso después de recargar la página, el estado de la ruta se mantendrá.

En este ejemplo, haz clic en el botón <span style='font-family: "iconfont"'>&#xe7cb;</span> para abrirlo en una nueva página y probar.

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.14/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```

<a href="../../publics/examples/use-hash-router/demo.html" vista previa demo></a>
<a href="../../publics/examples/use-hash-router/page1.html" demo principal></a>
<a href="../../publics/examples/use-hash-router/page2.html" demo></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs" demo></a>

