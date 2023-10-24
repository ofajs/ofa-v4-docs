`attr`

The `attr` method is used to get or set the [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) of an element.

## Direct Use

You can directly use the `attr` method to get or set the attributes of an element. Here is an example:

<html-viewer>

```
<!-- Include ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
</style>
<div id="target1" test-attr="1">I am target 1</div>
<div id="target2">I am target 2</div>
<div id="logger" style="border:blue solid 1px;padding:8px;margin:8px;">logger</div>

<script>
    $("#logger").text = $("#target1").attr('test-attr');
    setTimeout(()=> {
        $("#target1").attr('test-attr', '2')
        $("#logger").text = $("#target1").attr('test-attr');
    }, 500);
</script>
```

</html-viewer>

## Template Syntax Usage

You can also use the `attr:aaa="bbb"` syntax in the template to set the property **aaa** of the target element to the value of component **bbb**. This method is particularly useful for component rendering. Here is an example:

<comp-viewer comp-name="html-demo">

```html
<template component>
  <style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
  </style>
  <div attr:test-attr="txt">I am target</div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "1"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "2";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>