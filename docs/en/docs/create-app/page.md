# Using the o-page component

In ofa.js, we have built a custom component called `o-page` to provide convenience for page development. This component plays a crucial role in application development. When you want to use component template syntax but don't want to create a completely new component, `o-page` component will be your best choice.

## Page Modules

When creating a single file page module, it is similar to creating a component module. Use the `template` tag to wrap the template code of the page and add the `page` property. Inside this tag, you can freely use template syntax to interact with other components or page modules.

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    export default async ({ load }) => {
      return {
        data: {
          pageTitle: "My Single File Page",
        },
      };
    }
  </script>
</template>
```
In HTML files, use the `src` property of the `o-page` tag to specify the file path of the page module. The page content will be rendered inside this component.

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

## Dual File Mode

Dual file mode separates `static templates` and `logic code` to make the content of the web page clearer.

Here are the steps to use the `o-page` component and page modules:

Creating page module: .

Similar to creating a component module, create a page module but set the `type` property to `$.PAGE`. The available parameters for a page module include `temp`, `data`, `proto`, and `watch`.

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

Create page template: 

In the same directory as the page module, create a page template file named `my-page-template.html`. In this template file, you can use template syntax for interaction, which is similar to the component template syntax mentioned earlier.

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

In your HTML file, use the `<o-page>` tag to use the `o-page` component, and reference the file path of the page module through the `src` property. The content of the page will be rendered inside this component.

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

In this way, when you open the page, the `o-page` component will dynamically load the `my-page.mjs` page module and render the page content based on the templates and data in the module. The lifecycle and template syntax of the page module are consistent with the component module, making page development and management more unified and flexible.