This example demonstrates how to create a component called 'sync'. The component's template contains multiple links. Note that only strings or numbers can be passed as data for syncing, other data types are not supported.

# Using the app component

In `ofa.js`, you can use the `o-app` component to create the layout structure of the entire application and load different page modules within it. By using the `o-app` component, `o-page` component, and page modules, you can build the page structure of the entire application and implement navigation between pages.

When the `o-page` component is inside the `o-app` component, you can use the `<a>` tag with the `olink` attribute to achieve page redirection. This redirection will not affect the current page, but will only navigate within the `o-app` component, similar to using `<iframe>`.

If the `o-page` component is inside the `o-app` component, you can also use the following methods:

- Use the `goto` method to perform page navigation
- Use the `back` method to go back to the previous page
- Use the `replace` method to replace the current page with a new one

By using the `o-app` component, you can build the layout structure of the entire application and load different page modules into it. The routing feature provided by `o-app` makes navigation between pages more convenient and flexible.

In this example, we created an application layout using the `o-app` component and loaded a page module `page1.html` into it.

In the `page1.html` page module, we defined a title and a button. Clicking the button will navigate to another page module `page2.html`. We also added a link with the `olink` attribute, which will also navigate to `page2.html` when clicked.

In the `page2.html` page module, we also defined a title and a button. Clicking the button will return to the previous page, implementing page navigation.
