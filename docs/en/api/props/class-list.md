# classList

[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property remains consistent with the native.

Below is an example demonstrating how to use `classList`:

<html-viewer>

```
<!-- Import ofa.js into the project -->
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

The `classList` property allows you to easily add, remove, and toggle class names to dynamically change an element's style. For more information on how to use it, please refer to [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).