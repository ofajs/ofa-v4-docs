<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# Custom Form Components

With `ofa.js`, you can easily develop custom form element components with standard form features. Just add a `value` attribute and set the `name` attribute for your custom component, and your homemade component can be used as a standard form element. By updating the `value` property of the component, you can interact with the form element.

When initializing `formData`, you need to add the selector feature of the custom component to the parameters (although the default parameter of the `formData` method is '"input,select,textarea"'). This way, `formData` can interact with custom components.

In this example, we use a custom component `custom-input` to create an editable text input. The component is used as a form element and data interaction is done using the `value` attribute. When using the `formData` method, we add `"input,custom-input"` as a parameter to correctly initialize form data.

