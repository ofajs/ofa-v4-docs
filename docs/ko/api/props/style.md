# style

[`style`](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/style) 속성을 사용하여 원래의 모양을 유지하세요.

`style` 속성은 스타일의 실제 값을 가져올 수 없으며 `style` 속성에 설정된 값만 가져올 수 있습니다. `style` 메서드는 [css 메서드](./css.md)와 유사하지만 전체 스타일을 덮어쓸 수 없습니다. [css](./css.md)와 비교하면 `style` 메서드의 내부 실행 효율이 더 높습니다.

전체 예시는 다음과 같습니다. `style`을 사용하는 방법을 설명합니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").style.color;
    setTimeout(()=> {
        $('#target').style.color = 'red';
        $("#logger").text = $("#target").style.color;
    }, 1000);
</script>
```

</html-viewer>

style 메서드는 스타일 속성의 값만 가져오거나 설정하는 것을 기억하세요. 실제 계산된 스타일은 아닙니다.