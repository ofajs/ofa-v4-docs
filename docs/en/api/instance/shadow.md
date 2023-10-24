# shadow

Using the `shadow` property, you can obtain the shadow root instance of an element.

<comp-viewer comp-name="test-shadow">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <script>
        export default {
            tag:"test-shadow",
            ready(){
                setTimeout(()=>{
                    this.shadow.$("#target").text = 'change target';
                },500);
            }
        };
    </script>
</template>
```

</comp-viewer>

It is important to avoid directly modifying elements inside shadow nodes that have template syntax, in order to ensure consistency and maintainability of the operation.

## Get instances of elements inside the shadow DOM of a component from the outside

You can also obtain custom element instances from the external and access elements within the shadow tree through the `shadow` property as shown below:

```javascript
$("test-shadow").shadow.$('selector').method(xxx);
```