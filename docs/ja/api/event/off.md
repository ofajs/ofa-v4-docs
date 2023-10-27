# off

使用`off`メソッドを使用すると、登録されたイベントハンドラを解除し、イベントの監視をキャンセルすることができます。

下面は、`off` メソッドを使用してイベントリスナーを解除する方法を示す例です。

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

在这个例子中，我们注册了一个点击事件处理程序 `f`，当按钮被点击时，事件处理程序会在 `#logger` 中显示点击次数。使用 `off` 方法，我们在点击次数达到3时取消了事件的监听。