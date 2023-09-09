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

## 监听特定表单元素

默认情况下，`formData()` 监听目标元素内的所有 `input`、`select` 和 `textarea` 元素。你可以通过传递选择器来监听特定的表单元素。

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

## Stanz 对象

`formData()` 方法返回的对象被称为 Stanz 对象。Stanz 是 `$` 扩展库的一部分，提供了对表单数据的高效处理和监听功能。

你可以通过访问 [https://github.com/kirakiray/stanz](https://github.com/kirakiray/stanz) 来详细了解 Stanz 的使用教程和功能。

A través de la funcionalidad de formulario anterior, puedes manejar fácilmente los valores y cambios de los elementos del formulario, mejorando la conveniencia y eficiencia de las operaciones del formulario.

