# emit

`emit` メソッドを使用することで、イベントを自発的にトリガーすることができます。また、トリガーされたイベントはバブリングメカニズムを持っています。バブリングメカニズムとは、イベントが内部要素から外部要素へとバブリングすることを意味します。つまり、���側から外側の階層でイベントがトリガーされます。

以下是一个示例，演示如何使用 `emit` 方法触发自定义事件并利用冒泡机制传递事件到外部元素：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

在这个示例中，我们为`<ul>`元素和`<li>`元素分别注册了相同的自定义事件`custom-event`处理程序。当我们使用`emit`方法触发事件时，该事件从`<li>`元素冒泡到`<ul>`元素，触发了两个事件处理程序。

## 自定义数据

`data`パラメーターを使用することで、カスタムデータをイベントハンドラに渡すことができます。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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
    $('ul').on('custom-event',(event)=>{
        $("#logger1").text = 'ul is triggered;  =>  ' + event.data;
    });
    $('#target').on('custom-event',(event)=>{
        $("#logger2").text = 'target is triggered;  =>  ' + event.data;
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            data:"I am data"
        });
    },500);
</script>
```

</html-viewer>

この例では、`data`パラメータを使用してカスタムデータをイベントハンドラに渡します。イベントハンドラは`event.data`を使用して渡されたデータにアクセスできます。

## 不冒泡触发事件

イベントがバブリングさせたくない場合は、イベント発生時に `bubbles: false` パラメータを指定することができます。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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
    $('ul').on('custom-event',()=>{
        $("#logger1").text = 'ul is triggered';
    });
    $('#target').on('custom-event',()=>{
        $("#logger2").text = 'target is triggered';
    });

    setTimeout(()=>{
        $("#target").emit("custom-event",{
            bubbles: false
        });
    },500);
</script>
```

</html-viewer>

在这个示例中，我们使用 `bubbles: false` 参数触发了自定义事件。这个事件不会冒泡到上层元素，所以只有 `<li>` 元素的事件处理程序被触发。

## 穿透根节点

デフォルトでは、カスタムイベントはシャドウDOM内の要素には伝播しません。ただし、`composed: true`を設定することで、カスタムイベントをルートノードを通じて伝播させ、ルートノード以外の要素をトリガーすることができます。

```html
<!-- composed-testコンポーネントを使用する箇所のコード -->
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

この例では、`composed-test`というカスタムコンポーネントを作成しました。このコンポーネントには、シャドウ DOM内の要素とイベントをトリガするボタンが含まれています。デフォルトでは、イベントはシャドウ DOMを通過せずにルートノードに渡されません。しかし、イベントが発生する際に `composed: true` パラメータを使用することにより、イベントはルートノードにまで伝播し、ルートノード外の要素もトリガされます。