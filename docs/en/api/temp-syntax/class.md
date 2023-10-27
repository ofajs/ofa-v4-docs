# class

You can quickly switch the class name inside the template using the `class` syntax. In `class:aaa="bbb"`, the `aaa` className will be added to the target element when the `bbb` expression (or the `bbb` property of the component itself) is true.

Please note that the className cannot contain uppercase letters. Please use "-" as a separator.

The following is an example demonstrating how to use the `class` syntax to switch the class name of an element in a template:

<comp-viewer comp-name="test-class">

```html
<template component>
    <style>
        .color-red{
            color:red;
        }
        .color-blue{
            color:blue;
        }
    </style>
    <div 
      class:color-red="txt == 1" 
      class:color-blue="txt == 2" 
      on:click="switch1">Click Me</div>
    <script>
        export default {
          tag:"test-class",
          data:{
            txt:"1"
          },
          proto:{
            switch1(){
              this.txt = (this.txt == 1) ? 2 : 1;
            }
          }
        };
    </script>
</template>
```

</comp-viewer>

## Using classes directly

You can use the `class` method to directly manipulate the className of an element. In the example below, it demonstrates how to dynamically add and remove class names using the `class` method:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    .color-red{
        color:red;
    }
    .color-blue{
        color:blue;
    }
</style>
<div id="target">I am target</div>

<script>
    setTimeout(()=>{
        $('#target').class('color-red',true);
    },500);
    setTimeout(()=>{
        $('#target').class('color-red',false);
    },1000);
    setTimeout(()=>{
        $('#target').class('color-blue',true);
    },1500);
</script>
```

</html-viewer>


In this example, we first use the `class` method to add the `color-red` class to the element, then remove it after one second, and add the `color-blue` class to the element after half a second. This will dynamically change the style of the target element.

We recommend using the [classList](../props/class-list.md) property to manipulate class names, as it is a more common and standard method.