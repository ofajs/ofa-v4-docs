<template is="exm-article">
<a href="../../publics/examples/sync/demo.html" preview></a>
<a href="../../publics/examples/sync/test-demo.html" main></a>
<a href="../../publics/examples/sync/custom-input.html"></a>
</template>

실시간 데이터 연결

`sync` 구문을 사용하여 사용자 인터페이스의 상호 작용 요소 (예 : 입력 상자 또는 사용자 정의 구성 요소)와 데이터 모델 간에 실시간 양방향 연결을 설정할 수 있습니다.

이하의 예제에서는 `sync` 속성을 사용하여 입력 상자와 데이터 모델 간의 양방향 데이터 바인딩을 구현하는 방법을 보여줍니다.

- '데이터' 매개변수에서는 'testText'라는 이름의 데이터를 정의하고 초기값을 'I am testText'로 설정합니다.
- 'sync:value="testText"'를 사용하여 입력 상자의 값과 'testText' 데이터 사이에 양방향 데이터 바인딩이 설정됩니다. 따라서 사용자가 입력 상자에 내용을 입력할 때마다 'testText' 데이터가 실시간으로 업데이트되며 그 반대도 마찬가지입니다.
- 마찬가지로, 'sync:txt="testText"'를 사용하여 사용자 정의 컴포넌트의 'txt' 속성과 'testText' 데이터 사이에 양방향 데이터 바인딩이 설정됩니다. 컴포넌트의 'txt' 속성이 변경되면 'testText' 데이터가 실시간으로 업데이트되며 그 반대도 마찬가지입니다.

양방향 데이터 바인딩을 통해 사용자 인터페이스와 데이터 모델 사이에 연결을 쉽게 설정할 수 있으므로 데이터의 변경이 자동으로 인터페이스에 반영되고 사용자의 인터페이스 입력도 즉시 데이터 모델에 영향을 미칠 수 있습니다.

주의해야 할 점은 데이터 동기화는 **문자열** 또는 **숫자**만 전달할 수 있으며 다른 데이터 유형은 전달할 수 없다는 것입니다.