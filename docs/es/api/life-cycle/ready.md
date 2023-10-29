# ready

El gancho de ciclo de vida `ready` se disparará después de que los datos y la plantilla del componente hayan sido inicializados, lo cual indica que el componente está listo. Durante esta etapa, puedes acceder a los datos del componente y la plantilla ya ha sido renderizada, por lo que puedes realizar algunas operaciones relacionadas con la interacción de la interfaz.

## Código de ejemplo

```html
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-ready');
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
      }
    };
  </script>
</template>
```

</comp-viewer>

## Diagrama del ciclo de vida

<img src="../../../publics/life-cycle.png" width="512" />
