# Data Sharing

ofa.js is different from other third-party frameworks by not adopting a traditional state management pattern. The author believes that state updates should be seamless, meaning that changing the data should automatically trigger data updates.

ofa.js has excellent data sharing capabilities. Its instances are developed based on the data sharing library [Stanz](https://github.com/kirakiray/stanz). The objects on the instances are all synchronous. If you want to achieve data sharing, you just need to create a separate Stanz object and let all components refer to it directly.

The following example demonstrates how to share data:

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

In the above example, two components write data to themselves during the `attached` lifecycle. Then, the `obj` in the component becomes the shared data. After the `detached` lifecycle, the previously shared data is set to `null` to ensure data recycling.

## Caveat

Due to data sharing, it is necessary to ensure that data is recycled at the appropriate time to avoid memory leaks.

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
        //   obj: data // ❌ This operation is incorrect, directly setting data will cause memory leakage
          obj: {},
        },
        ready() {
          this.obj = data; // ❌ Setting in ready lifecycle, cannot determine when to clear, may cause memory leaks. The safest way is to set in attached lifecycle and delete after detached
        },
      };
    }
  </script>
</template>
```