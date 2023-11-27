# emit

使用 `emit` 方法，你可以主動觸發事件，而且觸發的事件具有冒泡機制。冒泡機制意味著事件從內部元素冒泡到外部元素，從內到外的層級觸發事件。

下面是一個示例，演示如何使用 `emit` 方法觸發自定義事件並利用冒泡機制傳遞事件到外部元素：

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

在這個示例中，我們為 `<ul>` 元素和 `<li>` 元素分別注冊了相同的自定義事件 `custom-event` 處理程序。當我們使用 `emit` 方法觸發事件時，該事件從 `<li>` 元素冒泡到 `<ul>` 元素，觸發了兩個事件處理程序。

## 自定義數據

通過帶上 `data` 參數，你可以傳遞自定義數據給事件處理程序：

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

在這個示例中，我們通過 `data` 參數傳遞了自定義數據給事件處理程序。事件處理程序可以通過 `event.data` 獲取傳遞的數據。

## 不冒泡觸發事件

如果你不希望事件冒泡，你可以在觸發事件時帶上 `bubbles: false` 參數：

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

在這個示例中，我們使用 `bubbles: false` 參數觸發了自定義事件。這個事件不會冒泡到上層元素，所以只有 `<li>` 元素的事件處理程序被觸發。

## 穿透根節點

默認情況下，事件不會穿透自定義組件的影子 DOM。但你可以通過設置 `composed: true` 讓自定義事件穿透根節點，觸發根節點之外的元素。

```html
<!-- 使用 composed-test組件處的代碼 -->
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

在這個示例中，我們創建了一個自定義組件 `composed-test`，它包含一個影子 DOM 中的元素和一個觸發事件的按鈕。默認情況下，事件不會穿透影子 DOM 到根節點。但是，通過在事件觸發時使用 `composed: true` 參數，我們讓事件穿透到了根節點，觸發了根節點外的元素。