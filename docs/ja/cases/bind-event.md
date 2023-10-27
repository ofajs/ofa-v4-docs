<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

# イベントバインディング

在组件内部，您可以通过 `on` 属性来绑定事件，让组件具备交互能力。这里演示了如何在组件中绑定事件以实现交互效果。

`proto`パラメーターは、コンポーネントの固有のメソッドを定義するために使用されます。これらのメソッドは、コンポーネント内で使用することも、セレクターを介してコンポーネントを取得して外部で実行することもできます。

`on:click="xxx"`の後ろには、組み込みのメソッド名または関数式を使用することができます。関数式を使用する場合、`this`キーワードを明示的に書く必要はありません。変数のスコープは自動的にコンポーネント自体にバインドされます。

如果您想了解更多可用的事件类型，请参考 [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 文档。
