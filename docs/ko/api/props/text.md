# text

`text` 메서드는 요소의 텍스트 내용을 가져오거나 설정하는 데 사용됩니다.

## 직접 사용

당신은 요소의 텍스트 내용을 직접 얻거나 설정할 수 있습니다. 아래에 예시가 있습니다.

<html-viewer>

```
<!-- Include ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=> {
        $('#target2').text = `<b style="color:blue;">new text</b>`; // 텍스트만 설정할 수 있으며, 태그를 유효하게 사용하려면 HTML 속성을 설정하세요.

        console.log($("#target1").text) // => 'target 1';
        $("#logger").text = $("#target1").text;
    }, 500);
</script>
```

</html-viewer>

## 템플릿 구문의 사용 방법

템플릿 내에서 `:text` 속성을 사용하여 대상 요소에 해당 속성 값을 설정할 수도 있습니다. 이는 컴포넌트 렌더링에 특히 유용합니다. 다음은 예제입니다:

<comp-viewer comp-name="text-demo">

```html
<template component>
  <div>Rendered text: 
    <span :text="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "change txt";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>