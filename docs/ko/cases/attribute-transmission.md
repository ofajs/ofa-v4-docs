<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

# 특성 전달

`attrs` 매개변수와 `data` 매개변수는 기능적으로 유사하며, `attrs`에 설정된 데이터는 `data`에 병합되지만 `attrs`에 지정된 데이터는 컴포넌트 자체의 특성에 표시됩니다.

> 여기서의 **특성**은 요소의 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)를 가리킵니다.

외부에서 컴포넌트를 사용할 때 특성을 통해 데이터를 컴포넌트 내부로 전달할 수도 있습니다. 주의할 점은 특성을 통해 전달되는 데이터는 문자열 유형만 가능하다는 것입니다.
