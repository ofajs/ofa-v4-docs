# Obtener elementos y eventos relacionados

Este capítulo tiene como objetivo reforzar la comprensión del contenido del capítulo anterior, incluyendo la selección de elementos y la vinculación de eventos.

## Seleccionar elementos

En los capítulos anteriores, hemos aprendido cómo obtener un elemento global utilizando el símbolo $. A continuación, describiremos otros métodos para obtener elementos.

### Encontrar un elemento desde dentro de un elemento

#### Utilice `$("xxx"). $('xxxx')` de la siguiente manera

`$("xxx").$('xxxx')` es una forma de seleccionar un elemento padre y luego buscar elementos hijos que cumplan con ciertas condiciones. En este caso, `$("xxx")` selecciona un elemento padre y luego utiliza `$('xxxx')` para buscar elementos hijos que cumplan con ciertas condiciones.

#### Ejemplo

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // Selecciona el elemento padre y busca los hijos
  const parentElement = $(".parent");
  const childElement = parentElement.$(".child");

  // Modificar el contenido del texto de un elemento hijo
  childElement.text = "Modified child element";
</script>
```

</html-viewer>

En el ejemplo anterior, primero selecciona el elemento padre con la clase "parent" utilizando `$(".parent")`. Luego, busca dentro de ese elemento padre los elementos hijos con la clase "child" utilizando `$(".child")`. Luego modifica el contenido de texto de esos elementos hijos a "Elemento hijo modificado".

### Utilizar el enfoque `$('xxx xxxx')`.

`$('xxx xxxx')` es buscar los elementos que cumplan con la segunda condición del selector en el ámbito global, y luego buscar los elementos que cumplan con la primera condición del selector dentro de estos elementos. Esta forma permite encontrar directamente los subelementos que cumplan con la condición de manera más eficiente.

#### Ejemplo

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // Encontrar directamente los subelementos que cumplen las condiciones
  const childElement = $('div .child');

  // Modificar el contenido del texto de un elemento hijo
  childElement.text = "Modified child element";
</script>
```

</html-viewer>

En el ejemplo anterior, se utiliza directamente `$('div .child')` para buscar los elementos secundarios con la clase `child` y se modifica el contenido de texto de los elementos secundarios a "Elemento hijo modificado".

### No es posible traducir el texto.

#### Utiliza `$.all('xxx')` para buscar elementos globales.

`$.all('xxx')` método se utiliza para buscar todos los elementos en la página que cumplan con la condición del selector, y los devuelve como una colección de elementos. Esto permite seleccionar varios elementos en la página para realizar operaciones en lote.

#### Ejemplo

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
<script>
  // Buscar todos los elementos de la etiqueta p
  const allParagraphs = $.all("p");

  // Modificar el contenido del texto de todos los elementos de la etiqueta p
  allParagraphs.forEach((paragraph, index) => {
    paragraph.text = `Modified Paragraph ${index + 1}`;
  });
</script>
```

</html-viewer>

En el ejemplo anterior, se utiliza `$.all("p")` para encontrar todos los elementos de etiqueta `p` en la página y realizar operaciones en lote en ellos. Se modifica el contenido del texto como "Párrafo Modificado 1", "Párrafo Modificado 2" y "Párrafo Modificado 3".

### Buscar todos los elementos que cumplan con las condiciones dentro de un elemento

Además de poder buscar elementos a nivel global, también puedes buscar todos los elementos hijos que cumplan con una determinada condición dentro de un elemento específico, utilizando el siguiente formato: `$('xxx').all('xxxx')`.

#### Ejemplo

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div class="container">
  <p>Hola Mundo</p>
  <div class="item">Elemento 1</div>
  <div class="item">Elemento 2</div>
  <div class="item">Elemento 3</div>
</div>
<script>
  // Busca todos los elementos hijos del contenedor con la clase "item".
  const container = $(".container");
  const items = container.all(".item");

  // Modificar el contenido del texto de todos los elementos hijos
  items.forEach((item, index) => {
    item.text = `Elemento Modificado ${index + 1}`;
  });
</script>
```

</html-viewer>

En el ejemplo anterior, primero se utiliza `$(".container")` para encontrar los elementos con la clase `container`, luego se utiliza `.all(".item")` para encontrar todos los elementos secundarios con la clase `item` dentro de ese contenedor y se realiza una operación en lote en ellos, modificando su contenido de texto a "Modified Item 1", "Modified Item 2" y "Modified Item 3".

## Eventos

Ya hemos hablado sobre cómo usar `on` para enlazar eventos. A continuación, se presentarán algunos métodos relacionados con eventos.

### Documentación sobre el uso del método off

El método `off` se utiliza para eliminar las funciones de manejo de eventos vinculadas mediante el método `on`. Cuando ya no se necesita una función de manejo de eventos para un determinado evento, se puede utilizar el método `off` para eliminarla del elemento, evitando así ejecuciones duplicadas o pérdidas de memoria.

#### sintaxis

```javascript
$(selector).off(eventName, eventHandler);
```

- `selector`: Selector del elemento al que se quiere remover el manejador de eventos.
- `eventName`: Nombre del evento que se desea remover.
- `eventHandler`: Función de manejo de eventos que se desea remover.

#### Ejemplo

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Haz clic</button>
<script>
  const handleClick = () => {
    alert("¡Botón clicado!");
  };

  // Vincula la función de manejo de eventos de clic
  $("#btn").on("click", handleClick);

  // Quita la función de manejo de eventos de clic después de 5 segundos
  setTimeout(() => {
    $("#btn").off("click", handleClick);
  }, 5000);
