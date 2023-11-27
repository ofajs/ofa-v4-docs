# parents

`parents` 属性を使えば、現在の要素の親のインスタンスをすべて簡単に取得することができ、配列として返される。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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