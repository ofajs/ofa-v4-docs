<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# クイックスタート

始めるには、プロジェクト`ofajs`をCDNアドレスを介してプロジェクトに統合するだけです：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.js"></script>
```

これは、DOM要素の内容を変更する方法を示す簡単な例です、`ofa.js`の使用方法を示しています: 

## 使用方法

`ofa.js`を導入すると、グローバルスコープで`$`シンボルが登録されます。条件に合致する最初の要素を選択するには、`$('xxx')`を使用します。ここで、`xxx`は標準の[CSSセレクタ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)の内容です。

以上の例では、`$` 記号を使用して異なる `id` を持つ3つの要素を選択し、`text`、`html`、および `value` 属性を設定してその内容を変更しました。

利用可能なプロパティとメソッドの詳細については、APIドキュメントを参照してください。