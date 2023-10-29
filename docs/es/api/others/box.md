# Modelos de cajas

En el desarrollo web, el tamaño de los elementos es un concepto importante que incluye el área de contenido, el padding, el borde y el margen. A continuación se presentan algunas propiedades relacionadas con el tamaño de los elementos:

## width

`width` representa el ancho del área de contenido del elemento, no incluye el padding, borde y margen.

## height

`height` representa la altura del área de contenido del elemento, que no incluye el relleno, el borde y el margen.

## clientWidth

`clientWidth` representa el ancho del área de contenido visible de un elemento, incluyendo el relleno pero excluyendo los bordes y los márgenes.

## clientHeight

`clientHeight` representa la altura del área de contenido visible de un elemento, incluyendo el relleno pero excluyendo los bordes y los márgenes.

## offsetWidth

El `offsetWidth` representa el ancho total del elemento, incluyendo el área de contenido, el relleno interno, el borde y el margen externo.

## offsetHeight

La propiedad `offsetHeight` representa la altura total del elemento, incluyendo el área de contenido, el relleno interno, los bordes y los márgenes externos.

## outerWidth

`outerWidth` representa el ancho total del elemento, incluyendo el área de contenido.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    #box {
      width: 150px;
      height: 100px;
      background-color: #f0f0f0;
      border: 2px solid #333;
      padding: 20px;
      margin: 30px;
    }
</style>
<div id="box">I am a div element.</div>

<div id="logger"></div>
<script>
    const box = $('#box');

    $("#logger").html = `
    width: ${box.width}px <br>
    height: ${box.height}px <br>
    clientWidth: ${box.clientWidth}px <br>
    clientHeight: ${box.clientHeight}px <br>
    offsetWidth: ${box.offsetWidth}px <br>
    offsetHeight: ${box.offsetHeight}px <br>
    outerWidth: ${box.outerWidth}px <br>
    outerHeight: ${box.outerHeight}px
    `;
</script>
```

</html-viewer>