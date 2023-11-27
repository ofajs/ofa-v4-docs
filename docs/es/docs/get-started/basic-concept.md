# Conceptos básicos de instancias

La instancia `$` es una encapsulación de los elementos en la página. Además de seleccionar elementos existentes, también se puede usar para crear nuevos elementos y operar sobre ellos. En este capítulo, se explicará cómo crear nuevos elementos y algunas operaciones sobre la instancia `$`.

## Crear nuevo elemento

Con la instancia `$`, podemos crear nuevos elementos y manipularlos directamente, por ejemplo:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<script>
  const $ele = $('<div style="color:red">I am text</div>');
  $('body').push($ele);
</script>
```

</html-viewer>

En el ejemplo anterior, creamos un nuevo elemento `div` con el código `$('<div style="color:red">I am text</div>')` y lo agregamos al `body`.

## Obtener elementos secundarios

Los ejemplos obtenidos a través de `$`, no tienen la propiedad `children` como un elemento DOM. Pero podemos acceder a los elementos hijos directos de la instancia usando índices de matriz.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div>
  <p>First Paragraph</p>
  <p>Second Paragraph</p>
</div>
<script>
  const $div = $('div');
  console.log($div[0]); // Output: <p>First Paragraph</p>
  console.log($div[1]); // Output: <p>Second Paragraph</p>
  console.log($div.length); // Output: 2
</script>
```

</html-viewer>

En el ejemplo anterior, obtenemos el elemento `div` y accedemos al primer y segundo elemento `p` mediante índices. Al mismo tiempo, también utilizamos `$div.length` para obtener la cantidad de elementos hijos.

## Operando con elementos hijos

A través de `$` instancia, también podemos usar directamente los métodos del arreglo para manipular los elementos secundarios, como `push` y `pop`.


<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div>
  <p>Primer Párrafo</p>
</div>
<script>
  const $paragraphs = $('p');
  
  // Agregar nuevo elemento div como hijo
  const $newDiv = $('<div>Nuevo Div</div>');
  $paragraphs.push($newDiv);

  setTimeout(()=>{
    // Eliminar el último elemento hijo
    $paragraphs.pop();

    console.log($paragraphs);
  },1000)
</script>
```

</html-viewer>

En el ejemplo anterior, obtuvimos todas las instancias de elementos `p` y usamos el método `push` para agregar un nuevo elemento `div` como hijo, luego usamos el método `pop` para eliminar el último hijo.

A través de los ejemplos anteriores, puedes conocer algunas operaciones básicas de una instancia `$`, incluyendo la creación de nuevos elementos y el acceso y manipulación de elementos secundarios. Una instancia `$` proporciona métodos convenientes para operar con elementos en la página.