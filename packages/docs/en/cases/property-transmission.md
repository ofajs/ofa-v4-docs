<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# Property Transmission

With the **property transmission** template syntax, you can apply the component's data to element attributes within the template.

The method is to add the attribute `:name="key"` to the element, where `name` is the name of the target element attribute to be set, and `key` is the property key you want to pass from your custom component.

Previously, we mentioned using selectors to set attributes in <a href='./index.html' olink>a link</a>, while what is being introduced here is the attribute-passing syntax for setting attributes.
