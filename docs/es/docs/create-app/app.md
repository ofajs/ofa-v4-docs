# Uso del componente o-app

Para crear una ventana de aplicación completa fácilmente, puedes usar la etiqueta `o-app`. A continuación se muestra cómo crear una aplicación y configurarla paso a paso:

El texto parece un poco aburrido, le recomendamos que vaya a [Demostración de casos de uso de aplicaciones](../../cases/use-app.md) para probarlo en la práctica;

## Código base

Cree un archivo HTML y configure la etiqueta `o-app` como la ventana de visualización de la aplicación. Asegúrese de establecer el estilo de pantalla completa para `o-app` para que la aplicación ocupe toda la ventana de visualización.

```html
<!-- app.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app></o-app>
</body>
</html>
```

2. 创建一个 es 模块，用于设置应用的配置数据。配置数据包括以下选项：

   - `home`：字符串类型，应用的首页的页面模块地址。
   - `loading`：函数类型，应用在加载新页面时，会运行这个函数，得到的内容会插入到应用中，作为加载时的提示，等到页面加载完成后，会自动去除这个 loading 元素。
   - `fail`：函数类型，应用加载页面失败时，会运行这个函数，返回得到的值会显示在应用中作为加载失败的提示。函数会带有加载失败页面的 `src` 地址和错误报错对象。
   - `pageAnime`：页面之间切换时的动画配置。

A continuación se muestra un ejemplo de datos de configuración de la aplicación:

```javascript
// app-config.mjs
export const home = "./pages/home.mjs?count=1";

export const loading = () => {
  const loadingEl = $(`<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;">Loading</div>`);
  return loadingEl;
};

export const fail = ({ src, error }) => {
  return `<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;" data-testid="error-container">
    <div style="padding:20px;text-align:center;">
      <h3>Load Fail</h3> 
      <p>${error.stack}</p>
      ${src}
      <div>
        <button on:click="back()">Back</button>
      </div>
    </div>
  </div>`;
};

export const pageAnime = {
  current: {
    opacity: 1,
    transform: "translate(0, 0)",
  },
  next: {
    opacity: 0,
    transform: "translate(30px, 0)",
  },
  previous: {
    opacity: 0,
    transform: "translate(-30px, 0)",
  },
};
```

3. Utilice la etiqueta `o-app` en el archivo HTML y referencie el módulo de configuración de datos a través del atributo `src`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app src="./app-config.mjs"></o-app>
</body>
</html>
```

A través de los pasos anteriores, has creado exitosamente una ventana de aplicación que utiliza el componente "o-app". El componente "o-app" cargará la página según la configuración de los datos, mostrando un mensaje de carga o un mensaje de error en caso de fallo, y también admite animaciones de cambio de página. De esta manera, puedes construir rápidamente una aplicación completamente funcional e interactiva.

## Saltos de ruta

En la aplicación `o-app`, puedes realizar fácilmente la navegación de rutas, saltando de un módulo de página a otro. A continuación se presentan algunas formas diferentes de realizar la navegación de rutas.

### Utilice la etiqueta `<a>` para la navegación de ruta.

Puedes utilizar la etiqueta `<a>` en el HTML de la página para realizar redirecciones de enrutamiento. Debes especificar el atributo `href` con la ruta al módulo de la página de destino, y agregar el atributo `olink` para indicar al componente `o-app` que se trata de un enlace de enrutamiento.

```html
<a href="./pages/home.mjs?count=2" olink>Ir a la página de inicio</a>
```

### goto

Puedes usar el atributo `on:click` en la plantilla de la página para vincular eventos de clic y llamar al método `goto` en el módulo para la navegación de ruta.

```html
<template page>
  <div class="container">
    <button on:click="toabout">Ir a la página Acerca de</button>
  </div>

  <script>
    export default async ({ query }) => {
      return {
        proto: {
          toabout() {
            this.goto("./about.mjs");
          },
        },
      };
    };
  </script>
</template>
```

又或者直接卸载目标元素上：

```html
<button on:click="goto('./pages/about.mjs')">Ir a la página de acerca de</button>
```

### Sustitución de páginas de salto y retorno

Además del método `goto`, `o-app` también admite los métodos `replace` y `back`.

- El método `replace` se utiliza para sustituir una redirección, reemplazando la ruta actual de la página y convirtiendo la nueva página en la ruta actual.

```html
<button on:click="replace('./pages/settings.mjs')">Ir a la página de configuración y reemplazar la página actual</button>
```

El método `back` se utiliza para volver a la página anterior.

```html
<button on:click="back()">Volver a la página anterior</button>
```

El componente mantendrá su estado de enrutamiento dentro de la aplicación, pero los datos de enrutamiento no estarán vinculados a la pestaña del navegador actual. De esta manera, puedes implementar fácilmente la navegación entre páginas en la aplicación.

Si desea vincular rutas y páginas, puede utilizar el componente o-router, que será detallado en las secciones siguientes.

Por medio de los métodos anteriores, puedes implementar una navegación flexible en la aplicación `o-app`, permitiendo a los usuarios explorar fácilmente diferentes contenidos de las páginas.

## Acceso a la aplicación y a la página actual

En cada elemento dentro de la aplicación (incluyendo componentes), puedes obtener la instancia de `o-app` a través del atributo **app**. Esto es muy útil para realizar operaciones que interactúen con toda la aplicación.

Utilizando la propiedad `app.current`, puedes obtener la dirección del módulo de página actualmente activo.

A continuación se muestra un ejemplo de uso:

```javascript
// MyComponent.mjs
export default () => {
  return {
    attached(){
      const appTag = this.app;

      const currentPage = appTag.current;
      console.log(`La página actualmente activa es:${currentPage}`);
    }
  };
}
```

En el ejemplo anterior, se obtuvo la etiqueta de la aplicación mediante el selector `.app`, y luego se obtuvo la dirección de la página actualmente activa accediendo a la propiedad `app.current`.

## 使用技巧：提前缓存下一页

En algunos escenarios, es posible que ya sepas que el usuario va a pasar a la siguiente página. Para mejorar la experiencia del usuario, puedes precargar el módulo de la página siguiente de antemano, de modo que se pueda cargar de inmediato al realizar la navegación real, reduciendo así el tiempo de espera del usuario y brindando una experiencia más fluida.

En el código JavaScript de la página actual, llama al método `load` y pasa la ruta del módulo de la siguiente página, dicho módulo será cargado y almacenado en caché.

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load ('./pages/next-page.mjs'); // Este es solo para caché, no es un módulo necesario para la página actual, no es necesario agregar await
};
```