# attr

`attr` 메서드는 요소의 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)를 가져오거나 설정하는 데 사용됩니다.

## 직접 사용

속성을 가져오거나 설정하기 위해 `attr` 메소드를 직접 사용할 수 있습니다. 다음은 예시입니다.

<html-viewer>

```
<!-- ofa.js 프로젝트에 ofa.js 가져오기 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
</style>
<div id="target1" test-attr="1">I am target 1</div>
<div id="target2">I am target 2</div>
<div id="logger" style="border:blue solid 1px;padding:8px;margin:8px;">logger</div>

<script>
    $("#logger").text = $("#target1").attr('test-attr');
    setTimeout(()=> {
        $("#target1").attr('test-attr', '2')
        $("#logger").text = $("#target1").attr('test-attr');
    }, 500);
</script>
```

</html-viewer>

## 템플릿 구문의 사용 방법

템플릿 내부에서 `attr:aaa="bbb"` 형식을 사용하여 대상 요소의 **aaa** 속성을 구성요소 **bbb**의 값을 설정할 수도 있습니다. 이 방법은 구성요소 렌더링에 특히 유용합니다. 다음은 예시입니다:

<comp-viewer comp-name="html-demo">

```html
<template component>
  <style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
  </style>
  <div attr:test-attr="txt">I am target</div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "1"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "2";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>