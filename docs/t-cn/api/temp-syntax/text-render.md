# 文本渲染

你可以使用兩個包裹的大括號的形式 `{{xxx}}` 在模板內渲染文本，其中 `xxx` 是組件或頁面自身的屬性。這允許你將屬性的值直接渲染到頁面上。

以下是一個示例，演示了如何在模板中渲染文本：

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

在這個示例中，`{{txt}}` 將會被屬性 `txt` 的值替代，最終呈現在頁面上。