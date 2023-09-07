# Configure app parameters

You can configure the parameters of the application by setting external modules for the `o-app` tag individually.

These parameters are an ES module, and you can configure the following parameters:

- **home**: The homepage of the application, which is the page displayed when initially loaded.
- **loading**: The loading content displayed before the module is fully loaded when clicking on a page transition. You can return a string as the loading content.
- **pageAnime**: The animation effect during page transitions, using an object that contains CSS style attributes.
  - **current**: Represents the style when the page is the current page.
  - **next**: Represents the style when the page is not yet entered.
  - **previous**: Represents the style when the page is about to exit.

In this way, you can customize the parameters such as the homepage, loading style, and page transition animation according to the needs of the application, thereby providing a more personalized experience for the application.

<a href="../../publics/examples/use-config/demo.html" preview demo></a>
<a href="../../publics/examples/use-config/app-config.mjs" main demo></a>
<a href="../../publics/examples/use-config/page1.html" demo></a>
<a href="../../publics/examples/use-config/page2.html" demo></a>
