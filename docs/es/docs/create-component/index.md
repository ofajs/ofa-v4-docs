# Creación y uso de componentes

El ofa.js utiliza archivos básicos de HTML y JavaScript para definir componentes, evitando la introducción de nuevos tipos de archivos para reducir el costo de aprendizaje. Si tienes un conocimiento básico de HTML, podrás desarrollar y usar los componentes de ofa.js de manera rápida.

## 准备创建组件前的步骤

Antes de comenzar a crear los componentes, debes tener en cuenta algunos preparativos. Dado que la creación de componentes implica la operación de solicitar recursos del navegador, si solo abres el archivo HTML haciendo doble clic para verlo, se verá bajo el protocolo "file". Bajo el protocolo "file", la carga de módulos de JavaScript puede generar errores. Por lo tanto, debes preparar un servidor estático para ver correctamente el componente.

Si estás usando el editor Visual Studio Code, simplemente puedes instalar un complemento que admita un servidor estático. Recomendamos usar el complemento [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Después de instalar el complemento, simplemente haga clic derecho en el archivo `demo.html` y seleccione "Abrir con Live Server". El complemento abrirá automáticamente el archivo en modo de servidor estático.

Si estás utilizando otro editor, también puedes crear un servidor Nginx o Apache que sea capaz de mostrar HTML estático. De esta manera, podrás visualizar y desarrollar tus componentes de manera adecuada.

Crear un componente de botón

A continuación, vamos a crear un componente de botón simple llamado **simple-button**, que tendrá un estilo más atractivo que los botones nativos.

Primero, crea un archivo llamado `simple-button.html`, utiliza la etiqueta `template` y agrega el atributo `component` para identificarlo como un componente.

Luego, escriba el código de la plantilla del componente dentro de 'template'. Luego, debajo del contenido de la plantilla, agregue una etiqueta 'script' y coloque el código JavaScript del componente dentro de ella.

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
    export default {
      tag: 'simple-button' // 需要注册的组件名，如果没有定义 tag 属性，注册的组件名与文件名保持一致
    }
  </script>
</template>
```

Después de la exitosa introducción de ofa.js, se registrará automáticamente el componente `load-module`, que es un componente utilizado para la referencia declarativa de módulos, similar a una etiqueta de script. Este componente actuará como un proxy para cargar el módulo especificado en `src` y realizará el procesamiento previo necesario. En este caso, se cargará la plantilla y se registrará el componente simple-button.

`load-module` componente también se puede abreviar como `l-m` para reducir la cantidad de código.

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="../../ofa.js"></script>
    <!-- <load-module src="./simple-button.html"></load-module> -->
    <!-- l-m componente es equivalente a load-module componente, puedes escribir menos código -->
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>Soy un botón</simple-button>
  </body>
</html>
```

El componente `load-module` es una biblioteca de **cargador declarativo** personalizado que ofrece potentes funcionalidades para ampliar el soporte de varios tipos de archivos o para realizar una gestión intermedia de los módulos de JavaScript. Se ha separado en un proyecto independiente y la documentación detallada de su uso se encuentra en [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js).

### 双文件模式

El modo de archivos dobles separa la "plantilla estática" y el "código lógico", lo que hace que los componentes sean más claros.

逻辑代码放在 js 文件内，这个 js 需要标识 `export const type = $.COMP;`，以通知页面这是一个组件模块。在这种拆分模式下，模块代码可以使用 `import` 等 ES Module 的标准语法。

El componente de botón consta de dos archivos:

1. **simple-button.html**: Plantilla y estilo HTML del componente de botón.

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

2. **simple-button.mjs**: Código de registro del componente de botón.

```javascript
// simple-button.mjs
export const type = $.COMP; // 双文件模块必须带有 `export const type = $.COMP`

// 需要注册的组件名，当没有定义 tag 属性时，注册的组件名与文件名保持一致
// export const tag = 'simple-button';

// 组件模板的地址，当没有定义时，默认载入和当前模块同目录下的和组件同名的 html 文件
// export const temp = './simple-button.html';
```

En el lugar donde se requiere usar este componente, usa `l-m` para importar este módulo. A continuación se muestra una página de ejemplo que utiliza el botón simple (modo de dos archivos).

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
    <simple-button>I am a button</simple-button>
  </body>
</html>
```