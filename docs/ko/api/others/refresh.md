# refresh

컴포넌트의 렌더링 뷰를 갱신하는 데 사용되며, 때로는 컴포넌트의 데이터가 업데이트되지 않을 때 이 방법을 사용하여 컴포넌트의 뷰를 새로 고칠 수 있습니다.

<comp-viewer comp-name="custom-comp">

```html
<template component>
  <!-- "_"로 시작하는 개인 데이터의 변경은 페이지 새로 고침을 트리거하지 않습니다 -->
  <div>{{_count}}</div>
  <button on:click="refresh()">새로 고침</button>
  <script>
    export default {
      tag: "custom-comp",
      data: {
        _count: 0,
      },
      attached() {
        this._timer = setInterval(() => {
          this._count++;
        }, 200);
      },
    };
  </script>
</template>
```

</comp-viewer>