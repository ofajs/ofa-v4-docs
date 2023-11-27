# classList

[classList](https://developer.mozilla.org/ja/docs/Web/API/Element/classList) 属性は、ネイティブと同じです。

以下は `classList` の使用方法を示す例です。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

`classList` 属性は、要素のスタイルを動的に変更するために、クラス名の追加、削除、切り替えを簡単に行うことができます。より詳しい操作方法については、[classList](https://developer.mozilla.org/ja/docs/Web/API/Element/classList)をご覧ください。