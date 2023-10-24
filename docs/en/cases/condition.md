<template is="exm-article">
<a href="../../publics/examples/condition/demo.html" preview></a>
<a href="../../publics/examples/condition/test-demo.html" main></a>
</template>

# Conditional Rendering

In addition to template syntax, the template also includes template components.

> Template components are components designed specifically for templates, and can only be used within templates.

Conditional rendering allows you to dynamically insert different content within a component based on specific conditions. Here is an example demonstrating how to use conditional rendering within a component.

In this example, we create a component called `test-demo`. The component contains a button that increments the `count` property. By using the `x-if`, `x-else-if`, and `x-else` tags, we implement the logic for conditional rendering.

- The `x-if` tag accepts a `value` property to define a condition. If the value of `value` is `true`, the content inside `x-if` will be rendered. In this example, if `count` is an even number, red text will be displayed.
- The `x-else-if` tag also accepts a `value` property to define a condition. If the previous conditions are not met and the value of `value` is `true`, the content inside `x-else-if` will be rendered. In this example, if `count` is a multiple of 3, blue text will be displayed.
- The `x-else` tag does not require a `value` property. It will render its content when none of the previous conditions are met. In this example, if `count` is neither an even number nor a multiple of 3, green text will be displayed. The `x-else` tag can also be placed immediately after `x-if`.

Through this method, you can dynamically render different content based on different conditions, achieving flexible interaction and display effects.