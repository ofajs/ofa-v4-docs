# Creating Applications

Using the `o-app` tag allows you to easily create a complete application window. Here is the step-by-step process for creating an application and configuring it:

## Basic code

Create an HTML file and set the 'o-app' tag as the display window for the application. Make sure to set the 'o-app' tag to full screen style so that the application occupies the entire viewport.

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

2. Create an ES module to set up the configuration data for the application. The configuration data includes the following options:

   - `home`: String type, the page module address of the application's homepage.
   - `loading`: Function type, this function will be executed when the application is loading a new page. The content obtained will be inserted into the application as a loading prompt. After the page is loaded, this loading element will be automatically removed.
   - `fail`: Function type, this function will be executed when the application fails to load a page. The value returned will be displayed in the application as a loading failure prompt. The function will have the `src` address of the failed page and the error object.
   - `pageAnime`: Animation configuration for page transitions.

The following is an example of the configuration data for the application:

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

3. Use the `o-app` tag in HTML files and reference the configuration data es module through the `src` attribute.

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

By following the steps above, you have successfully created an application window using the `o-app` component. The `o-app` component will load the page based on the settings in the configuration data, display a loading prompt or a loading failure prompt, and support page transition animations. This way, you can quickly build a fully functional and interactive application.

## Route Jump

In the `o-app` application, you can easily achieve route navigation, jumping from one page module to another page module. Below are several different ways to perform route navigation.

### Use `<a>` tag for route navigation

You can use the `<a>` tag in the HTML of the page to implement routing. You need to specify the `href` attribute as the path of the target page module and add the `olink` attribute to inform the `o-app` component that this is a routing link.

```html
<a href="./pages/home.mjs?count=2" olink>Jump to homepage</a>
```

### goto

You can use the `on:click` attribute in the page template to bind a click event and call the `goto` method on the module for routing.

```html
<template page>
  <div class="container">
    <button on:click="toabout">Jump to About page</button>
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

Uninstall the target element directly.

```html
<button on:click="goto('./pages/about.mjs')">Go to about page</button>
```

### Replace Jump and Return Pages

Besides the `goto` method, `o-app` also supports the `replace` and `back` methods.

- The `replace` method is used to replace navigation, it replaces the current page's route with the route of the new page.

```html
<button on:click="replace('./pages/settings.mjs')">Jump and replace the current page</button>
```

- The `back` method is used to go back to the previous page.

```html
<button on:click="back()">Back to Previous Page</button>
```

It should be noted that the application will maintain the routing state of the components, but the routing data will not be bound to the current browser tab. In this way, you can easily implement page transitions and navigation between pages in the application.

If you want to bind routes and pages, you can use the o-router component, which we will discuss in detail in the following sections.

Through the above methods, you can implement flexible routing in the `o-app` application, allowing users to easily browse different page content.

## Accessing Apps and Current Pages

In various elements (including components) within the application, you can use the **app** attribute to access the `o-app` instance they belong to. This is very useful for operations that require interaction with the entire application.

You can retrieve the address of the currently active page module through the `app.current` property.

Here is an example of usage: 

```javascript
// MyComponent.mjs
export default () => {
  return {
    attached(){
      const appTag = this.app;

      const currentPage = appTag.current;
      console.log(`The current activated page is: ${currentPage}`);
    }
  };
}
```

In the example above, the app tag was retrieved using the selector `.app`, and then the current active page address was obtained by accessing the `app.current` attribute.

## Tips: Pre-cache the next page

In some scenarios, you may already know that the user is about to navigate to the next page. To enhance the user experience, you can pre-cache the page modules of the next page, so that they can be loaded immediately when the actual navigation occurs. This reduces the waiting time for users and makes their experience smoother.

In the JavaScript code of the current page, call the `load` method and pass in the module path of the next page. The module will be loaded and cached.

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load('./pages/next-page.mjs'); // This is only used for caching and is not a necessary module for the current page, so there is no need to add await
};
```