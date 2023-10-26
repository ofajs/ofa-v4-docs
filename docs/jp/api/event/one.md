# one

使用 `one` メソッドを使用すると、対象要素に一度きりのイベントハンドラを登録できます。これにより、イベントハンドラは最初の1回のトリガー後に自動的にバインドが解除され、再度トリガーされることはありません。

以下は、ボタン要素にクリックイベントハンドラを登録する方法を示す例です：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">カウント追加</button>
<br>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $("#target").one("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

この例では、ボタン要素に `one` メソッドを使用してクリックイベントハンドラを追加しています。ユーザーがボタンをクリックすると、イベントハンドラがトリガーされますが、その後はもう一度トリガーされません。なぜなら、バインドが解除されているからです。

## 模板语法方式使用

ターゲット要素に一度だけイベントハンドラをバインドするために、テンプレート構文を使うこともできます。以下は例です：

<comp-viewer comp-name="one-demo">

```html
<template component>
  <button one:click="addCount">カウントを追加</button>
  <div>{{count}}</div>
  <script>
    export default {
      tag: "one-demo",
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

この例では、ボタン要素に`one:click`を使用して、`addCount`というメソッドをバインドしています。ユーザーがボタンをクリックすると、このメソッド��呼び出されますが、その後は再びトリガーされません。なぜなら、これは一度きりのイベントハンドラーだからです。