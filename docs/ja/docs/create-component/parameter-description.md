# コンポーネントの登録パラメータの詳細

ofa.jsでは、コンポーネントモジュールで特定の登録パラメータを定義することができ、コンポーネントをより柔軟に設定することができます。以下に各登録パラメータの詳細とそれに対応する例示を示します。

## 基础参数

基本パラメータは、コンポーネントの登録の基本的な設定を示します。以下のいくつかの属性が含まれます。

### tag

`tag` は登録されたコンポーネントの名前を表します。`tag` 属性が定義されていない場合、登録されたコンポーネントの名前はファイル名と同じになります。

例：サンプル

```javascript
export const tag = "my-button"; // コンポーネント名を 'my-button' として登録する
```

### data

`data` はオブジェクトタイプの属性であり、コンポーネントの生成後にデフォルトで追加されるカスタムデータを作成するために使用されます。

例：サンプル

```javascript
export const data = {
  count: 0,
};
```

### attrs

`attrs` はオブジェクト型の属性であり、`data` にも含まれますが、このデータは要素の属性に反映され、属性の変更はコンポーネントの `data` にも動的に反映されます。キーが大文字の場合、コンポーネントのプロパティに反映される際にはキャメルケースの命名に変わります。

例：サンプル

```javascript
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

コンポーネントの登録パラメータには、`proto`オブジェクトを追加することができます。これにより、コンポーネントのプロトタイプに追加する必要があるメソッドを定義できます。これにより、コンポーネントのインスタンスを作成する際に、これらのプロパティとメソドがインスタンスのプロトタイプに追加され、すべてのインスタンスでこれらのメソッドにアクセスして共有することができます。

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

`watch` はオブジェクトタイプのプロパティであり、`data` の変化を監視するためのリスナーファンクションをここに配置します。成功した場合、監視対象の値は即座に実行されます。

`watch` で登録された関数は、1回のスレッドの変更でのみトリガされます。そのため、1つのスレッドでこの監視されている値を複数回変更しても、1回のみトリガされます。
- 最初のパラメータは現在の値です。
- 2番目のパラメータは、`watchers` データセットを持つオブジェクトであり、通常、`watchers` には1つのオブジェクトが含まれます。このオブジェクトから `oldValue` を取得することができます。1回のスレッドでこの監視されている値が複数回変更された場合、このデータセットには複数の変更が記録されます。

例：サンプル

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

通常の場合、この変数を設定する必要はありません。ただし、これは分離モードで使用され、コンポーネントのテンプレートの場所を指定するために使用されます。 `temp` が未定義の場合、デフォルトでは現在のモジュールと同じ名前の HTML ファイルが読み込まれます。このファイルは同じディレクトリに配置する必要があります。

## 変数をデフォルトにマージします

defaultにすべてのエクスポート変数を書くことができます。これにより、より簡単に書くことができます。

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

## サンプルコード：

以下は完全なサンプルコードであり、基本パラメータの定義とコンポーネントのテンプレートが含まれています。

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

  <!-- テンプレートレンダリング構文を使用して、コンポーネントデータをテキストにレンダリングする -->
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
          console.log(`countの値が${oldValue}から${newValue}に変更されました`);
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

あなたは `default` データを定義するために非同期関数を使用することもできます。これにより、コンポーネントの登録パラメータを動的に返すことができます。

関数の `function` はオブジェクトを返します。このオブジェクトには、`load`、`url`、および `query` が含まれています。

- `load` メソッドは非同期で関数を読み込むためのものであり、非同期の `import` と同じように使用します。`const data = await load(xxx)` のようにして非同期モジュールを読み込むことができます。
- `load` で読み込まれたモジュールは、`load-module` で読み込まれたものと同じ効果あります。`load` メソッドは `load-module` コンポーネントの関数版であり、具体的な使用方法については[https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js)のドキュメントを参照してください。
- `url` は現在のモジュールのファイル名です。
- `query` はこのモジュールを読み込む際の URL パラメータをオブジェクトに変換したものです。

以下は`default`を使用した例です：

```javascript
// button-component.mjs
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // 現在のモジュールのファイル名を出力
  console.log("query:", query); // 現在のモジュールの URL パラメータから変換されたオブジェクトを出力します。

  const asyncData = await load("./async-data.mjs"); // loadを使ってモジュールを非同期にロードする
  console.log("asyncData:", asyncData); // 非同期にロードされたモジュール・データを出力する

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

この例では、ofa.jsの登録パラメータを使用してコンポーネントの動作をカスタマイズする方法を示しています。これらのパラメータを適切に設定することで、さまざまなコンポーネントの要件により適応し、より柔軟なコンポーネント開発を実現することができます。