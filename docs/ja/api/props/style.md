# style

[`style`](https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/style)属性を使用し、ネイティブの一貫性を保つ；

注意：`style` 属性は実際のスタイル値を取得できず、単に`style` 属性に設定された値しか取得できません。`style` メソッドは [css メソッド](./css.md) に似ていますが、全体のスタイルのオーバーライドはできません。[css](./css.md) と比較して、`style` メソッドの内部実行効率が高いです。



下記は `style` の使い方を示す例です：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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

`style` メソッドは、`style` 属性の値を取得および設定するだけであり、実際の計算されたスタイルではありませんので、お気をつけください。