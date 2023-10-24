<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# 狀態同步

有時候需要多個組件實例或頁面共享一份數據，這時候就需要狀態同步的功能。

使用 `$.stanz` 方法創建可以共享的數據；需要共享這個數據的組件上，在組件 attached 周期時，將數據綁定到組件上；

注意需要在 detached周期綁定的數據清除，不然會內存泄露。

在這個示例中，我們演示了如何使用狀態同步功能來實現暗黑模式的切換。首先，我們使用 `$.stanz` 方法創建了一個名為 `isDark` 的數據對象，該對象可以在多個組件間共享。使不同組件實例能夠共享數據，實現暗黑模式的切換。