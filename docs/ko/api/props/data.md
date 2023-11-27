# data

요소의 [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)을 가져와서 원시 [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)과 [`data`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) 속성을 일치시킵니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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
