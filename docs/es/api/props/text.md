# text

El método `text` se utiliza para obtener o establecer el contenido de texto de un elemento.

## 直接使用

Puedes acceder o establecer el contenido de texto de un elemento directamente. Aquí hay un ejemplo:

<html-viewer>

```
<!-- Include ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">objetivo 1</div>
<div id="target2">texto de origen</div>
<br>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=> {
        $('#target2').text = `<b style="color:blue;">nuevo texto</b>`; // Sólo se puede establecer texto, si desea que la etiqueta tenga efecto, establezca el atributo html.

        console.log($("#target1").text) // => 'objetivo 1';
        $("#logger").text = $("#target1").text;
    }, 500);
</script>
```

</html-viewer>

## Uso de la sintaxis de plantilla

Puedes usar la propiedad `:text` dentro de una plantilla para establecer valores de propiedad en el elemento de destino. Esto es especialmente útil en la representación de componentes. Aquí tienes un ejemplo:

<comp-viewer comp-name="text-demo">

```html
<template component>
  <div>Rendered text: 
    <span :text="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "change txt";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>