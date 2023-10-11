<template is="exm-article">
  <a href="../../publics/examples/use-config/demo.html" preview></a>
  <a href="../../publics/examples/use-config/app-config.mjs" main></a>
  <a href="../../publics/examples/use-config/page1.html"></a>
  <a href="../../publics/examples/use-config/page2.html"></a>
</template>

# Configure app parameters

You can configure the parameters of the application by setting external modules for the `o-app` tag.

These parameters are an ES module, and you can configure the following parameters:

- **home**: The homepage of the application, which is the page displayed when it is initially loaded.
- **loading**: The content displayed while modules are being loaded when navigating between pages in the application. You can provide a string as the loading content.
- **pageAnime**: The animation effect used when navigating between pages, defined as an object with CSS style properties.
  - **current**: Represents the style of the page when it is the current page.
  - **next**: Represents the style of the page when it is entering.
  - **previous**: Represents the style of the page when it is exiting.

Through this method, you can customize parameters such as the home page, loading style, and page transition animation according to the needs of the application, thus bringing a more personalized experience to the application.
