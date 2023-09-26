<template is="exm-article">
<a href="../../publics/examples/use-page/demo.html" preview></a>
<a href="../../publics/examples/use-page/page.html" main></a>
</template>

# Using Page Components

Once `ofa.js` is loaded, a page component named `o-page` will be automatically added globally. This component is used to load page modules, which are a special kind of component module that is not registered as a custom tag, but is loaded through the `o-page` component.

Page modules are similar to component modules but with some differences. Page modules use the `page` attribute to define the template instead of the `component` attribute. The development logic and template syntax for page modules are the same as component modules. However, page modules cannot use the `attrs` attribute because page parameters are typically passed through the URL, not through `data` or `attrs`.

In the example, the `o-page` component is used to load the `page.html` page module. The page module uses the `page` attribute to define the template, and then returns an object through a JavaScript function to set the data. The query parameter `count` in the URL will be passed to the page module and used to initialize the data. The button click event in the page can update the data and render it on the page.
