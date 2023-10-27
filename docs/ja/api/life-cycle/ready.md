# ready

`ready`の生命周期フックは、コンポーネントのデータとテンプレートが初期化された直後にトリガーされ、コンポーネントの準備が整ったことを示します。この段階では、コンポーネントのデータにアクセスすることができ、またテンプレートもレンダリングされているた���、画面との相互作用に関連する操作を実行することができます。

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

## 生命周期フローチャート

<img src="../../../publics/life-cycle.png" width="512" />
