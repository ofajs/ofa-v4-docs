# Obtener elementos y eventos relacionados

Esta sección tiene como objetivo fortalecer la comprensión del contenido de la sección anterior, incluyendo la selección de elementos y la vinculación de eventos.

## Selección de elementos

En las secciones anteriores, hemos aprendido la forma de obtener un elemento específico globalmente usando el símbolo $. A continuación, presentaremos otras formas de obtener elementos.

### Buscar un elemento dentro de otro elemento

#### Uso de `$("xxx").$('xxxx')`

`$("xxx").$('xxxx')` es una forma de seleccionar un elemento padre y luego buscar elementos hijos que cumplan cierta condición dentro de ese padre. En este caso, `$("xxx")` selecciona un elemento padre y luego se utiliza `$('xxxx')` para buscar elementos hijos que cumplan la condición dentro de ese padre.

#### Ejemplo

```html
<div class="parent">
  <p>Hola Mundo</p>
  <div class="child">
    <span>Este es un elemento hijo</span>
  </div>
</div>
<script>
  // Seleccionar el elemento padre y buscar el elemento hijo
  const parentElement = $(".parent");
  const childElement = parentElement.$(".child");

  // Modificar el contenido de texto del elemento hijo
  childElement.text = "Elemento hijo modificado";
</script>
```

En el ejemplo anterior, primero se selecciona el elemento padre con la clase `parent` usando `$(".parent")`, luego se busca el elemento hijo con la clase `child` dentro de este padre usando `$(".child")`. Luego se modifica el contenido de texto del elemento hijo a "Elemento hijo modificado".

### Uso de `$('xxx xxxx')`

`$('xxx xxxx')` permite buscar los elementos que cumplan con la segunda condición del selector en todo el alcance global, y luego buscar los elementos que cumplan con la primera condición del selector dentro de estos elementos. Esta forma permite encontrar directamente los elementos hijos que cumplan con la condición en un solo paso.

#### Ejemplo

```html
<div class="parent">
  <p>Hola Mundo</p>
  <div class="child">
    <span>Este es un elemento hijo</span>
  </div>
</div>
<script>
  // Buscar directamente los elementos hijos que cumplan con la condición
  const childElement = $('div .child');

  // Modificar el contenido de texto del elemento hijo
  childElement.text = "Elemento hijo modificado";
</script>
```

En el ejemplo anterior, se usa directamente `$('div .child')` para encontrar el elemento hijo con la clase `child` y se modifica su contenido de texto a "Elemento hijo modificado".

### 选择多个元素

#### Usar `$.all('xxx')` para buscar elementos globales

El método `$.all('xxx')` se utiliza para buscar todos los elementos que cumplan la condición del selector en la página, y devolverlos como una colección de elementos. Esto permite seleccionar varios elementos en la página para operaciones en lote.

#### Ejemplo

```html
<p>Párrafo 1</p>
<p>Párrafo 2</p>
<p>Párrafo 3</p>
<script>
  // Buscar todos los elementos de etiqueta p
  const allParagraphs = $.all("p");

  // Modificar el contenido de texto de todos los elementos de etiqueta p
  allParagraphs.forEach((paragraph, index) => {
    paragraph.text = `Párrafo Modificado ${index + 1}`;
  });
</script>
```

En el ejemplo anterior, se utiliza `$.all("p")` para buscar todos los elementos de etiqueta `p` en la página, y se realiza una operación en lote modificando su contenido de texto a "Párrafo Modificado 1", "Párrafo Modificado 2" y "Párrafo Modificado 3".

### Buscar todos los elementos que cumplan la condición dentro de un elemento

Además de buscar elementos a nivel global, también se puede buscar todos los elementos que cumplan la condición dentro de un elemento específico, utilizando la siguiente sintaxis: `$('xxx').all('xxxx')`.

#### Ejemplo

```html
<div class="container">
  <p>Hola Mundo</p>
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
<script>
  // Buscar todos los elementos hijos con la clase "item" dentro del contenedor
  const container = $(".container");
  const items = container.all(".item");

  // Modificar el contenido de texto de todos los elementos hijos
  items.forEach((item, index) => {
    item.text = `Elemento Modificado ${index + 1}`;
  });
</script>
```

En el ejemplo anterior, primero se utiliza `$(".container")` para buscar elementos con la clase `container`, luego se utiliza `.all(".item")` para buscar todos los elementos secundarios con la clase `item` dentro de ese contenedor y se les realiza una operación en lote para modificar su contenido de texto a "Elemento Modificado 1", "Elemento Modificado 2" y "Elemento Modificado 3".

## Eventos

Anteriormente se ha explicado cómo usar el método `on` para vincular eventos. A continuación, se presentan algunos métodos relacionados con eventos;

### Documentación del uso del método off

El método `off` se utiliza para eliminar los controladores de eventos vinculados a través del método `on`. Cuando no se necesita más un controlador de eventos para un evento en particular, se puede utilizar el método `off` para eliminarlo del elemento y evitar la ejecución repetida o las fugas de memoria.

#### Sintaxis

```javascript
$(selector).off(eventName, eventHandler);
```

- `selector`: Selector para el elemento donde se eliminará el controlador de eventos. 
- `eventName`: Nombre del evento que se eliminará. 
- `eventHandler`: Controlador de eventos que se eliminará.

#### Ejemplo

```html
<button id="btn">Haz clic</button>
<script>
  const handleClick = () => {
    alert("¡Botón clicado!");
  };

  // Vincular el controlador de eventos para hacer clic
  $("#btn").on("click", handleClick);

  // Eliminar el controlador de eventos de hacer clic después de 5 segundos
  setTimeout(() => {
    $("#btn").off("click", handleClick);
  }, 5000);
</script>
```

