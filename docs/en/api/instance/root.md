# root

Using the `root` attribute to access the root node of an element.

On a webpage, the root node of ordinary elements is an instance of [document](https://developer.mozilla.org/en-US/docs/Web/API/Document).

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">I am target</li>
</ul>
<div id="logger" style="padding:16px;color:green;"></div>

<script>
    setTimeout(()=>{
        $('#logger').text = $("#target").root.ele === document;
    }, 500);
</script>
```

</html-viewer>

## Elements Inside Shadow DOM

Because the elements inside a component are isolated from the external environment, the `root` attribute of the elements inside the shadow node is the shadow root node.

<comp-viewer comp-name="test-root">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <h3>logger1:</h3>
    <div id="logger1" style="color:red;">{{l1}}</div>
    <h3>logger2:</h3>
    <div id="logger2" style="color:green;">{{l2}}</div>
    <script>
        export default {
            tag: "test-root",
            data: {
                l1: "",
                l2: ""
            },
            ready() {
                this.l1 = this.shadow.$("#target").root === this.shadow;
                this.l2 = this.root.ele === document;
            }
        };
    </script>
</template>
```

</comp-viewer>

