# tag

`tag` 속성은 요소의 태그를 가져옵니다. 소문자 문자열을 반환합니다.

아래의 예제에서는 `tag` 메소드를 사용하여 요소의 태그를 가져오는 방법을 보여줍니다.

<html-viewer>

```html
<!-- ofa.js를 프로젝트에 추가하십시오 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="logger">logger</div>
<script>
  setTimeout(() => {
    $("#logger").text = $("#logger").tag;
  }, 500);
</script>
```

</html-viewer>