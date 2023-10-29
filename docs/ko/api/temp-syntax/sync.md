# sync

양방향 데이터 바인딩을 위해 sync 구문을 사용하여 컴포넌트를 바인딩합니다.

<comp-viewer comp-name="sync-render">

```html
<template component>
    <input type="text" sync:value="txt" />
    <br>
    render txt: {{txt}}
    <script>
        export default {
            tag:"sync-render",
            data:{
                txt:"I am txt"
            },
        };
    </script>
</template>
```

</comp-viewer>

sync는 내장된 컴포넌트 인스턴스 속성과도 바인딩할 수 있습니다. 예제는 [양방향 데이터 바인딩](../../cases/sync.md)에서 확인하실 수 있습니다.