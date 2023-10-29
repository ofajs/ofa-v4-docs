<template is="exm-article">
<a href="../../publics/examples/render-text/demo.html" preview></a>
<a href="../../publics/examples/render-text/text-demo.html" main></a>
</template>

# 텍스트 렌더링

구성 요소 파일에서는 `script` 태그를 추가하여 구성 요소의 논리 코드를 작성할 수 있습니다. 노출된 `default` 객체를 통해 구성 요소 매개 변수를 설정할 수 있습니다.

그 중 `data` 매개변수는 컴포넌트 요소의 기본 데이터를 정의하는 데 사용됩니다. 인스턴스가 생성되면 **템플릿 문법**을 사용할 수 있습니다.

텍스트 렌더링은 두 개의 중괄호로 감싸서 처리됩니다. `{{xxx}}` 형태로 사용되며, 여기서 xxx는 컴포넌트의 속성 이름을 나타냅니다.

예제에서는 컴포넌트 요소의 val 속성을 렌더링하는 방법을 보여줍니다.
