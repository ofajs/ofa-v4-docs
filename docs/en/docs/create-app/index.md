# Introduction

Apart from developing components, `ofa.js` can also be used to develop fully functional applications.

`ofa.js` integrates applications as an `o-app` component, allowing you to quickly create applications by directly using this tag. This approach simplifies and streamlines the process of application creation.

In addition, the official `ofa.js` also provides a complete **routing** and **SSG (Static Site Generation)** solution to help developers build more robust applications. These features can speed up the development process, allowing you to focus on the logic and user experience of your application without worrying too much about the underlying details.

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

Above is a simple application tutorial code example. The development process of the application will be explained step by step.