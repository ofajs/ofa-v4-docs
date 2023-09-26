# Form Functionality

The `$` object provides some convenient form functionality, making it easier and more efficient to handle form elements.

## Generating an Object using formData

The `formData` method is used to generate an object containing the values of all form elements within the target element. This object reflects the changes in form elements in real-time.

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
    // Output: { username: "John Doe", email: "johndoe@example.com", message: "Hello World!" }

    // Watch for changes in form data
    data.watch(() => {
      console.log("Form data changed!", data);
    });
  </script>
</body>
</html>
```

## Listening to Specific Form Elements

By default, `formData()` listens to all `input`, `select`, and `textarea` elements within the target element. You can listen to specific form elements by passing a selector.

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

## Stanz Object

The object returned by the `formData()` method is called the Stanz object. Stanz is part of the `$` extension library and provides efficient handling and listening functionality for form data.

You can learn more about Stanz and its usage tutorials and features by visiting [https://github.com/kirakiray/stanz](https://github.com/kirakiray/stanz).

By using the form function above, you can easily handle the values and changes of form elements, thereby improving the convenience and efficiency of form operations.

