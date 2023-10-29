<template is="exm-article">
<a href="../../publics/examples/nested-page/demo.html" preview></a>
<a href="../../publics/examples/nested-page/page1.html"></a>
<a href="../../publics/examples/nested-page/page2.html"></a>
<a href="../../publics/examples/nested-page/layout.html" main></a>
</template>

# 중첩 페이지

일부 애플리케이션의 UI는 여러 계층으로 구성된 페이지로 구성될 수 있습니다. 예를 들어 공유 상단 또는 사이드 네비게이션이 있을 수 있습니다. `parent` 속성을 사용하여 현재 페이지의 부모 페이지를 나타낼 수 있습니다.

부모 페이지의 제작 방식은 구성 요소 개발과 유사합니다. 전체 프레임워크 레이아웃을 포함하는 페이지를 만들고 내부의 자식 페이지를 'slot'에 넣으십시오.

이 예제는 어떻게 중첩 페이지를 생성하는지 보여줍니다. `page1.html`과 `page2.html`은 자식 페이지이고, `layout.html`은 부모 페이지입니다. 부모 페이지인 `layout.html`은 전체적인 레이아웃 프레임워크를 포함하고 있으며, 자식 페이지들은 `parent` 속성을 통해 부모 페이지를 가리키며, 부모 페이지 안에 중첩되어야 함을 나타냅니다.

페이지를 전환하면 "routerChange" 이벤트가 발생합니다. 페이지 초기화 및 페이지 전환 시에는 "app.current" 속성을 사용하여 현재 페이지 주소를 가져올 수 있으며, 페이지에서 탭의 활성 상태를 수정할 수 있습니다.