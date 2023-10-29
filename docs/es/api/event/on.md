# on

使用 `on` 方法，你可以为目标元素注册事件处理程序。这使你能够轻松地捕获和响应用户的交互操作。

下面是一个示例，演示如何使用 `on` 方法为按钮元素注册点击事件处理程序：

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").on("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

En este ejemplo, estamos usando el método `on` para agregar un controlador de eventos a un elemento de botón. Cuando el usuario hace clic en el botón, se activa el controlador de eventos, el contador se incrementa y el resultado se muestra en la página.

## Uso de la sintaxis de plantilla

Puedes usar la sintaxis de plantilla para vincular métodos a elementos de destino. Aquí tienes un ejemplo:

<comp-viewer comp-name="on-demo">

```html
<template component>
  <button on:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "on-demo",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        }
      }
    };
  </script>
</template>
```

</comp-viewer>

En este ejemplo, hemos utilizado `on:click` para vincular un método llamado `addCount` en el elemento del botón. Cuando el usuario hace clic en el botón, se llama a este método, incrementando el valor del contador y mostrándolo en la página. Esto te permite asociar manipuladores de eventos con métodos de componentes para lograr una interacción más compleja.

## event

Después del tiempo de registro, la función activada llevará el [evento](https://developer.mozilla.org/en-US/docs/Web/API/Event), manteniendo la consistencia con el evento nativo;

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").on("click", (event)=> {
        $("#logger").text = event.type;
    });
</script>
```

</html-viewer>