# after

`after` 方法用於向目標元素的後面添加元素。在執行 `after` 操作之前，會自動執行 [$ 方法](../instance/dollar.md) 的初始化操作，因此可以直接填寫具體的元素字符串或對象。

**請注意，在具有模板語法的元素上不要操作元素。**

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').after(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>