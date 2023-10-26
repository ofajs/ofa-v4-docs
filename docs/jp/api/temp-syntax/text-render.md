# 文本渲染

你可以使用两个包裹的大括号的形式 `{{xxx}}` 在模板内渲染文本，其中 `xxx` 是组件或页面自身的属性。这允许你将属性的值直接渲染到页面上。

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

この例では、`{{txt}}`は、プロパティ`txt`の値で置き換えられ、最終的にページ上に表示されます。