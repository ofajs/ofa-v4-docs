# html

대상 내의 HTML 코드를 설정합니다.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target1">
    <span style="color:green;">target 1</span>
</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;"></div>

<script>
    setTimeout(()=> {
        $('#target2').html = `<b style="color:blue;">new text</b>`;

        console.log($("#target1").text) // => <span style="color:green;">target 1</span>;
        $("#logger").html = $("#target1").html;
    }, 500);
</script>
```

</html-viewer>

## 주의 사항

html은 상당히 위험한 방법이며 `script`에 삽입될 경우 내부의 `javascript` 코드가 자동으로 실행됩니다. 사용시 [XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)에 대비하여 주의해야합니다.

## 템플릿 구문의 사용 방법

이메일 템플릿 내에서 `:html` 속성을 사용하여 대상 요소에 해당하는 속성 값을 설정할 수도 있습니다. 이는 컴포넌트 렌더링에 특히 유용합니다. 아래는 예시입니다.

<comp-viewer comp-name="html-demo">

```html
<template component>
  <div>Rendered html: 
    <span :html="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "<b style='color:blue;'>change txt</b>";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>