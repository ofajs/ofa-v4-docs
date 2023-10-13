<template is="exm-article">
<a href="../../publics/examples/fill/demo.html" preview></a>
<a href="../../publics/examples/fill/test-demo.html" main></a>
</template>

# Fill Rendering

Fill rendering (x-fill) templates in front-end frameworks are similar to the concept of list rendering. It allows you to dynamically render a set of microcomponents based on a data collection.

During the filling and rendering process, you can use the following special variables: 

- **$data**: Represents the data of the fill item. By manipulating $data, you can obtain or modify the data of each fill item.
- **$index**: Represents the index of the current data item in the data collection.
- **$host**: Represents the current component itself. If you want to obtain the data of the component or call the component's methods, you need to use $host to access the component.


