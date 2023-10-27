<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# ステータスの同期

時々、複数のコンポーネントのインスタンスやページ間でデータを共有する必要があり、そのためには状態同期の機能が必要です。

使用 `$.stanz` メソッドで共有可能なデータを作成します。このデータをコンポーネントで共有する必要がある場合は、データをコンポーネントにバインドするために、コンポーネントの `attached` 時にバインドする必要があります。

注意：デタッチされた周期でバインドされたデータをクリアする必要があります。それ以外の場合、メモリーリークが発生する可能性があります。

この例では、ステート同期機能を使用してダークモードの切り替えを実現する方法を示しました。まず、`$.stanz`メソッドを使用して、`isDark`という名前のデータオブジェクトを作成します。このオブジェクトは複数のコンポーネント間で共有することができます。異なるコンポーネントインスタンスがデータを共有し、ダークモードを切り替えることができるようになります。