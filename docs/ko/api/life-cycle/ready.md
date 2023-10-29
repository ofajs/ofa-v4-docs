# ready

`ready` 라이프사이클 훅은 컴포넌트의 데이터와 템플릿이 초기화된 직후에 발생하여 컴포넌트가 준비되었음을 나타냅니다. 이 단계에서는 컴포넌트의 데이터에 접근할 수 있으며 템플릿은 이미 렌더링되어 화면과 상호작용하는 일부 작업을 수행할 수 있습니다.

## 示例代码

```html
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-ready');
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
      }
    };
  </script>
</template>
```

</comp-viewer>

## 생명주기 다이어그램

<img src="../../../publics/life-cycle.png" width="512" />
