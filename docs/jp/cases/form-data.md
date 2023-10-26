<template is="exm-article">
<a href="../../publics/examples/form-data/demo.html" preview></a>
<a href="../../publics/examples/form-data/test-demo.html" main></a>
</template>

# 表单数据

在许多应用中，处理表单数据是一项常见的任务。为了简化这个过程，ofa.js 对表单数据的处理进行了二次抽象，提供了 `formData` 方法。通过这个方法，您可以轻松地将表单元素的值映射到一个对象上，并且在表单元素的值发生变化时，自动更新这个对象的数据，反之亦然。

通过使用 `shadow` 属性，您可以获取到组件的 Shadow DOM 根节点的内容。这可以让您在组件内部访问和操作 Shadow DOM 中的元素和样式。

この例では、`formData`メソッドを使用して、フォームデータを自動的にオブジェクト`fdata`にマッピングする方法を示しています。これにより、`fdata`オブジェクトを操作してフォーム要素の値を取得または変更することができます。これらの変更は、対応するフォーム要素に自動的に同期されます。