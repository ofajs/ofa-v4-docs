# tag

`tag` 属性は、要素のタグを取得し、小文字の文字列を返します。

以下の例では、`tag`メソッドを使用して要素のタグを取得する方法を示しています: 

<html-viewer>

```html
<!-- 引入 ofa.js 到你的项目 -->
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