# 事件绑定

在组件内部，您可以通过 `on` 属性来绑定事件，让组件具备交互能力。这里演示了如何在组件中绑定事件以实现交互效果。

`proto` 参数用于定义组件自身的方法，这些方法可以在组件内部使用，也可以在外部通过选择器获取组件后运行。

`on:click="xxx"` 后面的 `xxx` 可以是组件内部定义的方法名，也可以是函数表达式。如果使用函数表达式，无需显式写出 `this` 关键字，变量的作用域会自动绑定到组件自身；

如果您想了解更多可用的事件类型，请参考 [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 文档。

<a href="../../publics/examples/bind-event/demo.html" preview demo></a>
<a href="../../publics/examples/bind-event/test-demo.html" main demo></a>