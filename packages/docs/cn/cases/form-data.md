<template is="exm-article">
<a href="../../publics/examples/form-data/demo.html" preview></a>
<a href="../../publics/examples/form-data/test-demo.html" main></a>
</template>

# 表单数据

在许多应用中，处理表单数据是一项常见的任务。为了简化这个过程，ofa.js 对表单数据的处理进行了二次抽象，提供了 `formData` 方法。通过这个方法，您可以轻松地将表单元素的值映射到一个对象上，并且在表单元素的值发生变化时，自动更新这个对象的数据，反之亦然。

通过使用 `shadow` 属性，您可以获取到组件的 Shadow DOM 根节点的内容。这可以让您在组件内部访问和操作 Shadow DOM 中的元素和样式。

在这个示例中，我们可以看到如何利用 `formData` 方法将表单数据自动映射到对象 `fdata` 上。这使得您可以通过操作 `fdata` 对象来获取或修改表单元素的值，而这些变动也会自动同步到对应的表单元素上。
