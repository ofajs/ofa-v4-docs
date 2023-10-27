# host

Using the `host` property, you can obtain the instance of the host component for an element. This is very useful for accessing the data and methods of the host component from within the component.

Here is an example demonstrating how to use the `host` property to obtain an instance of the host component:

<comp-viewer comp-name="host-demo">

``` html
<template component>
  <div>tag: {{txt}}</div>
  <div>bool: {{txt2}}</div>
  <script>
    export default {
      tag: "host-demo",
      data: {
        txt: "-",
        txt2: '-'
      },
      ready(){
        const host = this.shadow.$("div").host;
        this.txt = host.tag;
        this.txt2 = host === this;
      }
    };
  </script>
</template>
```

</comp-viewer>

In this example, we created a custom component `host-demo` and accessed its host component instance inside the component, and then compared if they are equal.

If the element is not inside a component, the value of `host` will be `null`. For example:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    setTimeout(()=>{
        $("#logger").text = String($("#target").host);
    },500);
</script>
```

</html-viewer>

In this example, the `#target` element is under the body, not inside any component or page, so the value of `$("#target").host` is `null`.