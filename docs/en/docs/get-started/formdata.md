# Form Functionality

`$` provides convenient form functions that make handling form elements easier and more efficient.

## Create an object using formData

`formData` method is used to generate an object containing the values of all form elements within the target element. This object will reflect the changes made to the form elements in real time.

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

## Listening for specific form elements

By default, `formData()` listens to all `input`, `select`, and `textarea` elements within the target element. You can specify specific form elements to listen to by passing a selector.

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

## Stanz Objects

The object returned by the `formData()` method is called a Stanz object. Stanz is part of the `$` extension library, which provides efficient handling and monitoring functionality for form data.

You can find detailed tutorials and features of Stanz by visiting [https://github.com/kirakiray/stanz](https://github.com/kirakiray/stanz).

Through the above form functionality, you can easily handle the values and changes of form elements, thereby improving the convenience and efficiency of form operations.