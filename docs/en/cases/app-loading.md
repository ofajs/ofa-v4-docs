<template is="exm-article">
  <a href="../../publics/examples/app-loading/demo.html" preview></a>
  <a href="../../publics/examples/app-loading/app-config.mjs" main></a>
  <a href="../../publics/examples/app-loading/page1.html"></a>
  <a href="../../publics/examples/app-loading/page2.html"></a>
</template>

# Customizing loading for the app

The following is an example of customizing the loading of the `o-app` component. In this example, we have created a beautiful progress bar for loading, which will gradually grow during the page loading process and reach 100% directly after loading is complete, then delete the loading element.

You can copy and use the following code to customize the loading effect of your application:

```javascript
export const loading = () => {
  const loadingEl = $({
    tag: "div",
    css: {
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: 1000,
      left: 0,
      top: 0,
    },
    html: `
      <div style="transition: all 10s cubic-bezier(0, 0, 0.22, 0.84) 0s; height: 2px;width: 0;background-color: rgb(0, 161, 46);"></div>
    `,
  });

  setTimeout(() => (loadingEl[0].style.width = "98%"), 50);

  loadingEl.remove = () => {
    loadingEl[0].style["transition-duration"] = "0.1s";
    loadingEl[0].style.width = "100%";
    setTimeout(() => {
      $.fn.remove.call(loadingEl);
    }, 200);
  };

  return loadingEl;
};
```

With this code snippet, you can add a unique loading effect to your application, providing users with a better experience during page transitions.

