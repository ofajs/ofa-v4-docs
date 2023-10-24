<template is="exm-article">
<a href="../../publics/examples/render-text/demo.html" preview></a>
<a href="../../publics/examples/render-text/text-demo.html" main></a>
</template>

# Text rendering

In the component file, you can add a `script` tag to write the logic code of the component. You can set component parameters through the exposed `default` object.

`data` parameter is used to define the default data for component elements. Once the instantiation is complete, you can use **template syntax**.

Text rendering is wrapped in double braces, that is `{{xxx}}`, where xxx represents the component's property name.

This case demonstrates how to render the val property of component elements.
