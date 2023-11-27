# version

通過 `ofa.version` 屬性，你可以獲取當前引入的 ofa.js 的版本號。

> **要求 ofa.js 版本 ≥ 4.3.40**

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="logger"></div>
<script>
    $("#logger").html = ofa.version;
</script>
```

</html-viewer>

這樣，你就可以在頁面上顯示當前使用的 ofa.js 版本。