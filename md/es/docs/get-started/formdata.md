# Funcionalidad de formularios

La instancia de `$` proporciona algunas funciones de formulario convenientes para simplificar y mejorar el manejo de los elementos de formulario.

## Generar un objeto a partir de formData

El método `formData` se utiliza para generar un objeto que contiene los valores de todos los elementos del formulario. Este objeto reflejará instantáneamente los cambios en los elementos del formulario.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Data</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <input type="text" name="username" value="John Doe">
    <input type="email" name="email" value="johndoe@example.com">
    <textarea name="message">Hello World!</textarea>
  </form>
  <script>
    const data = $("#myForm").formData();
    console.log(data);
    // Salida: { username: "John Doe", email: "johndoe@example.com", message: "Hello World!" }

    // Observar los cambios en los datos del formulario
    data.watch(() => {
      console.log("¡Los datos del formulario han cambiado!", data);
    });
  </script>
</body>
</html>
```

## Escuchar elementos específicos del formulario

Por defecto, `formData()` escucha todos los elementos `input`, `select` y `textarea` dentro del elemento de destino. Puedes pasar selectores para escuchar elementos específicos del formulario.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Form Data</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <input type="text" name="username" value="John Doe">
    <input type="email" name="email" value="johndoe@example.com">
    <input type="checkbox" name="accept" checked>
  </form>
  <script>
    const data = $("#myForm").formData('input[type="text"], input[type="email"]');
    console.log(data);
    // Output: { username: "John Doe", email: "johndoe@example.com" }
  </script>
</body>
</html>
```

## Objetos Stanz

El objeto devuelto por el método `formData()` se conoce como objeto Stanz.Stanz forma parte de la biblioteca de extensiones `$` y proporciona un procesamiento y escucha eficientes para los datos de formulario.

Puede obtener más información sobre los tutoriales y las funciones de Stanz visitando [https://github.com/kirakiray/stanz](https://github.com/kirakiray/stanz).

A través de la funcionalidad de formulario anterior, puedes manejar fácilmente los valores y cambios de los elementos del formulario, mejorando la conveniencia y eficiencia de las operaciones del formulario.

