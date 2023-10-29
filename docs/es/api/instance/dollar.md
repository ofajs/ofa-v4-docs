# $

`$` es una función principal en `ofa.js` que se utiliza para manipular instancias de elementos del DOM. A continuación se presentan los principales usos de `$`:

## Obtener instancias de elementos

A través del método `$`, puedes obtener la primera instancia de elemento que cumple con un [selector CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_selectors) en la página y realizar operaciones en ella. A continuación se muestra un ejemplo:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1 text</div>

<script>
  setTimeout(()=>{
    $("#target1").text = 'change target 1';
  },500);
</script>
```

</html-viewer>

En el ejemplo anterior, usamos el símbolo `$` para seleccionar una instancia de elemento con `id` "target1" y modificamos su contenido de texto estableciendo el atributo `text`.

## Ejemplo de búsqueda de elementos secundarios

Las instancias también tienen un método `$` que te permite obtener la primera instancia de elemento que cumple con una condición de selección en la instancia.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <h3>target</h3>
  <p>I am target1</p>
</div>

<script>
  const tar = $("#target1");
  tar.$('h3').text = 'change target title';
</script>
```

</html-viewer>

## Atributos de la instancia del elemento

No inserte directamente las instancias de elementos recuperados en otros lugares, ya que esto afectará a los elementos originales. Si necesita crear una copia, puede usar el método [clone](./clone.md).

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="pos1" style="border:red solid 1px;">
  <h3>position 1</h3>
  <p id="target1" style="color:green">I am target1</p>
</div>

<div id="pos2" style="border:blue solid 1px;margin:8px;">
  <h3>position 2</h3>
</div>

<script>
  setTimeout(()=>{
    const tar = $("#target1");
    $("#pos2").push(tar);
  },500);
</script>
```

</html-viewer>

## Obtener los elementos secundarios dentro de un nodo sombreado

Puede obtener la instancia mediante el [atributo shadow](./shadow.md) y luego obtener el elemento deseado mediante el método `$`;

```javascript
$('my-component').shadow.$("selector").method(xxx)
```
## Instantiation of elements

Puede inicializar elementos nativos directamente en objetos de instancia `$` de la siguiente manera:

```javascript
const ele = document.createElement('div');
const $ele = $(ele);
```

```javascript
const ele = document.querySelector('#target');
const $ele = $(ele);
```

De esta manera, puedes convertir fácilmente los elementos HTML existentes en instancias de `$` para poder utilizar las funcionalidades proporcionadas por `$` para operar y procesarlos.

## Generación de instancias de elementos

Además de obtener instancias de elementos existentes, `$` también se puede utilizar para crear nuevas instancias de elementos y agregarlos a la página.

### Generado a partir de cadenas

Puedes usar la función `$` para crear nuevas instancias de elementos a partir de cadenas, como se muestra a continuación:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $(`<div style="color:red">add target 1 text</div>`);
  $('#target1').push(newEl);
</script>
```

</html-viewer>

En este ejemplo, usamos la función `$` para crear una nueva instancia de elemento con un estilo y contenido de texto específico, y lo agregamos a una instancia de elemento existente con el atributo `id` "target1".

### Generado a través de objetos

También puedes usar la función `$` para generar nuevas instancias de elementos utilizando objetos, como se muestra a continuación:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $({
    tag: "div",
    text: "add target 1 text",
    css: {
      color: "red"
    }
  });

  $('#target1').push(newEl);
</script>
```

</html-viewer>

En este ejemplo, estamos utilizando la función `$` para definir una nueva instancia de elemento utilizando un objeto, que incluye el tipo de etiqueta, el contenido de texto y los atributos de estilo, y luego lo agregamos a una instancia de elemento existente con el id "target1".