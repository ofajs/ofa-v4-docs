# ele

通过`ele`属性，您可以获得实例的实际元素，从而使用原生的属性或方法。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">I am target</li>
</ul>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=>{
       var ele = $("#target").ele;
       ele.innerHTML = '<b>change target</b>';
       $("#logger").text = ele.tagName;
    },500);
</script>
```

</html-viewer>

上記の例では、`ele` 属性を使用して要素を取得し、その内部の HTML コンテンツを変更し、記録用の要素の [tagName](https://developer.mozilla.org/ja/docs/Web/API/Element/tagName) を変更しました。これにより、ネイティブの JavaScript メソッドを使用して要素をより複雑な操作に組み合わせることができます。