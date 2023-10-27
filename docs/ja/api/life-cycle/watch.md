# watch

`ready` フェーズが完了すると、関連付けられた `watch` オブジェクトのリスナー関数が一度だけトリガーされる。 その後、データの値が変更されると、対応するキーのリスナー関数が再び起動される。


## サンプルコード：

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

## 生命周期フローチャート

<img src="../../../publics/life-cycle.png" width="512" />
