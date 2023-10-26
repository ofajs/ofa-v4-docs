# data

要素のデータセットを取得する場合は、[dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)を使用し、[data](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)属性と元のデータセットと同じ方法で取得します。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    [data-red="1"]{
        color:red;
    }
</style>
<div id="target" data-one="I am one">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    setTimeout(()=> {
        $("#logger").text = $("#target").data.one;
        $('#target').data.red = "1";
    }, 1000);
</script>
```

</html-viewer>
