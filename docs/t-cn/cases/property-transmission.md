<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# 屬性傳遞

通過使用**屬性傳遞**的模板語法，您可以將組件的數據應用於模板內的元素屬性。

使用方法是在元素上添加特性 `:name="key"`，其中 `name` 為目標元素要設置的屬性名，`key` 則為您自定義組件中要傳遞的屬性鍵名。

之前在提到了[使用選擇器的方式來設置屬性](./index.md)，而這裏介紹的是屬性傳遞語法設置屬性；
