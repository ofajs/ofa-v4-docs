<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# 属性伝播

通过使用**属性传递**的模板语法，您可以将组件的数据应用于模板内的元素属性。

使用方法は、要素に属性 `:name="key"` を追加することです。ここで、`name` は設定する対象の属性名であり、`key` はカスタムコンポーネントで渡すプロパティのキー名です。

以前は、属性の設定にセレクタを使用する方法について言及しました。ここでは属性のパススルー構文を使って属性を設定する方法について説明します。