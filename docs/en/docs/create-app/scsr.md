# Static Client Side Rendering (SCSR)

## What is SCSR?

SCSR, short for Static Client-Side Rendering, is also known as static client-side rendering. SCSR is a variant of CSR (Client-Side Rendering) that allows web pages to be crawled by search engines while maintaining the user experience of CSR in a static state.

## How to Use SCSR

You can reference the SCSR library using the following methods: 

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/scsr/dist/scsr.min.js"></script>
```

## The Working Principle of SCSR

SCSR is a page module that runs in single-file mode without using the `o-page` tag, allowing rendering on the page. Specifically, the template code of the page module is directly placed within the `o-app`.

Below is an example of SCSR, which shows how to render the content of a page module directly on the page:

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

Through SCSR, the content inside the `template` tag will be directly rendered on the page, and this part of the content is actually the page module in single-file mode.

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

After clicking "GO TO HELP" on the `home.html` page, the smooth transition to the `help.html` page is achieved, realizing the smooth transition effect of client-side rendering.

## Caveat

All pages using the SCSR scheme must keep the referenced resources consistent, except for descriptive contents such as title, meta:description, keywords, and page template content, to ensure consistent experience after page navigation and refresh.

## About SSR Solution

The current SCSR solution is actually more similar to a SSG (Static Site Generation) solution because it pre-renders the pages into static content and then interacts with them through the client. ofa.js has provided a relatively independent component encapsulation solution, allowing frontend developers to encapsulate components and combine them with traditional backend rendering solutions (such as website rendering frameworks in languages like Node.js, Go, Java, PHP, etc.), enabling backend developers to quickly use these encapsulated components to build high-quality web pages.

We plan to provide a complete Server-Side Rendering (SSR) solution in the future. The principle of this solution is to first obtain the element content of the next page, and then compare it with the current page's tag content in order to dynamically add, delete, and modify attribute values. However, it is important to note that this SSR solution can be time-consuming because it involves complex element comparison and modification operations.

ofa.js is an emerging framework, and the author's limited spare time means that the SSR solution has not been fully developed yet. However, if ofa.js gains more users in the future and there is a strong demand for an SSR solution, the author will continue to improve and develop this solution. Currently, the author is focusing on the stability and feature expansion of the framework, and welcomes user feedback and suggestions to better meet user needs in the future.