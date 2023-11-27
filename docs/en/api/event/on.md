# on

Using the `on` method, you can register event handlers for target elements. This allows you to easily capture and respond to user interaction.

Here is an example demonstrating how to use the `on` method to register a click event handler for a button element:

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
    $("#target").on("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

In this example, we use the `on` method to add a click event handler for the button element. When the user clicks the button, the event handler is triggered, the counter will increment, and the result will be displayed on the page.

## Template Syntax Usage

You can also use template syntax to bind methods to target elements. Here is an example:

<comp-viewer comp-name="on-demo">

```html
<template component>
  <button on:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "on-demo",
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

In this example, we use the `on:click` binding on a button element to bind a method called `addCount`. When the user clicks the button, this method will be called, the counter value will increase and be displayed on the page. This allows you to associate event handlers with component methods, enabling more complex interactions.

## event

After registration time, the triggered function will be passed with [event](https://developer.mozilla.org/en-US/docs/Web/API/Event), consistent with the native.

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
    $("#target").on("click", (event)=> {
        $("#logger").text = event.type;
    });
</script>
```

</html-viewer>