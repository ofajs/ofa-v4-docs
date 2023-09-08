# 使用頁面組件

一旦加載了 `ofa.js`，全局會自動添加一個名為 `o-page` 的頁面組件。這個組件用於加載頁面模塊，頁面模塊是一種特殊的組件模塊，不會注冊為自定義標簽，而是通過 `o-page` 組件來加載。

頁面模塊類似於組件模塊，但是有一些不同之處。頁面模塊使用 `page` 屬性來定義模板，而不是 `component` 屬性。頁面模塊的開發邏輯和組件模塊一樣，使用相同的模板語法和模板組件等。然而，頁面模塊不能使用 `attrs` 特性，因為頁面的參數通常通過 URL 傳遞，而不是通過 `data` 或 `attrs`。

在示例中，`o-page` 組件用於加載 `page.html` 頁面模塊。頁面模塊中使用 `page` 屬性定義模板，然後通過 JavaScript 函數返回一個對象來設置數據。URL 中的查詢參數 `count` 會被傳遞到頁面模塊中，並被用於初始化數據。頁面內的按鈕點擊事件可以更新數據並在頁面中呈現。

<a href="../../publics/examples/use-page/demo.html" preview demo></a>
<a href="../../publics/examples/use-page/page.html" main demo></a>

