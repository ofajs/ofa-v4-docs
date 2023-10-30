<template is="exm-article">
<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html"></a>
<a href="../../publics/examples/use-scsr/public.css"></a>
<a href="../../publics/examples/use-scsr/app-config.mjs"></a>
</template>

# 사용 SCSR 방안

이 예제에서는 <span style='font-family: "iconfont"'>&#xe7cb;</span> 버튼을 클릭하여 새 창에서 열고 시도해보세요.

SCSR의 전칭은 Static Client-Side Rendering이고, 정적 클라이언트 측 렌더링이라고도 합니다. 이는 CSR(Client-Side Rendering)의 한 종류로, CSR 사용자 경험을 유지하는 동시에 페이지가 정적 상태로 검색 엔진에 의해 크롤링될 수 있도록 합니다.

현재 웹 사이트는 SCSR 방안으로 구축되었습니다.

일명 '단일 파일 모드'로 실행하는 SCSR은 `o-page` 태그를 사용하지 않고도 페이지 모듈을 렌더링할 수 있습니다. 구체적으로 말하자면, 페이지 모듈의 템플릿 코드를 `o-app` 내에 직접 포함시키는 것입니다.

## 주의 사항

모든 SCSR 프로젝트를 사용하는 페이지에서, title, meta:description, keywords와 페이지 템플릿 내용을 제외한 모든 참조된 리소스는 일관되어야 하며, 페이지 이동 및 새로 고침 후 사용자 경험이 일관되도록 유지되어야 합니다.