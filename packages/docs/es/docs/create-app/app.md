# Creando una Aplicación

Con la etiqueta `o-app` puedes crear fácilmente una ventana de aplicación completa. A continuación se muestra cómo crear una aplicación y configurarla:

## Código Básico

1. Crea un archivo HTML y establece la etiqueta `o-app` como la ventana de visualización de la aplicación. Asegúrate de establecer el estilo de pantalla completa para `o-app` para que la aplicación ocupe toda la vista.

```html
<!-- app.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Aplicación</title>
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

2. Crea un módulo ES para establecer los datos de configuración de la aplicación. Los datos de configuración incluyen las siguientes opciones:

   - `home`: Tipo de cadena, dirección del módulo de página de inicio de la aplicación.
   - `loading`: Tipo de función, esta función se ejecutará cuando la aplicación cargue una nueva página. El resultado de esta función se insertará en la aplicación como un mensaje de carga y se eliminará automáticamente una vez que se haya cargado la página.
   - `fail`: Tipo de función, esta función se ejecutará cuando falle la carga de una página de la aplicación. El valor devuelto se mostrará en la aplicación como un mensaje de carga fallida. La función tendrá la dirección `src` de la página de carga fallida y el objeto de error.
   - `pageAnime`: Configuración de animación al cambiar entre páginas.

A continuación se muestra un ejemplo de los datos de configuración de la aplicación:

```javascript
// app-config.mjs
export const home = "./pages/home.mjs?count=1";

export const loading = () => {
  const loadingEl = $(`<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;">Cargando</div>`);
  return loadingEl;
};

export const fail = ({ src, error }) => {
  return `<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;" data-testid="error-container">
    <div style="padding:20px;text-align:center;">
      <h3>Error de Carga</h3> 
      <p>${error.stack}</p>
      ${src}
      <div>
        <button on:click="back()">Volver</button>
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

3. En el archivo HTML, utiliza la etiqueta `o-app` y referencia los datos de configuración como un módulo `es` a través del atributo `src`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Aplicación</title>
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

Con los pasos anteriores, has creado exitosamente una ventana de aplicación que utiliza el componente `o-app`. El componente `o-app` cargará la página de acuerdo a la configuración de los datos, mostrando una indicación de carga o un mensaje de error, y admite animaciones de cambio de página. Esto te permite construir rápidamente una aplicación con funcionalidad completa e interactiva.

## Navegación por rutas

En la aplicación `o-app`, puedes realizar fácilmente la navegación por rutas, saltando de un módulo de página a otro. A continuación, se presentan diferentes formas de realizar la navegación por rutas.

### Utilizar la etiqueta `<a>` para la navegación por rutas

Puedes utilizar la etiqueta `<a>` en el HTML de la página para realizar la navegación por rutas. Debes especificar la ruta del módulo de página de destino en el atributo `href` y agregar el atributo `olink` para indicar al componente `o-app` que se trata de un enlace de ruta.

```html
<a href="./pages/home.mjs?count=2" olink>Ir a la página de inicio</a>
```

### goto

Puedes utilizar el atributo `on:click` en la plantilla de la página para vincular un evento de clic y llamar al método `goto` en el módulo para realizar la navegación por rutas.

```html
<template page>
  <div class="container">
    <button on:click="toabout">跳转到关于页面</button>
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
<button on:click="goto('./pages/about.mjs')">跳转到关于页面</button>
```

### 替换跳转和返回页面

除了 `goto` 方法外，`o-app` 还支持 `replace` 和 `back` 方法。

- `replace` 方法用于替换跳转，它会取代当前页面的路由，使新页面成为当前页面的路由。

```html
<button on:click="replace('./pages/settings.mjs')">跳转并替换当前页面</button>
```

- `back` 方法用于返回到前一个页面。

```html
<button on:click="back()">返回上一页</button>
```

需要注意的是，应用内会保持组件的路由状态，但路由数据不会绑定到当前浏览器标签上。这样，你可以方便地在应用中实现页面之间的跳转和导航。

如果你想实现路由和页面的绑定，可以使用 o-router 组件，我们将在后面的章节中详细介绍。

通过以上方法，你可以在 `o-app` 应用中实现灵活的路由跳转，让用户能够方便地浏览不同的页面内容。

## 访问应用和当前页面

在应用内的各个元素（包括组件），你通过 **app** 属性来获取它们所在的 `o-app` 实例。这对于需要与整个应用进行交互的操作非常有用。

A través de la propiedad `app.current`, puedes obtener la dirección del módulo de página actualmente activo.

Aquí tienes un ejemplo de uso:

```javascript
// MyComponent.mjs
export default () => {
  return {
    attached() {
      const appTag = this.app;

      const currentPage = appTag.current;
      console.log(`La página actualmente activa es: ${currentPage}`);
    }
  };
}
```

En el ejemplo anterior, se obtiene la etiqueta de la aplicación mediante el selector `.app`, y luego se accede a la propiedad `app.current` para obtener la dirección de la página actualmente activa.

## Consejo de uso: Cachear la siguiente página de antemano

En algunos casos, es posible que sepas de antemano que el usuario va a navegar a la siguiente página. Para mejorar la experiencia del usuario, puedes cachear de antemano el módulo de página siguiente, de modo que se pueda cargar inmediatamente durante la navegación real, reduciendo así el tiempo de espera del usuario y haciendo que la experiencia sea más fluida.

En el código JavaScript de la página actual, llama al método `load` y pasa la ruta del módulo de la siguiente página. Este módulo se cargará y cacheará.

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load('./pages/next-page.mjs'); // Esto es solo para cachear, no es un módulo necesario para la página actual, por lo que no es necesario agregar await
};
```

