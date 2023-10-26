# classList

[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 属性和原生保持一致；

以下は、 `classList` の使用方法のデモです：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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

`classList`属性を使用すると、要素のスタイルを動的に変更するために、クラス名を簡単に追加、削除、切り替えることができます。より多くの操作方法については、[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)を参照してください。