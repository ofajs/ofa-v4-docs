<template is="exm-article">
<a href="../../publics/examples/event-passing/demo.html" preview></a>
<a href="../../publics/examples/event-passing/comp-one.html" main></a>
<a href="../../publics/examples/event-passing/comp-two.html"></a>
</template>

# イベントの伝達

原生のイベントの監視以外にも、`on`はカスタムイベントの監視にも使用することができ、これはコンポーネント間のイベント通知に非常に重要です。カスタムイベントは`emit`メソッドを使用してトリガーされます。カスタムイベントをトリガーすることで、カスタムデタを受信者に渡すことができます。

Shadow DOMの境界を越えてイベントをトリガーするためには、`composed`属性を追加する必要があります。

以下是翻译的结果：以下は、ネストされたコンポーネント間でイベントを伝達する方法を学ぶための例です。
