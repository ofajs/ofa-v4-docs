# data

要素の [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) を取得するには、[`data`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) プロパティを使用し、ネイティブの [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) と一致させてください。


<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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
