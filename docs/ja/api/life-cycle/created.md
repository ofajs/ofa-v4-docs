# created

`created` フックは、コンポーネントが作成されるときにトリガーされます。この段階では、コンポーネントのデータは初期化されておらず、テンプレートの内容もレンダリングされていません。この段階で、初期化操作を行ったり、後続の段階で使用するデータを準備たりすることができます。

## サンプルコード：

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

## 生命周期フローチャート

<img src="../../../publics/life-cycle.png" width="512" />
