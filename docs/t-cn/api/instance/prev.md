# prev

使用 `prev` 屬性，你可以獲取元素的前一個相鄰元素實例。

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="first">I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').prev.text = "change target prev element";
    },500);

    console.log($('#first') === $('#target').prev); // => true
</script>
```

</html-viewer>