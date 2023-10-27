<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# 属性传递

通过使用**属性传递**的模板语法，您可以将组件的数据应用于模板内的元素属性。

使用方法是在元素上添加特性 `:name="key"`，其中 `name` 为目标元素要设置的属性名，`key` 则为您自定义组件中要传递的属性键名。

之前在提到了[使用选择器的方式来设置属性](./index.md)，而这里介绍的是属性传递语法设置属性；
