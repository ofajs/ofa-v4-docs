# Recursive Fill Rendering

Fill rendering allows you to render data using separate templates and add a `name` attribute to the `<template>` element for naming. This allows you to render nested data structures and create more complex components.

When using `x-fill` for fill rendering, you just need to pass the corresponding template name to the `name` attribute to render the content of the separate template. In addition, fill rendering also supports recursive filling, which means you can continue to use the same template name inside the template for nested filling.

In the example, we define a separate template named `item` and pass the corresponding template name when using `x-fill`. This way, each item in the data will be rendered using this template, and the template can be recursively filled with the same template name. This allows you to flexibly handle data with nested structures and achieve more complex component rendering.

<a href="../../publics/examples/fill-temps/demo.html" preview demo></a>
<a href="../../publics/examples/fill-temps/test-demo.html" main demo></a>

