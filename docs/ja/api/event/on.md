# on

`on` メソッドを使用すると、対象の要素にイベントハンドラを登録できます。これにより、ユーザーのインタラクションを簡単にキャプチャし、応答することができます。

下記は、ボタン要素にクリックイベントハンドラを登録する方法を示すサンプルです。

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
    $("#target").on("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

在この例では、`on`メソッドを使用してボタン要素にクリックイベントハンドラを追加しました。ユーザーがボタンをクリックすると、イベントハンドラがトリガされ、カウンターが増加し、結果がページに表示されます。

## テンプレート構文の使用方法

target elementにメソッドをバインドするために、テンプレート構文を使用することもできます。以下は例です。

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

この例では、`on:click`というイベントをボタン要素にバインドし、`addCount`というメソッドを呼び出します。ユーザーがボタンをクリックすると、このメソッドが呼び出され、カウンタの値が増えてページ上に表示されます。この方法を使うことで、イベントハンドラを���ンポーネントのメソッドと関連付けて、より複雑なインタラクションを実現することができます。

## event

注册日時の後、呼び出される関数は、[event](https://developer.mozilla.org/en-US/docs/Web/API/Event)を引数に取り、オリジナルと同じです。

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
    $("#target").on("click", (event)=> {
        $("#logger").text = event.type;
    });
</script>
```

</html-viewer>