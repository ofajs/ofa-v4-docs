# ele

`ele` 属性を通して、インスタンスの実際の要素を取得し、ネイティブの属性やメソッドを使用することができます。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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

在上面的示例中，我们使用 `ele` 属性获取了一个元素，并修改了其内部的 HTML 内容，以及用于记录的元素的 [tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)。这使得你可以结合原生 JavaScript 方法对元素进行更复杂的操作。