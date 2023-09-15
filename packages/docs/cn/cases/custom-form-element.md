<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# 自定义表单组件

使用 `ofa.js`，您可以轻松地开发自定义的表单元素组件，使其具有标准的表单特性。只需要为自定义组件添加 `value` 属性并设置 `name` 特性，您的自制组件就能够作为标准表单元素来使用。通过更新组件的 `value` 属性，您就能实现与表单元素的交互。

初始化 `formData` 时，需要将自定义组件的选择器特征添加到参数中（尽管 `formData` 方法默认的参数为 `"input,select,textarea"`）。这样，`formData` 就能够与自定义组件进行联动。

在这个示例中，我们通过自定义组件 `custom-input` 来实现一个可编辑的文本输入框。该组件被用作表单元素，并使用 `value` 属性进行数据交互。使用 `formData` 方法时，我们将 `"input,custom-input"` 添加为参数，以便正确地初始化表单数据。
