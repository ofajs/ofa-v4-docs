# 开发页面

在 ofa.js 内部，我们构建了一个名为 `o-page` 的自定义组件，旨在为页面的开发提供便利。这个组件在应用开发中扮演着关键的角色。当你想要使用组件的模板语法，但又不想创建全新的组件时，`o-page` 组件将成为你的最佳选择。

## 页面模块

创建一个单文件页面模块时，类似于创建组件模块。使用 `template` 标签来包裹页面的模板代码，并添加 `page` 属性。在该标签内部，可以自由使用模板语法与其他组件或页面模块进行交互。

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    // 在单文件模式下，避免使用 import
    // import data from './other/module.mjs';

    export default async ({ load }) => {
      // 引用其他模块
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
在 HTML 文件中，使用 `o-page` 标签的 `src` 属性指定页面模块的文件路径。页面内容将在该组件内部进行渲染。

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