</script>
```
</html-viewer>

En el ejemplo anterior, cuando se hace clic en el botón, aparecerá un cuadro de diálogo que muestra "¡Botón pulsado!". Sin embargo, después de 5 segundos, se eliminó la función de manejo de eventos de clic mediante el método `off`, por lo que al hacer clic en el botón nuevamente, no se activará el cuadro de diálogo.

### Documentación de uso del método one

El método `one` se utiliza para vincular una función de manejo de eventos, pero esta función solo se ejecutará una vez cuando se desencadene el evento por primera vez. Después de ejecutarse una vez, la función de manejo de eventos se eliminará automáticamente para evitar desencadenamientos repetidos.

#### sintaxis

```javascript
$(selector).one(eventName, eventHandler);
```

- `selector`: Selecciona el elemento en el que se va a asociar la función de manejo de eventos.
- `eventName`: Nombre del evento que se va a asociar.
- `eventHandler`: Función de manejo de eventos que se va a ejecutar.


#### Ejemplo

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="btn">Haz clic una vez</button>
<script>
  // Vincula una función de manejo de eventos al hacer clic, pero solo se ejecutará una vez
  $("#btn").one("click", () => {
    alert("¡Botón clickeado una vez!");
  });
</script>
```
</html-viewer>

En el ejemplo anterior, cuando se hace clic en el botón, se mostrará un cuadro de diálogo que dice "¡Botón clicado una vez!". Pero después del primer clic, se eliminará la función de manejo de eventos, por lo que los clics posteriores en el botón no volverán a mostrar el cuadro de diálogo.

### Documentación del uso del método emit

El método `emit` se utiliza para activar manualmente eventos específicos vinculados a un elemento. Mediante el método `emit`, se puede activar la ejecución de las funciones de manejo de eventos sin realizar ninguna operación actualmente.

#### sintaxis

```javascript
$(selector).emit(eventName);
```
 
- `selector`: Elige el elemento que quieres que desencadene el evento.
- `eventName`: Nombre del evento que quieres desencadenar.

#### Ejemplo

```html
<button id="btn">Click Me</button>
<script>
  // Vincular el controlador de eventos de clic
  $("#btn").on("click", () => {
    alert("Button clicked!");
  });

  // Activar el evento de clic del botón mediante el método emit
  $("#btn").emit("click");
</script>
```

En el ejemplo anterior, se activó manualmente el evento de clic del botón mediante el método `emit`, lo que mostrará un cuadro de diálogo con el mensaje "¡Botón clickeado!", aunque en realidad no se hizo clic en el botón.

Ten en cuenta que el uso del método `emit` no simula un clic de ratón u otros eventos reales, sino que llama directamente a la función de manejo de eventos asociada. Por lo tanto, si deseas ejecutar un evento en casos específicos, puedes utilizar el método `emit`.


Cuando has vinculado un evento, a veces es posible que desees detener la propagación del evento (burbujeo) o cancelar la acción predeterminada del evento. A continuación se explicará cómo evitar la propagación y cancelar la acción predeterminada después de que se haya desencadenado el evento.

### Deshabilita el burbujeo de eventos

La propagación de eventos se refiere a cuando se desencadena un evento en un elemento, se propaga hacia arriba a lo largo del árbol DOM y activa sucesivamente eventos del mismo tipo en los elementos padre. Si deseas detener la propagación después de manipular el evento en un elemento específico, puedes usar el método `event.stopPropagation()`.

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stop Event Bubbling</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="outer">
    <div id="inner">
      <button id="btn">Click Me</button>
    </div>
  </div>

  <script>
    const btn = $('#btn');
    const innerDiv = $('#inner');

    btn.on('click', (event) => {
      alert('Button Clicked!');
      event.stopPropagation(); // Bloqueo del burbujeo de eventos
    });

    innerDiv.on('click', () => {
      alert('Inner Div Clicked!');
    });

    $('#outer').on('click', () => {
      alert('Outer Div Clicked!');
    });
  </script>
</body>
</html>
```

En el ejemplo anterior, cuando haces clic en el botón "Click Me", se mostrará "Button Clicked!", pero no se activarán "Inner Div Clicked!" y "Outer Div Clicked!". Esto se debe a que llamamos a `event.stopPropagation()` en el controlador del evento de clic del botón, lo que impide que el evento se propague más allá.

### Cancelar el comportamiento predeterminado de un evento

Algunos eventos en ciertos elementos tienen un comportamiento predeterminado cuando se activan. Por ejemplo, hacer clic en un botón de envío provocará el envío del formulario, hacer clic en un enlace redireccionará a la dirección del enlace, etc. Si desea evitar el comportamiento predeterminado de un evento, puede utilizar el método `event.preventDefault()`.

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prevent Default Event</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" />
    <button id="submitBtn">Submit</button>
  </form>

  <script>
    const form = $('#myForm');
    const submitBtn = $('#submitBtn');

    submitBtn.on('click', (event) => {
      event.preventDefault(); // Anular el comportamiento por defecto de un evento
      const name = $('#name').value;
      alert(`Hello, ${name}! Form submission prevented.`);
    });

    form.on('submit', () => {
      alert('Form Submitted!');
    });
  </script>
</body>
</html>
```

En el ejemplo anterior, cuando haces clic en el botón de envío "Submit", se mostrará "Hello, {name}! Form submission prevented.", pero no se activará la alerta "Form Submitted!". Esto se debe a que en el controlador del evento de clic del botón de envío se llama a `event.preventDefault()`, lo cual evita el comportamiento de envío predeterminado del formulario.