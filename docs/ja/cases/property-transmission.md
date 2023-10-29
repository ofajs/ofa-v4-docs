<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# 属性振り分け

属性を渡すテンプレート構文を使用することで、コンポーネントのデータをテンプレート内の要素の属性に適用することができます。

要素に `:name="key"` 属性を追加することで使用します。ここで、`name` は設定する対象要素の属性名であり、`key` はカスタムコンポーネント内で渡す属性のキー名です。

前回、[セレクタを使って属性を設定する](./index.md)を紹介しましたが、ここではプロパティを設定するためのプロパティ・パッシング構文を紹介します；
