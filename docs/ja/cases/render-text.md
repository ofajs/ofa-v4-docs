<template is="exm-article">
<a href="../../publics/examples/render-text/demo.html" preview></a>
<a href="../../publics/examples/render-text/text-demo.html" main></a>
</template>

# テキストレンダリング

コンポーネントファイルでは、`script` タグを追加してコンポーネントのロジックコードを記述することができます。公開された `default` オブジェクトを使用して、コンポーネントのパラメータを設定することができます。

その中で、 `data` パラメーターはコンポーネント要素のデフォルトデータを定義するために使用されます。インスタンス化が完了すると、**テンプレート構文**を使用できます。

テキストのレンダリングは、二重の中括弧で囲まれています。すなわち `{{xxx}}` であり、その中の xxx はコンポーネントのプロパティ名を表します。

案例演示了如何渲染组件元素的 val 属性：
