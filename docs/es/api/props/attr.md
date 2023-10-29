# attr

El método `attr` se utiliza para obtener o establecer los [atributos](https://developer.mozilla.org/es/docs/Web/API/Element/attributes) de un elemento.

## Uso directo

Puedes usar el método `attr` para obtener o establecer los atributos de un elemento. A continuación se muestra un ejemplo:

<html-viewer>

```
<!-- Introduce ofa.js en tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
</style>
<div id="target1" test-attr="1">I am target 1</div>
<div id="target2">I am target 2</div>
<div id="logger" style="border:blue solid 1px;padding:8px;margin:8px;">logger</div>

<script>
    $("#logger").text = $("#target1").attr('test-attr');
    setTimeout(()=> {
        $("#target1").attr('test-attr', '2')
        $("#logger").text = $("#target1").attr('test-attr');
    }, 500);
</script>
```

</html-viewer>

## Uso de la sintaxis de plantilla

Además, puedes usar `attr:aaa="bbb"` dentro del modelo para establecer el atributo **aaa** del elemento objetivo con el valor del componente **bbb**. Este método es especialmente útil para renderizar componentes. A continuación se muestra un ejemplo:

<comp-viewer comp-name="html-demo">

```html
<template component>
  <style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
  </style>
  <div attr:test-attr="txt">I am target</div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "1"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "2";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>