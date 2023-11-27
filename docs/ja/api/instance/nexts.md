# nexts

`nexts`属性を使用することで、現在の要素の後にあるすべての隣接要素のインスタンスを簡単に取得することができます。これらの要素は配列の形式で返されます。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
    <li>I am 4</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').nexts.forEach(e => e.text = 'change text');
    },500);
</script>
```

</html-viewer>