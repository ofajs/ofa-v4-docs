# detached

El gancho de vida `detached` se activa cuando el componente es removido del documento. En esta etapa, puedes realizar algunas operaciones de limpieza, como cancelar eventos o liberar recursos para evitar fugas de memoria.

## Código de ejemplo

```html
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-ready');
    setTimeout(()=>{
      $('body').push(ele);
      setTimeout(()=>{
        $(ele).remove();
      },500);
    },500);
  },500);
</script>
```

<comp-viewer comp-name="test-ready">

```
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-ready');
    setTimeout(()=>{
      $('body').push(ele);
      setTimeout(()=>{
        $(ele).remove();
      },500);
    },500);
  },500);
</script>
```

```html
<template component>
  <div>test ready</div>
  <script>
    let count = 0;
    export default {
      tag: "test-ready",
      ready(){
        count++;
        $("#logger").text = count;
        $('#shadowHtml').text = this.shadow ? this.shadow.html : 'null';
      },
      attached(){
        count++;
        $("#logger").text = count;
      },
      detached(){
        count++;
        $("#logger").text = count;
      }
    };
  </script>
</template>
```

</comp-viewer>

## Diagrama del ciclo de vida

<img src="../../../publics/life-cycle.png" width="512" />
