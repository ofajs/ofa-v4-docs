# index

`index` 속성은 요소가 부모 요소 내에서의 위치를 가져옵니다. 이 위치는 0부터 세어지며, 즉 첫 번째 요소의 위치는 0이고, 두 번째 요소는 1이며, 이와 같이 계속됩니다.

아래 예제에서는 `index` 속성을 사용하여 요소가 부모 요소 내에서의 위치를 가져오는 방법을 보여줍니다.

<html-viewer>

```html
<!-- ofa.js를 프로젝트에 추가하십시오 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  setTimeout(() => {
    $("#logger").text = $("#target").index;
  }, 500);
</script>
```

</html-viewer>

이 예제에서는 첫 번째로 `id`가 "target"인 `<li>` 요소를 선택합니다. 그런 다음 `index` 속성을 사용하여 해당 요소의 부모 요소인 `<ul>`에서의 위치, 즉 두 번째 요소를 가져옵니다. 따라서 `index`의 값은 1입니다. 그런 다음 이 값을 `id`가 "logger"인 `<div>` 요소에 표시합니다.