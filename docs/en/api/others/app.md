# app

`o-app` is one of the core components in `ofa.js`, used for configuring and managing the entire application. Here are some key properties and methods of app:

## src

The `src` property is used to specify the specific address of the application parameter configuration module. For detailed examples, please refer to the [case](../../cases/app-config.md).

```javascript
const app = $("o-app");
console.log(app.src);
```

## current

The `current` property is used to obtain the currently displayed page instance. This can help you access and manipulate the currently displayed page, such as updating its content or performing specific operations.

```javascript
// Get the current page instance
const currentPage = app.current;
```

## goto

The `goto` method is used to navigate to a specific page. You can pass the address of the target page, and the application will load and display that page. This is an important method for application navigation.

```javascript
// Go to specified page
app.goto("/page2.html");
```

## replace

`replace` method is similar to `goto`, but it is used to replace the current page instead of adding a new page to the stack. This can be used to implement page replacement instead of stack navigation.

```javascript
// Replace the current page with a new page
app.replace("/new-page.html");
```

## back

The `back` method is used to go back to the previous page, implementing the back navigation operation for page navigation. This will navigate the user back to the previous page.

```javascript
// Go back to the previous page
app.back();
```

## routers

The `routers` property contains the routing configuration information for the application. This is an important property that defines the routing rules and mapping for the various pages in the application. The routing configuration determines the navigation between pages and how URL is handled.

```javascript
// Access the route configuration information of the application
const routeConfig = app.routers;
```