# refresh

コンポーネントのレンダリングビューをアクティブに更新するためのメソッドです。データが更新されていない場合、このメソッドを使用してコンポーネントのビューを更新することができます。

<comp-viewer comp-name="custom-comp">

```html
<template component>
  <!-- "_"で始まるプライベートデータへの変更は、ページ更新をトリガーしない -->
  <div>{{_count}}</div>
  <button on:click="refresh()">リフレッシュ</button>
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