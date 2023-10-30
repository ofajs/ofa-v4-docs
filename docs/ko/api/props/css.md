# css

`css` 메서드는 대상 요소의 스타일을 가져오거나 설정하는 데 사용됩니다.

## 직접 사용

요소의 스타일을 가져 오거나 설정하려면 `css` 메소드를 직접 사용할 수 있습니다. 다음은 예시입니다:

<html-viewer>

```
<!-- ofa.js 프로젝트에 ofa.js 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").css.color;
    setTimeout(()=> {
        $('#target').css.color = 'red';
        $("#logger").text = $("#target").css.color;
    }, 1000);
</script>
```

</html-viewer>

## 노봉번부밪흈노봉푸볤나능퓸처

css 객체를 얻으면 요소에 직접 설정된 스타일 값을 얻을 수 있습니다. 아래는 예시입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 ofa.js 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target" style="color:red">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = Object.keys($("#target").css);
   
    setTimeout(()=>{
        // 기존 스타일 커버
        $("#target").css = {
            color: "blue",
            lineHeight: "5em"
        };
        $("#logger").text = Object.keys($("#target").css);
    }, 500);
</script>
```

</html-viewer>

css 객체의 특성을 사용하여 대상 요소의 스타일을 빠르게 조정할 수 있습니다.

## 템플릿 구문의 사용 방법

"잠재적인 요소의 스타일을 설정하기 위해 템플릿 구문을 사용할 수도 있습니다. 아래에는 예시가 있습니다."

<comp-viewer comp-name="css-demo">

```html
<template component>
  <div :css.color="txt">I am target</div>
  <script>
    export default {
      tag: "css-demo",
      data: {
        txt: "red"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "blue";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>

## CSS 설정 팁

$ele.css = {...$ele.css, color:'red'} 방식을 사용하여 요소의 특정 스타일 속성을 수정할 수 있습니다. 다른 스타일 속성에는 영향을 미치지 않습니다. 이 방법은 전체 스타일을 다시 작성하지 않고도 하나의 속성만 수정할 수 있습니다.

### 예시

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 요소의 색상 스타일을 변경하면서 다른 스타일 속성을 유지합니다.
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

위의 예에서는 `{ ...myElement.css, color: 'red' }`를 사용하여 요소의 색상 스타일만 변경하고 다른 스타일 속성은 유지했습니다. 이는 요소의 스타일을 유연하게 수정할 수있는 편리한 팁입니다.