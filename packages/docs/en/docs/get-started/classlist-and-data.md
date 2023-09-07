# classList and data

## classList

In `ofa.js`, you can manipulate an element's classList using the following methods: 
- `$ele.classList`: Returns the element's classList object, used for manipulating the element's class names.

### classList usage for adding and removing class names 

- Adding a class name: `$ele.classList.add('className')`, adds the specified class name to the element's classList. 
- Removing a class name: `$ele.classList.remove('className')`, removes the specified class name from the element's classList. 
- Toggling a class name: `$ele.classList.toggle('className')`, removes it if the element's classList already contains the class name; otherwise, adds it.

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

In this example, there is a `<div>` element with an initial class name of `box`, as well as three buttons: Add Highlight, Remove Highlight, and Toggle Highlight. 
- When the "Add Highlight" button is clicked, the `highlight` class name is added to the `<div>` element using the `classList.add()` method, giving it a yellow background color. 
- When the "Remove Highlight" button is clicked, the `highlight` class name is removed from the `<div>` element's class name using the `classList.remove()` method, restoring the original style. 
- When the "Toggle Highlight" button is clicked, the `highlight` class name of the `<div>` element is toggled using the `classList.toggle()` method. If the class name already exists, it is removed; if it doesn't exist, it is added, achieving a style toggle.

This way, you can use the `classList` object to manage the class names of an element, dynamically controlling its styles.

## Usage of data

In `ofa.js`, you can manipulate an element's data attribute in the following ways: 
- `$ele.data`: Returns the dataset object of the element, used for manipulating its data attribute.

### Specific usage of dataset

An element's `data-*` attributes can be used to store custom data in HTML and can be accessed using the `data` object.

For example, if an element has a `data-info` attribute:

```html
<div id="myElement" data-info="some information"></div>
```

You can use `dataset` to access that attribute:

```javascript
const myElement = $('#myElement');
const info = myElement.data.info;
console.log(info); // Output: "some information"
```

Note: The property names in the `dataset` object are converted to camel case, excluding the `"data-"` part. For example, `data-info` becomes `dataset.info`. If you want to set a `data-*` attribute, you can also achieve it through the `dataset` object.

```javascript
myElement.data.anotherInfo = "another value";
```

This will add a `data-another-info` attribute to the element and set its value to "another value".

