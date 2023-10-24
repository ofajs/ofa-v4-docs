# text

The `text` method is used to get or set the text content of an element.

## Direct Use

You can directly get or set the text content of an element. Here is an example:

<html-viewer>

```
<!-- Referencing ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=> {
        $('#target2').text = `<b style="color:blue;">new text</b>`; // can only set text, if you want tags to take effect, please set html attribute

        console.log($("#target1").text) // => 'target 1';
        $("#logger").text = $("#target1").text;
    }, 500);
</script>
```

</html-viewer>

## Template Syntax Usage

You can also use the `:text` property in the template to set the corresponding property value for the target element. This is particularly useful in component rendering. Here is an example:

<comp-viewer comp-name="text-demo">

```html
<template component>
  <div>Rendered text: 
    <span :text="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "change txt";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>