<template is="exm-article">
<a href="../../publics/examples/simple-component/demo.html" preview></a>
<a href="../../publics/examples/simple-component/my-comp.html" main></a>
<a href="../../publics/examples/simple-component/public.css"></a>
</template>

# Creating and Using Components

Once the loading of ofa.js is completed, a global component named "load-module" will be registered. You can use the abbreviation "l-m" to refer to it. It is used in a similar way as the "script" tag, by using the "src" attribute to refer to the address of your developed component.

Now, let's start creating our own component. First, create an HTML file with the same name as the component.

In the component file, first add a `template` element and add the `component` attribute. Place the content that the component needs to render inside this `template` element. Finally, this content will be rendered into the component's Shadow DOM. Shadow DOM is isolated from the external environment to prevent contamination of the external environment.

Next, simply use the `l-m` component to reference the component you have developed. On the page, just use the tag of the component you defined.

The component name for registration can only use lowercase letters of the alphabet and hyphens (-), and must include at least one hyphen. This naming convention must be followed.

Through this example, you can learn how to create a component called `my-comp` and use it on another page. You can also set the style of the component by linking an external CSS file.
