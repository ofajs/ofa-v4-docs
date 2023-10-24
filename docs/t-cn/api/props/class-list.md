# classList

[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 屬性和原生保持一致；

下面是一個示例，演示了如何使用 `classList`：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    .t-red{
        color: red;
        font-size: 14px;
    }
    .t-blue{
        color: blue;
        font-weight:bold;
        font-size:20px;
    }
</style>
<div id="target" class="t-red">origin text</div>

<script>
    setTimeout(()=> {
        $("#target").classList.remove('t-red');
        setTimeout(()=>{
            $("#target").classList.add('t-blue');
        },1000);
    }, 1000);
</script>
```

</html-viewer>

`classList` 屬性允許你輕松地添加、刪除和切換類名，以便動態更改元素的樣式。有關更多操作方法，請查閱 [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)。