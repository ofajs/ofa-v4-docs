# watch

`ready`ステージが完了すると、関連する`watch`オブジェクトのリスナー関数が1回呼び出されます。その後、データのどの値が変更されると、対応するキーのリスナー関数が再度呼び出されます。


## サンプルコード
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

## ライフサイクルフローチャート
<img src="../../../publics/life-cycle.png" width="512" />
