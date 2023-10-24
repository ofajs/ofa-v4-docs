<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

# property Propagation

The `attrs` parameter and the `data` parameter are similar in function. The data set in `attrs` will be merged into `data`, but the data in `attrs` will be reflected in the characteristics of the component.

Here the **characteristics** refer to the [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) of the elements.

When using components externally, data can also be passed to the component internally through attributes. It should be noted that data passed through attributes can only be of string type.
