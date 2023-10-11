<template is="exm-article">
<a href="../../publics/examples/form-data/demo.html" preview></a>
<a href="../../publics/examples/form-data/test-demo.html" main></a>
</template>

# Form Data

In many applications, handling form data is a common task. To simplify this process, ofa.js provides a secondary abstraction for handling form data, offering the `formData` method. With this method, you can easily map the values of form elements to an object, and automatically update the data of this object when the values of the form elements change, and vice versa.

By using the `shadow` property, you can access the content of the Shadow DOM root node of a component. This allows you to access and manipulate elements and styles within the Shadow DOM from inside the component.

In this example, we can see how to use the `formData` method to automatically map form data to the object `fdata`. This allows you to get or modify the values of form elements by manipulating the `fdata` object, and these changes will be automatically synchronized to the corresponding form elements.
