<template is="exm-article">
  <a href="../../publics/examples/app-loading/demo.html" preview></a>
  <a href="../../publics/examples/app-loading/app-config.mjs" main></a>
  <a href="../../publics/examples/app-loading/page1.html"></a>
  <a href="../../publics/examples/app-loading/page2.html"></a>
</template>

# アプリのカスタムローディングを作成します。

以下は `o-app` コンポーネントのカスタムローディングの例です。この例では、ローディングのために美しいプログレスバーを作成し、ページの読み込み中に徐々に成長し、読み込みが完了したら直ちに100％に到達し、その後、ローディング要素を削除します。

以下は、お客様のアプリケーションのローディング効果をカスタマイズするためにコピーして使用できるコードです：

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

このコードを使用すると、ユーザーがページの切り替え中により良い体験を得ることができる、アプリに独自のローディングエフェクトを追加することができます。

