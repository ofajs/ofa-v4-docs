<template is="exm-article">
<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html"></a>
<a href="../../publics/examples/use-scsr/public.css"></a>
<a href="../../publics/examples/use-scsr/app-config.mjs"></a>
</template>

# 使用 SCSR 方案

在這個示例中，請點擊 <span style='font-family: "iconfont"'>&#xe7cb;</span> 按鈕，以新頁面的方式打開並嘗試；

SCSR 的全稱是 Static Client-Side Rendering，又稱為靜態客戶端渲染。它是 CSR（Client-Side Rendering）的一種變種，在保留了 CSR 用戶體驗的基礎上，還能夠讓頁面在靜態狀態下被搜索引擎爬取。

當前網站采用的正是 SCSR 方案構建；

SCSR 通過直接運行單文件模式的頁面模塊，無需使用 `o-page` 標簽，實現在頁面上進行渲染。具體而言，就是將頁面模塊的模板代碼直接嵌套在 `o-app` 內。

## 注意事項

對於所有采用 SCSR 方案的頁面，除了頁面描述性的內容（如 title、meta:description、keywords）和頁面模板內容外，其他引用的資源必須保持一致，以確保在頁面跳轉和刷新後的用戶體驗一致。

