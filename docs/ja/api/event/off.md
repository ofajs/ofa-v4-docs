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

この例では、ボタンがクリックされたときにクリック数を `#logger` に表示するクリックイベントハンドラ `f` を登録している。 off` メソッドを使って、クリック数が 3 になったらイベントのリッスンを中止する。