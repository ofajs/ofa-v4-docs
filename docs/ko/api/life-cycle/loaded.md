# loaded

`loaded` 생명주기 훅은 컴포넌트 템플릿 내에서 모든 종속성이 로드된 후 트리거됩니다. 이 단계에서 컴포넌트를 렌더링하기 전에 모든 종속성이 완전히 로드되었는지 확인합니다. 이 시점에서 `ready` 단계에서 추가된 로딩 스타일을 제거하기에 적합합니다.

## 示例代码

```html
<div id="logger">-</div>
<div style="color:red;">loaded : <span id="loaded"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-loaded');
  },500);
</script>
```

<comp-viewer comp-name="test-loaded">

```
<div id="logger">-</div>
<div style="color:red;">loaded : <span id="loaded"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-loaded');
  },500);
</script>
```

```html
<template component>
  <l-m src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
  <punch-logo></punch-logo>
  <script>
    let count = 0;
    export default {
      tag: "test-loaded",
      ready(){
        $("#loaded").push(`<div>ready - ${this.shadow.$('l-m').ele.loaded}</div>`);
      },
      loaded(){
        count++;
        $("#logger").text = count;
        $("#loaded").push(`<div>loaded - ${this.shadow.$('l-m').ele.loaded}</div>`);
      }
    };
  </script>
</template>
```

</comp-viewer>

## 생명주기 다이어그램

<img src="../../../publics/life-cycle.png" width="512" />
