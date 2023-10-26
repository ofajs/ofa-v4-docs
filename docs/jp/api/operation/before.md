# before

`before` 方法用于向目标元素的前面添加元素。在执行 `before` 操作之前，会自动执行 [$ 方法](../instance/dollar.md) 的初始化操作，因此可以直接填写具体的元素字符串或对象。

**注意：テンプレートの構文が含まれる要素を操作しないでください。**

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').before(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>