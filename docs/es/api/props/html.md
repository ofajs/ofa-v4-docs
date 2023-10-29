# html

设置目标内部的 html 代码；

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
    <span style="color:green;">target 1</span>
</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;"></div>

<script>
    setTimeout(()=> {
        $('#target2').html = `<b style="color:blue;">new text</b>`;

        console.log($("#target1").text) // => <span style="color:green;">target 1</span>;
        $("#logger").html = $("#target1").html;
    }, 500);
</script>
```

</html-viewer>

## Nota:

html es un método peligroso, si se coloca un `script` se ejecutará automáticamente el código `javascript` interno, por lo que se debe tener precaución al utilizarlo para prevenir el [XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

## Uso de la sintaxis de plantilla

Todavía puedes usar el atributo `:html` en la plantilla para establecer el valor de atributo correspondiente en el elemento objetivo. Esto es especialmente útil en la renderización de componentes. A continuación se muestra un ejemplo:

<comp-viewer comp-name="html-demo">

```html
<template component>
  <div>Rendered html: 
    <span :html="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "<b style='color:blue;'>change txt</b>";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>