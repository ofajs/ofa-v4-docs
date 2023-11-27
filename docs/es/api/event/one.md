# one

Usando el método `one`, puedes registrar un controlador de eventos de un solo uso para un elemento objetivo, lo que significa que el controlador de eventos se desvinculará automáticamente después de la primera activación y no se activará nuevamente.

A continuación se muestra un ejemplo que muestra cómo usar el método `one` para registrar un controlador de eventos de clic para un elemento de botón:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").one("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

En este ejemplo, hemos utilizado el método `one` para agregar un controlador de eventos de clic al elemento de botón. Cuando el usuario hace clic en el botón, se activará el controlador de eventos, pero luego no se volverá a activar porque se ha desvinculado.

## Uso de la sintaxis de plantilla

Aún puedes usar la sintaxis de plantillas para vincular manejadores de eventos desechables a los elementos de destino. Aquí tienes un ejemplo:

<comp-viewer comp-name="one-demo">

```html
<template component>
  <button one:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "one-demo",
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

En este ejemplo, estamos utilizando la definición "one:click" en el elemento de botón para ligar un método llamado "addCount". Cuando el usuario hace clic en el botón, se invocará este método, pero luego no se volverá a desencadenar porque es un manejador de eventos desechable.