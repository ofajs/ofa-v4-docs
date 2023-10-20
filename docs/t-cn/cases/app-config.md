<template is="exm-article">
  <a href="../../publics/examples/use-config/demo.html" preview></a>
  <a href="../../publics/examples/use-config/app-config.mjs" main></a>
  <a href="../../publics/examples/use-config/page1.html"></a>
  <a href="../../publics/examples/use-config/page2.html"></a>
</template>

# 配置 app 參數

您可以通過為 `o-app` 標簽單獨設置外部模塊來配置應用的參數。

這些參數是一個 ES 模塊，您可以配置以下參數：

- **home**: 應用的首頁，即初始加載時顯示的頁面。
- **loading**: 在應用頁面點擊跳轉時，在未完成模塊加載前，顯示的加載中內容。您可以通過返回一個字符串作為 loading 內容。
- **pageAnime**: 頁面跳轉時的動畫效果，使用的是一個包含 CSS 樣式屬性的對象。
  - **current**: 表示頁面處於當前頁時的樣式。
  - **next**: 表示頁面在未進場時的樣式。
  - **previous**: 表示頁面在要退出時的樣式。

通過這種方式，您可以根據應用的需要，自定義首頁、加載中樣式和頁面跳轉動畫等參數，從而為應用帶來更加個性化的體驗。
