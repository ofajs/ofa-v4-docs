# created

`created` 생명 주기 훅은 컴포넌트가 생성될 때 발생합니다. 이 단계에서는 컴포넌트의 데이터가 초기화되지 않았고, 템플릿 내용도 렌더링되지 않았습니다. 이 단계에서는 초기화 작업을 수행하거나 후속 단계에서 사용할 데이터를 준비할 수 있습니다.

## 예제 코드

```html
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-created');
  },500);
</script>
```

<comp-viewer comp-name="test-created">

```
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-created');
  },500);
</script>
```

```html
<template component>
  <div>test created</div>
  <script>
    let count = 0;
    export default {
      tag: "test-created",
      created(){
        count++;
        $("#logger").text = count;
        $('#shadowHtml').text = this.shadow ? this.shadow.html : 'null';
      }
    };
  </script>
</template>
```

</comp-viewer>

## 생명주기 다이어그램

<img src="../../../publics/life-cycle.png" width="512" />
