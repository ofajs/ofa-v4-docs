# sync

通过 sync 语法对组件进行双向数据绑定

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

syncは、内部のコンポーネントインスタンスプロパティともバインディングできます。例は[双方向データバインディング](../../cases/sync.md)を参照してください。；