<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# 使用ハッシュルーター

只需要使用 o-router コンポーネント、app コンポーネント内のルートを現在のウェブページと関連付けることができます。ページとルートがバインドされると、ページのルートの状態をページが再読み込みされても保持することができます。

この例では、<span style='font-family: "iconfont"'>&#xe7cb;</span> ボタンをクリックして新しいページとして開き、試してみてください。

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```