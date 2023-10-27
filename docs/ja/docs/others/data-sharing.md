# データ共有

ofa.jsは他のサードパーティフレームワークとは異なり、伝統的な状態管理モードを採用していません。状態の更新は感知されず、データの変更後に自動的にデータ更新がトリガーされるべきと作者は考えています。

ofa.js天生就具备出色的数据共享能力，它的实例基于数据共享库 [Stanz](https://github.com/kirakiray/stanz) 进行开发。实例上的对象都是可同步的。如果要实现数据共享，只需创建一个独立的 Stanz 对象，然后让所有组件直接引用即可。

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

上記の例で、2つのコンポーネントは「attached」ライフサイクルにおいて、データをコンポーネント自体に書き込みます。そして、コンポーネントの「obj」が共有データとなります。そして、「detached」ライフサイクルの後、以前に共有されたデータを「null」に設定して、��ータが回収されることを確保します。

## 注意事項

データは共有されているため、適切なタイミングでデータを回収し、メモリリークを防止する必要があります。

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
        //   obj: data // ❌ この操作は間違っています。データを直��設定すると、回収できません
          obj: {},
        },
        ready() {
          this.obj = data; // ❌ readyライフサイクル内で設定すると、いつクリアされるかわからないため、メモリリークの原因になる可能性があります。最も安全な方法は、attachedライフサイクル内で設定し、detachedライフサイクル後に削除することです
        },
      };
    }
  </script>
</template>
```