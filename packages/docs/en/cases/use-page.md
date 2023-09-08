# Using Page Components

Once `ofa.js` is loaded, a page component named `o-page` will be automatically added globally. This component is used to load page modules, which are a special kind of component module that is not registered as a custom tag, but is loaded through the `o-page` component.

Page modules are similar to component modules but with some differences. Page modules use the `page` attribute to define the template instead of the `component` attribute. The development logic and template syntax for page modules are the same as component modules. However, page modules cannot use the `attrs` attribute because page parameters are typically passed through the URL, not through `data` or `attrs`.

In the example, the `o-page` component is used to load the `page.html` page module. The page module defines the template using the `page` attribute and then sets the data by returning an object from a JavaScript function. The query parameter `count` in the URL is passed to the page module and used to initialize the data. Button click events within the page can update the data and render it in the page.

<a href="../../publics/examples/use-page/demo.html" preview demo></a>
<a href="../../publics/examples/use-page/page.html" main demo></a>

