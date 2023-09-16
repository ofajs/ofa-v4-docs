<template is="exm-article">
<a href="../../publics/examples/event-demo.html" preview></a>
</template>

# 事件响应

您可以使用 `on` 方法来绑定事件。**事件** 是开发中最基础的概念，应用通过事件的触发才能产生反馈，从而实现互动性。

以下示例演示了如何绑定点击事件：

在这个示例中，我们通过使用 `$` 选择了 `button` 元素，并使用 `on` 方法绑定了 `click` 事件。当按钮被点击时，会触发回调函数，将 `target` 元素的文本内容更改为 "你好，世界！"。

如果您想了解更多可用的事件类型，请参考 [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 文档。
