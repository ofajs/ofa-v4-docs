# Static Client-Side Rendering (SCSR)

## What is SCSR?

SCSR, or Static Client-Side Rendering, is a variation of CSR (Client-Side Rendering) that allows pages to be crawled in a static state while maintaining the user experience of CSR.

## How to Use SCSR

You can reference the SCSR library using the following method:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.0.0/libs/scsr/dist/scsr.min.js"></script>
```

## SCSR's working principle

SCSR works by directly running the page module in single-file mode, without using the `o-page` tag, thus enabling rendering on the page. Specifically, it involves placing the template code of the page module directly within the `o-app`.

Here is an SCSR example that demonstrates how to directly render the content of a page module on the page:

```html
<!-- home.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="./public.css" />
    <script src="../../ofa.js"></script>
    <script src="./scsr.min.js"></script>
  </head>
  <body>
    <o-app src="./app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Hello, World!</h1>
          <p class="subtitle">Welcome to my ofa.js page.</p>
          <div>count => {{count}}</div>
          <a href="./pages/help.html" olink>GO TO HELP</a>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              data: { count: query.count || 0 },
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>
```

The content within the `template` tag in SCSR is directly rendered onto the page, and this content is actually the page module of the single-file mode.

Continuing with the example of the `home.html` page, let's create a `help` page:

```html
<!-- pages/help.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Help</title>
    <link rel="stylesheet" href="../public.css" />
    <script src="../../../ofa.js"></script>
    <script src="../scsr.min.js"></script>
  </head>
  <body>
    <o-app src="../app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Help Page</h1>
          <button on:click="back()">GO Back</button>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              proto: {},
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>

```

After clicking "GO TO HELP" on the `home.html` page, it smoothly transitions to the `help.html` page, achieving a smooth transition effect through client-side rendering.

## Precautions

All pages using the SCSR scheme must keep the referenced resources consistent, except for descriptive content (such as title, meta:description, keywords) and page template content, to ensure consistent experience after page navigation and refresh.

## About the SSR scheme

The current SCSR scheme is actually more similar to a SSG (Static Site Generation) scheme, as it pre-renders the pages into static content and then interacts with them through the client side. ofa.js already provides a relatively independent component encapsulation scheme, allowing frontend developers to encapsulate components and then combine them with traditional backend rendering page schemes (such as Node.js, Go, Java, PHP, etc.) to quickly create high-quality web pages. 

We plan to provide a complete SSR (Server-Side Rendering) scheme in the future. The principle of this scheme is to first fetch the element content of the next page, and then compare it with the current page's tag content to dynamically add, delete, and modify attribute values. However, it is important to note that this SSR scheme will be more time-consuming because it involves complex element comparison and modification operations.

ofa.js is an emerging framework, and the author's spare time is limited, so the SSR scheme has not been fully developed yet. However, if ofa.js can have more users in the future and there is a strong demand for the SSR scheme, the author will continue to improve and develop this scheme. Currently, the author will focus on the stability and functionality expansion of the framework, and also welcomes feedback and suggestions from users in order to better meet their needs in the future.

