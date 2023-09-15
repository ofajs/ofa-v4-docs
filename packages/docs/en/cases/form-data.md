<template is="exm-article">
<a href="../../publics/examples/form-data/demo.html" preview></a>
<a href="../../publics/examples/form-data/test-demo.html" main></a>
</template>

# Form Data

Handling form data is a common task in many applications. To simplify this process, ofa.js provides a secondary abstraction for handling form data, through the `formData` method. With this method, you can easily map the values of form elements to an object and automatically update the data of this object when the values of the form elements change, and vice versa.

By using the `shadow` attribute, you can access the content of the Shadow DOM root node of a component. This allows you to access and manipulate elements and styles within the Shadow DOM from within the component.

In this example, we can see how to use the `formData` method to automatically map form data to the `fdata` object. This allows you to access or modify the values of form elements by manipulating the `fdata` object, and these changes will also be automatically synchronized to the corresponding form elements.
