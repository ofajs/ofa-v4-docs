# host

使用 `host` 属性，可以获取元素的宿主组件实例。这对于在组件内部访问其宿主组件的数据和方法非常有用。

以下は、`host`属性を使用してホストコンポーネントのインスタンスを取得する方法を示す例です。

<comp-viewer comp-name="host-demo">

```html
<template component>
  <div>tag: {{txt}}</div>
  <div>bool: {{txt2}}</div>
  <script>
    export default {
      tag: "host-demo",
      data: {
        txt: "-",
        txt2: '-'
      },
      ready(){
        const host = this.shadow.$("div").host;
        this.txt = host.tag;
        this.txt2 = host === this;
      }
    };
  </script>
</template>
```

</comp-viewer>

この例では、`host-demo`というカスタムコンポーネントを作成し、その内部でホストコンポーネントのインスタンスにアクセスし、それらが等しいかどうかを比較します。

もし要素がコンポーネント内に存在しない場合、`host` の値は `null` になります。例えば：

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">
        I am target
    </li>
</ul>

<div id="logger" style="border:red solid 1px;padding:8px;">-</div>

<script>
    setTimeout(()=>{
        $("#logger").text = String($("#target").host);
    },500);
</script>
```

</html-viewer>

在这个示例中，`#target` 元素在 body下，不在任何组件或页面内，所以 `$("#target").host` 的值为 `null`。