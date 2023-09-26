# Modelo de caja

En el desarrollo front-end, a menudo se utilizan algunas propiedades que representan el tamaño de los elementos. Estas propiedades incluyen width, height, clientWidth, clientHeight, offsetWidth, offsetHeight, outerWidth y outerHeight. Es importante comprender su significado y uso para el desarrollo de diseños responsivos y dinámicos. A continuación, los explicaremos uno por uno y los demostraremos a través de un ejemplo.

- width: representa el ancho del área de contenido del elemento, sin incluir el padding, el borde y el margen.
- height: representa la altura del área de contenido del elemento, sin incluir el padding, el borde y el margen.
- clientWidth: representa el ancho del área de contenido visible del elemento, incluyendo el padding pero sin incluir el borde y el margen.
- clientHeight: representa la altura del área de contenido visible del elemento, incluyendo el padding pero sin incluir el borde y el margen.
- offsetWidth: representa el ancho total del elemento, incluyendo el área de contenido, el padding, el borde y el margen.
- offsetHeight: representa la altura total del elemento, incluyendo el área de contenido, el padding, el borde y el margen.
- outerWidth: representa el ancho total del elemento, incluyendo el área de contenido, el padding, el borde, el margen pero sin incluir el ancho de la barra de desplazamiento.
- outerHeight: representa la altura total del elemento, incluyendo el área de contenido, el padding, el borde, el margen pero sin incluir la altura de la barra de desplazamiento.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo del modelo de caja de elementos</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    #box {
      width: 200px;
      height: 150px;
      background-color: #f0f0f0;
      border: 2px solid #333;
      padding: 20px;
      margin: 30px;
    }
  </style>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="box">Soy un elemento div.</div>

  <script>
    const box = $('#box');
    
    console.log(`width: ${box.width}px`); // => width: 200px
    console.log(`height: ${box.height}px`); // => height: 150px
    console.log(`clientWidth: ${box.clientWidth}px`); // => clientWidth: 240px
    console.log(`clientHeight: ${box.clientHeight}px`); // => clientHeight: 190px
    console.log(`offsetWidth: ${box.offsetWidth}px`); // => offsetWidth: 244px
    console.log(`offsetHeight: ${box.offsetHeight}px`); // => offsetHeight: 194px
    console.log(`outerWidth: ${box.outerWidth}px`); // => outerWidth: 304px
    console.log(`outerHeight: ${box.outerHeight}px`); // => outerHeight: 254px
  </script>
</body>
</html>

```

