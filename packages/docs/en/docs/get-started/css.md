 # CSS usage

In `ofa.js`, you can manipulate the CSS styles of an element using the following methods;

## Get specific CSS style of an element

You can use `$ele.css.xxx` to get the specific CSS style of an element, where `xxx` is the CSS property name you want to retrieve.

### Example

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  // Get the color style of the element
  const myElement = $("#myElement");
  const colorStyle = myElement.css.color;
  console.log(colorStyle); // Output: "blue"

  // Get the font size style of the element
  const fontSizeStyle = myElement.css.fontSize;
  console.log(fontSizeStyle); // Output: "18px"
</script>
```

## Set a specific style property

You can set the CSS style of an element using the `$ele.css.xxx = ''` syntax, where `xxx` is the CSS property name you want to set. By assigning an empty string as the property value, you can remove the specified style property.

### Example

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // Set the color style of the element
  myElement.css.color = 'red';
  // Remove the font size style of the element
  myElement.css.fontSize = '';
</script>
```

## Assigning an object

You can set the element's style using `$ele.css = {xxx}`, where `xxx` is an object containing CSS property names and values.

### Example

```html
<div id="myElement">Hello World</div>
<script>
  const myElement = $("#myElement");

  // Set the styles of the element
  myElement.css = {
    color: "red",
    fontSize: "24px",
    backgroundColor: "yellow",
  };
</script>
```

## Assigning Strings

You can set the style of an element using the `$ele.css = 'color:red;...'` syntax, where `'color:red;...'` is a string that contains CSS style rules.

### Example

```html
<div id="myElement">Hello World</div>
<script>
  const myElement = $("#myElement");

  // Set the style of the element
  myElement.css = 'color:red; font-size:24px; background-color:yellow;';
</script>
```

## Tips for setting CSS

You can modify a specific style property of an element without affecting other properties by using `$ele.css = {...$ele.css, color:'red'}`. This allows you to modify only one property without rewriting the entire style.

### Example

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // Modify the color style of the element while keeping other style properties unchanged
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

In the example above, by using `{ ...myElement.css, color: 'red' }`, we only modified the color style of the element while keeping other style properties unchanged. This is a convenient technique that allows flexible modification of element styles.

