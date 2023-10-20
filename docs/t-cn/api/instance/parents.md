# parents

使用 `parents` 屬性，您能夠輕松獲取當前元素的所有父元素實例，這些元素將以數組的形式返回。

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div>
    <ul>
        <li>I am 1</li>
        <li id="target">I am target</li>
        <li>I am 3</li>
    </ul>
</div>
<div>
    logger: <span id="logger"></span>
</div>
<script>
    setTimeout(()=>{
       $("#logger").text = $("#target").parents.map(e => e.tag);
    },500);
</script>
```

</html-viewer>