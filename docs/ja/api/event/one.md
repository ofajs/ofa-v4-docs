# one

使用 `one` 方法，目标要素に一度だけイベントハンドラを登録することができます。これは、イベントハンドラが最初に発生した後に自動的にバインドが解除され、再び発生しないことを意味します。

下記は、ボタン要素にクリックイベントハンドラを登録するために`one`メソッドを使用する方法のデモです。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<button id="target">add count</button>
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

この例では、`one`メソッドを使用してボタン要素にクリックイベントハンドラを追加しました。ユーザーがボタンをクリックすると、イベントハンドラがトリガーされますが、その後はもう一度トリガーされません。イベントハンドラは既にバインド解除されています。

## テンプレート構文の使用方法

あなたは、テンプレート構文を使用して、対象要素に一度だけのイベントハンドラをバインドすることもできます。以下は例です：

<comp-viewer comp-name="one-demo">

```html
<template component>
  <button one:click="addCount">Add Count</button>
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

この例では、ボタン要素に `one:click` を使用して、`addCount` というメソッドをバインドしています。ユーザーがボタンをクリックすると、このメソッドが呼び出されますが、その後は再度トリガーされないため、一度だけのイベントハンドラです。