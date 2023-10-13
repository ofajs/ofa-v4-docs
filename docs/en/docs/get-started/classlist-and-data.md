# classList and data

## classList

In `ofa.js`, you can manipulate the classList of elements using the following methods:
- `$ele.classList`: Returns the classList object of the element, which is used to manipulate the element's class names.

### Usage of classList for adding or removing classes

- Add Class Name: `$ele.classList.add('className')`, adds the specified class name to the element's classList.
- Remove Class Name: `$ele.classList.remove('className')`, removes the specified class name from the element's classList.
- Toggle Class Name: `$ele.classList.toggle('className')`, removes the class name if it already exists in the element's classList; otherwise, adds the class name.

### Example

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
    <div id="box" class="box">I am a box</div>
    <br />
    <button id="btnAdd">Add Highlight</button>
    <button id="btnRemove">Remove Highlight</button>
    <button id="btnToggle">Toggle Highlight</button>

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

In this example, there is a `<div>` element with an initial class name `box`, and three buttons: Add Highlight, Remove Highlight, and Toggle Highlight.
- When the "Add Highlight" button is clicked, use the `classList.add()` method to add the class name "highlight" to the `<div>` element, giving it a yellow background color.
- When the "Remove Highlight" button is clicked, use the `classList.remove()` method to remove the class name "highlight" from the `<div>` element's class list, restoring the original style.
- When the "Toggle Highlight" button is clicked, use the `classList.toggle()` method to toggle the "highlight" class name of the `<div>` element. If the class name already exists, remove it; if it doesn't exist, add it, thus achieving the toggling of the style.

In this way, you can use the `classList` object to manage the class names of the elements, thus achieving dynamic control over the element styles.

## Usage of the "data" keyword

In `ofa.js`, you can manipulate the data attribute of an element using the following methods:
- `$ele.data`: Returns the dataset object of the element to manipulate the element's data attribute.

Specific usage of dataset

The `data-*` attribute of an element can be used to store custom data in HTML, and these attributes can be accessed through the `data` object.

For example, if there is an element that defines the `data-info` attribute:

```html
<div id="myElement" data-info="some information"></div>
```

You can use `dataset` to access this property: 

```javascript
const myElement = $('#myElement');
const info = myElement.data.info;
console.log(info); // Output: "some information"
```

Note: The attribute name in the `dataset` object will convert the part after `"data-"` to camel case. For example, `data-info` becomes `dataset.info`. If you want to set the `data-*` attribute, you can also achieve it through the `dataset` object.

```javascript
myElement.data.anotherInfo = "another value";
```

This will add a `data-another-info` attribute to the element and set its value to "another value".