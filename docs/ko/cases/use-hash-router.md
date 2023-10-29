<template is="exm-article">
<a href="../../publics/examples/use-hash-router/demo.html" preview></a>
<a href="../../publics/examples/use-hash-router/page1.html" main></a>
<a href="../../publics/examples/use-hash-router/page2.html"></a>
<a href="../../publics/examples/use-hash-router/app-config.mjs"></a>
</template>

# 사용할 수 없습니다.

o-router 구성 요소를 사용하면 앱 구성 요소 내의 라우트를 현재 웹 페이지와 연결할 수 있습니다. 페이지가 라우트와 바인딩되면 페이지 새로 고침을 수행하더라도 페이지의 라우트 상태가 유지됩니다.

이 예시에서는 <span style='font-family: "iconfont"'>&#xe7cb;</span> 버튼을 클릭하여 새로운 페이지에서 열어보고 시도하십시오.

```html
<l-m src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.mjs"></l-m>
<o-router fix-body>
  <o-app src="./app-config.mjs"></o-app>
</o-router>
```