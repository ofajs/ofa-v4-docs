<template is="exm-article">
<a href="../../publics/examples/use-page/demo.html" preview></a>
<a href="../../publics/examples/use-page/page.html" main></a>
</template>

# Use Page Components

Once `ofa.js` is loaded, a page component called `o-page` will be automatically added to the global scope. This component is used to load page modules, which are a special type of component module that is not registered as a custom tag, but loaded through the `o-page` component.

Page modules are similar to component modules, but with a few differences. Page modules use the `page` property to define templates instead of the `component` property. The development logic for page modules is the same as for component modules, using the same template syntax, template components, and so on. However, page modules cannot use the `attrs` feature because page parameters are usually passed via URL, not via `data` or `attrs`.

In the example, the `o-page` component is used to load the `page.html` page module. The template is defined in the page module using the `page` property, and then an object is returned through a JavaScript function to set the data. The query parameter `count` in the URL will be passed to the page module and used to initialize the data. Button click events within the page can update the data and render it in the page.
