# ofa.js - Framework JavaScript sin empaquetar

<!-- desc: ofa.js es un nuevo marco para construir interfaces de usuario que se puede usar fácilmente sin un proceso de construcción complicado. Abandona las dependencias de npm, Node.js y webpack, y vuelve a la conveniencia de la era de jQuery. -->

<simp-block>

<punch-logo>
    <img src="../publics/logo.svg" width="100" logo alt="ofa.js" />
    <h2>ofa.js</h2>
    <img src="../publics/npm-logo.png" slot="fly" height="40" alt="npm" />
    <img src="../publics/nodejs-logo.png" slot="fly" height="40" alt="nodejs" />
    <img src="../publics/webpack-logo.png" slot="fly" height="40" alt="webpack" />
</punch-logo>

## Framework JavaScript sin empaquetar

### Sin curva de aprendizaje, sin npm, sin nodejs, sin webpack, ¡simplemente empieza!

[Tutoriales de casos](./cases/index.md)

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

</simp-block>

<simp-block>

## Basado en Web Components

### ofa.js 基于 Web Components 开发。以下是支持的平台和时间，你可以立即体验

<support-platforms></support-platforms>

<a href="../publics/download/ofajs-start.zip" target="_blank">Descargar proyecto de inicio</a>
<a href="../publics/download/ofajs-start/index.html" target="_blank">Ver proyecto de inicio en línea</a>

</simp-block>

<simp-block>

## Muy baja barrera de uso

与其他前端框架不同，使用基于ofa.js开发的组件无需阅读繁杂入门指南。立刻创建一个 HTML 文件，体验一下“一拳撞飞logo”的组件。

<html-viewer style="width:100%;">

```
<!-- Introducir ofa.js en el proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<!-- Cargar el componente punch-logo desarrollado -->
<l-m src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
```

```html
<!-- Utilización del componente "punch-logo”.  -->
<punch-logo style="margin:50px 0 0 100px;">
    <img src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/logo.svg" logo height="90" />
    <h2>No más horas extra</h2>
    <p slot="fly">Sal del trabajo por mí</p>
    <p slot="fly">Salir tarde del trabajo</p>
    <p slot="fly">Horas extra los fines de semana</p>
</punch-logo>
```

</html-viewer>

</simp-block>

<simp-block>

## Un paso para encapsular el componente, liberarse de los tediosos procesos

Los componentes web antiguos implicaban aprender conocimientos complicados, pero ahora solo se necesita un archivo.

<comp-viewer comp-name="my-switch" max-height="500" style="width:100%;">

```html
<template component>
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      background-color: #ccc;
      transition: background-color 0.4s;
      border-radius: 34px;
      cursor: pointer;
    }

    .slider {
      position: absolute;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: transform 0.4s;
      border-radius: 50%;
    }

    .switch.checked {
      background-color: #2196f3;
    }

    .switch.checked .slider {
      transform: translateX(26px);
    }
  </style>
  <div class="switch" class:checked="checked" on:click="checked = !checked">
    <span class="slider"></span>
  </div>
  <script>
    export default {
      tag: "my-switch",
      data: {
        checked: true,
      },
    };
  </script>
</template>
```

</comp-viewer>

</simp-block>


<simp-block>

## Proporciona una variedad de convenientes sintaxis de plantillas

<case-switch>

<comp-viewer switch-name="Render Text" comp-name="text-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>Renderizando texto: {{txt}}</div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt:"Soy txt"
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Set Properties" comp-name="prop-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div :text="txt1"></div>
  <div :html="txt2"></div>
  <script>
    export default {
      tag: "prop-demo",
      data: {
        txt1: "<b>I am txt1</b>",
        txt2: "<b>I am txt2</b>",
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Sync Data" comp-name="sync-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>{{txt}}</div>
  <input type="text" sync:value="txt" />
  <script>
    export default {
      tag: "sync-demo",
      data: {
        txt:"I am txt",
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Bind Event" comp-name="event-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>count: {{count}}</div>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "event-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Use If" comp-name="if-demo" max-height="500" style="width:100%;">

```html
<template component>
  <x-if :value="count % 2">
    <div style="color:red">{{count}}</div>
  </x-if>
  <x-else>
    <div style="color:blue">{{count}}</div>
  </x-else>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "if-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Use Fill" comp-name="fill-demo" max-height="500" style="width:100%;">

```html
<template component>
  <ul>
  <x-fill :value="lists">
    <li>{{$index}} - {{$data.name}}</li>
  </x-fill>
  </ul>
  <script>
    export default {
      tag: "fill-demo",
      data: {
        lists:[{name:"One"}, {name:"Two"}, {name:"Three"}]
      },
    };
  </script>
</template>
```

</comp-viewer>

</case-switch>

</simp-block>

<simp-block>

## Alternativas a jQuery

### Tener una API similar a jQuery para que sientas la misma conveniencia.

<split-code>

```javascript
// Código de jQuery
$("#target").html("algo de código html"); // Establecer html
$("#target").text("establecer texto"); // Establecer texto
var ele_text = $("#target").text(); // Obtener texto
var parents = $("#target").parents(); // Obtener todos los padres en un arreglo
var child = $("#target").children()[0]; // Obtener el primer elemento hijo
```

```javascript
// ofa.js Code
$("#target").html = "some html code";  // Set html
$("#target").text = "set text"; // Set text
var ele_text = $("#target").text; // Get text
var parents = $("#target").parents; // Get array of all parent layers
var child = $("#target")[0]; // Get the first child element
```

</split-code>

</simp-block>

<simp-block>

## Casos de uso

<a href="https://obook.ofajs.com/">Sistema de creación de documentos en línea más simple, obook.</a>

</simp-block>

<l-m src="https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"></l-m>
<l-m src="../publics/comps/punch-logo.html"></l-m>
<l-m src="../publics/comps/support-platforms.html"></l-m>
<l-m src="../publics/comps/case-switch.html"></l-m>
<l-m src="../publics/comps/split-code.html"></l-m>