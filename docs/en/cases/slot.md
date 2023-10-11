<template is="exm-article">
<a href="../../publics/examples/simple-btn/demo.html" preview></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main></a>
</template>

# Component Slot

By adding the `<slot></slot>` tag in the template, you can place the content inside the corresponding component label's slot when using the component.

Custom components do not have a defined 'display' property by default, so it needs to be defined manually. In the component's style, the ':host' selector can be used to add styles specific to the component itself.

This example demonstrates how to create a component called `simple-btn`. The template of the component includes a slot where content can be inserted into the component. The component is styled by adding the `:host` selector to its styles. In another page, the `simple-btn` component is referenced using the `l-m` component and content is inserted into it.
