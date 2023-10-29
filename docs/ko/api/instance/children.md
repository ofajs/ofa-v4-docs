# 초 단위

인스턴스의 하위 요소를 가져오는 것은 매우 간단합니다. 인스턴스를 배열처럼 취급하여 숫자를 사용하여 하위 요소 인스턴스를 얻을 수 있습니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>
<div id="logger1" style="color:red;"></div>
<div id="logger2" style="color:blue;"></div>

<script>
    setTimeout(()=>{
       $("#logger1").text = $('ul').length;
       $("#logger2").text = $('ul')[1].text;
    }, 500);

</script>
```

</html-viewer>

## length

노드의 자식 노드 수를 가져옵니다. 예시는 위에 나와 있습니다.

```javascript
$("#logger1").text = $('ul').length;
```