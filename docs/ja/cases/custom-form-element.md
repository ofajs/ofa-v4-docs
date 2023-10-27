<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# 自定义フォームコンポーネント

使用 `ofa.js`，カスタムのフォーム要素コンポーネントを簡単に開発することができます。これにより、カスタムコンポーネントに `value` 属性を追加し、`name` 属性を設定するだけで、自作のコンポーネントを標準のフォーム要素として使用することができます。コンポーネトの `value` 属性を更新することで、フォーム要素とのインタラクションを実現することができます。

`formData` の初期化時には、カスタムコンポーネントのセレクターの特徴をパラメータに追加する必要があります（ただし、`formData` メソッドのデフォルトパラメータは「"input,select,textarea"」です）。これにより、`formData` はカスタムコンポーネントと連動することができま。

この例では、カスタム入力コンポーネント `custom-input` を使用して編集可能なテキスト入力フィールドを作成します。このコンポーネントはフォーム要素として使用され、データのやり取りに `value` 属性が使用されます。`formData` メソッドを使用する際に、パラメータとし `"input,custom-input"` を追加して、フォームデータを正しく初期化します。
