<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# クイックスタート

開始使用するには、CDNアドレスを使用してプロジェクト`ofajs`をプロジェクトに統合するだけです。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.js"></script>
```

これは、DOM要素の内容を変更する方法を示すシンプルな例です：

## 使用方法

ofa.jsの導入により、`$`シンボルがグローバルスコープに登録された。 最初にマッチした要素は `$('xxx')` によって選択されます。ここで `xxx` は標準の [CSS セレクタ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) の内容です。

上記の例では、異なる `id` を持つ3つの要素を選択するために `$` 記号を使用し、`text` 、 `html` 、および `value` 属性を設定してその内容を変更しました。

API のドキュメントを参照して、利用可能なプロパティやメソッドを確認してください。
