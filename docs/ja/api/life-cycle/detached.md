# detached

`detached` のライフサイクルフックは、コンポーネントがドキュメントから削除される時にトリガーされます。この段階では、イベントの監視を解除したり、リソースを解放したりして、メモリリークを防ぐためにクリーンアップ操作を実行することができます。

## サンプルコード：

```html
<div id="logger">-</div>
<div style="color:red;">shadow html : <span id="shadowHtml"></span></div>
<script>
  setTimeout(()=>{
    const ele = document.createElement('test-ready');
    setTimeout(()=>{
      $('body').push(ele);
      setTimeout(()=>{
        $(ele).remove();
      },500);
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
      setTimeout(()=>{
        $(ele).remove();
      },500);
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
      },
      detached(){
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
