# Create an application

You can easily create a complete application window using the `o-app` tag. Here are the steps to create an application and configure it:

## Basic code

1. Create an HTML file and set the `o-app` tag as the display window for the application. Make sure to set the `o-app` to fullscreen style to occupy the entire viewport.

```html
<!-- app.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app></o-app>
</body>
</html>
```

2. Create an ES module to set the configuration data for the application. The configuration data includes the following options:

- `home`: A string specifying the page module address for the application's homepage.
- `loading`: A function that runs when the application is loading a new page. The content returned by this function will be inserted into the application as a loading indicator, and it will automatically be removed when the page finishes loading.
- `fail`: A function that runs when the application fails to load a page. The value returned by this function will be displayed in the application as a loading failure message. The function receives the source address of the failed page and the error object.
- `pageAnime`: The animation configuration for page transitions.

Here is an example of the application's configuration data:

```javascript
// app-config.mjs
export const home = "./pages/home.mjs?count=1";

export const loading = () => {
  const loadingEl = $(`<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;">Loading</div>`);
  return loadingEl;
};

export const fail = ({ src, error }) => {
  return `<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;" data-testid="error-container">
    <div style="padding:20px;text-align:center;">
      <h3>Load Fail</h3> 
      <p>${error.stack}</p>
      ${src}
      <div>
        <button on:click="back()">Back</button>
      </div>
    </div>
  </div>`;
};

export const pageAnime = {
  current: {
    opacity: 1,
    transform: "translate(0, 0)",
  },
  next: {
    opacity: 0,
    transform: "translate(30px, 0)",
  },
  previous: {
    opacity: 0,
    transform: "translate(-30px, 0)",
  },
};
```

3. Use the `o-app` tag in the HTML file and reference the configuration data's ES module using the `src` attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app src="./app-config.mjs"></o-app>
</body>
</html>
```

By following the above steps, you have successfully created an application window that uses the `o-app` component. The `o-app` component will load the page based on the settings in the configuration data, displaying a loading indicator or an error message if the loading fails, and supporting page transition animations. This allows you to quickly build a fully functional and interactive application.

## Route Navigation

In the `o-app` application, you can easily implement route navigation, moving from one page module to another. The following describes several different ways to perform route navigation.

### Using `<a>` Tags for Route Navigation

You can use `<a>` tags in the HTML of the page to implement route navigation. The `href` attribute should be specified as the path to the target page module, and the `olink` attribute should be added to inform the `o-app` component that this is a route link.

```html
<a href="./pages/home.mjs?count=2" olink>Go to Home</a>
```

### goto

You can use the `on:click` attribute in the page template to bind a click event and call the `goto` method on the module to perform route navigation.

```html
<template page>
  <div class="container">
    <button on:click="toabout">Go to About Page</button>
  </div>

  <script>
    export default async ({ query }) => {
      return {
        proto: {
          toabout() {
            this.goto("./about.mjs");
          },
        },
      };
    };
  </script>
</template>
```

Or directly on the target element:

```html
<button on:click="goto('./pages/about.mjs')">Go to About Page</button>
```

### Replace Navigation and Back

In addition to the `goto` method, `o-app` also supports `replace` and `back` methods.

- The `replace` method is used to replace navigation. It replaces the current page's route with the route of the new page.

```html
<button on:click="replace('./pages/settings.mjs')">Go to New Page and Replace Current Page</button>
```

- The `back` method is used to go back to the previous page.

```html
<button on:click="back()">Go back to previous page</button>
```

It should be noted that the component's route state is maintained within the application, but the route data is not bound to the current browser tab. This allows for easy navigation and transitions between pages in the application.

If you want to achieve binding between routes and pages, you can use the o-router component, which will be explained in detail in later chapters.

Using the above methods, you can implement flexible navigation within an o-app application, allowing users to easily browse different page contents.

## Accessing the Application and Current Page

Within various elements (including components) in the application, you can use the **app** attribute to access the o-app instance they belong to. This is useful for interactions that need to involve the entire application.

You can get the address of the currently active page module through the `app.current` property.

Here is an example of its usage:

```javascript
// MyComponent.mjs
export default () => {
  return {
    attached(){
      const appTag = this.app;

      const currentPage = appTag.current;
      console.log(`The currently active page is: ${currentPage}`);
    }
  };
}
```

In the example above, the application tag was obtained by using the selector `.app`, and then the current active page address was accessed through the `app.current` property.

## Tip: Pre-caching next page

In some scenarios, you may already know that the user will be navigating to the next page. To improve user experience, you can pre-cache the page module of the next page so that it can be immediately loaded during actual navigation, reducing the waiting time for the user and making the experience smoother.

In the JavaScript code of the current page, call the `load` method and pass the module path of the next page. This module will be loaded and cached.

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load('./pages/next-page.mjs'); // This is used only for caching, not necessary for non-current page modules, no need to add await
};
```

