# Box Model

In web development, the size of an element is an important concept, which includes the content area, padding, border, and margin. The following are some related properties that represent the size of an element:

## width

`width` represents the width of the content area of an element, excluding the padding, border, and margin.

## height

`height` represents the height of an element's content area, excluding padding, border, and margin.

## clientWidth

`clientWidth` represents the width of the visible content area of an element, including padding but excluding borders and margins.

## clientHeight

`clientHeight` represents the height of the visible content area of an element, including padding but excluding borders and margins.

## offsetWidth

`offsetWidth` represents the overall width of an element, including the content area, padding, border, and margin.

## offsetHeight

`offsetHeight` represents the overall height of an element, including the content area, padding, border, and margin.

## outerWidth

`outerWidth` represents the overall width of an element, including the content area.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    #box {
      width: 150px;
      height: 100px;
      background-color: #f0f0f0;
      border: 2px solid #333;
      padding: 20px;
      margin: 30px;
    }
</style>
<div id="box">I am a div element.</div>

<div id="logger"></div>
<script>
    const box = $('#box');

    $("#logger").html = `
    width: ${box.width}px <br>
    height: ${box.height}px <br>
    clientWidth: ${box.clientWidth}px <br>
    clientHeight: ${box.clientHeight}px <br>
    offsetWidth: ${box.offsetWidth}px <br>
    offsetHeight: ${box.offsetHeight}px <br>
    outerWidth: ${box.outerWidth}px <br>
    outerHeight: ${box.outerHeight}px
    `;
</script>
```

</html-viewer>