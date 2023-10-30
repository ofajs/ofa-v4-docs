# 조건부 렌더링

조건부 렌더링은 세 가지 조건 컴포넌트를 통해 구현됩니다:

## x-if

`x-if`은 주요한 조건부 컴포넌트로, `value` 값을 설정해야 합니다. 만약 `value`의 조건이 충족되면, 해당 내용을 표시합니다.

## x-if-else

`x-if-else`는 `x-if` 또는 `x-if-else` 뒤에 오며, `value` 값을 설정해야 합니다. 이전의 조건 컴포넌트가 충족되지 않고, 자신의 `value`가 true인 경우, 그 안에 내용이 표시됩니다.

## x-else

`x-else`는 `x-if` 또는 `x-if-else` 뒤에 따라올 수 있으며, 마지막에 위치합니다. 이전의 모든 조건이 충족되지 않을 경우, `x-else`는 자체적으로 내용을 표시합니다. `value` 값을 설정할 필요가 없습니다.

## 예시

<comp-viewer comp-name="text-render">

```html
<template component>
    <button on:click="count++">Add Count</button>
    <x-if :value="count % 3 === 0">
        <div style="color:red;">if => {{count}}</div>
    </x-if>
    <x-else-if :value="(count + 1) % 3 === 0">
        <div style="color:green;">else-if => {{count}}</div>
    </x-else-if>
    <x-else>
        <div style="color:blue;">else => {{count}}</div>
    </x-else>
    <script>
        export default {
            tag:"text-render",
            data:{
                count:0
            },
        };
    </script>
</template>
```

</comp-viewer>

이 예제에서는 이러한 조건부 렌더링 컴포넌트를 사용하여 'count'의 값에 따라 표시할 내용을 선택합니다. 'count'가 3으로 나누어 떨어질 때 'x-if' 조건이 충족되어 빨간색 텍스트가 표시됩니다. '(count + 1)'이 3으로 나누어 떨어질 때 'x-if-else' 조건이 충족되어 초록색 텍스트가 표시됩니다. 그렇지 않으면 파란색 텍스트가 표시됩니다.

