# remove

대상 노드를 삭제합니다.

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
        $('#target').remove();
    }, 500);
</script>
```

</html-viewer>