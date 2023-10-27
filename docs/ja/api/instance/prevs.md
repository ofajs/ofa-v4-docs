# prevs

prevs属性を使用すると、現在の要素の前にあるすべての隣接要素のインスタンスを簡単に取得できます。これらの要素は配列の形式で返されます。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 0</li>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').prevs.forEach(e => e.text = 'change text');
    },500);
</script>
```

</html-viewer>