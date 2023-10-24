<template is="exm-article">
<a href="../../publics/examples/fill-temps/demo.html" preview></a>
<a href="../../publics/examples/fill-temps/test-demo.html" main></a>
</template>

# Recursive Filling and Rendering

Filling rendering allows you to render data using independent templates, with the addition of the `name` property to the `<template>` element for naming purposes. This allows you to achieve data rendering with nested structures, thereby creating more complex components.

When using `x-fill` for template rendering, you just need to pass the corresponding template name to the `name` property, and the content of the independent template can be rendered. In addition, fill rendering also supports recursive filling, which means that the same template name can be used inside the template to achieve nested filling.

In the example, we defined a standalone template named "item" and passed the corresponding template name when using "x-fill". This way, each item in the data will be rendered using this template, and the template can be recursively filled with the same template name again. This approach allows you to flexibly handle data with nested structures and achieve more complex component rendering.


