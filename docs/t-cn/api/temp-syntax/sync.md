# sync

通過 sync 語法對組件進行雙向數據綁定

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

sync 還可以和內嵌的組件實例屬性進行綁定，案例請查看[雙向數據綁定](../../cases/sync.md)；