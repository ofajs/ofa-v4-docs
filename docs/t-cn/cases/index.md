<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# 快速開始

要開始使用，只需通過引入 CDN 地址將項目 `ofajs` 集成到你的項目中：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.20/dist/ofa.js"></script>
```

這是一個簡單的示例，演示了如何使用 `ofa.js` 修改 DOM 元素的內容：

## 使用方法

引入了 `ofa.js` 後，全局作用域中將注冊 `$` 符號。通過 `$('xxx')` 來選擇符合條件的第一個元素，其中 `xxx` 是標準的 [CSS 選擇器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) 內容。

在上述示例中，我們使用了 `$` 符號來選擇三個具有不同 `id` 的元素，並通過設置 `text` 、 `html` 和 `value` 屬性來修改其內容。

要了解更多可用的屬性和方法，請查閱 API 文檔。
