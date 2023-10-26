# index

`index` 属性は、要素の親要素内での位置を取得するために使用されます。この位置は0から数えられます。つまり、最初の要素の位置は0であり、2番目の要素は1であり、依次増えていきます。

在下面的示例中，我们演示了如何使用 `index` 属性来获取一个元素在其父元素下的位置：

<html-viewer>

```html
<!-- 引入 ofa.js 到你的项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  setTimeout(() => {
    $("#logger").text = $("#target").index;
  }, 500);
</script>
```

</html-viewer>

在这个例子中，我们首先选择一个具有 "target" id 的 li 元素。然后，我们使用 index 属性来获取该元素在其父元素 ul 下的位置，即第二个元素，所以 index 的值为1。然后将这个值显示在具有 "logger" id 的 div 元素中。