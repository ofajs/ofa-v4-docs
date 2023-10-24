# sync

Bidirectional data binding of components via sync syntax

<comp-viewer comp-name="sync-render">

```html
<template component>
    <input type="text" sync:value="txt" />
    <br>
    render txt: {{txt}}
    <script>
        export default {
            tag:"sync-render",
            data:{
                txt:"I am txt"
            },
        };
    </script>
</template>
```

</comp-viewer>

sync can also be bound to the instance properties of embedded components. For examples, please refer to the [two-way data binding](../../cases/sync.md) case.