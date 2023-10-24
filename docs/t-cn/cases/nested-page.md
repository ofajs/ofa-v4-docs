<template is="exm-article">
<a href="../../publics/examples/nested-page/demo.html" preview></a>
<a href="../../publics/examples/nested-page/page1.html"></a>
<a href="../../publics/examples/nested-page/page2.html"></a>
<a href="../../publics/examples/nested-page/layout.html" main></a>
</template>

# 嵌套頁面

一些應用程序的 UI 由多層嵌套的頁面組成，例如公用頂部或側邊的導航。你可以使用 `parent` 屬性來表示嵌套當前頁的父頁面。

父頁面的制作方式類似於組件開發，你需要創建一個包含整個框架布局的頁面，然後將嵌套到內部的子頁面放到 `slot` 中。

這個示例演示了如何創建嵌套頁面，其中 `page1.html` 和 `page2.html` 是子頁面，而 `layout.html` 是父頁面。父頁面 `layout.html` 包含了整個框架布局，而子頁面則通過 `parent` 屬性指向父頁面，表示它們應該嵌套在父頁面內。

當切換頁面時，會觸發 `routerChange` 事件。在頁面初始化和切換頁面時，你可以使用 `app.current` 屬性來獲取當前頁地址，並在頁面中修正標簽頁的激活狀態。