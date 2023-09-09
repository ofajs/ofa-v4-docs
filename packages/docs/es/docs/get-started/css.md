 # Uso de CSS

En `ofa.js`, puedes manipular el estilo CSS de los elementos de la siguiente manera:

## Obtener estilos CSS específicos de un elemento

Puedes usar `$ele.css.xxx` para obtener estilos CSS específicos de un elemento, donde `xxx` es el nombre de la propiedad CSS que deseas obtener.

### Ejemplo

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hola Mundo</div>
<script>
  // Obtener el estilo de color del elemento
  const myElement = $("#myElement");
  const estiloColor = myElement.css.color;
  console.log(estiloColor); // Resultado: "blue"

  // Obtener el estilo de tamaño de fuente del elemento
  const estiloTamañoFuente = myElement.css.fontSize;
  console.log(estiloTamañoFuente); // Resultado: "18px"
</script>
```

## Establecer un estilo específico

Puedes usar `$ele.css.xxx = ''` para establecer un estilo específico de un elemento, donde `xxx` es el nombre de la propiedad CSS que deseas establecer. Al asignar una cadena vacía como valor de la propiedad, puedes eliminar el estilo específico.

### Ejemplo

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hola Mundo</div>
<script>
  const myElement = $("#myElement");

  // Establecer el estilo de color del elemento
  myElement.css.color = 'red';
  // Eliminar el estilo de tamaño de fuente del elemento
  myElement.css.fontSize = '';
</script>
```

## Asignar un objeto

Puedes usar `$ele.css = {xxx}` para establecer el estilo de un elemento, donde `xxx` es un objeto que contiene los nombres y valores de las propiedades CSS.

### Ejemplo

```html
<div id="myElement">Hola Mundo</div>
<script>
  const myElement = $("#myElement");

  // Establecer el estilo del elemento
  myElement.css = {
    color: "red",
    fontSize: "24px",
    backgroundColor: "yellow",
  };
</script>
```

## Asignación de cadenas

Puede usar `$ele.css = 'color:red;...'` para establecer el estilo de un elemento, donde `'color:red;...'` es una cadena que contiene reglas de estilo CSS.

### Ejemplo

```html
<div id="myElement">Hola Mundo</div>
<script>
  const myElement = $("#myElement");

  // Establecer el estilo del elemento
  myElement.css = 'color:red; font-size:24px; background-color:yellow;';
</script>
```

## Consejos para establecer CSS

Puede modificar una determinada propiedad de estilo de un elemento sin afectar a las demás propiedades utilizando la sintaxis `$ele.css = {...$ele.css, color:'red'}`. De esta forma, se puede modificar una propiedad sin tener que reescribir todo el estilo.

### Ejemplo

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hola Mundo</div>
<script>
  const myElement = $("#myElement");

  // Modificar el color del elemento manteniendo las demás propiedades de estilo
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

En el ejemplo anterior, al usar `{ ...myElement.css, color: 'red' }`, solo se modifica el color del elemento y las demás propiedades de estilo se mantienen sin cambios. Este es un consejo útil para modificar de forma flexible el estilo de un elemento.

