# emit

`emit` メソッドを使用することで、イベントを自発的にトリガーすることができます。また、トリガーされたイベントはバブリングメカニズムを持っています。バブリングメカニズムとは、イベントが内部要素から外部要素へとバブリングすることを意味します。つまり、側から外側の階層でイベントがトリガーされます。

以下は、`emit`メソッドを使ってカスタムイベントをトリガーし、バブリングメカニズムを使って外部エレメントにイベントを渡す方法の例である：

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

この例では、`<ul>`要素と`<li>`要素に同じカスタムイベント`custom-event`のハンドラーを登録しました。`emit`メソッドを使用してイベントをトリガーすると、そのイベントは`<li>`要素から`<ul>`要素にバブリングし、2つのイベントハンドラーがトリガーされます。

## カスタムデータ

`data`パラメーターを使用することで、カスタムデータをイベントハンドラに渡すことができます。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

## バブリングなしでイベントをトリガーする

イベントがバブリングさせたくない場合は、イベント発生時に `bubbles: false` パラメータを指定することができます。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

この例では、`bubbles: false` パラメータを使用してカスタムイベントをトリガーしました。このイベントは親要素までバブリングされないため、`<li>` 要素のイベントハンドラだけがトリガーされます。

## ルートノードを貫通

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