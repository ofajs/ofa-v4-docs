<template is="exm-article">
<a href="../../publics/examples/use-app/demo.html" preview></a>
<a href="../../publics/examples/use-app/page1.html" main></a>
<a href="../../publics/examples/use-app/page2.html"></a>
</template>

# 使用 app 組件

在 `ofa.js` 中，您可以使用 `o-app` 組件來創建整個應用的布局結構，並在其中加載不同的頁面模塊。通過使用 `o-app` 組件、`o-page` 組件和頁面模塊，您可以構建整個應用的頁面結構，並實現頁面之間的導航

當 `o-page` 組件位於 `o-app` 內部時，您可以使用帶有 `olink` 屬性的 `<a>` 標簽來實現頁面跳轉。這種跳轉不會影響當前頁面，而是只會在 `o-app` 內部進行跳轉，類似於使用 `<iframe>`。

如果 `o-page` 組件在 `o-app` 內部，您還可以使用以下方法：
- `goto` 方法來進行頁面跳轉
- `back` 方法返回上一頁
- `replace` 方法進行當前頁面的替換式跳轉

通過使用 `o-app` 組件，您可以構建整個應用的布局結構，並在其中加載不同的頁面模塊。同時，`o-app` 提供的路由功能使得頁面之間的跳轉變得更加方便和靈活。

在這個示例中，我們通過 `o-app` 組件創建了一個應用布局，然後在其中加載了一個頁面模塊 `page1.html`。

在 `page1.html` 頁面模塊中，我們定義了一個標題和一個按鈕，點擊按鈕會跳轉到另一個頁面模塊 `page2.html`。我們還添加了一個帶有 `olink` 屬性的鏈接，點擊鏈接同樣會導航到 `page2.html`。

在 `page2.html` 頁面模塊中，我們同樣定義了一個標題和一個按鈕，點擊按鈕會返回上一頁，實現頁面導航。
