<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# Custom Form Components

Using `ofa.js`, you can easily develop custom form element components with standard form features. Just add the `value` property and set the `name` property to your custom component, and your homemade component can be used as a standard form element. By updating the `value` property of the component, you can interact with the form element.

When initializing `formData`, the selector features of custom components need to be added to the parameters (even though the default parameters for the `formData` method are `"input,select,textarea"`). This allows `formData` to be linked with custom components.

In this example, we implement an editable text input box using the custom component `custom-input`. This component is used as a form element and interacts with data using the `value` property. When using the `formData` method, we add `"input, custom-input"` as parameters to correctly initialize the form data.
