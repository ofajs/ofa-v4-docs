<template is="exm-article">
<a href="../../publics/examples/condition/demo.html" preview></a>
<a href="../../publics/examples/condition/test-demo.html" main></a>
</template>

# 条件渲染

模板内除了有模板语法，也有模板组件；

> **模板组件** 是专门为了模板而设计的组件，这类组件只能在模板内使用；

条件渲染允许您在特定条件下，动态地在组件中插入不同的内容。以下是一个演示如何在组件内使用条件渲染的示例。

在这个示例中，我们创建了一个名为 `test-demo` 的组件。组件内包含一个按钮，点击按钮会使 `count` 属性自增。通过 `x-if`、`x-else-if` 和 `x-else` 标签，我们实现了条件渲染的逻辑。

- `x-if` 标签接受一个 `value` 属性，用于定义条件。如果 `value` 的值为 `true`，则渲染 `x-if` 内部的内容。在这个示例中，如果 `count` 为偶数，将显示红色文本。
- `x-else-if` 标签也接受一个 `value` 属性，用于定义条件。如果前面的条件不满足且 `value` 的值为 `true`，则渲染 `x-else-if` 内部的内容。在这个示例中，如果 `count` 为 3 的倍数，将显示蓝色文本。
- `x-else` 标签不需要 `value` 属性，它会在前面的条件都不满足时渲染其内部的内容。在这个示例中，如果 `count` 既不是偶数也不是 3 的倍数，将显示绿色文本。使用 `x-else` 时也可以紧跟在 `x-if` 后面；

通过这种方式，您可以根据不同的条件动态地渲染不同的内容，实现灵活的交互和展示效果。