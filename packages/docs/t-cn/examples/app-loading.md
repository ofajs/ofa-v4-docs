# 為 app 定制 loading

以下是一個為 `o-app` 組件定制 loading 的示例。在這個示例中，我們為 loading 創建了一個漂亮的進度條，它會在頁面加載期間逐漸增長，加載完成後會直接到達 100%，然後將 loading 元素刪除。

您可以將以下代碼復制並用於定制您的應用的 loading 效果：

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

通過這段代碼，您可以為您的應用添加一個獨特的加載效果，讓用戶在頁面切換過程中有更好的體驗。

<a href="../../publics/examples/app-loading/demo.html" preview demo></a>
<a href="../../publics/examples/app-loading/app-config.mjs" main demo></a>
<a href="../../publics/examples/app-loading/page1.html" demo></a>
<a href="../../publics/examples/app-loading/page2.html" demo></a>
