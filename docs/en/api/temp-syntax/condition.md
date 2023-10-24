# Conditional Rendering

Conditional rendering is achieved through three conditional components:

## x-if

`x-if` is the main conditional component that requires the `value` to be set. If the conditions for `value` are met, it will display the wrapped content.

## x-if-else

`x-if-else` can be used after `x-if` or `x-if-else`, and it needs a `value` to be set. If the preceding conditional components are not met and its own `value` is true, it will display the wrapped content.

## x-else

`x-else` can be used after `x-if` or `x-if-else`, and it should be placed at the end. If none of the previous conditions are met, it will display the content wrapped by itself. No `value` value needs to be set.

## Example

<comp-viewer comp-name="text-render">

```html
<template component>
    <button on:click="count++">Add Count</button>
    <x-if :value="count % 3 === 0">
        <div style="color:red;">if => {{count}}</div>
    </x-if>
    <x-else-if :value="(count + 1) % 3 === 0">
        <div style="color:green;">else-if => {{count}}</div>
    </x-else-if>
    <x-else>
        <div style="color:blue;">else => {{count}}</div>
    </x-else>
    <script>
    export default {
        tag: "text-render",
        data: {
            count: 0
        },
    };
    </script>
</template>
```

</comp-viewer>

In the example, these conditional rendering components are used to select the content to be displayed based on the value of `count`. When `count` is divisible by 3, the `x-if` condition is satisfied and displays red text; when `(count + 1)` is divisible by 3, the `x-if-else` condition is satisfied and displays green text; otherwise, blue text is displayed.

