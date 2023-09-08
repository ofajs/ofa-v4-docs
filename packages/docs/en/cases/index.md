# Quick Start

To get started, simply integrate the `ofajs` project into your project by importing the CDN address:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.2.5/dist/ofa.js"></script>
```

This is a simple example that demonstrates how to modify the content of a DOM element using `ofa.js`.

## Usage

After importing `ofa.js`, the `$` symbol will be registered in the global scope. Use `$('xxx')` to select the first element that meets the conditions, where `xxx` is a standard [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors).

In the above example, we used the `$` symbol to select three elements with different `id` values and modify their content by setting the `text`, `html`, and `value` properties.

To learn more about available properties and methods, please refer to the API documentation.

<a href="../../publics/examples/set-props.html" demo preview></a>

