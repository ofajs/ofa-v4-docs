# parent

使用 `parent` 屬性，您可以獲得實例的父元素實例；

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').parent.css.color = 'blue';
       $('#target').css.color = 'red';
    },500);
</script>
```

</html-viewer>