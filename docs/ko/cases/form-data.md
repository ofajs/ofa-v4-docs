<template is="exm-article">
<a href="../../publics/examples/form-data/demo.html" preview></a>
<a href="../../publics/examples/form-data/test-demo.html" main></a>
</template>

# 폼 데이터

많은 애플리케이션에서 폼 데이터 처리는 일반적인 작업입니다. 이 과정을 간소화하기 위해 ofa.js는 폼 데이터 처리를 두 번 추상화하여 `formData` 메서드를 제공합니다. 이 메서드를 통해 폼 요소의 값을 객체에 매핑하고, 폼 요소의 값이 변경될 때 자동으로 이 객체의 데이터를 업데이트하거나 그 반대로 할 수 있습니다.

추신자 속성을 사용하면 컴포넌트의 Shadow DOM 루트 노드의 내용을 얻을 수 있습니다. 이를 통해 컴포넌트 내부에서 Shadow DOM의 요소와 스타일에 접근하고 조작할 수 있습니다.

이 예제에서는 `formData` 메소드를 사용하여 폼 데이터를 자동으로 `fdata` 객체에 매핑하는 방법을 볼 수 있습니다. 이를 통해 `fdata` 객체를 조작하여 폼 요소의 값을 가져 오거나 수정할 수 있으며, 이러한 변경 사항은 해당하는 폼 요소에 자동으로 동기화됩니다.
