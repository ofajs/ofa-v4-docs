<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# 自定义表单组件

`ofa.js`を使用すると、カスタムフォーム要素コンポーネントを簡単に開発できます。これにより、標準のフォーム機能を備えたカスタムコンポーネントを作成できます。単にカスタムコンポーネントに `value` 属性を追加し、`name` 属性を設定するだけで、自作のコンポーネントが標準のフォーム要素として使用できるようになります。コンポーネントの `value` 属性を更新することで、フォーム要素とのインタラクションを実現できます。

`formData`を初期化する際、カスタムコンポーネントのセレクタ特徴をパラメータに追加する必要があります（ただし、`formData`メソッドのデフォルトパラメータは `"input,select,textarea"`です）。これにより、`formData`とカスタムコンポーネントを連動させることができます。

この例では、「custom-input」というカスタムコンポーネントを使用して、編集可能なテキスト入力フィールドを実現しています。このコンポーネントはフォーム要素として使��され、データのやり取りには「value」属性が使われます。また、「formData」関数を使用するときには、パラメータとして「"input,custom-input"」を追加して、フォームデータを適切に初期化します。