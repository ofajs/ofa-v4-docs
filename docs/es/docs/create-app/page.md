# Usar el componente o-page

En el interior de ofa.js, construimos un componente personalizado llamado "o-page" que proporciona conveniencia para el desarrollo de páginas. Este componente desempeña un papel clave en el desarrollo de aplicaciones. Cuando quieres utilizar la sintaxis de plantilla del componente pero no quieres crear un componente completamente nuevo, el componente "o-page" será tu mejor opción.

## Módulos de página

Crear un módulo de página de archivo único es similar a crear un módulo de componente. Utiliza la etiqueta `template` para envolver el código de plantilla de la página y agrega el atributo `page`. Dentro de esta etiqueta, puedes utilizar libremente la sintaxis de plantilla para interactuar con otros componentes o módulos de página.

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    export default async ({ load }) => {
      return {
        data: {
          pageTitle: "My Single File Page",
        },
      };
    }
  </script>
</template>
```
En un archivo HTML, usa el atributo `src` de la etiqueta `o-page` para especificar la ruta del archivo del módulo de la página. El contenido de la página se renderizará dentro de este componente.

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

## Modo de archivo dual

El modo de doble archivo separa las 'Plantillas estáticas' y el 'Código lógico' para que el contenido de la página sea más claro.

A continuación se presentan los pasos para utilizar el componente `o-page` y los módulos de página.

1. Crear el módulo de la página:

Al igual que con la creación de un módulo de componente, se puede crear un módulo de página, pero se debe configurar la propiedad `type` como `$.PAGE`. Los parámetros disponibles para el módulo de página incluyen `temp`, `data`, `proto` y `watch`.

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

2. Crear plantillas de página:

En el mismo directorio que el módulo de la página, crea un archivo de plantilla de página llamado `my-page-template.html`. En este archivo de plantilla, puedes usar la sintaxis de la plantilla para la interacción, similar a la sintaxis de la plantilla de componente mencionada anteriormente.

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

En su archivo HTML, use la etiqueta `<o-page>` para utilizar el componente `o-page` y use el atributo `src` para hacer referencia a la ruta del archivo del módulo de la página. El contenido de la página se renderizará dentro de este componente.

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
  <o-page src="./my-page.mjs"></o-page>
</body>
</html>
```

De esta manera, cuando abres la página, el componente 'o-page' cargará dinámicamente el módulo de página 'my-page.mjs' y renderizará el contenido de la página según la plantilla y los datos en el módulo. El ciclo de vida del módulo de página y la sintaxis de la plantilla son consistentes con el módulo de componente, lo que hace que el desarrollo y la gestión de la página sean más uniformes y flexibles.