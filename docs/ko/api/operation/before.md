# before

`before` 메서드는 대상 요소 앞에 요소를 추가하는 데 사용됩니다. `before` 작업을 수행하기 전에 [$ 메서드](../instance/dollar.md)의 초기화 작업이 자동으로 수행되므로 구체적인 요소 문자열이나 객체를 직접 작성할 수 있습니다.

**템플릿 구문을 가진 요소에서는 요소를 조작하지 마세요.**

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
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