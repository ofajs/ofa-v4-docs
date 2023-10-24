# watch

一旦 `ready` 階段完成，與之關聯的 `watch` 對象中的監聽函數會被觸發一次。隨後，當數據的某個值發生變動時，會再次觸發相應鍵（key）的監聽函數。


## 示例代碼

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
  <div>test watch</div>
  <script>
    let count = 0;
    export default {
      tag: "test-ready",
      data:{
        val: "I am val"
      },
      watch:{
        val(val){
          count++;
          $("#logger").text = count;
          $("#shadowHtml").push(`<div>${val}</div>`);
        }
      },
      ready(){
        setTimeout(()=>{
          this.val = 'change val';
        },500);
      }
    };
  </script>
</template>
```

</comp-viewer>

## 生命周期流程圖

<img src="../../../publics/life-cycle.png" width="512" />
