# ele

通過 `ele` 屬性，你可以獲取實例的實際元素，從而使用原生的屬性或方法。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

在上面的示例中，我們使用 `ele` 屬性獲取了一個元素，並修改了其內部的 HTML 內容，以及用於記錄的元素的 [tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)。這使得你可以結合原生 JavaScript 方法對元素進行更復雜的操作。