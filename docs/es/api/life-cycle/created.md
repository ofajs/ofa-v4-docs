# created

`created` El gancho de ciclo de vida se activa cuando se crea el componente. En esta etapa, los datos del componente aún no se han inicializado y el contenido de la plantilla no se ha renderizado. Puedes realizar algunas operaciones de inicialización en esta etapa, o preparar datos que se utilizarán en etapas posteriores.

## Código de ejemplo

```html
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-created');
  },500);
</script>
```

<comp-viewer comp-name="test-created">

```
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-created');
  },500);
</script>
```

```html
<template component>
  <div>test created</div>
  <script>
    let count = 0;
    export default {
      tag: "test-created",
      created(){
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
