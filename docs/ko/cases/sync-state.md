<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# 상태 동기화

가끔은 여러 구성 요소 인스턴스 또는 페이지가 데이터를 공유해야하는 경우가 있습니다. 이 경우 상태 동기화 기능이 필요합니다.

`$.stanz` 메서드를 사용하여 공유 가능한 데이터를 만듭니다. 컴포넌트에서 이 데이터를 공유해야하는 경우, 데이터를 컴포넌트에 바인딩하기 위해 컴포넌트의 attached 단계에서 실행해야 합니다.

지불 과정에서 dateteched 주기에서 바인딩된 데이터를 정리해야 합니다. 그렇지 않으면 메모리 누수가 발생할 수 있습니다.

이 예제에서는 상태 동기화 기능을 사용하여 다크 모드를 전환하는 방법을 보여줍니다. 먼저 `$.stanz` 메소드를 사용하여 `isDark`라는 데이터 객체를 생성합니다. 이 객체는 여러 컴포넌트 간에 데이터를 공유할 수 있도록하여 다크 모드 전환을 구현합니다.