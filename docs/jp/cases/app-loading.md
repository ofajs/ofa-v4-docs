<template is="exm-article">
  <a href="../../publics/examples/app-loading/demo.html" preview></a>
  <a href="../../publics/examples/app-loading/app-config.mjs" main></a>
  <a href="../../publics/examples/app-loading/page1.html"></a>
  <a href="../../publics/examples/app-loading/page2.html"></a>
</template>

# 为 app 定制 loading

以下は、 `o-app` コンポーネントのカスタムローディングの例です。この例では、ローディングに美しいプログレスバーを作成し、ページの読み込み中に徐々に伸び、読み込みが完了すると直ちに100％に達し、その後にローディング要素を削除します。

以下のコードをコピーして、アプリのローディング効果をカスタマイズしてください：

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

通过这段代码，您可以为您的应用添加一个独特的加载效果，让用户在页面切换过程中有更好的体验。

