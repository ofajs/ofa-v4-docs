<template is="exm-article">
<a href="../../publics/examples/fill-temps/demo.html" preview></a>
<a href="../../publics/examples/fill-temps/test-demo.html" main></a>
</template>

# 遞歸填充渲染

填充渲染允許您使用獨立的模板來渲染數據，並通過 `<template>` 元素添加 `name` 屬性進行命名。這種方式使得您可以實現嵌套結構的數據渲染，從而創建更復雜的組件。

在使用 `x-fill` 進行填充渲染時，只需將對應的模板名稱傳遞給 `name` 屬性，即可渲染獨立模板的內容。此外，填充渲染還支持遞歸填充，即在模板內部可以繼續使用相同的模板名稱，實現嵌套填充。

在示例中，我們定義了一個名為 `item` 的獨立模板，並在 `x-fill` 使用時傳遞了相應的模板名稱。這樣，數據中的每個項都將使用這個模板進行渲染，而且模板內部可以再次使用相同的模板名稱進行遞歸填充。這種方式使得您可以靈活地處理具有嵌套結構的數據，實現更加復雜的組件渲染。


