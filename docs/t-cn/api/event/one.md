# one

使用 `one` 方法，你可以為目標元素注冊一次性事件處理程序，這意味著事件處理程序將在第一次觸發後自動解除綁定，不會再次觸發。

下面是一個示例，演示如何使用 `one` 方法為按鈕元素注冊點擊事件處理程序：

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
    $("#target").one("click", ()=> {
        $("#logger").text = count++;
    });
</script>
```

</html-viewer>

在這個示例中，我們使用 `one` 方法為按鈕元素添加了一個點擊事件處理程序。當用戶點擊按鈕時，事件處理程序會觸發，但之後不會再次觸發，因為它已被解除綁定。

## 模板語法方式使用

你還可以使用模板語法來為目標元素綁定一次性事件處理程序。下面是一個示例：

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

在這個示例中，我們在按鈕元素上使用 `one:click` 綁定了一個名為 `addCount` 的方法。當用戶點擊按鈕時，這個方法將被調用，但之後不會再次觸發，因為它是一次性事件處理程序。