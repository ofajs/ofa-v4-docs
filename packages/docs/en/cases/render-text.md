<template is="exm-article">
<a href="../../publics/examples/render-text/demo.html" preview></a>
<a href="../../publics/examples/render-text/text-demo.html" main></a>
</template>

# Text Rendering

In the component file, you can add a `script` tag to write the logic code for the component. The component parameters can be set through the exposed `default` object.

Where
	`data` parameter is used to define the default data of the component elements. Once instantiated, you can use **template syntax**.

Text rendering is wrapped with double curly braces, i.e. `{{xxx}}`, where xxx represents the attribute name of the component.

案例演示了如何渲染组件元素的 val 属性：
