<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

이벤트 바인딩

在组件内部，您可以通过 `on` 属性来绑定事件，让组件具备交互能力。这里演示了如何在组件中绑定事件以实现交互效果。

`proto` 파라미터는 컴포넌트 자체의 메소드를 정의하는 데 사용되며, 이러한 메소드는 컴포넌트 내에서 사용되거나 선택기를 통해 컴포넌트를 가져온 후에 외부에서 실행될 수 있습니다.

`on:click="xxx"` 뒤에는 컴포넌트 내에서 정의된 메서드 이름 또는 함수 표현식을 사용할 수 있습니다. 함수 표현식을 사용하는 경우 `this` 키워드를 명시적으로 작성할 필요가 없으며, 변수의 범위는 자동으로 컴포넌트에 바인딩됩니다.

이벤트에 대해 더 많이 알고 싶다면 [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 문서를 참조하십시오.
