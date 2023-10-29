<template is="exm-article">
<a href="../../publics/examples/life-cycle/demo.html" preview></a>
<a href="../../publics/examples/life-cycle/test-demo.html" main></a>
</template>

生命周期

생명주기 훅 함수는 컴포넌트의 다른 단계에서 코드를 실행하는 기회를 제공합니다. `ofa.js` 에서는 다섯 가지 주요 생명주기 훅 함수가 있습니다. `created`, `ready`, `watch`, `attached` 및 `detached` 가 그것입니다.

- **created()**: 컴포넌트가 생성될 때 호출되며, 이 시점에서는 쉐도우 루트가 아직 렌더링 되기 전입니다. 여기에서 초기화 설정을 수행할 수 있지만, 쉐도우 루트 내의 요소에는 접근할 수 없습니다.

- **ready()**: 쉐도우 루트의 렌더링이 완료된 후 호출되며, 일반적으로 컴포넌트의 초기화 로직에 사용됩니다. 이 단계에서는 쉐도우 루트 내부의 요소에 접근하고 조작할 수 있으며, 렌더링 완료 후에 수행해야 하는 기타 작업을 실행할 수 있습니다.

- **watch**: `watch` 객체를 정의하여 데이터의 변경을 감시합니다. `ready`가 완료되면 `watch`가 한 번 트리거되는데, 이는 `data`의 값과 대응됩니다. 그 후에는 대응하는 키의 값이 변경될 때마다 `watch` 내의 대응하는 함수가 트리거됩니다.

- **attached()**: 컴포넌트가 문서에 추가될 때 호출됩니다. 이 시점에서는 외부 환경과의 상호 작용을 수행할 수 있으며, 컴포넌트의 외관을 가져오거나 공유 데이터를 초기화하는 로직을 실행할 수 있습니다.

- **detached()**: 컴포넌트가 문서에서 제거될 때 호출됩니다. 이 단계에서는 정리 작업을 수행하고 외부 환경과의 상호 작용을 취소하고 리소스를 해제할 수 있습니다.

