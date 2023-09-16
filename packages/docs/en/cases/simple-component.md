<template is="exm-article">
<a href="../../publics/examples/simple-component/demo.html" preview></a>
<a href="../../publics/examples/simple-component/my-comp.html" main></a>
<a href="../../publics/examples/simple-component/public.css"></a>
</template>

# Component Creation and Usage

Once the loading of ofa.js is completed, a component named 'load-module' will be registered globally, and you can reference it using the abbreviation 'l-m'. Its usage is similar to that of the 'script' tag, where you reference the address of your developed component through the 'src' attribute.

Now, let's start creating our own component. First, create an HTML file with a name that matches the component name.

In the component file, first add a `template` element and add a `component` attribute. Place the content that the component needs to render inside this `template` element. Finally, this content will be rendered into the component's Shadow DOM. Shadow DOM is isolated from the external environment to prevent contamination of the external environment.

Next, simply use the `l-m` component to reference the component you developed. On the page, use the component tag you defined directly.

Note that the registered component name can only use lowercase letters and hyphens (-), and must include at least one hyphen. This naming rule must be followed.

This example shows how to create a component called 'simple-btn'. The component's template contains a slot where content can be inserted. Add styles to the component by using the ':host' selector. In another page, use the 'l-m' component to reference the 'simple-btn' component and insert content into it.

