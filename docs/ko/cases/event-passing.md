<template is="exm-article">
<a href="../../publics/examples/event-passing/demo.html" preview></a>
<a href="../../publics/examples/event-passing/comp-one.html" main></a>
<a href="../../publics/examples/event-passing/comp-two.html"></a>
</template>

# 이벤트 전달

on을 사용하여 원시 이벤트를 듣는 것 외에도 on은 사용자 정의 이벤트를 듣는 데에도 사용될 수 있으며, 이는 컴포넌트간에 이벤트 통신을 구현하는 데에 매우 중요합니다. 사용자 정의 이벤트는 emit 메서드를 통해 트리거됩니다. 사용자 정의 이벤트를 트리거함으로써 사용자 정의 데이터를 수신측에 전달할 수 있습니다.

Shadow DOM 경계를 넘어 이벤트를 발생시키기 위해 `composed` 속성을 추가할 수 있습니다.

아래 예제에서는 중첩된 컴포넌트 간에 이벤트 전달을 하는 방법을 배우게 됩니다.
