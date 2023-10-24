# ready

`ready` 生命周期鉤子會在組件的數據和模板剛被初始化後觸發，表示組件已經準備就緒。在這個階段，你可以訪問組件的數據，並且模板已經渲染完成，可以執行一些與界面交互相關的操作。

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

## 生命周期流程圖

<img src="../../../publics/life-cycle.png" width="512" />
