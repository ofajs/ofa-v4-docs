<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# 快速开始

開始使用するには、CDNアドレスを使用してプロジェクト`ofajs`をプロジェクトに統合するだけです。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.js"></script>
```

これは、DOM要素の内容を変更する方法を示すシンプルな例です：

## 使用方法

引入了 `ofa.js` 后，全局作用域中将注册 `$` 符号。通过 `$('xxx')` 来选择符合条件的第一个元素，其中 `xxx` 是标准的 [CSS 选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) 内容。

上記の例では、異なる `id` を持つ3つの要素を選択するために `$` 記号を使用し、`text` 、 `html` 、および `value` 属性を設定してその内容を変更しました。

API のドキュメントを参照して、利用可能なプロパティやメソッドを確認してください。
