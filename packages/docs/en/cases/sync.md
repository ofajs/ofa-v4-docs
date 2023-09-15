Through this example, you can learn how to create a component called 'my-comp' and use it in another page. You can also set the style of the component by linking an external CSS file.

# Two-way data binding

By using the `sync` syntax, you can establish a real-time, two-way relationship between interactive elements (such as input fields or custom components) in the user interface and the data model.

The following example demonstrates how to use the `sync` attribute in a component to achieve two-way data binding between an input field and the data model:

- In the `data` parameter, we define a data called `testText` and set its initial value to "I am testText".
- Using `sync:value="testText"` indicates that the value of the input field is bound to the `testText` data. Therefore, when the user enters content in the input field, the `testText` data will be updated in real-time, and vice versa.
- Similarly, using `sync:txt="testText"` indicates that the `txt` attribute of the custom component is bound to the `testText` data. When the `txt` attribute of the component changes, the `testText` data will be updated in real-time, and vice versa.

Through two-way data binding, you can easily establish a connection between the user interface and the data model, so that changes in the data can be automatically reflected in the interface, and user input on the interface can immediately affect the data model.

This example shows how to create a component called 'simple-btn'. The component's template contains a slot where content can be inserted. Add styles to the component by using the ':host' selector. In another page, use the 'l-m' component to reference the 'simple-btn' component and insert content into it.

