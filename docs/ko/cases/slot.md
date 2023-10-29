<template is="exm-article">
<a href="../../publics/examples/simple-btn/demo.html" preview></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main></a>
</template>

컴포넌트 슬롯

자리 표시자 `<slot></slot>` 태그를 템플릿에 추가함으로써 컴포넌트를 사용할 때 내용을 해당 컴포넌트 태그의 ���롯에 배치할 수 있습니다.

자체적으로 정의 된 구성 요소는 기본적으로 `display` 속성이 정의되어 있지 않기 때문에 구성 요소를 수동으로 정의해야합니다. 구성 요소 스타일에서 `:host` 선택기를 사용하여 구성 요소 자체의 스타일을 추가 할 수 있습니다.

이 예제는 `simple-btn`이라는 컴포넌트를 만드는 방법을 보여줍니다. 컴포넌트 템플릿에는 컴포넌트에 내용을 삽입할 수있는 슬롯이 포함되어 있습니다. 컴포넌트에 스타일을 추가하기 위해 컴포넌트의 스타일에 `:host` 선택기를 추가합니다. 다른 페이지에서 `l-m` 컴포넌트를 사용하여 `simple-btn` 컴포넌트를 참조하고 내용을 삽입합니다.
