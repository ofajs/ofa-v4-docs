# Two-way data binding

By using the `sync` syntax, you can establish a real-time, two-way relationship between interactive elements (such as input fields or custom components) in the user interface and the data model.

The following example demonstrates how to use the `sync` attribute in a component to achieve two-way data binding between an input field and the data model:

- In the `data` parameter, we define a data called `testText` and set its initial value to "I am testText".
- Using `sync:value="testText"` indicates that the value of the input field is bound to the `testText` data. Therefore, when the user enters content in the input field, the `testText` data will be updated in real-time, and vice versa.
- Similarly, using `sync:txt="testText"` indicates that the `txt` attribute of the custom component is bound to the `testText` data. When the `txt` attribute of the component changes, the `testText` data will be updated in real-time, and vice versa.

Through two-way data binding, you can easily establish a connection between the user interface and the data model, so that changes in the data can be automatically reflected in the interface, and user input on the interface can immediately affect the data model.

It is worth noting that data synchronization can only pass **strings** or **numbers**, and cannot pass other data types.

<a href="../../publics/examples/sync/demo.html" preview demo></a>
<a href="../../publics/examples/sync/test-demo.html" main demo></a>
<a href="../../publics/examples/sync/custom-input.html" demo></a>
