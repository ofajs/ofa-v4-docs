# attached

`attached`ライフサイクルフックは、コンポーネントがドキュメントに追加されたときにトリガーされます。この段階では、コンポーネント内の要素のサイズに関連する情報の取得、データバインディング、グローバルイベントの操作に適しています。

## 示例代码

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

## 生命周期フローチャート

<img src="../../../publics/life-cycle.png" width="512" />
