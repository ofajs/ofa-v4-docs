# Subroute Mode

In ofa.js, setting up sub-routes is slightly different from other front-end frameworks. ofa.js uses a more intuitive approach by setting the parent page as a container on the page module to achieve the needs of sub-routes.

## Set Parent Page Container

To create a sub-route, first, the `parent` parameter needs to be set on the page module of the child page, specifying the page module address of the parent page. This way, when the child page is loaded, ofa.js will automatically wrap the child page in the container of the parent page.

```html
<template page>
  <h1>Page 1</h1>

  <script>
    export const parent = "./layout-page.html";
  </script>
</template>
```

In the above example, the page module of the subpage specifies the address of the parent page container through the `parent` parameter.

## Parent Page Container Template Settings

The template of the parent page container needs to set a `<slot>` element so that the child pages can be inserted into the specified position of the parent page. At the same time, make sure that the container element of the `<slot>` element is set to `position: relative`. This is very important because the child pages will be absolutely positioned within the parent page container.

The following is an example template of a parent page container:

```html
<!-- layout-page.html -->
<template page>
  <style>
    /* Set the container element as relative positioning */
    .parent-container {
      position: relative;
    }
  </style>
  
  <!-- Set the container element for inserting subpages -->
  <div class="parent-container">
    <slot></slot>
  </div>
</template>
```

In the above example, by setting a container element with a `slot`, the subpage will be inserted into the container. Make sure the container element has relative positioning so that the subpage can be positioned relative to the container.

By using this approach, you can configure sub-routes more intuitively. By setting the association between the parent page container and the child pages, you can achieve the loading and rendering of the child pages.

## Listening to Routes on the Parent Page

In some cases, multiple pages share the same parent page as a container. When these pages navigate between each other, the parent page will not be refreshed. In this case, the parent page can still listen for changes in the route and perform corresponding operations without refreshing the page.

### Listen to routing changes

The parent page module can set a `routerChange` function to monitor the change of the route. When the page changes the route without refreshing the parent page, the `routerChange` event will be triggered. This event will pass the information of the current page and the navigation mode (`type`).

Below is an example of a parent page module, demonstrating how to set up the `routerChange` function to listen for route changes:

```javascript
// Parent page's page module
export const routerChange = (current, type) => {
  console.log(`Routing change: Current page is ${current.src}, change method is ${type}`);
};
```

In the above example, the `routerChange` function receives two parameters. `current` represents the address of the current page, and `type` represents the type of navigation. When the page undergoes a router change, this function will be triggered and output the corresponding information.

