# 소스 이벤트

`routerChange` 이벤트는 `o-page` 요소에 특정한 이벤트로서, `o-page`의 중첩 부모 페이지에서만 트리거됩니다. 이 이벤트는 애플리케이션의 라우팅이 변경될 때 새로운 페이지로 이동하거나 이전 페이지로 돌아갈 때 트리거됩니다.

그것은 애플리케이션의 라우트 변경을 감시하고 대응하는 방법을 제공합니다. 일반적으로 중첩된 페이지의 부모 페이지에서 사용됩니다. 라우트가 변경되면 `routerChange` 이벤트를 수신하여 해당 작업을 실행할 수 있습니다. 예를 들어 페이지 콘텐츠를 업데이트하거나 탐색 상태를 변화시킬 수 있습니다.

이 이벤트는 다중 중첩 페이지를 갖는 애플리케이션을 구축하는 데 매우 유용하며 페이지 간 탐색과 통신을보다 쉽게합니다.

## 예시

[중첩 페이지로 이동](../../cases/nested-page.md)을 참조하세요.

