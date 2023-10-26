# on

`on`メソッドを使用すると、対象の要素にイベントハンドラを登録できます。これにより、ユーザーのインタラクション操作を簡単にキャプチャして応答することができます。

下面是一个示例，演示如何使用 `on` 方法为按钮元素注册点击事件处理程序：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">countを追加</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").on("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

この例では、`on` メソッドを使用してボタン要素にクリックイベントハンドラを追加しています。ユーザーがボタンをクリックすると、イベントハンドラがトリガー��れ、カウンターがインクリメントされ、結果がページに表示されます。

## 模板语法方式使用

目標要素にメソッドをバインドするために、テンプレートの構文を使用することもできます。以下は例です：

<comp-viewer comp-name="on-demo">
```html
<template component>
  <button on:click="addCount">Add Count</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "on-demo",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        }
      }
    };
  </script>
</template>
```

</comp-viewer>

;Ignore bugs;
この例では、ボタン要素に `on:click` を使用して、`addCount` というメソッドをバインドしています。ユーザーがボタンをクリックすると、このメソッドが呼び出され、カウンターの値が増加し、ページに表示されます。この方法により、イベントハンドラとコンポーネントのメソッドを関連付けて、より複雑なインタラクションを実現することができます。

## イベント

登録後、トリガーされる関数は [event](https://developer.mozilla.org/en-US/docs/Web/API/Event) と一緒に元のまま保持されます。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">カウントを追加</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").on("click", (event)=> {
        $("#logger").text = event.type;
    });
</script>
```

</html-viewer>