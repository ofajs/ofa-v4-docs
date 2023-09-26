# Data Sharing

ofa.js is different from other third-party frameworks as it does not use traditional state management patterns. The author believes that state updates should be transparent, meaning that data updates should automatically trigger updates. 

ofa.js inherently possesses excellent data sharing capabilities, as its instances are developed based on the data sharing library [Stanz](https://github.com/kirakiray/stanz). Objects on instances are all synchronizable. To achieve data sharing, simply create a separate Stanz object and have all components directly reference it.

The following example illustrates how to share data:

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

In the above example, when the two components are in the `attached` lifecycle, they write data to the component itself. Then, the `obj` of the component becomes the shared data. After the `detached` lifecycle, the previously shared data is set to `null` to ensure that the data is reclaimed.

## Precautions

Since the data is shared, it is necessary to ensure that the data is reclaimed at the appropriate time to avoid memory leaks.

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
        //   obj: data // ❌ This operation is incorrect, directly setting the data cannot be reclaimed
          obj: {},
        },
        ready() {
          this.obj = data; // ❌ Setting it in the ready lifecycle is uncertain when it will be cleared, which may cause memory leaks. The safest method is to set it in the attached lifecycle and delete it after detached
        },
      };
    }
  </script>
</template>
```

