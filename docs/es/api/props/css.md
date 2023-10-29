# css

La función `css` se utiliza para obtener o establecer los estilos de un elemento objetivo.

## Uso directo

Puedes usar el método `css` para obtener o establecer el estilo de un elemento directamente. Aquí tienes un ejemplo:

<html-viewer>

```
<!-- Introduce ofa.js en tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").css.color;
    setTimeout(()=> {
        $('#target').css.color = 'red';
        $("#logger").text = $("#target").css.color;
    }, 1000);
</script>
```

</html-viewer>

## Configuración completa

A través del objeto `css` obtenido, puedes obtener los valores de estilo que se han establecido directamente en el elemento. A continuación se muestra un ejemplo:

<html-viewer>

```
<!-- Introduce ofa.js en tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target" style="color:red">texto original</div>
<br>
<h4>registrador</h4>
<div id="registrador" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#registrador").text = Object.keys($("#target").css);
   
    setTimeout(()=>{
        // Anular estilos existentes
        $("#target").css = {
            color: "blue",
            lineHeight: "5em"
        };
        $("#registrador").text = Object.keys($("#target").css);
    }, 500);
</script>
```

</html-viewer>

Usando las características del objeto `css`, puedes ajustar rápidamente el estilo del elemento objetivo.

## Uso de la sintaxis de plantilla

Todavía puedes establecer el estilo de los elementos de destino a través de la sintaxis de la plantilla. A continuación, se muestra un ejemplo:

<comp-viewer comp-name="css-demo">

```html
<template component>
  <div :css.color="txt">I am target</div>
  <script>
    export default {
      tag: "css-demo",
      data: {
        txt: "red"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "blue";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>

## Consejos para configurar CSS

Puedes modificar una propiedad de estilo de un elemento sin afectar otras propiedades utilizando `$ele.css = {...$ele.css, color:'red'}`. De esta manera, puedes cambiar solo una propiedad sin tener que reescribir todo el estilo.

### Ejemplo

```html
<div id="myElement" style="color: azul; font-size: 18px;">Hola Mundo</div>
<script>
  const myElement = $("#myElement");

  // Modificar el estilo de color del elemento, manteniendo los demás atributos de estilo sin cambios
  myElement.css = { ...myElement.css, color: 'rojo' };
</script>
```

En el ejemplo anterior, al usar `{ ...myElement.css, color: 'red' }`, solo modificamos el estilo de color del elemento, manteniendo las demás propiedades de estilo sin cambios. Es un truco muy útil que permite modificar flexiblemente el estilo de un elemento.