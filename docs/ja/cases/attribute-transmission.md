<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

# 特性伝達

`attrs` パラメータと `data` パラメータは機能的に類似しています。`attrs` に設定されたデータは `data` にマージされますが、`attrs` のデータはコンポーネント自体の特性に反映されます。

> ここでの**特性**とは、要素の [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) を指します。

外部でコンポーネントを使用する場合、属性を使用してデータをコンポーネントに渡すこともできます。ただし、属性を通じて渡されるデータは文字列型である必要があります。
