<template is="exm-article">
<a href="../../publics/examples/sync/demo.html" preview></a>
<a href="../../publics/examples/sync/test-demo.html" main></a>
<a href="../../publics/examples/sync/custom-input.html"></a>
</template>

# 双向データバインディング

ユーザーインターフェース（例：入力ボックスやカスタムコンポーネント）とデータモデルの間にリアルタイムの双方向関連を確立するには、`sync`構文を使用します。

以下の例は、コンポーネントで `sync` 属性を使用して、入力ボックスとデータモデルの間で双方向データバインディングを実現する方法を示しています。

- `data` パラメーターで、`testText` という名前のデータを定義し、初期値を "I am testText" に設定しました。
- `sync:value="testText"` を使用することで、入力ボックスの値と `testText` データの間に双方向データバインディングが確立されます。したがって、ユーザーが入力ボッスにコンテンツを入力すると、`testText` データがリアルタイムに更新され、その逆も同様です。
- 同様に、`sync:txt="testText"` を使用することで、カスタムコンポーネントの `txt` 属性と `testText` データの間に双方向データバインディングが確立されます。コンポーネントの `txt` 属性が変更されると、`testText` データがリアルタイムに更新され、その逆も同様です。

データバインディングを使用することで、ユーザーインターフェースとデータモデルの間に簡単に接続を確立できます。これにより、データの変更が自動的にインターフェースに反映され、また、ユーザーの入力も即座にデータモデルに影響を与えることができます。

値する注意は、データ同期は **文字列** または **数値** のみを伝送できることです。他のデータ型は伝送できません。