# Template Rendering Component

In addition to being able to use template syntax, ofa.js also provides dedicated rendering components for templates, including conditional rendering components and filling rendering components.

## Conditional Rendering Component

### x-if Component

`x-if` component is a component used to dynamically render content based on conditions. It accepts a `value` attribute to determine whether to render its child elements. If the `value` is `true`, the child elements will be rendered; otherwise, they will not be rendered.

The following is an example of using `x-if` to render different content based on conditions:

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

### x-else component

`x-if` can be used in conjunction with `x-else` to achieve conditional rendering switch.

Below is an example using `x-if` and `x-else` to switch the rendered content based on different conditions:

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

### x-if + x-else-if + x-else Components

`x-if` can also be used with `x-else-if` and `x-else` to achieve rendering with multiple conditions.

Below is an example using `x-if`, `x-else-if`, and `x-else` to toggle the rendered content based on multiple conditions:

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

In the above example, different content will be rendered based on the value of `condition`, achieving the effect of rendering with multiple conditions.

## Template Component: x-fill

`x-fill` component allows you to dynamically fill content in a template. It can generate different content based on the attribute values of the host component. The `x-fill` component uses the `name` attribute to specify the filling template to be used, and passes data to the filling template through the `value` attribute.

### Example of x-fill to fill an array string

The following is an example of using `x-fill` to fill an array of strings, filling different string contents through looping:

```javascript
const array = ['string1', 'string2', 'string3'];

array.forEach((str, index) => {
   array[index] = x-fill`${index + 1} - ${str}`;
});

console.log(array);
// Output: ['1 - string1', '2 - string2', '3 - string3']
```

In this example, the `x-fill` template tag is used to concatenate the index number and the string content in each iteration. The resulting array will contain the modified strings.

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

In the above example, `x-fill` uses a filling template called `fillTemplate` and passes an array to it. The `{{ $data }}` is used in the filling template to render each element in the array, thus achieving the cyclic filling of different string contents.

### x-fill Example of an Object that Can Fill Itself with Fill

`x-fill` can also fill objects with more complex structures and supports self-nested filling.

Here is an example of using `x-fill` to fill an object and generate nested content:

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

In the example above, `x-fill` uses a fill template called `nestedFillTemplate` and passes a complex nested object to it. The fill template uses `{{ $data.title }}` to render the title of the object and also uses nested `x-fill` to fill the content of the child items, achieving nested content generation.

### The meanings of $data, $ele, and $host within the template

When filling in the template, you can use special placeholders to access different data: .

- `{{ $data }}`: represents the data passed to the template for filling, i.e., the value of the `value` attribute.
- `{{ $ele }}`: represents the element where the filling template is located, can be used to access the element's attributes and styles.
- `{{ $host }}`: represents the instance of the host component, can be used to access the host component's properties and methods.

These special identifiers can help you dynamically access and render different data within the template. In the example, you can see how `{{ $data.title }}` is used to access the title of the passed data, and how `{{ $host.num }}` is used to access the property of the host component.

