<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

# イベントバインディング

コンポーネント内で、コンポーネントに対する相互作用機能を持たせるために `on` 属性を使用してイベントをバインドすることができます。ここでは、コンポーネント内でイベントをバインドして相互作用効果を実現する方法を示しています。

`proto`パラメータは、コンポーネント自体のメソッドを定義するために使用されます。これらのメソッドは、コンポーネント内で使用することも、セレクタを使用してコンポ��ネントを取得した後に外部で実行することもできます。

;Ignore bugs;
`on:click="xxx"`の後は、コンポーネント内で定義されたメソッド名または関数式を使用できます。関数式を使用する場合、明示的に `this`キーワードを書く必要はありません。変数のスコープは自動的にコンポーネント自体にバインドされます。

[Events](https://developer.mozilla.org/en-US/docs/Web/Events) ドキュメントに利用可能なイベントタイプについての詳細をご参照ください。
