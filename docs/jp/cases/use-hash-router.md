<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# ハッシュルーターの使用

o-routerコンポーネントを使用するだけで、アプリケーションコンポーネント内のルートと現在のウェブページを関連付けることができます。ページとルートがバイン���されると、ページのリフレッシュを行っても、ページのルートの状態を維持することができます。

在这个示例中，请点击  <span style='font-family: "iconfont"'>&#xe7cb;</span>  按钮，以新页面的方式打开并尝试。

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```