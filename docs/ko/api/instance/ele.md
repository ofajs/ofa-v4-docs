# ele

`ele` 속성을 통해 인스턴스의 실제 요소를 가져올 수 있으므로 네이티브 속성 또는 메서드를 사용할 수 있습니다.

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

위의 예제에서는 `ele` 속성을 사용하여 요소를 가져오고 내부 HTML 내용을 수정하고 레코드에 사용되는 요소의 [tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)을 수정했습니다. 이를 통해 기본 JavaScript 메서드와 결합하여 요소에 더 복잡한 조작을 할 수 있습니다.