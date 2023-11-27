# version

ofa.version 속성을 통해 현재로서 가져온 ofa.js의 버전 번호를 얻을 수 있습니다.

> **요구사항: ofa.js 버전 ≥ 4.3.40**

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

이렇게 하면 페이지에서 현재 사용 중인 ofa.js 버전을 표시할 수 있습니다.