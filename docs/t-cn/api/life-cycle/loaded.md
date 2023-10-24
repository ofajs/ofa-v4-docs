# loaded

`loaded` 生命周期鉤子在組件模板內的所有依賴都加載完成後觸發。這個階段確保在渲染組件之前，所有的依賴都已經加載完畢。這個時候適合去除在 `ready` 階段添加的Loading樣式。

## 示例代碼

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

## 生命周期流程圖

<img src="../../../publics/life-cycle.png" width="512" />
