# attached

`attached` 라이프사이클 훅은 컴포넌트가 문서에 추가될 때 호출됩니다. 이 단계에서 컴포넌트 내부 엘리먼트의 크기 관련 정보를 가져오고 데이터 바인딩 및 전역 이벤트 조작에 적합합니다.

## 예제 코드

```html
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-ready');
    setTimeout(()=>{
      $('body').push(ele);
    },500);
  },500);
</script>
```

<comp-viewer comp-name="test-ready">

```
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-ready');
    setTimeout(()=>{
      $('body').push(ele);
    },500);
  },500);
</script>
```

```html
<template component>
  <div>test ready</div>
  <script>
    let count = 0;
    export default {
      tag: "test-ready",
      ready(){
        count++;
        $("#logger").text = count;
        $('#shadowHtml').text = this.shadow ? this.shadow.html : 'null';
      },
      attached(){
        count++;
        $("#logger").text = count;
      }
    };
  </script>
</template>
```

</comp-viewer>

## 생명주기 다이어그램

<img src="../../../publics/life-cycle.png" width="512" />
