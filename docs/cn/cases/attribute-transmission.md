<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

# 特性传递

`attrs` 参数和 `data` 参数在功能上类似，设置在 `attrs` 中的数据会合并到 `data` 中，但是 `attrs` 上的数据会体现在组件自身的特性上。

> 这里的**特性**，指的是元素的 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

在外部使用组件时，也可以通过特性将数据传递到组件内部。需要注意的是，通过特性传递的数据只能是字符串类型。
