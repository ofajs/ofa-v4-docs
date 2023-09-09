# classList y datos

## classList

En `ofa.js`, puedes manipular la propiedad classList del elemento de la siguiente manera: 
- `$ele.classList`: Devuelve el objeto classList del elemento, que se utiliza para manipular los nombres de clase del elemento.

### Uso de classList para a��adir y eliminar clases 

- Añadir una clase: `$ele.classList.add('nombreClase')`, agrega el nombre de clase especificado a classList del elemento. 
- Eliminar una clase: `$ele.classList.remove('nombreClase')`, elimina el nombre de clase especificado de classList del elemento. 
- Alternar una clase: `$ele.classList.toggle('nombreClase')`, si el nombre de clase ya existe en classList del elemento, lo elimina; de lo contrario, lo agrega.

### Ejemplo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>classList Demo</title>
    <style>
      .highlight {
        background-color: yellow;
      }
    </style>
    <script src="ofa.js"></script>
  </head>
  <body>
    <h2>classList Demo</h2>
    <div id="box" class="box">Soy una caja</div>
    <br />
    <button id="btnAdd">Añadir resaltado</button>
    <button id="btnRemove">Eliminar resaltado</button>
    <button id="btnToggle">Alternar resaltado</button>

    <script>
      const boxElement = $('#box');
      const btnAdd = $('#btnAdd');
      const btnRemove = $('#btnRemove');
      const btnToggle = $('#btnToggle');

      btnAdd.on('click', () => {
        boxElement.classList.add('highlight');
      });

      btnRemove.on('click', () => {
        boxElement.classList.remove('highlight');
      });

      btnToggle.on('click', () => {
        boxElement.classList.toggle('highlight');
      });
    </script>
  </body>
</html>
```

En este ejemplo, hay un elemento `<div>` con una clase inicial de `box` y tres botones: Añadir resalte, Eliminar resalte y Alternar resalte.
- Cuando se hace clic en el botón 'Añadir resalte', se agrega la clase `highlight` al elemento `<div>` utilizando el método `classList.add()`, lo que le da un fondo amarillo.
- Cuando se hace clic en el botón 'Eliminar resalte', se elimina la clase `highlight` del nombre de clase del elemento `<div>` utilizando el método `classList.remove()`, lo que restaura el estilo original.
- Cuando se hace clic en el botón 'Alternar resalte', se alterna la presencia de la clase `highlight` en el elemento `<div>` utilizando el método `classList.toggle()`. Si la clase ya estaba presente, se elimina; si no estaba presente, se agrega, logrando así el cambio de estilo.

De esta manera, puedes controlar dinámicamente el estilo de los elementos a través del objeto `classList`.

## Uso de data

En ofa.js, puedes operar las propiedades data de los elementos de la siguiente manera:

- `$ele.data`: devuelve el objeto dataset del elemento, que se utiliza para operar las propiedades data del elemento.

### Uso específico de dataset

Las propiedades `data-*` de los elementos se pueden utilizar para almacenar datos personalizados en HTML, y se pueden acceder a estas propiedades a través del objeto `data`.

Por ejemplo, si un elemento tiene la propiedad `data-info` definida:

```html
<div id="myElement" data-info="alguna información"></div>
```

Puedes acceder a esta propiedad utilizando `dataset`:

```javascript
const myElement = $('#myElement');
const info = myElement.data.info;
console.log(info); // Salida: "alguna información"
```

Ten en cuenta que los nombres de las propiedades en el objeto `dataset` se convierten a notación camel case eliminando `"data-"` de la propiedad original. Por ejemplo, `data-info` se convierte en `dataset.info`. Si deseas establecer una propiedad `data-*`, también puedes hacerlo a través del objeto `dataset`:

```javascript
myElement.data.anotherInfo = "otro valor";
```

Esto agregará una propiedad `data-another-info` al elemento y establecerá su valor como `"otro valor"`.

