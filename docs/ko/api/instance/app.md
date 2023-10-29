# app

`o-app` 내부에 있는 요소들은 `o-app` 내부의 `o-page`의 그림자 노드 내부에 있는 요소들이거나 내부의 하위 컴포넌트입니다. 이들의 `app` 속성은 이 `o-app`의 요소 인스턴스를 가리킵니다.

아래는 `o-app` 요소 내에서 `app` 속성에 액세스하는 방법을 보여주는 예시입니다.

<iframe src="../../../publics/test-app/demo.html" style="border:none;width:100%;height:200px;"></iframe>

코드는 다음과 같습니다:

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

위의 예제에서 `o-app` 요소의 `app` 속성에는 `o-page` 요소와 `test-comp` 사용자 정의 컴포넌트 내의 요소가 포함되어 있습니다. 이는 이들이 `app` 속성을 통해 `o-app` 요소의 데이터와 메소드에 접근할 수 있다는 것을 의미합니다.