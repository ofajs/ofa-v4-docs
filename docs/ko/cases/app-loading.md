<template is="exm-article">
  <a href="../../publics/examples/app-loading/demo.html" preview></a>
  <a href="../../publics/examples/app-loading/app-config.mjs" main></a>
  <a href="../../publics/examples/app-loading/page1.html"></a>
  <a href="../../publics/examples/app-loading/page2.html"></a>
</template>

앱에 맞춤형 로딩 화면

다음은 `o-app` 컴포넌트에 대한 로딩 예제입니다. 이 예제에서는 페이지가 로드되는 동안 서서히 증가하는 아름다운 진행 막대를 로딩에 대해 생성합니다. 로딩이 100%에 도달하면 로딩 요소가 삭제됩니다.

커스터마이징된 앱 로딩 효과에 다음 코드를 복사하여 사용할 수 있습니다.

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

이 코드를 사용하여 앱에 독특한 로딩 효과를 추가하여 사용자가 페이지 전환 중에 더 나은 경험을 할 수 있습니다.

