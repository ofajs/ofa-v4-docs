# Custom Form Components

With `ofa.js`, you can easily develop custom form element components with standard form features. Just add a `value` attribute and set the `name` attribute for your custom component, and your homemade component can be used as a standard form element. By updating the `value` property of the component, you can interact with the form element.

When initializing `formData`, you need to add the selector feature of the custom component to the parameters (although the default parameter of the `formData` method is '"input,select,textarea"'). This way, `formData` can interact with custom components.

In this example, we use the custom component `custom-input` to create an editable text input. This component is used as a form element and uses the `value` attribute for data interaction. When using the `formData` method, we add '"input,custom-input"' as a parameter to correctly initialize the form data.

<a href="../../publics/examples/custom-form-element/demo.html" preview demo></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main demo></a>
<a href="../../publics/examples/custom-form-element/custom-input.html" demo></a>

