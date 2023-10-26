データ共有

ofa.jsは他のサードパーティフレームワークとは異なり、伝統的な状態管理モデルを採用していません。著者の考えでは、状態の更新は無感知であるべき��あり、データを変更した後に自動的にデータの更新がトリガーされるべきです。

ofa.jsは、優れたデータ共有機能を備えています。そのインスタンスは、データ共有ライブラリ [Stanz](https://github.com/kirakiray/stanz) をベースに開発されています。インスタンス上の���ブジェクトはすべて同期可能です。データ共有を実現するには、独立したStanzオブジェクトを作成し、すべてのコンポーネントが直接参照するだけです。

以下の例は、データの共有方法を示しています：

```javascript
// data.mjs
export const data = $.stanz({
  val: "I am shared data",
});
```

```html
<!-- comp1.html -->
<template component>
  <style>
    :host {
      display: block;
      padding: 10px;
      margin: 10px;
      border: red solid 1px;
    }
  </style>
  <div>
    {{obj}}
    <br />
    comp1 =>
    <input type="text" sync:value="obj.val" />
  </div>
  <script>
    export const tag = "comp-one";

    export default async function ({ load }) {
      const { data } = await load("./data.mjs");

      return {
        data: {
          obj: {},
        },
        attached() {
          this.obj = data;
        },
        detached() {
          this.obj = null;
        },
      };
    }
  </script>
</template>
```

```html
<!-- comp2.html -->
<template component>
  <style>
    :host {
      display: block;
      padding: 10px;
      margin: 5px;
      border: green solid 1px;
    }
  </style>
  <div>
    <span style="color: #5e5c5c; font-size: 12px;">comp2</span>=> {{obj.val}}
  </div>
  <script>
    export const tag = "comp-two";

    export default async function ({ load }) {
      const { data } = await load("./data.mjs");

      return {
        data: {
          obj: {},
        },
        attached() {
          this.obj = data;
        },
        detached() {
          this.obj = null;
        },
      };
    }
  </script>
</template>
```

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>data sharing</title>
    <script src="ofa.js"></script>
    <l-m src="./comp1.html"></l-m>
    <l-m src="./comp2.html"></l-m>
  </head>
  <body>
    <comp-one></comp-one>
    <comp-two></comp-two>
    <comp-two></comp-two>
  </body>
</html>
```

在上述示例中，两个组件在 `attached` 生命周期时，将数据写入到组件本身。然后，组件的 `obj` 就成为共享数据。在 `detached` 生命周期后，将之前共享的数据设置为 `null`，以确保数据得到回收。

注意事項

由于数据是共享的，务必要确保在适当的时候回收数据，以避免内存泄漏。

```html
<template component>
  comp1 =>
  <input type="text" sync:value="obj.val" />
  <script>
    export const tag = "comp-three";

    export default async function ({ load }) {
      const { data } = await load("./data.mjs");

      return {
        data: {
        //   obj: data // ❌ 这种操作是错误的，直接设置数据，无法回收
          obj: {},
        },
        ready() {
          this.obj = data; // ❌ 在 ready 生命周期中设置，无法确定何时清空，可能会导致内存泄漏。最安全的方法是在 attached 生命周期内设置，在 detached 后删除
        },
      };
    }
  </script>
</template>
```