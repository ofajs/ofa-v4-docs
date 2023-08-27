# 事件响应

在前面的内容中，我们了解了如何使用 `$` 符号来选择元素并设置属性。除了用于设置属性外，还可以使用 `on` 方法来绑定事件。下面的示例演示了如何绑定 `click` 事件：

在这个示例中，我们通过使用 `$` 选择了 `<button>` 元素，并使用 `on` 方法绑定了 `click` 事件。当点击按钮后，会触发回调函数，将 `target` 元素的文本内容更改为 "你好，世界！"。

如果想了解更多可用的事件类型，请参考 [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 文档。

<a href="../../publics/examples/event-demo.html" demo preview></a>