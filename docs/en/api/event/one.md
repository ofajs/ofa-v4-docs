# one

Using the `one` method, you can register a one-time event handler for the target element, which means the event handler will automatically be unbound after the first trigger and will not be triggered again.

Here is an example demonstrating how to use the `one` method to register a click event handler for a button element:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").one("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

In this example, we use the `one` method to add a click event handler to a button element. When the user clicks the button, the event handler is triggered, but it will not be triggered again afterwards because it has been unbound.

## Template Syntax Usage

You can also use template syntax to bind one-time event handlers for target elements. Here is an example: 

<comp-viewer comp-name="one-demo">

```html
<template component>
  <button one:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "one-demo",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        }
      }
    };
  </script>
</template>
```

</comp-viewer>

In this example, we use `one:click` to bind a method called `addCount` to the button element. When the user clicks the button, this method will be called, but it will not be triggered again afterwards because it is a one-time event handler.