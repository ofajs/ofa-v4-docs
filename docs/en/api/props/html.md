# html

Setting the html code within the target.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
    <span style="color:green;">target 1</span>
</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;"></div>

<script>
setTimeout(()=> {
    $('#target2').html = `<b style="color:blue;">new text</b>`;

    console.log($("#target1").text) // => <span style="color:green;">target 1</span>;
    $("#logger").html = $("#target1").html;
}, 500);
</script>
```

</html-viewer>

## Caveat

html is a rather dangerous method. When it is injected with `script`, the internal `javascript` code will automatically execute. When using it, pay attention to preventing [XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

## Template Syntax Usage

You can also use the `:html` property in the template to set corresponding property values for the target element. This is particularly useful in component rendering. Here is an example: 

<comp-viewer comp-name="html-demo">

```html
<template component>
  <div>Rendered html: 
    <span :html="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(() => {
          this.txt = "<b style='color:blue;'>change txt</b>";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>