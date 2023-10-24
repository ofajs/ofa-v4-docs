# Usage of o-router component

The `o-router` component is a component used to bind the routes within `o-app` to the current browser tab. It can help you manage page routes and display more conveniently.

## Quoting the o-router component

First, you need to import the `o-router` component in your page. You can import the `router.mjs` file using the following method: 

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.js"></script>
```

## Using the o-router component

Using the `o-router` component is achieved by wrapping it outside the `o-app` component. This allows binding the application's routes to the current browser tab.

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## fix-body attribute

The `o-router` component also provides a `fix-body` attribute. When you set this attribute, the component will automatically add styles to the `<html>` tag so that the size of the application matches the size of the page, making the content of the application fill the entire window.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>router test</title>
    <script src="ofa.js"></script>
    <!-- Import the o-router component -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- Use the o-router component and set the fix-body attribute -->
    <o-router fix-body> 
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```