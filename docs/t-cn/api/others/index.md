# index

`index` 屬性用於獲取元素在其父元素下的位置。這個位置是從0開始計數的，也就是說第一個元素的位置是0，第二個是1，以此類推。

在下面的示例中，我們演示了如何使用 `index` 屬性來獲取一個元素在其父元素下的位置：

<html-viewer>

```html
<!-- 引入 ofa.js 到你的項目 -->
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

在這個示例中，我們首先選中一個具有 `id` 為 "target" 的 `<li>` 元素。然後，我們使用 `index` 屬性來獲取該元素在其父元素 `<ul>` 下的位置，即第二個元素，所以 `index` 的值為1。然後將這個值顯示在具有 `id` 為 "logger" 的 `<div>` 元素中。