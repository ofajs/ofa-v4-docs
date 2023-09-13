<template is="exm-article">
<a href="../../publics/examples/simple-btn/demo.html" preview demo></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main demo></a>
</template>

# 组件插槽

通过在模板中添加 `<slot></slot>` 标签，可以在使用组件时，将内容放置在对应组件标签内的插槽中。

自定义的组件在默认情况下没有定义 `display` 属性，因此需要手动为组件定义。在组件的样式中，可以使用 `:host` 选择器来添加组件自身的样式。

这个示例展示了如何创建一个名为 `simple-btn` 的组件。组件的模板中包含一个插槽，可以将内容插入到组件中。通过为组件的样式添加 `:host` 选择器，为组件添加样式。在另一个页面中，使用 `l-m` 组件引用 `simple-btn` 组件，并在其中插入内容。
