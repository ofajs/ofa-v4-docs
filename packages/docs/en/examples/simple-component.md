# Component Creation and Usage

Once the ofa.js loading is complete, a component named `load-module` will be registered globally and can be referenced using the abbreviation `l-m`. It is used similar to the `<script>` tag, by referencing the address of the component you developed through the `src` attribute.

Now, let's start creating our own component. First, create an HTML file with a name that matches the component name.

In the component file, first add a `<template component></template>` element. Place the content that the component needs to render inside this `template` element. Eventually, this content will be rendered into the component's Shadow DOM, which is isolated from the external environment to prevent pollution of the external environment.

Next, simply use the `l-m` component to reference the component you developed. On the page, use the component tag you defined directly.

Note that the registered component name can only use lowercase letters and hyphens (-), and must include at least one hyphen. This naming rule must be followed.

Through this example, you can learn how to create a component named `my-comp` and use it in another page. You can also use an external CSS file to style the component.

<a href="../../publics/examples/simple-component/demo.html" preview demo></a>
<a href="../../publics/examples/simple-component/my-comp.html" main demo></a>
<a href="../../publics/examples/simple-component/public.css" demo></a>

