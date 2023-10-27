# refresh

用於主動刷新組件的渲染視圖，有時候組件上的數據沒有更新時，可以使用該方法刷新組件的視圖；

<comp-viewer comp-name="custom-comp">

```html
<template component>
  <!-- "_"開頭的私有數據改動不會觸發頁面的刷新 -->
  <div>{{_count}}</div>
  <button on:click="refresh()">刷新</button>
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