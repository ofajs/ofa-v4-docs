# Crear y utilizar componentes

ofa.js utiliza archivos HTML y JavaScript básicos para definir componentes, evitando la introducción de nuevos tipos de archivos para reducir los costos de aprendizaje. Si tienes un conocimiento básico de HTML, podrás desarrollar y utilizar componentes de ofa.js rápidamente.

## Pasos previos a la creación de un componente

Antes de empezar a crear un componente, hay algunos preparativos que debes tener en cuenta. Dado que la creación de componentes implica operaciones de solicitud de recursos del navegador, si simplemente abres un archivo HTML para verlo, se abrirá en el protocolo "file". Bajo el protocolo "file", la carga de módulos de JavaScript puede generar errores. Por lo tanto, debes preparar un servidor estático para ver correctamente los componentes.

Si utilizas el editor Visual Studio Code, puedes instalar fácilmente un complemento compatible con servidores estáticos. Recomendamos utilizar el complemento [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Después de instalar el complemento, simplemente haz clic derecho en el archivo `demo.html` y selecciona "Open with Live Server", el complemento abrirá automáticamente el archivo en modo de servidor estático.

Si utilizas otro editor, también puedes crear un servidor Nginx o Apache que admita la visualización estática de archivos HTML. Esto te permitirá previsualizar y desarrollar tus componentes correctamente.

## Crear un componente de botón

A continuación, crearemos un componente de botón simple llamado **simple-button** que tendrá un estilo más atractivo que un botón nativo.

Primero, crea un archivo llamado `simple-button.html` que utilice la etiqueta `<template>` y añade el atributo `component` para identificarlo como un componente.

A continuación, escribe el código del modelo del componente dentro del elemento `<template>`. Luego, debajo del contenido de la plantilla, agrega una etiqueta `<script>` donde incluirás el código JavaScript del componente.

```html
<!-- simple-button.html -->
<template component>
  <style>
    .shadow-button {
      background-color: #4caf50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    .shadow-button:hover {
      opacity: 0.8;
    }

    .shadow-button:active {
      transform: translateY(4px);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  </style>

  <button class="shadow-button">
    <slot></slot>
  </button>

  <script>
    // No utilizar import
    // import data from './other/module.mjs';

    // Nombre del componente que se necesita registrar, si no se define el atributo tag, el nombre del componente registrado será igual al nombre del archivo
    export const tag = 'simple-button';

    export default async ({load}) => {
      // Importar otro módulo
      // const data = await load("./other/module.mjs");
    }
  </script>
</template>
```

Después de haber importado con éxito ofa.js, se registrará automáticamente el componente 'load-module', que es un componente utilizado para referenciar módulos de forma declarativa, similar a la etiqueta script. Este componente carga y procesa los módulos especificados en 'src'. En este ejemplo, se carga una plantilla y se registra el componente 'simple-button'.

El componente 'load-module' también puede abreviarse como 'l-m' para reducir el código.

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="../../ofa.js"></script>
    <!-- <load-module src="./simple-button.html"></load-module> -->
    <!-- l-m es equivalente a load-module, pero con menos código -->
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>Soy un botón</simple-button>
  </body>
</html>
```

El componente 'load-module' es una biblioteca personalizada de carga declarativa que proporciona funciones poderosas para extender y realizar operaciones intermedias en módulos de JavaScript y otros tipos de archivos. Se ha separado como un proyecto independiente y se puede encontrar la documentación de su uso en [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js).

### Modo de dos archivos

El modo de dos archivos separa la 'plantilla estática' y el 'código lógico', lo que hace que el componente sea más claro.

El código lógico se coloca en un archivo JavaScript que debe incluir la declaración 'export const type = $.COMP;' para notificar a la página que se trata de un módulo de componente. En este modo de separación, se pueden utilizar las sintaxis estándar de los módulos ES como 'import' para el código del módulo.

El componente de botón está compuesto por dos archivos:

1. **simple-button.html**: plantilla y estilo HTML del componente de botón.

```html
<!-- simple-button.html -->
<style>
  .shadow-button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .shadow-button:hover {
    opacity: 0.8;
  }

  .shadow-button:active {
    transform: translateY(4px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>

<button class="shadow-button">
  <slot></slot>
</button>
```

2. **simple-button.mjs**: código de registro del componente de botón.

```javascript
// simple-button.mjs
export const type = $.COMP;

// Nombre del componente a registrar, cuando no se define la propiedad tag, el nombre del componente registrado será igual al nombre del archivo
// export const tag = 'simple-button';

// Ruta de la plantilla del componente, cuando no se define, se carga automáticamente el archivo html con el mismo nombre en el directorio actual del módulo
// export const temp = './simple-button.html';
```

En el lugar donde se desea usar este componente, importar este módulo utilizando `l-m`. A continuación, se muestra un ejemplo de página que utiliza el componente simple-button (modo de dos archivos).

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="ofa.js"></script>
    <l-m src="./simple-button.mjs"></l-m> 
  </head>
  <body>
    <simple-button>Soy un botón</simple-button>
  </body>
</html>
```

