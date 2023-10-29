# 데이터 공유

ofa.js는 다른 제3자 프레임워크와 다릅니다. 전통적인 상태 관리 모델을 사용하지 않습니다. 상태 업데이트는 무감지적이어야 한다고 저자는 생각합니다. 즉, 데이터를 변경하면 자동으로 데이터 업데이트가 발생해야합니다.

ofa.js는 우수한 데이터 공유 능력을 타고났으며, 해당 인스턴스는 데이터 공유 라이브러리 [Stanz](https://github.com/kirakiray/stanz)를 기반으로 개발되었습니다. 인스턴스의 객체는 모두 동기화될 수 있습니다. 데이터 공유를 구현하려면 독립적인 Stanz 객체를 생성하고 모든 구성 요소가 직접 참조하도록하면 됩니다.

아래 예제는 데이터 공유 방법을 보여줍니다.

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

위의 예제에서는 두 개의 컴포넌트가 `attached` 라이프사이클에서 자신에게 데이터를 씁니다. 그리고 컴포넌트의 `obj`는 공유 데이터가 됩니다. `detached` 라이프사이클 이후에 이전에 공유된 데이터를 `null`로 설정하여 데이터가 재활용되도록 합니다.

주의 사항

데이터가 공유될 경우, 적절한 시간에 데이터를 회수하여 메모리 누수를 방지해야 합니다.

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