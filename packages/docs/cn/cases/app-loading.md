# 为 app 定制 loading

以下是一个为 `o-app` 组件定制 loading 的示例。在这个示例中，我们为 loading 创建了一个漂亮的进度条，它会在页面加载期间逐渐增长，加载完成后会直接到达 100%，然后将 loading 元素删除。

您可以将以下代码复制并用于定制您的应用的 loading 效果：

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

  setTimeout(() => (loadingEl[0].style.width = "98%"));

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

通过这段代码，您可以为您的应用添加一个独特的加载效果，让用户在页面切换过程中有更好的体验。

<a href="../../publics/examples/app-loading/demo.html" preview demo></a>
<a href="../../publics/examples/app-loading/app-config.mjs" main demo></a>
<a href="../../publics/examples/app-loading/page1.html" demo></a>
<a href="../../publics/examples/app-loading/page2.html" demo></a>
