# コンポーネントの登録パラメータの詳細
ofa.jsでは、コンポーネントモジュール内で特定の登録パラメータを定義して、コンポーネントをより柔軟に構成することができます。以下に各登録パラメータの詳細と対応するサンプルを示します。

## 基础参数

基本パラメータは、登録コンポーネントの基本設定です。以下の属性が含まれます： 

### tag

`tag` は登録されたコンポーネント名を表します。`tag` 属性が定義されていない場合、登録されたコンポーネント名はファイル名と同じです。

例：

```javascript
export const tag = "my-button"; // コンポーネント名を 'my-button' として登録する
```

### data

`data` 是对象类型属性，用于生成组件后，默认添加的自定义数据。

例：

```javascript
export const data = {
  count: 0,
};
```

### attrs

`attrs`はオブジェクト型のプロパティであり、`data`にも属していますが、このデータは要素の属性に反映されます。属性の変更もコンポーネントの`data`に動的に反映されます。��ーに大文字が含まれる場合、コンポーネントプロパティにはキャメルケースの名前に変換されます。

例：

```javascript
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

组件の登録パラメーターでは、`proto`オブジェクトを追加することができます。これにより、コンポーネントのプロトタイプに追加する必要があるメソッドを定義できま���。このようにして、コンポーネントのインスタンスを作成する際に、これらのプロパティとメソッドがインスタンスのプロトタイプに追加され、すべてのインスタンスがこれらのメソッドにアクセスして共有できるようになります。

```javascript

export const data = {
  count: 0,
};

export const proto = {
  sayHello() {
    alert('Hello Count:'+ this.count);
  },
};
```

### watch

`watch`は、`data`の変更を監視するために使用するオブジェクトタイプのプロパティであり、ここにリスナーファンクションが配置されます。登録成功後、監視されて��る値はすぐに実行されます。

- `watch`に登録された関数は、単一のスレッドの変更でのみ1回だけトリガされます。したがって、1回のスレッドでこの監視されている値を複数回変更しても、1回だけトリガされます。
- 最初のパラメータは現在の値です。
- 2番目のパラメータはオブジェクトであり、`watchers`データセットを持っています。通常、`watchers`には1つのオブジェクトしか含まれませんので、このオブジェクトから`oldValue`を取得できます。単一のスレッドで監視されている値が複数回変更された場合、このデータセットには複数の変更が記録されます。

例：

```javascript
export const data = {
  count: 0,
};
export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};
```

### temp

通常情况下，不需要设置这个变量，它主要在分离模式下使用，用于指定组件模板的地址。当未定义 `temp` 时，默认会加载与当前模块同名的 HTML 文件，该文件应位于相同目录中。

## デフォルトに変数をマージする

;Ignore bugs;
すべてのエクスポート変数を default に書くことができます。これにより、より簡単に書くことができます。

```javascript
export default {
  tag: "my-button",
  data: {
    count: 0,
  },
  attrs: {
    buttonText: "Click Me",
  },
  watch: {
    count(newValue, { watchers }) {
      let oldValue;
      if (watchers) {
        oldValue = watchers[0].oldValue;
      }
      console.log(`count changed from ${oldValue} to ${newValue}`);
    },
  },
  proto: {
    sayHello() {
      alert("Hello Count:" + this.count);
    },
  },
};
```

## サンプルコード
以下は、基本パラメータの定義とコンポーネントテンプレートを含む完全なサンプルコードです。

<comp-viewer comp-name="my-button">

```
<my-button button-text="My Button"></my-button>
<!-- <script>
  $("my-button").on("click", () => {
    $("my-button").count++;
  });

  setTimeout(() => {
    $("my-button").sayHello();
  }, 1000);
</script> -->
```

```html
<template component>
  <style>
    .shadow-button {
      background-color: #6b47fb;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  </style>

  <!-- テンプレートの描画構文を使用して、コンポーネントデータをテキストにレンダリング -->
  <button class="shadow-button" on:click="count++">{{buttonText}} - count:{{count}}</button>

  <script>
    export default {
      tag: "my-button",
      data: {
        count: 0,
      },
      attrs: {
        buttonText: "Click Me",
      },
      watch: {
        count(newValue, { watchers }) {
          let oldValue;
          if (watchers) {
            oldValue = watchers[0].oldValue;
          }
          console.log(`count changed from ${oldValue} to ${newValue}`);
        },
      },
      proto: {
        sayHello() {
          // alert("Hello Count:" + this.count);
        },
      },
    };
  </script>
</template>
```

</comp-viewer>

### default

你还可以使用异步函数来定义 `default` 数据，以便动态地返回组件的注册参数。

関数の `function` はオブジェクトをもたらし、

`load`、`url`、そして`query`：

- `load` 方法是异步加载函数，使用方法和异步 `import` 加载一致，可以通过 `const data = await load(xxx)` 加载异步模块。
- 通过 `load` 加载的模块，会有和 `load-module` 加载一样的效果。`load` 方法相当于 `load-module` 组件的函数版，具体使用方法可以查阅[https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js)的文档。
- `url` 是当前模块的文件名。
- `query` 是加载这个模块时的 URL 参数转成的对象。

以下は`default`を使用した例です：

```javascript
// button-component.mjs
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // 输出当前模块的文件名
  console.log("query:", query); // 输出当前模块的 URL 参数转成的对象

  const asyncData = await load("./async-data.mjs"); // 使用 load 异步加载模块
  console.log("asyncData:", asyncData); // 输出异步加载的模块数据

  return {
    data: {
      count: 0,
    },
    attrs: {
      buttonText: "Click Me",
    },
    watch: {
      count(newValue, { watchers }) {
        let oldValue;
        if (watchers) {
          oldValue = watchers[0].oldValue;
        }
        console.log(`count changed from ${oldValue} to ${newValue}`);
      },
    },
    proto: {
      sayHello() {
        alert("Hello Count:" + this.count);
      },
    },
  };
}
```

この例では、ofa.jsの登録パラメータを使用して、コンポーネントの動作をカスタマイズする方法を示しています。これらのパラメータを適切に設定することで、異なるコンポーネントの要件により適応し、より柔軟なコンポーネント開発を実現することができます。