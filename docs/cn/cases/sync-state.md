<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# 状态同步

有时候需要多个组件实例或页面共享一份数据，这时候就需要状态同步的功能。

使用 `$.stanz` 方法创建可以共享的数据；需要共享这个数据的组件上，在组件 attached 周期时，将数据绑定到组件上；

注意需要在 detached周期绑定的数据清除，不然会内存泄露。

在这个示例中，我们演示了如何使用状态同步功能来实现暗黑模式的切换。首先，我们使用 `$.stanz` 方法创建了一个名为 `isDark` 的数据对象，该对象可以在多个组件间共享。使不同组件实例能够共享数据，实现暗黑模式的切换。