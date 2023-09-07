# Conditional Rendering

In addition to template syntax, templates also have template components;

> **Template components** are components designed specifically for templates and can only be used within templates;

Conditional rendering allows you to dynamically insert different content into a component under specific conditions. Here is an example demonstrating how to use conditional rendering within a component.

In this example, we create a component called `test-demo`. The component contains a button that increments the `count` property. Using the `<x-if>`, `<x-else-if>`, and `<x-else>` tags, we implement the logic for conditional rendering.

- The `<x-if>` tag accepts a `value` attribute to define the condition. If the value of `value` is `true`, the content inside `<x-if>` will be rendered. In this example, if `count` is an even number, red text will be displayed.
- The `<x-else-if>` tag also accepts a `value` attribute to define the condition. If the previous condition is not met and the value of `value` is `true`, the content inside `<x-else-if>` will be rendered. In this example, if `count` is a multiple of 3, blue text will be displayed.
- The `<x-else>` tag does not require a `value` attribute. It will render its content when none of the previous conditions are met. In this example, if `count` is neither an even number nor a multiple of 3, green text will be displayed. `<x-else>` can also immediately follow `<x-if>`;

Using this approach, you can dynamically render different content based on different conditions, achieving flexible interaction and display effects.

<a href="../../publics/examples/condition/demo.html" preview demo></a>
<a href="../../publics/examples/condition/test-demo.html" main demo></a>

