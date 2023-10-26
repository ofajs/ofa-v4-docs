# ready

readyのライフサイクルフックは、コンポーネントのデータとテンプレートが初期化された後にトリガされ、コンポーネントが準備完了したことを示します。この段階では、コンポーネントのデータにアクセスでき、テンプレートがすでにレンダリングされているため、インタラクティブな操作を実行することができます。

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

## ライフサイクルフローチャート
<img src="../../../publics/life-cycle.png" width="512" />
