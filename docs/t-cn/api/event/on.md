# on

使用 `on` 方法，你可以為目標元素注冊事件處理程序。這使你能夠輕松地捕獲和響應用戶的交互操作。

下面是一個示例，演示如何使用 `on` 方法為按鈕元素注冊點擊事件處理程序：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
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

在這個示例中，我們使用 `on` 方法為按鈕元素添加了一個點擊事件處理程序。當用戶點擊按鈕時，會觸發事件處理程序，計數器將遞增並將結果顯示在頁面上。

## 模板語法方式使用

你還可以使用模板語法來為目標元素綁定方法。下面是一個示例：

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

在這個示例中，我們在按鈕元素上使用 `on:click` 綁定了一個名為 `addCount` 的方法。當用戶點擊按鈕時，這個方法將被調用，計數器的值將遞增並在頁面上顯示。這種方式使你可以將事件處理程序與組件的方法關聯，實現更復雜的交互。

## event

在注冊時間後，觸發的函數會被帶上 [event](https://developer.mozilla.org/en-US/docs/Web/API/Event)，和原生保持一致；

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
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