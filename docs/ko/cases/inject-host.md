<template is="exm-article">
<a href="../../publics/examples/inject-host/demo.html" preview></a>
<a href="../../publics/examples/inject-host/comp-one.html"></a>
<a href="../../publics/examples/inject-host/comp-two.html" main></a>
</template>

# inject-host 组件

Web Components의 격리성 때문에 컴포넌트 슬롯 내 요소의 스타일을 직접 수정하기 어렵습니다. 이 문제에 대처하기 위해 ofa.js는 'inject-host'라는 컴포넌트를 제공합니다. 'inject-host' 컴포넌트는 호스트 레이어에 스타일을 주입하여 컴포넌트의 외관을 더 유연하게 구성할 수 있습니다.

주의해야 할 점은 이 구성 요소를 사용하면 호스트 레이어의 스타일에 영향을 줄 수 있다는 것입니다. 따라서 스타일을 침범할 때는 호스트의 스타일에 영향을 주지 않도록 이름 지정 규칙을 지켜야 합니다.

예제에서는 `comp-two` 컴포넌트를 정의하고 내부에서 `inject-host` 컴포넌트를 사용하여 스타일을 주입합니다. 이를 통해 주입된 스타일을 통해 `comp-two` 컴포넌트 내부의 요소에 스타일을 설정할 수 있으며 다른 컴포넌트에는 영향을 주지 않습니다.

동시에 다음 내용도 특히주의하여야 합니다.

- 'inject-host' 내에 '<style>' 태그를 추가함으로써 컴포넌트 내에서 특정한 스타일을 정의할 수 있습니다. 이러한 스타일은 현재 컴포넌트의 요소에만 영향을 미치고 다른 컴포넌트에는 영향을 주지 않습니다.
- 스타일을 주입할 때 일반적인 선택기(selector)를 사용하지 않도록 주의해야 합니다. 선택기의 고유성과 특정성을 유지해야 합니다.
- 'inject-host'는 '<link rel="stylesheet" href="target/style.css">' 방식을 통해 외부의 스타일시트 파일을 주입할 수도 있습니다.

전체 예제에서는 `comp-two` 컴포넌트 내에서 `inject-host`를 사용하여 다른 컴포넌트 스타일을 파괴하지 않고도 컴포넌트 내부 스타일을 유연하게 설정하고 적용할 수 있습니다.
