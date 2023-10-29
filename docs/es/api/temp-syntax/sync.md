# sync

Vinculación bidireccional de datos de componentes mediante sintaxis de sincronización.

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

sync también puede vincularse a las propiedades de instancia de componentes incrustados. Consulta el ejemplo en [Data binding bidireccional](../../cases/sync.md).