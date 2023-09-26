# Primer caso

A continuación se muestra un caso en el que al hacer clic en un botón se cambia el texto a "Hola mundo":

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hola-mundo</title>
    <script src="../ofa.js"></script>
  </head>
  <body>
    <div id="desk">Haz clic en el botón</div>
    <br />
    <button id="btn">Soy un botón</button>
    <script>
      $("#btn").on("click", () => {
        $("#desk").html = "<b>Hola Mundo</b>";
      });
    </script>
  </body>
</html>
```

Después de hacer clic en el botón, se mostrará el texto "Hola Mundo" en negrita.

Ahora, vamos a explicar en detalle los conceptos básicos.

## Selector

Después de haber importado `ofa.js`, el símbolo `$` estará registrado en el alcance global. Puedes seleccionar el **primer** elemento que cumpla con la condición utilizando `$('xxx')`, donde `xxx` es un selector CSS estándar. Puedes hacer clic en el enlace para ver los detalles específicos del selector.

A continuación se muestra un ejemplo:

```html
<p>Soy una etiqueta P</p>
<div id="desk">Soy un escritorio</div>
<div class="logger">Soy un registrador</div>
<script>
    setTimeout(() => {
        $("p").text = "cambiar etiqueta P";
        $("#desk").text = "cambiar #desk";
        $(".logger").text = "cambiar .logger";
    }, 1000);
</script>
```

En el caso anterior, después de abrir la página durante un segundo, se cambiará el contenido de los elementos **p**, **#desk** y **.logger** respectivamente.

## vinculación de eventos

Después de seleccionar un elemento con éxito, puedes asignarle eventos. Como se mencionó anteriormente en el ejemplo "Hello World", asignamos un evento de clic al elemento con el id "btn". Cuando se hace clic en el botón, la función asignada se ejecutará.

Puedes hacer clic para ver ejemplos de enlaces en el capítulo [Ejemplos de eventos](./example-event.md) y aprender sobre algunos casos de asignación de eventos.

Todos los eventos disponibles se pueden encontrar en [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events) para obtener la lista completa de eventos.

## Propiedades

En los dos casos anteriores, mostramos el uso de las propiedades `html` y `text`.

También puedes obtener el contenido de un elemento utilizando las propiedades `html` o `text`, como se muestra a continuación:

```html
<div id="t1">
    <span style="color: red">Soy texto</span>
</div>
<div id="t2"></div>
<br />
<div id="t3"></div>
<br />
<script>
    $("#t2").text = $("#t1").html;
    $("#t3").html = $("#t1").html;
</script>
```

En este ejemplo, asignamos el contenido HTML del elemento #t1 a los elementos #t2 y #t3.
