<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview></a>
<a href="../../publics/examples/nested-component/comp-one.html" main></a>
<a href="../../publics/examples/nested-component/comp-two.html"></a>
</template>

# 중첩된 컴포넌트

하지만 모든 로직을 하나의 컴포넌트에 모아두는 것은 올바른 선택이 아닙니다. 대신 로직을 다른 컴포넌트로 분리하고 `l-m`을 통해 다른 컴포넌트를 가져와 사용하는 것이 좋습니다.

CompTwo라는 중첩 컴포넌트를 `<l-m src="./comp-two.html"></l-m>`을 통해 도입하는 예시입니다.

``
`<comp-two :txt="val"></comp-two>` 을 사용하여 중첩된 컴포넌트를 사용하고 현재 컴포넌트의 val 속성을 중첩된 컴포넌트로 전달합니다. 따라서 중첩된 컴포넌트는 전달받은 데이터를 사용하여 렌더링할 수 있습니다.
``

`<comp-two></comp-two>`에서는 어떠한 속성도 전달하지 않고 중첩된 컴포넌트를 사용했습니다. 이 사용 방법은 중첩된 컴포넌트 자체의 로직과 디자인에 따라 다릅니다.

하나의 구성 요소가 성공적으로 로드되면, 어디에서든 해당 이름의 구성 요소를 사용할 수 있습니다. `l-m` 구성 요소가 동일한 구성 요소를 여러 곳에 여러 번로드하더라도, 구성 요소가 여러 번로드되지는 않습니다. 이 메커니즘은 구성 요소의 재사용과 일관성을 보장합니다.
