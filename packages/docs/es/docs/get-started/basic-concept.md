# Conceptos básicos de instancia

La instancia `$` es un encapsulamiento de los elementos en la página. Además de seleccionar elementos existentes, también puedes crear nuevos elementos y operar sobre ellos. En este capítulo, aprenderemos cómo crear nuevos elementos y realizar algunas operaciones en la instancia `$`.

## Crear nuevos elementos

Con la instancia `$`, puedes crear directamente nuevos elementos y operar sobre ellos. Por ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crear nuevo elemento</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <script>
    const $ele = $('<div style="color:red">Soy un texto</div>');
    $('body').push($ele);
  </script>
</body>
</html>
```

En el ejemplo anterior, creamos un nuevo elemento 'div' usando '$('<div style="color:red">I am text</div>')' y lo agregamos al 'body'.

## Obtener elementos secundarios

Las instancias creadas con '$' no tienen una propiedad 'children' como los elementos del DOM. Sin embargo, podemos acceder a los elementos secundarios directos de la instancia utilizando índices de matriz:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acceder a elementos secundarios</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
  </div>
  <script>
    const $div = $('div');
    console.log($div[0]); // Salida: <p>First Paragraph</p>
    console.log($div[1]); // Salida: <p>Second Paragraph</p>
    console.log($div.length); // Salida: 2
  </script>
</body>
</html>
```

En el ejemplo anterior, obtenemos el elemento 'div' y accedemos a los primeros y segundos elementos 'p' utilizando índices. También usamos '$div.length' para obtener la cantidad de elementos secundarios.

## Manipular elementos secundarios

Con las instancias de '$', también podemos usar los métodos de matriz para manipular los elementos secundarios, como 'push' y 'pop':

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manipular elementos secundarios</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <p>First Paragraph</p>
  </div>
  <script>
    const $paragraphs = $('p');
    
    // Agregar un nuevo elemento 'div' como elemento secundario
    const $newDiv = $('<div>New Div</div>');
    $paragraphs.push($newDiv);

    setTimeout(()=>{
      // Eliminar el último elemento secundario
      $paragraphs.pop();

      console.log($paragraphs);
    },1000)

  </script>
</body>
</html>
```

En el ejemplo anterior, obtuvimos todas las instancias '$' de los elementos 'p' y usamos el método 'push' para agregar un nuevo elemento 'div' como hijo, luego usamos el método 'pop' para eliminar el último hijo.

A través del ejemplo anterior, puedes aprender algunas operaciones básicas de la instancia '$', incluyendo la creación de nuevos elementos y el acceso y manipulación de los hijos. La instancia '$' proporciona métodos convenientes para operar en los elementos de la página.

