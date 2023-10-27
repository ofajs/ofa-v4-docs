<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# ステータスの同期

時々、複数のコンポーネントのインスタンスやページ間でデータを共有する必要があり、そのためには状態同期の機能が必要です。

使用 `$.stanz` 方法创建可以共享的数据；需要共享这个数据的组件上，在组件 attached 周期时，将数据绑定到组件上；

注意需要删除在detached周期绑定的数据，否则可能会导致内存泄漏。

この例では、ステート同期機能を使用してダークモードの切り替えを実現する方法を示しました。まず、`$.stanz`メソッドを使用して、`isDark`という名前のデータオブジェクトを作成します。このオブジェクトは複数のコンポーネント間で共有することができます。異なるコンポーネントインスタンスがデータを共有し、ダークモードを切り替えることができるようになります。