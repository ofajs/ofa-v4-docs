# app

在 `o-app` 内の要素は、`o-app` 内の `o-page` の影のノード内の要素、または内部の子コンポーネントを含みます。これらの要素の `app` 属性は、この `o-app` の要素インスタンスを指すものです。

以下は、`o-app` 内の要素で `app` 属性にアクセスする方法を示す例です：

<iframe src="../../../publics/test-app/demo.html" style="border:none;width:100%;height:200px;"></iframe>

コードは次の通りです：

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

上記の例では、`o-app` 要素の `app` 属性には、`o-page` 要素と `test-comp` カスタムコンポーネントの要素が含まれています。これは、それらがすべて `app` 属性を介して `o-app` 要素のデータとメソッドにアクセスできることを意味します。