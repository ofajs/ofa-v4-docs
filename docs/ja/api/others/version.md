# version

ofa.version プロパティを介して、現在インポートされている ofa.js のバージョン番号を取得することができます。

> ofa.js バージョン ≥ 4.3.40 が必要です

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

それにより、現在の使用中のofa.jsバージョンがページに表示されます。