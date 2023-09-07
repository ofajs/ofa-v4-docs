# Subroute mode

In ofa.js, setting subroutes is slightly different from the practices of some frontend frameworks. ofa.js uses a more intuitive approach by setting the parent page as the container on the page module, to achieve the demand for subroutes.

## Setting the parent page container

To create subroutes, you first need to set the `parent` parameter on the page module of the child page, specifying the page module address of the parent page. This way, when the child page is loaded, ofa.js will automatically wrap the child page in the parent page container.

```html
<template page>
  <h1>Page 1</h1>

  <script>
    export const parent = "./layout-page.html";
  </script>
</template>
```

In the above example, the page module of the sub-page specifies the address of the parent page container using the `parent` parameter.

## Parent Page Container Template Setting

The template of the parent page container needs to set a `<slot>` element so that the sub-page can be inserted into the specified position of the parent page. At the same time, make sure that the container element of the `<slot>` element is set to `position: relative`, which is very important because the sub-page will be absolutely positioned within the parent page container.

Here is an example template of a parent page container:

```html
<!-- layout-page.html -->
<template page>
  <style>
    /* Set the container element to relative position */
    .parent-container {
      position: relative;
    }
  </style>
  
  <!-- Set the container element for inserting the sub-page -->
  <div class="parent-container">
    <slot></slot>
  </div>
</template>
```

In the above example, by setting a container element with a `slot`, the sub-page will be inserted into that container. Make sure the container element has relative positioning so that the sub-page can be positioned relative to it.

By using this approach, you can more intuitively configure child routes by establishing the relationship between the parent page container and the sub-page for loading and rendering the sub-page.

## Parent Page Route Listening

In some cases, multiple pages share the same parent page as a container. When navigating between these pages, the parent page is not refreshed. In this case, the parent page can still listen to route changes to perform corresponding actions without refreshing the page.

### Listening to Route Changes

The parent page module can set a `routerChange` function to listen to route changes. When the page changes its route without refreshing the parent page, the `routerChange` event will be triggered. This event will pass the information of the current page and the navigation type (`type`).

Here is an example of a parent page module that demonstrates how to set up a `routerChange` function to listen to route changes:

```javascript
// Parent page's page module
export const routerChange = (current, type) => {
  console.log(`Route Change: Current page is ${current.src}, navigation type is ${type}`);
};
```

In the above example, the `routerChange` function takes two parameters: `current` represents the current page address, and `type` represents the type of navigation. When the page undergoes a router change, this function is triggered and outputs the corresponding information.

