# テキストレンダリング

{{{xxx}}}の形式でテンプレート内でテキストをレンダリングすることができます。ここで、xxxはコンポーネントまたはページ自体の属性です。これにより、属性の値を直接ページにレンダリングすることができます。

以下は、テキストをテンプレートにレンダリングする方法を示した例です：

<comp-viewer comp-name="text-render">

```html
<template component>
    render test: {{txt}}
    <script>
        export default {
            tag:"text-render",
            data:{
                txt:"I am txt"
            },
        };
    </script>
</template>
```

</comp-viewer>

この例では、`{{txt}}` はプロパティ `txt` の値に置き換えられ、最終的にページに表示されます。