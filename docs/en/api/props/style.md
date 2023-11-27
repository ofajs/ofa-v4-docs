# style

Use the [`style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) property to remain consistent with native.

Please note that the `style` property cannot retrieve the actual value of a style but only the value set on the `style` property. Although the `style` method is similar to the [css method](./css.md), it cannot override all styles. Compared to [css](./css.md), the `style` method has a higher internal execution efficiency.

Here is an example that demonstrates how to use `style`: 

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

Please note that the `style` method only gets and sets values on the `style` property, not the actual computed style.