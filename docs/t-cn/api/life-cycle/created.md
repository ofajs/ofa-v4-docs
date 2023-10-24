# created

`created` 生命周期鉤子在組件創建時被觸發。在此階段，組件的數據尚未被初始化，模板內容也未被渲染。你可以在這個階段執行一些初始化操作，或者準備在後續階段使用的數據。

## 示例代碼

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

## 生命周期流程圖

<img src="../../../publics/life-cycle.png" width="512" />
