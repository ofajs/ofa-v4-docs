# style

[`style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) プロパティを使用して、ネイティブと同様の動作を保つ；

注意：`style` 属性はスタイルの実際の値を取得することはできず、`style` 属性に設定された値のみを取得することができます。`style` メソッドは [css メソッド](./css.md) に似ていますが、全体のスタイルを上書きすることはできません。[css](./css.md) と比べて、`style` メソッドの内部実行効率が高いです。

以下は、`style`を使用する方法のデモです：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").style.color;
    setTimeout(()=> {
        $('#target').style.color = 'red';
        $("#logger").text = $("#target").style.color;
    }, 1000);
</script>
```

</html-viewer>

请记住，`style` 方法只获取和设置 `style` 属性上的值，而不是实际的计算样式。