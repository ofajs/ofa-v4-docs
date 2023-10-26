# loaded

`loaded` ライフサイクルフックは、コンポーネントのテンプレート内のすべての依存関係がロードされた後にトリガーされます。この段階では、コンポーネントをレンダリングする前に、すべての依存関係がすでにロードされていることを確認します。この時点では、`ready` 階段で追加されたローディングスタイルを取り除くのに適しています。

## サンプルコード
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

## ライフサイクルフローチャート
<img src="../../../publics/life-cycle.png" width="512" />
