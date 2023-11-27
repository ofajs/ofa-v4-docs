# 첫 번째 사례

아래는 예시입니다. 버튼을 클릭하면 텍스트를 "Hello World"로 변경합니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="desk">Please click the button</div>
<br />
<button id="btn">I am Button</button>
<script>
  $("#btn").on("click", () => {
    $("#desk").html = "<b>Hello World</b>";
  });
</script>
```

</html-viewer>

버튼을 클릭하면 굵은 글꼴로 "Hello World" 텍스트가 표시됩니다.

지금은 기본 개념에 대해 자세히 설명해보겠습니다.

## 선택자

`ofa.js`를 인용하면 `$` 기호가 전역 범위에 등록됩니다. `$('xxx')`를 사용하여 조건을 충족하는 **첫 번째** 요소를 선택합니다. 여기서 `xxx`는 표준 [CSS 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) 내용입니다. 구체적인 선택기 내용을 확인하려면 링크를 클릭할 수 있습니다.

아래는 한 예입니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<p>I am P tag</p>
<div id="desk">I am desk</div>
<div class="logger">I am logger</div>
<script>
    setTimeout(() => {
        $("p").text = "change P tag";
        $("#desk").text = "change #desk";
        $(".logger").text = "change .logger";
    }, 1000);
</script>
```

</html-viewer>

위의 예에서 페이지가 열리고 1초 후에는 **p 태그**, **#desk** 및 **.logger**의 텍스트 내용이 각각 변경됩니다.

## 노에와 졍연시킴

선택한 요소 후에 요소에 이벤트를 바인딩 할 수 있습니다. 이전에 언급한 "Hello World" 예제에서와 같이, 우리는 "btn"이라는 id를 가진 요소에 클릭 이벤트를 바인딩했습니다. 버튼을 클릭하면 바인딩된 함수가 실행됩니다.

[이벤트 예시](./example-event.md) 섹션을 확인하려면 클릭할 수 있습니다. 이곳에서 이벤트 바인딩의 몇 가지 예제를 알아볼 수 있습니다.

모든 사용 가능한 이벤트는 [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)에서 전체 이벤트 목록을 확인할 수 있습니다.

## 속성

위의 두 가지 예제에서는 `html`과 `text` 속성을 각각 보여줍니다.

\`html\` 또는 \`text\` 속성을 사용하여 요소의 내용을 가져올 수도 있습니다. 다음과 같습니다:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="t1">
    <span style="color: red">I am text</span>
</div>
<div id="t2"></div>
<br />
<div id="t3"></div>
<br />
<script>
    $("#t2").text = $("#t1").html;
    $("#t3").html = $("#t1").html;
</script>
```

</html-viewer>

이 예제에서는 #t1 요소의 HTML 내용을 #t2와 #t3 요소에 할당합니다.
