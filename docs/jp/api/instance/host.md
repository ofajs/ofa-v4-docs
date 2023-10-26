# host

`host`属性を使用すると、要素のホストコンポーネントのインスタンスを取得できます。これにより、コンポーネント内からホストコンポーネントのデータやメソッドにアクセスすることができます。

下面是一个示例，演示如何使用 `host` 属性获取宿主组件的实例：

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

在这个示例中，我们创建了一个自定义组件 `host-demo`，并在组件内部访问了它的宿主组件实例，然后比较了它们是否相等。

コンポーネント内に要素が存在しない場合、「host」の値は「null」になります。例えば：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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

この例では、`#target`要素はbodyの下にあり、任意のコンポーネントやページ内に存在しないため、`$("#target").host`の値は`null`です。