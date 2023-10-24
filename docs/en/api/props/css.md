# css

The `CSS` method is used to get or set the style of the target element.

## Direct Use

You can directly use the `css` method to get or set the style of an element. Here is an example:

<html-viewer>

```
<!-- Include ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").css.color;
    setTimeout(()=> {
        $('#target').css.color = 'red';
        $("#logger").text = $("#target").css.color;
    }, 1000);
</script>
```

</html-viewer>

## Full settings

Through the obtained `css` object, you can get the style value directly set on the element. Here is an example: 

<html-viewer>

```
<!-- Include ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target" style="color:red">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = Object.keys($("#target").css);

    setTimeout(()=>{
        // Override existing styles
        $("#target").css = {
            color: "blue",
            lineHeight: "5em"
        };
        $("#logger").text = Object.keys($("#target").css);
    }, 500);
</script>
```

</html-viewer>

Using the features of the `css` object, you can quickly adjust the style of the target element.

## Template Syntax Usage

You can also use template syntax to set the style of the target element. Here is an example: 

<comp-viewer comp-name="css-demo">

```html
<template component>
  <div :css.color="txt">I am target</div>
  <script>
    export default {
      tag: "css-demo",
      data: {
        txt: "red"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "blue";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>

## Tips for Setting CSS

You can modify a specific style property of an element by using `$ele.css = {...$ele.css, color:'red'}`, without affecting other style properties. This method allows you to modify only one property without rewriting the entire style.

### Example

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // Modify the color style of the element while keeping other style properties unchanged
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

In the example above, by using `{ ...myElement.css, color: 'red' }`, we only modified the color style of the element, while keeping other style properties unchanged. This is a convenient trick that allows flexible modifications of the element's style.