# página de desarrollo

Dentro de ofa.js, construimos un componente personalizado llamado `o-page` que está diseñado para facilitar el desarrollo de páginas. Este componente juega un papel clave en el desarrollo de aplicaciones. Cuando quieras utilizar la sintaxis de plantilla de un componente, pero no quieras crear un componente completamente nuevo, el componente `o-page` será tu mejor opción.

## módulo de página

La creación de un módulo de página de un solo archivo es similar a la creación de un módulo de componentes. Utilice la etiqueta `template` para envolver el código de plantilla de la página y añadir el atributo `page`. Dentro de esta etiqueta, siéntete libre de utilizar la sintaxis de la plantilla para interactuar con otros componentes o módulos de página.

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    // En el modo de archivo único, evite utilizar import
    // import data from './other/module.mjs';

    export default async ({ load }) => {
      // Referencias a otros módulos
      // const data = await load("./other/module.mjs");

      return {
        data: {
          pageTitle: "My Single File Page",
        },
      };
    }
  </script>
</template>
```
En el archivo HTML, utilice el atributo `src` de la etiqueta `o-page` para especificar la ruta del archivo del módulo de página. El contenido de la página se mostrará dentro de ese componente.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-single-file-page.html"></o-page>
</body>
</html>
```

## Modo de archivos dobles

El modo de archivos dobles separa las `plantillas estáticas` y el `código lógico`, lo que hace que el contenido de la página sea más claro.

A continuación se muestran los pasos para usar el componente `o-page` y los módulos de página:

1. Crear un módulo de página:

Similar a crear un módulo de componente, crea un módulo de página, pero establece la propiedad `type` en `$.PAGE`. Los parámetros disponibles para el módulo de página incluyen `temp`, `data`, `proto` y `watch`.

```javascript
// my-page.mjs
export const type = $.PAGE;

export const temp = "./my-page-template.html";

export const data = {
  pageTitle: "My Page",
};

export const proto = {
  // ...
};

export const watch = {
  // ...
};
```

2. Crear una plantilla de página:

En el mismo directorio que el módulo de página, crea un archivo de plantilla de página llamado `my-page-template.html`. En este archivo de plantilla, puedes usar la sintaxis de plantilla para realizar interacciones, similar a la sintaxis de plantilla mencionada anteriormente para los componentes.

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Bienvenido a mi página!</p>
```

En tu archivo HTML, utiliza la etiqueta `<o-page>` para usar el componente `o-page` y utiliza el atributo `src` para hacer referencia a la ruta del archivo del módulo de página. El contenido de la página se renderizará dentro de este componente.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Aplicación</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-page.mjs"></o-page>
</body>
</html>
```

De esta manera, cuando abras la página, el componente `o-page` cargará dinámicamente el módulo de página `my-page.mjs` y renderizará el contenido de la página según las plantillas y datos del módulo. El ciclo de vida y la sintaxis de las plantillas del módulo de página se mantienen consistentes con los módulos de componentes, lo que hace que el desarrollo y la gestión de las páginas sean más unificados y flexibles.

## Verificar si la página ha cargado completamente

En algunas ocasiones, es posible que necesites verificar si la página ha cargado completamente para realizar algunas operaciones específicas. `ofa.js` proporciona varias formas de verificar si la página ha cargado completamente.

### Usar la propiedad `page._loaded`

Dentro del módulo de página, `page._loaded` es una propiedad booleana que se establece en `true` una vez que el contenido de la página ha cargado. Puedes usar esta propiedad para verificar si la página ha cargado completamente.

```javascript
if (page._loaded) {
  // La página ha cargado completamente
  // Realiza tus operaciones
} else {
  // Escucha el evento 'page-loaded'
  page.addEventListener('page-loaded', () => {
    // Operaciones a realizar después de que la página ha cargado
  });
}
```

### Usar la propiedad `page._rendered`

Otra forma de verificar si la página ha cargado completamente es usando la propiedad `page._rendered`, que es una promesa. Una vez que la página ha cargado, esta promesa entrará en el estado `resolve`. Puedes esperar a que la página cargue completamente usando `await page._rendered` y luego realizar las operaciones correspondientes.

```javascript
async function hacerAlgoDespuesDeCargarPagina() {
  await page._rendered;
  // La página ha cargado completamente
  // Realiza tus operaciones
}
```

