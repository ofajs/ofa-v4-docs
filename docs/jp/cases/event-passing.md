<template is="exm-article">
<a href="../../publics/examples/event-passing/demo.html" preview></a>
<a href="../../publics/examples/event-passing/comp-one.html" main></a>
<a href="../../publics/examples/event-passing/comp-two.html"></a>
</template>

# イベントの伝達

ネイティブイベントの監視に加えて、`on` はカスタムイベントの監視にも使用でき、コンポーネント間でのイベント通信に非常に重要です。カスタムイベントは `emit` メソッドを使用してトリガーされます。カスタムイベントをトリガーすることで、カスタムデータを受信側に渡すことができます。

Shadow DOM境界を越えてイベントをトリガーするためには、`composed`属性を追加する必要があります。

以下の例では、`emit`メソッドを使用してネストされたコンポーネント間でイベントを送信する方法を学びます。