# style

使用 [`style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) 屬性和原生保持一致；

請注意，`style` 屬性無法獲取樣式的實際值，而只能獲取在 `style` 屬性上設置的值。盡管 `style` 方法與 [css 方法](./css.md) 類似，但它無法進行全量樣式覆蓋。相較於 [css](./css.md)，`style` 方法的內部執行效率更高。

下面是一個示例，演示了如何使用 `style`：

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

請記住，`style` 方法只獲取和設置 `style` 屬性上的值，而不是實際的計算樣式。