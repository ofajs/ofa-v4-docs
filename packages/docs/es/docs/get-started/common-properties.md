# Propiedades comunes

En la instancia `$`, además de seleccionar elementos a través de selectores, también se proporcionan algunas propiedades comunes para facilitar la manipulación y búsqueda de elementos.

## Propiedad tag

La propiedad `tag` se utiliza para obtener el nombre de etiqueta (en minúsculas) del elemento actual, similar a la propiedad `tagName` del elemento DOM.

```html
<div id="example">Hola mundo</div>
<script>
    const $div = $('#example');
    console.log($div.tag); // Salida: "div"
</script>
```

## ele 属性

`ele` 属性 se utiliza para obtener el elemento DOM real de la instancia `$`, lo que permite realizar operaciones JavaScript nativas en ese elemento.

```html
<div id="example">Hola Mundo</div>
<script>
    const $div = $('#example');
    const elementoActual = $div.ele;
    elementoActual.style.color = "rojo"; // Cambiar el color del texto a rojo
</script>
```

## index 属性

`index` atributo se utiliza para obtener el índice de clasificación del elemento actual entre los elementos del mismo nivel, comenzando desde 0.

```html
<div>
    <span>Primero</span>
    <span>Segundo</span>
    <span id="target">Tercero</span>
</div>
<script>
    const $spanDestino = $('#target');
    console.log($spanDestino.index); // Resultado: 2
</script>
```

## parent y parents atributos 

- El atributo `parent` se utiliza para obtener el elemento padre directo del elemento actual. 
- El atributo `parents` se utiliza para obtener un arreglo de todos los elementos ancestros del elemento actual (incluyendo el padre del padre, el padre del padre del padre, etc.).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Atributos Parent y Parents</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <span>
      <a id="example">Hola Mundo</a>
    </span>
  </div>
  <script>
    const $a = $('#example');

    const $spanPadre = $a.parent;
    console.log($spanPadre.tag); // Resultado: "span"

    const $arregloParents = $a.parents;
    console.log($arregloParents.map($ele => $ele.tag)); // Resultado: ["span", "div", "body", "html"]
  </script>
</body>
</html>
```

## next, nexts, prev, prevs, siblings properties

- La propiedad `next` se utiliza para obtener el siguiente elemento hermano del elemento actual. 
- La propiedad `nexts` se utiliza para obtener un array de todos los elementos hermanos del elemento actual que se encuentran después de él. 
- La propiedad `prev` se utiliza para obtener el elemento hermano anterior del elemento actual. 
- La propiedad `prevs` se utiliza para obtener un array de todos los elementos hermanos del elemento actual que se encuentran antes de él. 
- La propiedad `siblings` se utiliza para obtener todos los elementos hermanos del elemento actual, sin incluirlo a él mismo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Atributos de los Hermanos</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <span>Zero</span>
    <span>First</span>
    <span id="example">Second</span>
    <span>Third</span>
    <span>Four</span>
  </div>
  <script>
    const $span = $('#example');

    const $nextSibling = $span.next;
    console.log($nextSibling.tag); // Salida: "span"

    const $nextSiblingsArray = $span.nexts;
    console.log($nextSiblingsArray.map($ele => $ele.text)) // Salida: ["Third", "Four"]

    const $prevSibling = $span.prev;
    console.log($prevSibling.tag); // Salida: "span"

    const $prevSiblingsArray = $span.prevs;
    console.log($prevSiblingsArray.map($ele => $ele.text)) // Salida: ["Zero", "First"]

    const $siblings = $span.siblings;
    console.log($siblings.map($ele => $ele.text)) // Salida: ["Zero", "First", "Third", "Four"]
  </script>
</body>
</html>
```

