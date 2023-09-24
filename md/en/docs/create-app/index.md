# Developing an application

In addition to developing components, `ofa.js` can also be used to develop fully functional applications.

`ofa.js` integrates the application as an `o-app` component, allowing you to quickly create applications by simply using this tag. This simplifies and streamlines the process of application creation.

Furthermore, `ofa.js` also provides a complete **routing** and **SSG (Static Site Generation)** solution, helping developers build more robust applications. These features accelerate the development process and allow you to focus on the logic and user experience of the application, without having to worry too much about the underlying details.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>app test demo</title>
    <script src=".././../ofa.js"></script>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      o-app {
        display: block;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <o-app>
      <o-page src="./pages/hello.html"></o-page>
    </o-app>
  </body>
</html>
```

The above is a simple application tutorial code example, and the development process of the application will be explained gradually next.

