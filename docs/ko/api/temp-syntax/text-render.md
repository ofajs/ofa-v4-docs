# 텍스트 렌더링

{{xxx}} 형식의 템플릿 내에서 중괄호 두 개를 사용하여 텍스트를 렌더링할 수 있습니다. 여기서 xxx는 컴포넌트나 페이지 자체의 속성입니다. 이를 통해 속성의 값을 직접 페이지에 렌더링할 수 있습니다.

以下은 텍스트를 템플릿에 렌더링하는 예제입니다.

<comp-viewer comp-name="text-render">

```html
<template component>
    render test: {{txt}}
    <script>
        export default {
            tag:"text-render",
            data:{
                txt:"I am txt"
            },
        };
    </script>
</template>
```

</comp-viewer>

해당 텍스트는 번역할 수 없습니다.