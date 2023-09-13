<template is="exm-article">
<a href="../../publics/examples/event-passing/demo.html" preview demo></a>
<a href="../../publics/examples/event-passing/comp-one.html" main demo></a>
<a href="../../publics/examples/event-passing/comp-two.html" demo></a>
</template>

# 事件传递

除了监听原生事件，`on` 还可以用于监听自定义事件，这在组件间实现事件通信时非常重要。自定义事件通过 `emit` 方法来触发。通过触发自定义事件，可以将自定义数据传递给接收方。

如果需要跨越组件的 Shadow DOM 边界，以触发事件，可以添加 `composed` 属性。

在下面的案例中，我们将学习如何使用 `emit` 方法在嵌套的组件之间进行事件传递。
