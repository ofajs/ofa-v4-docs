# all

`all` メソッドを使用すると、[CSS セレクタ](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_selectors) に一致するページ上のすべての要素を取得し、これらの要素を含む配列を返すことができます。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $.all("li").forEach((item,index)=>{
            item.text = `change item ${index}`;
        });
    },500);
</script>
```

</html-viewer>

## 子要素の取得

インスタンスも `all` メソッドを持っており、インスタンス上の `all` メソッドを使用してサブエレメントを選択して取得することができます。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
  </ul>
</div>

<script>
  const tar = $("#target1");
  tar.all("li").forEach((item,index)=>{
    item.text = `change item ${index}`;
  });
</script>
```

</html-viewer>