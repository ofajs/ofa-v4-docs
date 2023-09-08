# Feature Passing

`attrs` parameter and `data` parameter are similar in functionality. The data set in `attrs` will be merged into `data`, but the data on `attrs` will be reflected in the component's own features.

> The **features** here refer to the [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) of the element.

When using components externally, data can also be passed to the components through features. It should be noted that the data passed through features can only be of type string.

<a href="../../publics/examples/attr-trans/demo.html" preview demo></a>
<a href="../../publics/examples/attr-trans/simple-btn.html" main demo></a>

