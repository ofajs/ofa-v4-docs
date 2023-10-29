# 數據共享

ofa.js與其他第三方框架不同，不采用傳統的狀態管理模式。作者認為狀態更新應該是無感知的，即改變數據後應自動觸發數據更新。

ofa.js天生就具備出色的數據共享能力，它的實例基於數據共享庫 [Stanz](https://github.com/kirakiray/stanz) 進行開發。實例上的對象都是可同步的。如果要實現數據共享，只需創建一個獨立的 Stanz 對象，然後讓所有組件直接引用即可。

下面的案例展示了如何共享數據：

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

在上述示例中，兩個組件在 `attached` 生命周期時，將數據寫入到組件本身。然後，組件的 `obj` 就成為共享數據。在 `detached` 生命周期後，將之前共享的數據設置為 `null`，以確保數據得到回收。

## 注意事項

由於數據是共享的，務必要確保在適當的時候回收數據，以避免內存泄漏。

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
        //   obj: data // ❌ 這種操作是錯誤的，直接設置數據，無法回收內存導致泄漏
          obj: {},
        },
        ready() {
          this.obj = data; // ❌ 在 ready 生命周期中設置，無法確定何時清空，可能會導致內存泄漏。最安全的方法是在 attached 生命周期內設置，在 detached 後刪除
        },
      };
    }
  </script>
</template>
```