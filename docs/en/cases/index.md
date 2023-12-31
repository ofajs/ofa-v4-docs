<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# Quick Start

To get started, simply integrate the `ofajs` project into your project by importing the CDN address:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.js"></script>
```

This is a simple example that demonstrates how to use `ofa.js` to modify the content of DOM elements:

## Instructions

After introducing `ofa.js`, the `$` symbol will be registered in the global scope. Use `$('xxx')` to select the first element that meets the criteria, where `xxx` is the standard [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) content.

In the above example, we used the `$` symbol to select three elements with different `id`s and modified their content by setting the `text`, `html`, and `value` attributes.

To learn more about available properties and methods, please refer to the API documentation.
