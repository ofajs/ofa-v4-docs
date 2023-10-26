<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# ステータス同期

時には、複数のコンポーネントインスタンスやページが共有するデータが必要な場合があります。その場合、状態の同期が必要です。

使用 `$.stanz` 方法创建可以共享的数据；需要共享这个数据的组件上，在组件 attached 周期时，将数据绑定到组件上；

注記：デタッチされたサイクルにバインドされたデータをクリアする必要があることに注意してください。さもないと、メモリリークが発生する可能性があります。

在这个示例中，我们演示了如何使用状态同步功能来实现暗黑模式的切换。首先，我们使用 `$.stanz` 方法创建了一个名为 `isDark` 的数据对象，该对象可以在多个组件间共享。使不同组件实例能够共享数据，实现暗黑模式的切换。