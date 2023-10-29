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

2. Crea un módulo "es" para configurar los datos de la aplicación. Los datos de configuración incluyen las siguientes opciones:

   - `home`: Tipo de cadena, la dirección del módulo de la página de inicio de la aplicación.
   - `loading`: Tipo de función, esta función se ejecutará cuando la aplicación cargue una nueva página, y el contenido resultante se insertará en la aplicación como una indicación de carga. Se eliminará automáticamente una vez que la página se haya cargado por completo.
   - `fail`: Tipo de función, esta función se ejecutará cuando la aplicación falle al cargar una página, y el valor resultante se mostrará en la aplicación como un mensaje de carga fallida. La función contendrá la dirección "src" de la página de carga fallida y el objeto de error.
   - `pageAnime`: Configuración de animación al cambiar entre páginas.

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

o directamente descargados en el elemento de destino:

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

## Trucos y consejos: almacenar en caché la página siguiente por adelantado

En algunos escenarios, es posible que ya sepas que el usuario va a pasar a la siguiente página. Para mejorar la experiencia del usuario, puedes precargar el módulo de la página siguiente de antemano, de modo que se pueda cargar de inmediato al realizar la navegación real, reduciendo así el tiempo de espera del usuario y brindando una experiencia más fluida.

En el código JavaScript de la página actual, llama al método `load` y pasa la ruta del módulo de la siguiente página, dicho módulo será cargado y almacenado en caché.

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load ('./pages/next-page.mjs'); // Este es solo para caché, no es un módulo necesario para la página actual, no es necesario agregar await
};
```