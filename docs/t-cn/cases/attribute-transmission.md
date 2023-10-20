<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

# 特性傳遞

`attrs` 參數和 `data` 參數在功能上類似，設置在 `attrs` 中的數據會合並到 `data` 中，但是 `attrs` 上的數據會體現在組件自身的特性上。

> 這裏的**特性**，指的是元素的 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

在外部使用組件時，也可以通過特性將數據傳遞到組件內部。需要注意的是，通過特性傳遞的數據只能是字符串類型。
