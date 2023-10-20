# off

使用 `off` 方法可以注銷已注冊的事件處理程序，以取消對事件的監聽。

下面是一個示例，演示如何使用 `off` 方法取消事件監聽：

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
    const f = ()=> {
        $("#logger").text = count++;
        if(count === 3){
            $("#target").off("click", f);
        }
    }
    $("#target").on("click", f);
</script>
```

</html-viewer>

在這個示例中，我們注冊了一個點擊事件處理程序 `f`，當按鈕被點擊時，事件處理程序會在 `#logger` 中顯示點擊次數。使用 `off` 方法，我們在點擊次數達到3時取消了事件的監聽。