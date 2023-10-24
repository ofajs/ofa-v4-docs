<template is="exm-article">
<a href="../../publics/examples/use-app/demo.html" preview></a>
<a href="../../publics/examples/use-app/page1.html" main></a>
<a href="../../publics/examples/use-app/page2.html"></a>
</template>

# Using the app component

In `ofa.js`, you can use the `o-app` component to create the layout structure of the entire application and load different page modules within it. By using the `o-app` component, `o-page` component, and page modules, you can build the page structure of the entire application and implement navigation between pages.

When the `o-page` component is inside `o-app`, you can use the `<a>` tag with the `olink` property to achieve page navigation. This navigation will not affect the current page, but will only navigate within `o-app`, similar to using an `<iframe>`.

If the `o-page` component is within `o-app`, you can also use the following method:
- Use the `goto` method to navigate to another page.
- Use the `back` method to return to the previous page.
- Use the `replace` method for replacing the current page during navigation.

By using the `o-app` component, you can build the layout structure of the entire application and load different page modules in it. At the same time, the routing function provided by `o-app` makes it more convenient and flexible to navigate between pages.

In this example, we create an application layout using the `o-app` component and then load a page module `page1.html` within it.

In the `page1.html` page module, we defined a title and a button. Clicking the button will navigate to another page module `page2.html`. We also added a link with the `olink` attribute, and clicking the link will also navigate to `page2.html`.

In the `page2.html` module, we also defined a title and a button, clicking the button will go back to the previous page, implementing page navigation.
