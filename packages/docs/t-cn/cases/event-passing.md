# 事件傳遞

除了監聽原生事件，`on` 還可以用於監聽自定義事件，這在組件間實現事件通信時非常重要。自定義事件通過 `emit` 方法來觸發。通過觸發自定義事件，可以將自定義數據傳遞給接收方。

如果需要跨越組件的 Shadow DOM 邊界，以觸發事件，可以添加 `composed` 屬性。

在下面的案例中，我們將學習如何使用 `emit` 方法在嵌套的組件之間進行事件傳遞。

<a href="../../publics/examples/event-passing/demo.html" preview demo></a>
<a href="../../publics/examples/event-passing/comp-one.html" main demo></a>
<a href="../../publics/examples/event-passing/comp-two.html" demo></a>

