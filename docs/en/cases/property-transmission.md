<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# Property Binding

By using **props binding** in template syntax, you can apply component data to element attributes within the template.

The usage is to add the property `:name="key"` to the element, where `name` is the property name to be set for the target element, and `key` is the property key that you want to pass in your custom component.

Previously, we mentioned [using selectors to set properties](./index.md), but here we introduce property passing syntax to set properties;
