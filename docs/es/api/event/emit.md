# emit

Mediante el método `emit`, puedes activar eventos de manera proactiva, y los eventos activados tienen un mecanismo de burbujeo. El mecanismo de burbujeo significa que los eventos se propagan desde los elementos internos hasta los elementos externos, activándose en niveles desde el interior hacia el exterior.

A continuación se muestra un ejemplo que muestra cómo utilizar el método `emit` para desencadenar eventos personalizados y utilizar el mecanismo de propagación para pasar el evento a elementos exteriores:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $('ul').on('custom-event',()=>{
        count++;
        $("#logger1").text = 'ul is triggered ' + count;
    });
    $('#target').on('custom-event',()=>{
        count++;
        $("#logger2").text = 'target is triggered ' + count;
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            data:"I am data"
        });
    },500);
</script>
```

</html-viewer>

En este ejemplo, hemos registrado el mismo manejador de eventos personalizado llamado `custom-event` tanto para el elemento `<ul>` como para el elemento `<li>`. Cuando activamos el evento utilizando el método `emit`, el evento se propaga desde el elemento `<li>` hasta el elemento `<ul>`, activando así dos manejadores de eventos.

## Datos personalizados

Al pasar el parámetro `data`, puedes enviar datos personalizados al controlador de eventos:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    $('ul').on('custom-event',(event)=>{
        $("#logger1").text = 'ul is triggered;  =>  ' + event.data;
    });
    $('#target').on('custom-event',(event)=>{
        $("#logger2").text = 'target is triggered;  =>  ' + event.data;
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            data:"I am data"
        });
    },500);
</script>
```

</html-viewer>

En este ejemplo, hemos pasado datos personalizados al controlador de eventos a través del parámetro `data`. El controlador de eventos puede acceder a los datos pasados a través de `event.data`.

## No se desencadena el evento de burbujeo

Si no deseas que el evento se propague, puedes añadir el parámetro `bubbles: false` al disparar el evento.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    $('ul').on('custom-event',()=>{
        $("#logger1").text = 'ul is triggered';
    });
    $('#target').on('custom-event',()=>{
        $("#logger2").text = 'target is triggered';
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            bubbles: false
        });
    },500);
</script>
```

</html-viewer>

En este ejemplo, estamos utilizando el parámetro `bubbles: false` para disparar un evento personalizado. Este evento no se propagará hacia los elementos superiores, por lo que solo se activará el manejador de eventos del elemento `<li>`.

## Raíz de penetración

Por defecto, los eventos no pueden atravesar el shadow DOM de los componentes personalizados. Pero puedes permitir que los eventos personalizados atraviesen el nodo raíz estableciendo `composed: true`, lo que activará elementos fuera del nodo raíz.

```html
<!-- Código en el uso del componente composed-test -->
<div id="outer-logger"></div>
<div id="wrapper">
    <composed-test></composed-test>
</div>
<script>
    $("#wrapper").on('custom-event',() => {
        $('#outer-logger').text = 'ok';
    });
</script>
```

<comp-viewer comp-name="composed-test">

```
<div id="outer-logger"></div>
<div id="wrapper">
  <composed-test></composed-test>
</div>
<script>
    $("#wrapper").on('custom-event',() => {
        $('#outer-logger').text = 'ok';
    });
</script>
```

```html
<template component>
  <style>
    :host{
        display:block;
        border:red solid 1px;
    }
  </style>  
  <div id="logger">{{loggerText}}</div>
  <div on:custom-event="loggerText = 'custom event is triggered'" id="target"></div>
  <script>
    export default {
      tag: "composed-test",
      data:{
        loggerText: ""
      },
      ready(){
        setTimeout(()=>{
          this.shadow.$("#target").emit("custom-event",{
            composed: true,
          });
        },500);
      }
    };
  </script>
</template>
```

</comp-viewer>

En este ejemplo, creamos un componente personalizado llamado `composed-test`, que contiene un elemento en el DOM sombreado y un botón que dispara un evento. Por defecto, los eventos no atraviesan el DOM sombreado hasta el nodo raíz. Sin embargo, al usar el parámetro `composed: true` al disparar el evento, permitimos que el evento atraviese hasta el nodo raíz y active elementos fuera del nodo raíz.