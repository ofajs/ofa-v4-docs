# PATH

The `PATH` property is usually used for custom components or page components to obtain the file address of the registered component. This can help you understand the source of the component during development, especially when you need to reference or load other resource files. You can use the `PATH` property to construct the file path.

Here is a simple example that demonstrates how to use the `PATH` property in a custom component:

```html
<my-comp id="myCustomComponent">
  <!-- This is the content of your custom component -->
</my-comp>
<script>
  // Get the file path of the custom component
  const componentPath = $("#myCustomComponent").PATH;

  // You can use componentPath here to build file paths, load other resource files, etc.
</script>
```

In this example, we selected a `my-comp` element with an `id` of "myCustomComponent" and then obtained the file path of the custom component by using the `PATH` property. You can use the `componentPath` variable in the script section as needed, such as using it to construct paths for other resource files or perform other operations.