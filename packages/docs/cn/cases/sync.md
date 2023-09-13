<template is="exm-article">
<a href="../../publics/examples/sync/demo.html" preview demo></a>
<a href="../../publics/examples/sync/test-demo.html" main demo></a>
<a href="../../publics/examples/sync/custom-input.html" demo></a>
</template>

# 双向数据绑定

通过使用 `sync` 语法，您可以在用户界面的交互元素（例如输入框或自定义组件）与数据模型之间建立实时的双向关联。

以下示例演示了如何在组件中使用 `sync` 属性来实现输入框与数据模型之间的双向数据绑定：

- 在 `data` 参数中，我们定义了名为 `testText` 的数据，并为其设置初始值为 "I am testText"。
- 使用 `sync:value="testText"` 表示输入框的值与 `testText` 数据之间建立了双向数据绑定。因此，当用户在输入框中输入内容时，`testText` 数据会实时更新，反之亦然。
- 同样，使用 `sync:txt="testText"` 表示自定义组件的 `txt` 属性与 `testText` 数据之间建立了双向数据绑定。组件的 `txt` 属性发生变化时，`testText` 数据会实时更新，反之亦然。

通过双向数据绑定，您可以轻松地在用户界面和数据模型之间建立联系，使得数据的变化能够自动反映在界面上，同时用户在界面上的输入也能立即影响到数据模型。

值得注意的是，数据同步只能传递 **字符串** 或 **数字**，无法传递其他数据类型。
