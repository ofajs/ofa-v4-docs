# 発する (hassuru)

使用 `emit` 方法，你可以主动触发事件，而且触发的事件具有冒泡机制。冒泡机制意味着事件从内部元素冒泡到外部元素，从内到外的层级触发事件。

以下は、`emit`メソッドを使用してカスタムイベントをトリガーし、バブル機構を利用してイベントを外部要素に伝達する方法を示す例です：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    let count = 0;
    $('ul').on('custom-event',()=>{
        count++;
        $("#logger1").text = 'ul is triggered ' + count;
    });
    $('#target').on('custom-event',()=>{
        count++;
        $("#logger2").text = 'target is triggered ' + count;
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            data:"I am data"
        });
    },500);
</script>
```

</html-viewer>

この例では、`<ul>`要素と`<li>`要素に同じカスタムイベント `custom-event` のハンドラーを登録しています。`emit`メソッドを使用してイベントをトリガーすると、そのイベントは`<li>`要素から`<ul>`要素までバブリングされ、2つのイベントハンドラーがトリガーされます。

## カスタムデータ

`data` パラメータを指定することで、イベントハンドラにカスタムデータを渡すことができます：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        私はターゲットです
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    $('ul').on('custom-event',(event)=>{
        $("#logger1").text = 'ulがトリガーされました;  =>  ' + event.data;
    });
    $('#target').on('custom-event',(event)=>{
        $("#logger2").text = 'targetがトリガーされました;  =>  ' + event.data;
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            data:"私はデータです"
        });
    },500);
</script>
```

</html-viewer>

この例では、 `data` パラメータを使用してイベントハンドラにカスタムデータを渡しています。イベントハンドラは `event.data` を使用して渡されたデータを取得できます。

## バブリングイベントを発生させない

イベントバブリングを防ぎたい場合、イベントをトリガーする際に `bubbles: false` パラメータを使用することができます。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

---
```html
<ul>
    <li id="target">
        私はターゲットです
    </li>
</ul>

<div id="logger1" style="border:red solid 1px;padding:8px;">-</div>
<div id="logger2" style="border:blue solid 1px;padding:8px;">-</div>

<script>
    $('ul').on('custom-event',()=>{
        $("#logger1").text = 'ulがトリガーされました';
    });
    $('#target').on('custom-event',()=>{
        $("#logger2").text = 'ターゲットがトリガーされました';
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            bubbles: false
        });
    },500);
</script>
```
---

</html-viewer>

在这个示例中，我们使用 `bubbles: false` 参数触发了自定义事件。这个事件不会冒泡到上层元素，所以只有 `<li>` 元素的事件处理程序被触发。

## ルートノードを貫通する

;Ignore bugs;
`composed: true` を設定することで、デフォルトではカスタムイベントはシャドウDOM内を透過しません。しかし、ルートノードの外側の要素でイベントをトリガーするために、カスタムイベントをルートノードを透過させることができます。

```html
<!-- 使用 composed-test组件处的代码 -->
<div id="outer-logger"></div>
<div id="wrapper">
    <composed-test></composed-test>
</div>
<script>
    $("#wrapper").on('custom-event',() => {
        $('#outer-logger').text = 'ok';
    });
</script>
```

<comp-viewer comp-name="composed-test">
```
<div id="outer-logger"></div>
<div id="wrapper">
  <composed-test></composed-test>
</div>
<script>
    $("#wrapper").on('custom-event',() => {
        $('#outer-logger').text = 'ok';
    });
</script>
```

```html
<template component>
  <style>
    :host{
        display:block;
        border:red solid 1px;
    }
  </style>  
  <div id="logger">{{loggerText}}</div>
  <div on:custom-event="loggerText = 'custom event is triggered'" id="target"></div>
  <script>
    export default {
      tag: "composed-test",
      data:{
        loggerText: ""
      },
      ready(){
        setTimeout(()=>{
          this.shadow.$("#target").emit("custom-event",{
            composed: true,
          });
        },500);
      }
    };
  </script>
</template>
```

</comp-viewer>

在这个示例中，我们创建了一个自定义组件 `composed-test`，它包含一个影子 DOM 中的元素和一个触发事件的按钮。默认情况下，事件不会穿透影子 DOM 到根节点。但是，通过在事件触发时使用 `composed: true` 参数，我们让事件穿透到了根节点，触发了根节点外的元素。