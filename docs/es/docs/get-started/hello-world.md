# El primer caso.

A continuación se presenta un ejemplo en el que, al hacer clic en el botón, el texto se cambia a "Hola Mundo":

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="desk">Please click the button</div>
<br />
<button id="btn">I am Button</button>
<script>
  $("#btn").on("click", () => {
    $("#desk").html = "<b>Hello World</b>";
  });
</script>
```

</html-viewer>

Cuando se presiona el botón, se mostrará el texto en negrita "Hello World".

Ahora, expliquemos en detalle los conceptos básicos.

## Selector

Después de importar `ofa.js`, el símbolo `$` se registrará en el ámbito global. Puedes seleccionar el **primer** elemento que cumpla con la condición utilizando `$('xxx')`, donde `xxx` es el contenido estándar del [selector CSS](https://developer.mozilla.org/es/docs/Web/CSS/Selectores_CSS). Puedes hacer clic en el enlace para ver el contenido específico del selector.

A continuación se muestra un ejemplo:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<p>I am P tag</p>
<div id="desk">I am desk</div>
<div class="logger">I am logger</div>
<script>
    setTimeout(() => {
        $("p").text = "change P tag";
        $("#desk").text = "change #desk";
        $(".logger").text = "change .logger";
    }, 1000);
</script>
```

</html-viewer>

En el ejemplo anterior, un segundo después de abrir la página, se cambiará el contenido de texto de las etiquetas **p**, **#desk** y **.logger** respectivamente.

## Asignación de eventos

Después de seleccionar un elemento de manera exitosa, puedes vincular eventos a ese elemento. Como se mencionó anteriormente en el ejemplo de "Hello World", vinculamos un evento de clic al elemento con el id "btn". Cuando se hace clic en el botón, la función vinculada será ejecutada.

Puedes hacer clic para ver el ejemplo de evento en la sección [ejemplo de evento](./example-event.md) y conocer algunos casos de enlaces de eventos.

Todos los eventos disponibles se pueden consultar en [Eventos web](https://developer.mozilla.org/en-US/docs/Web/Events) para obtener una lista completa de eventos.

## Propiedades

En los dos casos anteriores, mostramos el uso de las propiedades `html` y `text` respectivamente.

Puedes obtener el contenido de un elemento usando las propiedades `html` o `text`, como se muestra a continuación:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="t1">
    <span style="color: red">I am text</span>
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

</html-viewer>

En este ejemplo, asignamos el contenido HTML del elemento #t1 a los elementos #t2 y #t3.
