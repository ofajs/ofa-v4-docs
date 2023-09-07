# Fill Rendering

Fill rendering (x-fill) templates in frontend frameworks are similar to the concept of list rendering. They allow you to dynamically render a set of micro-components based on a data collection.

During the fill rendering process, you can use the following special variables:

- **$data**: Represents the data of the fill item. By manipulating $data, you can access or modify the data of each fill item.
- **$index**: Represents the index of the current data item in the data collection.
- **$host**: Represents the current component itself. If you want to get the component's data or call the component's methods, you need to use $host to access the component.

<a href="../../publics/examples/fill/demo.html" preview demo></a>
<a href="../../publics/examples/fill/test-demo.html" main demo></a>

