# コンポーネントの作成と使用

ofa.js は、コンポーネントを定義するために基本的な HTML と JavaScript ファイルを使用し、学習コストを減らすために新しいファイルタイプを導入しないようにしています。HTML の基礎的な知識があれば、ofa.js コンポーネントの開発と使用は簡単に行えます。

## 準備する前に、コンポーネントの作成手順を確認してください。

コンポーネントを作成する前に、いくつかの準備作業に注意する必要があります。コンポーネントの作成には、ブラウザがリソースをリクエストする操作が関係しているため、HTMLファイルをダブルクリックして開くだけでは、"file"プロトコルで表示されます。"file"プ��トコルでは、JavaScriptモジュールの読み込み時にエラーが発生する可能性があります。したがって、コンポーネントを正しく表示するために、静的サーバーを準備する必要があります。

Visual Studio Code エディタを使用している場合、簡単に静的サーバーをサポートするプラグインをインストールすることができます。[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) プラグインを使用することをお勧めします。

插件をインストールした後、`demo.html`ファイル上で右クリックし、「Open with Live Server」を選択するだけで、プラグインはファイルを静的サーバーモードで自動的に開きます。

もし他のエディタを使用している場合、NginxまたはApacheサーバーを作成することもできます。それが静的HTMLの表示をサポートしていれば、これによってコンポーネントのプレビューや開発を正常に行うことができます。

## ボタングループコンポーネントを作成します

下記では、シンプルボタンという名前のシンプルなボタンコンポーネントを作成します。このコンポーネントは、ネイティブのボタンよりも見た目が美しいスタイルを持ちます。

最初に、`simple-button.html` という名前のファイルを作成し、`template` タグを使用して、`component` 属性を追加してコンポーネントとして識別します。

そして、`template`内でコンポーネントのテンプレートコードを記述します。その後、テンプレートの内容の下に、`script`タグを追加し、コンポーネントのJavaScriptコードをそこに配置します。

```html
<!-- simple-button.html -->
<template component>
  <style>
    .shadow-button {
      background-color: #4caf50;
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
    .shadow-button:hover {
      opacity: 0.8;
    }

    .shadow-button:active {
      transform: translateY(4px);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  </style>

  <button class="shadow-button">
    <slot></slot>
  </button>

  <script>
    export default {
      tag: 'simple-button' // 需要注册的组件名，如果没有定义 tag 属性，注册的组件名与文件名保持一致
    }
  </script>
</template>
```

ofa.jsの導入に成功すると、`load-module`コンポーネントが自動的に登録されます。これはモジュールを宣言的に参照するためのコンポーネントで、スクリプトタグに似ています。このコンポーネントは、指定された`src`のモジュールをプロキシしてロードし、ロードする必要��あるモジュールを前処理します。この例では、テンプレートをロードしてsimple-buttonコンポーネントを登録します。

`load-module` コンポーネントは `l-m` の省略形でも使用でき、コード量を減らすことができます。

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="../../ofa.js"></script>
    <!-- <load-module src="./simple-button.html"></load-module> -->
    <!-- l-m コンポーネントはload-moduleの代わりに使用でき、コードを少なく書くことができます -->
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>私はボタンです</simple-button>
  </body>
</html>
```

`load-module` コンポーネントは、カスタムの**宣言的なローダー**ライブラリであり、さまざまな種類のファイルのサポートを拡張したり、JavaScript モジュールを中継処理したりする強力な機能を提供します。このコンポーネントは、独立したプロジェクトに分割されています。具体的な使用方法については、[https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js) のドキュメントを参照してください。

### 双文件模式

静的テンプレートとロジックコードを分けて、コンポーネントをより明確にする、デュアルファイルモードです。

ロジックコードはjsファイルに配置され、このjsは `export const type = $.COMP;`というようにマークされる必要があります。これにより、ページにこれがコンポーネントモジュールであることが通知されます。この分割モードでは、モジュールコードは `import`などのESモジュール��標準構文を使用できます。

ボタンコンポーネントは2つのファイルで構成されます。

1. **simple-button.html**: ボタンコンポーネントのHTMLテンプレートとスタイル。

```html
<!-- simple-button.html -->
<style>
  .shadow-button {
    background-color: #4caf50;
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
  .shadow-button:hover {
    opacity: 0.8;
  }

  .shadow-button:active {
    transform: translateY(4px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>

<button class="shadow-button">
  <slot></slot>
</button>
```

2. **simple-button.mjs**：按钮组件的注册代码。

```javascript
// simple-button.mjs
export const type = $.COMP; // 双文件モジュールは必ず `export const type = $.COMP` を持つ必要があります。

// 登録するコンポーネント名。tag 属性が定義されていない場合、登録するコンポーネント名はファイル名と同じになります。
// export const tag = 'simple-button';

// コンポーネントテンプレートのアドレス。定義されていない場合、デフォルトでは、カレントモジュールと同じディレクトリにある、コンポーネントと同じ名前のhtmlファイルを読み込みます。
// export const temp = './simple-button.html';
```

依赖にそのコンポーネントを使用する場所では、`l-m`でこのモジュールをインポートします。以下は、simple-buttonを使用した例のページ（デュアルファイルモード）です。

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="ofa.js"></script>
    <l-m src="./simple-button.mjs"></l-m> 
  </head>
  <body>
    <simple-button>I am a button</simple-button>
  </body>
</html>
```