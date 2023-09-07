# Development Page

Inside ofa.js, we have created a custom component called 'o-page', which aims to provide convenience for page development. This component plays a key role in application development. When you want to use the component's template syntax but don't want to create a completely new component, the 'o-page' component will be your best choice.

## Page Module

Create a single-file page module, similar to creating a component module, using the '<template page>' tag to wrap the template code of the page. Inside this tag, you can freely use template syntax to interact with other components or page modules.

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    // Avoid using import in single-file mode
    // import data from './other/module.mjs';

    export default async ({ load }) => {
      // Reference other modules
      // const data = await load("./other/module.mjs");

      return {
        data: {
          pageTitle: "My Single File Page",
        },
      };
    }
  </script>
</template>
```

In your HTML file, use the 'src' attribute of the '<o-page>' tag to reference the file path of the page module. The content of the page will be rendered within this component.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-single-file-page.html"></o-page>
</body>
</html>
```

## Dual-file mode

Dual-file mode separates `static templates` and `logic code` to make the content of the page more distinct.

The following are the steps to use the `o-page` component and page module:

1. Create a page module:

Similar to creating a component module, create a page module but set the `type` property to `$.PAGE`. The available parameters for the page module include `temp`, `data`, `proto`, and `watch`.

```javascript
// my-page.mjs
export const type = $.PAGE;

export const temp = "./my-page-template.html";

export const data = {
  pageTitle: "My Page",
};

export const proto = {
  // ...
};

export const watch = {
  // ...
};
```

2. Create a page template:

In the same directory as the page module, create a page template file named `my-page-template.html`. In this template file, you can use template syntax for interaction, similar to the component template syntax mentioned earlier.

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

In your HTML file, use the `o-page` component with the `<o-page>` tag and reference the file path of the page module through the `src` attribute. The content of the page will be rendered inside this component.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-page.mjs"></o-page>
</body>
</html>
```

In this way, when you open the page, the `o-page` component will dynamically load the `my-page.mjs` page module and render the page content based on the template and data in the module. The lifecycle and template syntax of the page module are consistent with the component module, making the development and management of pages more unified and flexible.

## Check if the page has finished loading

In some cases, you may need to check if the page has fully loaded in order to perform specific operations. `ofa.js` provides several ways to check if the page has finished loading.

### Using the `page._loaded` property

In the page module, `page._loaded` is a boolean property that becomes `true` after the page content is fully loaded. You can use this property to check if the page has finished loading.

```javascript
if (page._loaded) {
  // Page has finished loading
  // Perform your operations
} else {
  // Listen to the page-loaded event
  page.addEventListener('page-loaded', () => {
    // Operations to be performed after the page is loaded
  });
}
```

### Using the `page._rendered` property

Another way is to use the `page._rendered` property, which is a Promise. This Promise enters the `resolve` state after the page is loaded. You can use `await page._rendered` to wait for the page to finish loading and then perform the corresponding operations.

```javascript
async function doSomethingAfterPageLoad() {
  await page._rendered;
  // Page has finished loading
  // Perform your operations
}
```

