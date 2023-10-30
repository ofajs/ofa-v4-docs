<template is="exm-article">
<a href="../../publics/examples/simple-component/demo.html" preview></a>
<a href="../../publics/examples/simple-component/my-comp.html" main></a>
<a href="../../publics/examples/simple-component/public.css"></a>
</template>

# 컴포넌트의 생성과 사용

완료된 ofa.js의 로드 후에는 전역으로 'load-module'이라는 컴포넌트가 등록됩니다. 이를 참조하기 위해 'l-m'이란 약어를 사용할 수 있습니다. 이는 'script' 태그와 비슷한 방식으로 작동하며, 개발한 컴포넌트 주소를 'src' 속성을 통해 참조합니다.

지금 우리는 우리 자신의 구성 요소를 만들기 시작합시다. 먼저 HTML 파일을 생성하고, 파일 이름은 구성 요소의 이름과 일치해야 합니다.

컴포넌트 파일에서는 먼저 `template` 요소를 추가하고 `component` 속성을 추가합니다. 컴포넌트가 렌더링해야하는 내용은 이 `template` 요소 내에 배치됩니다. 마지막으로 이 내용은 컴포넌트의 Shadow DOM 내에 렌더링되며, Shadow DOM은 외부 환경 오염을 방지하기 위해 외부 환경과 격리됩니다.

다음으로, 개발한 컴포넌트를 인용하기 위해 `l-m` 구성 요소를 사용하면 됩니다. 페이지에서는 정의한 컴포넌트 태그를 직접 사용하면 됩니다.

주의할 점은 등록된 컴포넌트 이름은 소문자 영문자와 **-** 기호만 사용할 수 있으며, 적어도 하나의 **-**를 포함해야 합니다. 이 네이밍 규칙을 따라야 합니다.

나를 타입해주세요.
