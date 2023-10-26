<template is="exm-article">
<a href="../../publics/examples/render-text/demo.html" preview></a>
<a href="../../publics/examples/render-text/text-demo.html" main></a>
</template>

# 文本渲染

コンポーネントファイル内では、コンポーネントのロジックコードを記述するために `script` タグを追加することができます。エクスポートされた `default` オブジ���クトを使用して、コンポーネントのパラメータを設定することができます。

それに含まれる`data`パラメータは、コンポーネント要素のデフォルトデータを定義するために使用されます。インスタンスが作成されると、**テンプレート構文**を使用する��とができます。

文本レンダリングは二重の中括弧で囲まれます、つまり `{{xxx}}`で表され、その中のxxxはコンポーネントの属性名を示します。

案例演示了如何渲染组件元素的 val 属性：
