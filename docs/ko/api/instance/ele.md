# ele

단순화된 중국어를 한국어로 번역하겠습니다.

通过 `ele` 属性，你可以获取实例的实际元素，从而使用原生的属性或方法。

번역한 문장은 다음과 같습니다.

`ele` 속성을 통해 인스턴스의 실제 요소를 가져와 원시 속성이나 메서드를 사용할 수 있습니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
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

위의 예제에서는 `ele` 속성을 사용하여 요소를 가져오고 내부 HTML 내용을 수정하고 레코드에 사용되는 요소의 [tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)을 수정했습니다. 이를 통해 기본 JavaScript 메서드와 결합하여 요소에 더 복잡한 조작을 할 수 있습니다.