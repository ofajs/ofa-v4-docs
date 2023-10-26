# parent

使用 `parent` 属性，您可以获得实例的父元素实例；

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
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