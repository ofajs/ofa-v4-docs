# parents

`parents` 속성을 사용하면 현재 요소의 모든 부모 요소 인스턴스를 쉽게 가져올 수 있으며, 이러한 요소들은 배열 형태로 반환됩니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div>
    <ul>
        <li>I am 1</li>
        <li id="target">I am target</li>
        <li>I am 3</li>
    </ul>
</div>
<div>
    logger: <span id="logger"></span>
</div>
<script>
    setTimeout(()=>{
       $("#logger").text = $("#target").parents.map(e => e.tag);
    },500);
</script>
```

</html-viewer>