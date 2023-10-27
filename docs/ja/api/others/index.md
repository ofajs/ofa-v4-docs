# index

`index` 属性は、要素が親要素の中での位置を取得するために使用されます。この位置は0から数え始められますので、つまり最初の要素の位置は0であり、2番目の要素は1となります。

下記の例では、`index`属性を使用して、要素が親要素内での位置を取得する方法を示しています：

<html-viewer>

```html
<!-- ofa.jsをプロジェクトにインポートする -->
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

この例では、最初に `id` が "target" の `<li>` 要素が選択されます。そして、`index` 属性を使用して、この要素が親要素の `<ul>` の中でどの位置にあるかを取得します。つまり、2番目の要素であるため、`index` の値は1です。その後、この値を `id` が "logger" の `<div>` 要素に表示します。