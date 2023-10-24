The text you provided cannot be translated because it does not contain any actual content.

The `$` method is a core function in `ofa.js` that is used to manipulate instances of DOM elements. Below will introduce the main functions of `$`:

## Get element instance

Through the `$` method, you can get the first element instance on the page that matches the [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) and manipulate it. Here is an example:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

<html>
<div id="target1">target 1 text</div>

<script>
  setTimeout(()=>{
    $("#target1").text = 'change target 1';
  },500);
</script>
</html>

</html-viewer>

In the example above, we use the `$` symbol to select the element instance with the `id` of "target1", and modify its text content by setting the `text` attribute.

## Searching for Child Elements Example

Instances also have the `$` method, which allows you to retrieve the first child element instance that matches a certain condition by calling the `$` method on the instance.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <h3>target</h3>
  <p>I am target1</p>
</div>

<script>
  const tar = $("#target1");
  tar.$('h3').text = 'change target title';
</script>
```

</html-viewer>

## Element Instance Characteristics

Please do not directly insert the acquired element instance into other places, as this operation will affect the original element. If you need to create a copy, you can use the [clone](./clone.md) method.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="pos1" style="border:red solid 1px;">
  <h3>position 1</h3>
  <p id="target1" style="color:green">I am target1</p>
</div>

<div id="pos2" style="border:blue solid 1px;margin:8px;">
  <h3>position 2</h3>
</div>

<script>
  setTimeout(()=>{
    const tar = $("#target1");
    $("#pos2").append(tar);
  },500);
</script>
```

</html-viewer>

## Get child elements within a shadow node

You can obtain the instance through the [shadow](./shadow.md) property and then use the `$` method to obtain the desired element.

```javascript
$('my-component').shadow.$("selector").method(xxx)
```
## Instantiate elements directly

You can directly initialize native elements as `$` instance objects using the following methods:

```
const ele = document.createElement('div');
const $ele = $(ele);
```

```javascript
const ele = document.querySelector('#target');
const $ele = $(ele);
```

This way, you can easily convert existing HTML elements into `$` instances for manipulation and processing using the functionality provided by `$`.

## Generating Element Instances

In addition to accessing existing element instances, `$` can also be used to create new element instances and add them to the page.

### Generate a string

You can use the `$` function to create new element instances from strings, as shown below:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $(`<div style="color:red">add target 1 text</div>`);
  $('#target1').push(newEl);
</script>
```

</html-viewer>

In this example, we use the `$` function to create a new element instance with specified styles and text content, and add it to the existing element instance with `id` "target1".

### Generate through Objects

You can also use the `$` function to generate new element instances through object-oriented approach, as shown below:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $({
    tag: "div",
    text: "add target 1 text",
    css: {
      color: "red"
    }
  });

  $('#target1').push(newEl);
</script>
```

</html-viewer>

In this example, we use the `$` function to define a new element instance using an object format, including the tag type, text content, and style attributes, and add it to an existing element instance with the id "target1".