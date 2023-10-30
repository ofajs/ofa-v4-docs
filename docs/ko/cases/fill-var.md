<template is="exm-article">
<a href="../../publics/examples/fill-var/demo.html" preview></a>
<a href="../../publics/examples/fill-var/test-demo.html" main></a>
</template>

# 채우기 렌더링

템플릿을 채우는 것은 프런트 엔드 프레임워크에서 데이터 세트를 기반으로 동적으로 마이크로 컴포넌트 그룹을 렌더링하는 개념과 유사합니다.

진행중인 렌더링 과정에서 다음 특수 변수를 사용할 수 있습니다.

- **$data**: 데이터를 채우는 항목을 나타냅니다. $data를 조작하여 각 채우기 항목의 데이터를 가져오거나 수정할 수 있습니다.
- **$index**: 현재 데이터 항목의 데이터 집합에서의 인덱스를 나타냅니다.
- **$host**: 현재 컴포넌트 자체를 나타냅니다. 컴포넌트의 데이터를 가져오거나 컴포넌트의 메서드를 호출하려면 $host를 사용하여 컴포넌트에 액세스해야 합니다.