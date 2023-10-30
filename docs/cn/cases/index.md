<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# 快速开始

要开始使用，只需通过引入 CDN 地址将项目 `ofajs` 集成到你的项目中：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/dist/ofa.js"></script>
```

这是一个简单的示例，演示了如何使用 `ofa.js` 修改 DOM 元素的内容：

## 使用方法

引入了 `ofa.js` 后，全局作用域中将注册 `$` 符号。通过 `$('xxx')` 来选择符合条件的第一个元素，其中 `xxx` 是标准的 [CSS 选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) 内容。

在上述示例中，我们使用了 `$` 符号来选择三个具有不同 `id` 的元素，并通过设置 `text` 、 `html` 和 `value` 属性来修改其内容。

要了解更多可用的属性和方法，请查阅 API 文档。
