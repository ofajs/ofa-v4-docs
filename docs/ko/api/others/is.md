# is

요소가 표현식과 일치하는지 여부를 검사하는 데 사용됩니다.

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
    const target = $("#target");
    $("#logger").html = `
    Is li: ${target.is('li')} <br>
    Is div: ${target.is('div')} <br>
    Have id: ${target.is('[id]')} <br>
    Have class: ${target.is('[class]')} <br>
    `;
  }, 500);
</script>
```

</html-viewer>
