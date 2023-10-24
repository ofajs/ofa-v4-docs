# tag

`tag` 屬性用於獲取元素的標簽，返回一個小寫字符串。

在下面的示例中，我們演示了如何使用 `tag` 方法來獲取一個元素的標簽：

<html-viewer>

```html
<!-- 引入 ofa.js 到你的項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="logger">logger</div>
<script>
  setTimeout(() => {
    $("#logger").text = $("#logger").tag;
  }, 500);
</script>
```

</html-viewer>