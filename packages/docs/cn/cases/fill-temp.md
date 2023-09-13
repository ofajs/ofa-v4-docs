<template is="exm-article">
<a href="../../publics/examples/fill-temps/demo.html" preview demo></a>
<a href="../../publics/examples/fill-temps/test-demo.html" main demo></a>
</template>

# 递归填充渲染

填充渲染允许您使用独立的模板来渲染数据，并通过 `<template>` 元素添加 `name` 属性进行命名。这种方式使得您可以实现嵌套结构的数据渲染，从而创建更复杂的组件。

在使用 `x-fill` 进行填充渲染时，只需将对应的模板名称传递给 `name` 属性，即可渲染独立模板的内容。此外，填充渲染还支持递归填充，即在模板内部可以继续使用相同的模板名称，实现嵌套填充。

在示例中，我们定义了一个名为 `item` 的独立模板，并在 `x-fill` 使用时传递了相应的模板名称。这样，数据中的每个项都将使用这个模板进行渲染，而且模板内部可以再次使用相同的模板名称进行递归填充。这种方式使得您可以灵活地处理具有嵌套结构的数据，实现更加复杂的组件渲染。


