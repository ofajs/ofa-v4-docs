<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

# 事件綁定

在組件內部，您可以通過 `on` 屬性來綁定事件，讓組件具備交互能力。這裏演示了如何在組件中綁定事件以實現交互效果。

`proto` 參數用於定義組件自身的方法，這些方法可以在組件內部使用，也可以在外部通過選擇器獲取組件後運行。

`on:click="xxx"` 後面可以是組件內部定義的方法名，也可以是函數表達式。如果使用函數表達式，無需顯式寫出 `this` 關鍵字，變量的作用域會自動綁定到組件自身；

如果您想了解更多可用的事件類型，請參考 [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 文檔。
