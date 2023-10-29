# watch

Una vez que se complete la etapa "ready", se activará la función de escucha en el objeto "watch" asociado una vez. Luego, cuando ocurra un cambio en algún valor de los datos, se volverá a activar la función de escucha correspondiente a la clave (key) respectiva.


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
  <div>test watch</div>
  <script>
    let count = 0;
    export default {
      tag: "test-ready",
      data:{
        val: "I am val"
      },
      watch:{
        val(val){
          count++;
          $("#logger").text = count;
          $("#shadowHtml").push(`<div>${val}</div>`);
        }
      },
      ready(){
        setTimeout(()=>{
          this.val = 'change val';
        },500);
      }
    };
  </script>
</template>
```

</comp-viewer>

## Diagrama del ciclo de vida

<img src="../../../publics/life-cycle.png" width="512" />
