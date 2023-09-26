# Template Rendering Component

In addition to using template syntax, ofa.js also provides rendering components dedicated to templates, including conditional rendering components and filling rendering components.

## Conditional Rendering Component

### x-if Component

`x-if` component is used to dynamically render content based on conditions. It accepts a `value` attribute to determine whether to render its child elements. If the `value` is `true`, the child elements will be rendered; otherwise, they will not be rendered.

Here is an example using `x-if` to render different content based on a condition:

```html
<div id="condition-container">
  <x-if :value="showContent">
    <div>I am rendered because showContent is true.</div>
  </x-if>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  showContent: true,
};
```

### x-else Component

`x-if` can be used in conjunction with `x-else` to achieve conditional switching of rendering.

Here is an example using `x-if` and `x-else` to switch the rendered content based on different conditions:

```html
<div id="condition-container">
  <x-if :value="showContent">
    <div>I am rendered because showContent is true.</div>
  </x-if>
  <x-else>
    <div>I am rendered because showContent is false.</div>
  </x-else>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  showContent: false,
};
```

### x-if + x-else-if + x-else component

`x-if` can also be combined with `x-else-if` and `x-else` to achieve rendering based on multiple conditions.

Here is an example using `x-if`, `x-else-if`, and `x-else` to toggle rendering based on multiple conditions:

```html
<div id="condition-container">
  <x-if :value="condition === 'A'">
    <div>I am rendered for condition A.</div>
  </x-if>
  <x-else-if :value="condition === 'B'">
    <div>I am rendered for condition B.</div>
  </x-else-if>
  <x-else>
    <div>I am rendered for other conditions.</div>
  </x-else>
</div>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  condition: 'B',
};
```

In the above example, different content will be rendered based on the value of `condition`, achieving the effect of toggling rendering based on multiple conditions.

## Template Component: x-fill

`x-fill` component allows you to dynamically fill content in a template. It can generate different content based on the attribute values of the host component. `x-fill` component uses the `name` attribute to specify the fill template to use and passes data to the fill template through the `value` attribute.

### Example of filling an array of strings with x-fill

Here is an example of using `x-fill` to fill an array of strings, filling different string content through a loop:

```html
<div id="fill-container" style="padding: 16px; background-color: #eee">
  <x-fill name="fillTemplate" :value="['Item 1', 'Item 2', 'Item 3']"></x-fill>
</div>
<template name="fillTemplate">
  <div class="fill-item" style="margin: 10px; padding: 10px; border: red solid 1px">
    {{ $data }}
  </div>
</template>
```

In the above example, `x-fill` uses a filling template called `fillTemplate` and passes an array to it. The filling template uses `{{ $data }}` to render each element in the array, thus achieving looped filling of different string content.

### Example of `x-fill` filling an object and being able to self-fill

`x-fill` can also fill objects with more complex structures and supports self-nested filling.

The following is an example of using `x-fill` to fill an object and perform self-nested filling, demonstrating how to generate nested content:

```html
<div id="fill-container" style="padding: 16px; background-color: #eee">
  <x-fill name="nestedFillTemplate" :value="nestedData"></x-fill>
</div>
<template name="nestedFillTemplate">
  <div class="nested-item" style="margin: 10px; padding: 10px; border: red solid 1px">
    {{ $data.title }}
    <x-fill name="nestedFillTemplate" :value="$data.children"></x-fill>
  </div>
</template>
```

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  nestedData: {
    title: "Parent",
    children: [
      {
        title: "Child 1",
        children: [
          { title: "Grandchild 1" },
          { title: "Grandchild 2" },
        ],
      },
      {
        title: "Child 2",
        children: [{ title: "Grandchild 3" }],
      },
    ],
  },
};
```

In the example above, `x-fill` uses a filling template called `nestedFillTemplate` and passes a complex nested object to it. The filling template uses `{{ $data.title }}` to render the object's title and also uses nested `x-fill` to fill the contents of the child items, achieving nested content generation.

### The meaning of $data, $ele, and $host in the template

Within the filling template, you can use special identifiers to access different data:

- `{{ $data }}`: represents the data passed to the filling template, which is the value of the `value` attribute.
- `{{ $ele }}`: represents the current element in which the filling template is located and can be used to access the element's attributes and styles.
- `{{ $host }}`: represents the instance of the host component and can be used to access the host component's properties and methods.

These special identifiers can help you dynamically access and render different data within the filling template. In the example, you can see how to use `{{ $data.title }}` to access the title of the passed data and how to use `{{ $host.num }}` to access the property of the host component.

