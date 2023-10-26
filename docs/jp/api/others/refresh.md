# refresh

コンポーネントのレンダリングビューを手動で更新するために使用されます。場合によっては、コンポーネントのデータが更新されていない場合に、このメソッドを使用してコンポーネントのビューを更新することができます。

<comp-viewer comp-name="custom-comp">

```html
<template component>
  <!-- _で始まるプライベートデータの変更は、ページの更新をトリガーしません -->
  <div>{{_count}}</div>
  <button on:click="refresh()">更新</button>
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