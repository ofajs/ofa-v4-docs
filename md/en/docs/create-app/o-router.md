# Usage of o-router component

The `o-router` component is used to bind the routes within `o-app` to the current browser tab. It can help you manage page routing and display more conveniently.

## Importing the o-router component

First, you need to import the `o-router` component into your page. You can do this by referencing the `router.mjs` file in the following way:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.0.0/libs/router/dist/router.min.js"></script>
```

## Using the o-router component

To use the `o-router` component, you need to wrap it outside of the `o-app` component. This way, you can bind the routes within the application to the current browser tab.

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## The fix-body attribute

The `o-router` component also provides the `fix-body` attribute. When you set this attribute, the component will automatically add styles to the `<html>` tag, making the size of the application equal to the size of the page, so that the content of the application fills the entire window.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>router test</title>
    <script src="ofa.js"></script>
    <!-- Importing the o-router component -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.0.0/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- Using the o-router component and setting the fix-body attribute -->
    <o-router fix-body> 
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```

