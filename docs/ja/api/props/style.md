# style

使用 [`style`](https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/style) 属性并保持原生一致；

请注意，`style` 属性无法获取样式的实际值，而只能获取在 `style` 属性上设置的值。尽管 `style` 方法与 [css 方法](./css.md) 类似，但它无法进行全量样式覆盖。相较于 [css](./css.md)，`style` 方法的内部执行效率更高。

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