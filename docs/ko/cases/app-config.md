<template is="exm-article">
  <a href="../../publics/examples/use-config/demo.html" preview></a>
  <a href="../../publics/examples/use-config/app-config.mjs" main></a>
  <a href="../../publics/examples/use-config/page1.html"></a>
  <a href="../../publics/examples/use-config/page2.html"></a>
</template>

# 앱 파라미터 설정

이 텍스트는 번역할 수 없습니다.

이 매개 변수들은 ES 모듈이며, 다음 매개 변수를 구성할 수 있습니다.

- **home**: 애플리케이션의 홈페이지, 즉 초기로드 시에 표시되는 페이지입니다.
- **loading**: 애플리케이션 페이지에서 클릭하여 이동할 때, 모듈 로드가 완료되기 전에 표시되는 로딩 내용입니다. 로딩 내용으로 문자열을 반환할 수 있습니다.
- **pageAnime**: 페이지 이동시에 사용되는 애니메이션 효과입니다. CSS 스타일 속성을 포함한 객체를 사용합니다.
  - **current**: 페이지가 현재 페이지에 있을 때의 스타일을 나타냅니다.
  - **next**: 페이지가 입장하기 전에 나타나는 스타일을 나타냅니다.
  - **previous**: 페이지를 나가려고 할 때의 스타일을 나타냅니다.

% This passage contains simplified Chinese characters, so it would be more appropriate to translate it into Traditional Chinese first.  通過這種方式，您可以根據應用的需要，自定義首頁、載入中樣式和頁面跳轉動畫等參數，從而為應用帶來更加個性化的體驗。
