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

이렇게 하면 응용 프로그램의 요구 사항에 따라 홈페이지, 로딩 스타일 및 페이지 전환 애니메이션과 같은 매개 변수를 사용자 정의하여 응용 프로그램을 보다 개인화된 경험으로 만들 수 있습니다.
