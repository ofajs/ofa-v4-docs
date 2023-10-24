# app

In the elements within `o-app`, including the elements within the shadow tree of `o-page` inside `o-app`, or the internal child components, their `app` property points to the element instance of this `o-app`.

The following is an example demonstrating how to access the `app` property within an element in `o-app`:

<iframe src="../../../publics/test-app/demo.html" style="border:none;width:100%;height:200px;"></iframe>

The code is as follows: .

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

In the above example, the `app` property of the `o-app` element contains the elements within the `o-page` element and the `test-comp` custom component. This means that they can both access the data and methods of the `o-app` element through the `app` property.