En el ejemplo anterior, al hacer clic en el botón, aparecerá un cuadro de diálogo con el mensaje "¡Botón clicado!". Sin embargo, después de 5 segundos, el controlador de eventos de hacer clic se elimina mediante el método `off`, por lo que al hacer clic nuevamente en el botón no se mostrará el cuadro de diálogo.

### Documentación del uso del método one

El método `one` se utiliza para vincular un controlador de eventos que solo se ejecutará una vez cuando se active el evento por primera vez. Después de ejecutarse una vez, el controlador de eventos se eliminará automáticamente para evitar activaciones repetidas.

#### Sintaxis

```javascript
$(selector).one(eventName, eventHandler);
```

- `selector`: Selecciona el elemento al que se desea vincular la función de manejo del evento.
- `eventName`: Nombre del evento que se desea vincular.
- `eventHandler`: Función de manejo del evento a ejecutar.

#### Ejemplo

```html
<button id="btn">Haz click una vez</button>
<script>
  // Vincula la función de manejo del evento de clic, pero solo se ejecutará una vez
  $("#btn").one("click", () => {
    alert("¡Botón clickeado una vez!");
  });
</script>
```

En el ejemplo anterior, cuando se hace clic en el botón, se muestra una ventana emergente con el mensaje "¡Botón clickeado una vez!". Sin embargo, después del primer clic, la función de manejo del evento se eliminará, por lo que los siguientes clics en el botón no mostrarán la ventana emergente.

### Documentación sobre el uso del método emit

El método `emit` se utiliza para activar manualmente eventos específicos vinculados a un elemento. A través del método `emit`, se puede ejecutar la función de manejo del evento sin realizar ninguna acción real.

#### Sintaxis

```javascript
$(selector).emit(eventName);
```

- `selector`: Selecciona el elemento en el que se desea activar el evento.
- `eventName`: Nombre del evento que se desea activar.

#### Ejemplo

```html
<button id="btn">Haz click</button>
<script>
  // Vincula la función de manejo del evento de clic
  $("#btn").on("click", () => {
    alert("¡Botón clickeado!");
  });

  // Activa manualmente el evento de clic del botón usando el método emit
  $("#btn").emit("click");
</script>
```

En el ejemplo anterior, se activa manualmente el evento de clic del botón usando el método `emit`, lo que resulta en una ventana emergente que muestra el mensaje "¡Botón clickeado!", aunque no se haya hecho clic en el botón físicamente.

Nota: El uso del método `emit` no simula un clic de mouse u otros eventos reales, solo llama directamente a la función de manejo del evento vinculada. Por lo tanto, si deseas ejecutar un evento en situaciones específicas, puedes utilizar el método `emit`.

Cuando hayas enlazado un evento, a veces puedes querer detener la propagación del evento (burbujeo) o cancelar el comportamiento predeterminado del evento. A continuación, se muestra cómo evitar la propagación y cancelar eventos predeterminados después de la activación del evento.

### Detener la propagación del evento

La propagación del evento se refiere a cuando se activa un evento en un elemento y se propaga hacia arriba a lo largo del árbol del DOM, activando secuencialmente eventos del mismo tipo en elementos padres. Si deseas detener la propagación después de manejar un evento en un elemento específico, puedes utilizar el método `event.stopPropagation()`.

Código de ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detener la propagación del evento</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="outer">
    <div id="inner">
      <button id="btn">Haz clic</button>
    </div>
  </div>

  <script>
    const btn = $('#btn');
    const innerDiv = $('#inner');

    btn.on('click', (event) => {
      alert('¡Botón pulsado!');
      event.stopPropagation(); // Detener la propagación del evento
    });

    innerDiv.on('click', () => {
      alert('¡Div interno pulsado!');
    });

    $('#outer').on('click', () => {
      alert('¡Div externo pulsado!');
    });
  </script>
</body>
</html>
```

En el ejemplo anterior, cuando haces clic en el botón "Haz clic", se muestra "¡Botón pulsado!", pero no se activa "¡Div interno pulsado!" y "¡Div externo pulsado!". Esto se debe a que hemos llamado a `event.stopPropagation()` en el controlador de eventos de clic del botón, lo que evita la propagación del evento.

### Cancelar el comportamiento predeterminado del evento

Algunos elementos tienen un comportamiento predeterminado cuando se activa un evento. Por ejemplo, hacer clic en un botón de envío enviará el formulario, hacer clic en un enlace redirigirá a la dirección del enlace, etc. Si deseas evitar el comportamiento predeterminado de un evento, puedes usar el método `event.preventDefault()`.

Código de ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prevenir Comportamiento Predeterminado de Evento</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <label for="name">Nombre:</label>
    <input type="text" id="name" />
    <button id="submitBtn">Enviar</button>
  </form>

  <script>
    const form = $('#myForm');
    const submitBtn = $('#submitBtn');

    submitBtn.on('click', (event) => {
      event.preventDefault(); // Cancelar el comportamiento predeterminado del evento
      const name = $('#name').value;
      alert(`¡Hola, ${name}! Envío del formulario prevenido.`);
    });

    form.on('submit', () => {
      alert('¡Formulario enviado!');
    });
  </script>
</body>
</html>
```

En el ejemplo anterior, cuando haces clic en el botón de envío "Enviar", mostrará "¡Hola, {name}! Envío del formulario prevenido.", pero no mostrará la alerta "¡Formulario enviado!". Esto se debe a que llamamos a `event.preventDefault()` en el controlador de eventos del clic del botón de envío, lo que evita el comportamiento predeterminado de envío del formulario.

