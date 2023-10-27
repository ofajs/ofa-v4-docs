# sync

sync構文を使用してコンポーネントに双方向データバインディングを設定

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

sync は、埋め込まれたコンポーネントのインスタンスプロパティともバインドできます。具体例については、[双方向データバインディング](../../cases/sync.md) をご覧ください。