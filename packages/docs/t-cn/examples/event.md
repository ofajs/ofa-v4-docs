# 事件響應

您可以使用 `on` 方法來綁定事件。**事件** 是開發中最基礎的概念，應用通過事件的觸發才能產生反饋，從而實現互動性。

以下示例演示了如何綁定點擊事件：

在這個示例中，我們通過使用 `$` 選擇了 `<button>` 元素，並使用 `on` 方法綁定了 `click` 事件。當按鈕被點擊時，會觸發回調函數，將 `target` 元素的文本內容更改為 "你好，世界！"。

如果您想了解更多可用的事件類型，請參考 [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 文檔。

<a href="../../publics/examples/event-demo.html" demo preview></a>

