# app

在 `o-app` 內的元素，包括在 `o-app` 內的 `o-page` 的影子節點內的元素，或者再內部的子組件，它們的 `app` 屬性都是指向這個 `o-app` 的元素實例。

以下是一個示例，演示了如何在 `o-app` 內的元素中訪問 `app` 屬性：

<iframe src="../../../publics/test-app/demo.html" style="border:none;width:100%;height:200px;"></iframe>

代碼如下：

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

在上述示例中，`o-app` 元素的 `app` 屬性包含了 `o-page` 元素和 `test-comp` 自定義組件內的元素。這意味著它們都可以通過 `app` 屬性訪問到 `o-app` 元素的數據和方法。