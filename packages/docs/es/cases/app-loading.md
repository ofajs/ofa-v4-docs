# Personalizar la carga de la aplicación

A continuación se muestra un ejemplo de personalización de carga para el componente 'o-app'. En este ejemplo, hemos creado una barra de progreso que aumenta gradualmente durante la carga de la página y alcanza el 100% una vez que se completa la carga, luego se elimina el elemento de carga.

Puede copiar y utilizar el siguiente código para personalizar el efecto de carga de su aplicación:

```javascript
export const loading = () => {
  const loadingEl = $({
    tag: "div",
    css: {
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 1000,
      left: 0,
      top: 0,
    },
    html: `
      <div style="transition: all 10s cubic-bezier(0, 0, 0.22, 0.84) 0s; height: 2px;width: 0;background-color: rgb(0, 161, 46);"></div>
    `,
  });

  setTimeout(() => (loadingEl[0].style.width = "98%"));

  loadingEl.remove = () => {
    loadingEl[0].style["transition-duration"] = "0.1s";
    loadingEl[0].style.width = "100%";
    setTimeout(() => {
      $.fn.remove.call(loadingEl);
    }, 200);
  };

  return loadingEl;
};
```

A través de este código, puedes agregar un efecto de carga único a tu aplicación para que los usuarios tengan una mejor experiencia durante el cambio de páginas.

<a href="../../publics/examples/app-loading/demo.html" preview demo></a>
<a href="../../publics/examples/app-loading/app-config.mjs" main demo></a>
<a href="../../publics/examples/app-loading/page1.html" demo></a>
<a href="../../publics/examples/app-loading/page2.html" demo></a>
