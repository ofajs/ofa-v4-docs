<template is="exm-article">
<a href="../../publics/examples/sync/demo.html" preview></a>
<a href="../../publics/examples/sync/test-demo.html" main></a>
<a href="../../publics/examples/sync/custom-input.html"></a>
</template>

# Two-way Data Binding

By using the `sync` syntax, you can establish real-time bidirectional associations between user interface interactive elements (such as input boxes or custom components) and data models.

The following example demonstrates how to use the `sync` property in a component to achieve two-way data binding between an input box and a data model:

- In the `data` parameter, we defined a data called `testText` and set its initial value to "I am testText".
- Using `sync:value="testText"` represents a two-way data binding between the value of the input box and the `testText` data. Therefore, when the user enters content in the input box, the `testText` data will be updated in real time, and vice versa.
- Similarly, using `sync:txt="testText"` represents a two-way data binding between the `txt` property of the custom component and the `testText` data. When the `txt` property of the component changes, the `testText` data will be updated in real time, and vice versa.

Through two-way data binding, you can easily establish a connection between the user interface and the data model, so that changes in data can be automatically reflected in the interface, and user input on the interface can immediately affect the data model.

It is worth noting that data synchronization can only transmit **strings** or **numbers**, and cannot transmit other data types.
