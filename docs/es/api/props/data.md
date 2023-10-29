# data

Obtener el [dataset](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset) de un elemento utilizando la propiedad [`data`](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/style) y mantenerlo consistente con el [dataset](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset) nativo.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
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
