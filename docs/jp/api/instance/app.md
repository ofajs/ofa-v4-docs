# アプリ

'o-app' 内の要素、'o-page' 内の影のノード内の要素、またはそれらの内部のサブコンポーネントの 'app' 属性はすべて、この 'o-app' の要素インスタンスを指します。

以下は、`o-app` 内の要素で `app` 属性にアクセスする方法を示す例です：

<iframe src="../../../publics/test-app/demo.html" style="border:none;width:100%;height:200px;"></iframe>
コードは以下のようになります：

```html
<!-- demo.html -->
<style>
    o-app {
    display: block;
    width: 250px;
    height: 150px;
    border: #aaa solid 1px;
    }
</style>
<o-app data-warn="main-app">
    <o-page src="./page1.html?count=100"></o-page>
</o-app>
```

```html
<!-- page1.html -->
<template page>
  <l-m src="./test-comp.html"></l-m>
  <div>txt : {{txt}}</div>
  <test-comp></test-comp>
  <script>
    export default {
      data: {
        txt: "-",
      },
      ready() {
        this.txt = this.app.data.warn;
      },
    };
  </script>
</template>
```

```html
<!-- test-comp.html -->
<template component>
  <style>
    :host {
      display: block;
      padding: 8px;
      margin: 8px;
      border: #aaa solid 1px;
    }
  </style>
  in test-comp shadow:
  <br />
  apptag: {{app.tag}}
  <br />
  appwarn: {{app.data.warn}}
  <script>
    export default {
      data: {},
    };
  </script>
</template>
```

在上述示例中，`o-app` 元素的 `app` 属性包含了`o-page`元素和`test-comp`自定义组件内的元素。这意味着它们都可以通过`app`属性访问到`o-app`元素的数据和方法。