<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# 사용자 정의 폼 컴포넌트

ofa.js를 사용하면 사용자 정의 폼 엘리먼트 컴포넌트를 손쉽게 개발하여 표준 폼 기능을 가질 수 있습니다. 사용자 정의 컴포넌트에 `value` 속성을 추가하고 `name` 특성을 설정하기만 하면 사용자 제작 컴포넌트를 표준 폼 엘리먼트로 사용할 수 있습니다. 컴포넌트의 `value` 속성을 업데이트하면 폼 엘리먼트와 상호 작용할 수 있습니다.

formData를 초기화 할 때는 매개 변수에 사용자 정의 컴포넌트의 선택자 특성을 추가해야 합니다(formData 메서드의 기본 매개 변수는 "input,select,textarea"입니다). 이렇게하면 formData가 사용자 정의 컴포넌트와 상호 작용할 수 있습니다.

이 예시에서 우리는 `custom-input` 컴포넌트를 사용하여 편집 가능한 텍스트 입력 상자를 구현합니다. 이 컴포넌트는 폼 요소로 사용되며 데이터 교환에 `value` 속성을 사용합니다. `formData` 메소드를 사용할 때, 우리는 폼 데이터를 올바르게 초기화하기 위해 `"input, custom-input"`을 매개변수로 추가합니다.
