<template is="exm-article">
<a href="../../publics/examples/simple-component/demo.html" preview></a>
<a href="../../publics/examples/simple-component/my-comp.html" main></a>
<a href="../../publics/examples/simple-component/public.css"></a>
</template>

# 組件的創建和使用

一旦完成對 ofa.js 的加載，全局會注冊一個名為 `load-module` 的組件，你可以使用縮寫 `l-m` 來引用它。其使用方式類似於 `script` 標簽，通過 `src` 屬性來引用你開發好的組件地址。

現在，讓我們開始制作自己的組件。首先，創建一個 HTML 文件，文件名需要與組件名保持一致。

在組件文件中，首先添加一個 `template` 元素，並添加 `component`屬性。將組件需要渲染的內容放置在這個 `template` 元素內。最終，這些內容將被渲染到組件的 Shadow DOM 內，Shadow DOM 與外部環境隔離，以防止汙染外部環境。

接下來，只需使用 `l-m` 組件來引用你開發好的組件。在頁面上，直接使用你定義的組件標簽即可。

需要注意的是，注冊的組件名只能使用小寫英文字母和 **-** 符號，並且必須包含至少一個 **-**。這個命名規則需要遵循。

通過本示例，你可以了解如何創建一個名為 `my-comp` 的組件，並在另一個頁面中使用它。同時可以通過鏈接外部的 CSS 文件來設置組件的樣式。
