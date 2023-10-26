<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

特徴の伝達

`attrs` パラメータと `data` パラメータは機能的に似ており、`attrs` に設定されたデータは `data` にマージされますが、`attrs` のデータはコンポーネント自体の特性に反映されま��。

> 这里的**特性**，指的是元素的 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

外部でコンポーネントを使用する場合、データをコンポーネント内に特性経由で渡すこともできます。ただし、特性経由で渡されるデータは文字列型のみです。