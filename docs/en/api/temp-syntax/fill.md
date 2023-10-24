# x-fill

Use the `x-fill` component for list rendering; set the `value` attribute to populate the array data.

In `x-fill`, you can use special variables `$index` to represent the index of the current list item, and `$data` to represent the data of the list item itself.

Here is an example that demonstrates how to use `x-fill` to render an array:

<comp-viewer comp-name="text-render">

```html
<template component>
  <ul>
    <x-fill :value="arr">
      <li>{{$index}} - {{$data}}</li>
    </x-fill>
  </ul>
  <script>
    export default {
      tag: "text-render",
      data: {
        arr: ["pen", "apple", "pineapple"],
      },
    };
  </script>
</template>
```

</comp-viewer>

In this example, we use the `x-fill` component to render the array `arr` and display the index and data in each list item.

## Template List Rendering

You can use the `template` element and add the `name` attribute to customize temporary templates within a component. When using `x-fill`, use the `name` attribute to specify the template name to be filled.

Here is an example demonstrating how to use template list rendering:

<comp-viewer comp-name="text-render">

```html
<template component>
  <ul>
    <x-fill :value="arr" name="easyLi"></x-fill>
  </ul>
  <template name="easyLi">
    <li>{{$index}} - {{$data}}</li>
  </template>
  <script>
    export default {
      tag: "text-render",
      data: {
        arr: [{ name: "apple" }, { name: "pen" }, { name: "pineapple" }],
      },
    };
  </script>
</template>
```

</comp-viewer>

In this example, we created a template called "easyLi", and then used `x-fill` to populate the data of the array `arr`, displaying the index and name of the data in each list item.

## Nested List Rendering

When rendering nested lists, starting from the second level, templates must be used to fill in the content. This design is to avoid the nested list rendering code becoming complex.

Here is an example demonstrating how to perform nested list rendering:

<comp-viewer comp-name="fill-three">

```html
<template component>
  <ul>
    <x-fill :value="arr">
      <li>{{$index}} - {{$data.name}}</li>
      <x-if :value="$data.childs">
        <ol>
            <x-fill :value="$data.childs" name="easyLi"></x-fill>
        </ol>
      </x-if>
    </x-fill>
  </ul>
  <template name="easyLi">
    <li>{{$data}}</li>
  </template>
  <script>
    export default {
      tag: "fill-three",
      data: {
        arr: [
          {
            name: "apple",
          },
          {
            name: "pen",
            childs: [
              { name: "pencil" },
              {
                name: "ballpoint pen",
              },
            ],
          },
        ],
      },
    };
  </script>
</template>
```

</comp-viewer>

In this example, we have an array `arr` that contains two objects. Each object has a `name` property and a `childs` property that may contain nested sub-items. We use `x-fill` to populate the list and render the sub-items using the template `"easyLi"`. If an item has sub-items, we use `x-if` to check and create a nested list.

## Recursive List Rendering

Template rendering can also be done recursively, which is very useful for building tree-like structured lists.

The following is an example of how to perform recursive list rendering:

<comp-viewer comp-name="fill-four">

```html
<template component>
  <ul>
    <x-fill :value="arr" name="easyLi"></x-fill>
  </ul>
  <template name="easyLi">
    <li>
      {{$index}} - {{$data.name}}
      <ul>
        <x-fill :value="$data.childs" name="easyLi"></x-fill>
      </ul>
    </li>
  </template>
  <script>
    export default {
      tag: "fill-four",
      data: {
        arr: [
          {
            name: "apple",
          },
          {
            name: "pen",
            childs: [
              { name: "pencil" },
              {
                name: "ballpoint pen",
              },
            ],
          },
        ],
      },
    };
  </script>
</template>
```

</comp-viewer>

In this example, we have an array `arr` that contains two objects. Each object has a `name` property and a `childs` property that may contain nested sub-items. We use `x-fill` to populate the list and use the template "easyLi" to render the sub-items. If an item has sub-items, we use `x-fill` to recursively render the child list, achieving recursive list rendering.