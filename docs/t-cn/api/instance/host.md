# host

使用 `host` 屬性，可以獲取元素的宿主組件實例。這對於在組件內部訪問其宿主組件的數據和方法非常有用。

下面是一個示例，演示如何使用 `host` 屬性獲取宿主組件的實例：

<comp-viewer comp-name="host-demo">

```html
<template component>
  <div>tag: {{txt}}</div>
  <div>bool: {{txt2}}</div>
  <script>
    export default {
      tag: "host-demo",
      data: {
        txt: "-",
        txt2: '-'
      },
      ready(){
        const host = this.shadow.$("div").host;
        this.txt = host.tag;
        this.txt2 = host === this;
      }
    };
  </script>
</template>
```

</comp-viewer>

在這個示例中，我們創建了一個自定義組件 `host-demo`，並在組件內部訪問了它的宿主組件實例，然後比較了它們是否相等。

如果元素不在組件內，`host` 的值將為 `null`。例如：

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

<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    setTimeout(()=>{
        $("#logger").text = String($("#target").host);
    },500);
</script>
```

</html-viewer>

在這個示例中，`#target` 元素在 body下，不在任何組件或頁面內，所以 `$("#target").host` 的值為 `null`。