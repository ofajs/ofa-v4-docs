# 制作和使用组件

ofa.js 使用基础的 HTML 和 JavaScript 文件来定义组件，避免引入新的文件类型以减少学习成本。只要你对 HTML 有一定的了解，就能够快速开发和使用 ofa.js 组件。

## コンポーネントを作成する前のステップの準備
コンポーネントを作成する前に、いくつかの準備作業に注意が必要です。コンポーネントの作成には、ブラウザがリソースをリクエストする操作が含まれるため、HTMLファイルをダブルクリックして表示するだけでは、「file」プロトコルで表示されます。この場合、「file」プロトコルでは、JavaScriptモジュールのロード中にエラーが発生する可能性があります。したがって、コンポーネントを正しく表示するために、静的サーバーを準備する必要があります。

もし、あなたがVisual Studio Codeエディタを使用している場合、静的サーバーをサポートするプラグインを簡単にインストールすることができます。私達は[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)プラグインを推奨しています。

安装插件后，只需在 `demo.html` 文件上右键点击，选择 "Open with Live Server"，插件将会自动以静态服务器模式打开文件。

もし他のエディタを使用している場合は、NginxまたはApacheサーバを作成することもできます。静的HTMLの表示がサポートされている限り、コンポーネントのプレビューや開発が正常に行われることが保証されます。

## ボタンコンポーネントを作成する

以下、私たちはシンプルなボタンコンポーネントを作成します。このコンポーネントの名前は「simple-button」とし、ネイティブのボタンよりも美しいスタイルを持ちます。

首先，创建一个名为 `simple-button.html` 的文件，其中使用 `template` 标签，并添加 `component` 属性以标识为组件。

そして、'template'内でコンポーネントのテンプレートコードを書きます。その後、テンプレートの内容の下に、'script'タグを追加し、コンポーネントのJavaScriptコードをその��に入れます。

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

;Ignore bugs;
ofa.js の成功した導入後、`load-module` コンポーネントが自動的に登録されます。これは、モジュールを宣言的に参照するためのコンポーネントであり、スクリプトタグに似ています。このコンポーネントは、指定された `src` のモジュールをプロキシし、読み込む���要があるモジュールを事前処理します。この例では、テンプレートをロードし、simple-button コンポーネントを登録します。

`load-module`コンポーネントは、コード量を減らすために`l-m`の略語でも使用できます。

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
    <!-- l-m コンポーネントは load-module コンポーネントと同じで、少ないコードで書くことができます -->
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>I am a button</simple-button>
  </body>
</html>
```

`load-module` コンポーネントは、パワフルな機能を提供し、さまざまな種類のファイルをサポートし、JavaScript モジュールを中継処理できるカスタムの**宣言型ローダー**ライブラリです。このコンポーネントは独立したプロジェクトに分割されており、詳細な使用方法については [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js) を参照してください。

### 二重ファイルモード

双ファイルモードでは、「静的テンプレート」と「ロジックコード」が分離され、コンポーネントがより明確になります。

ロジックコードは、jsファイルに配置される必要があります。このjsファイルには「export const type = $.COMP;」というマークをつける必要があります。これにより、ページに���コンポーネントモジュールであることが通知されます。このような分割モードでは、モジュールコードは「import」などのES Moduleの標準的な構文を使用することができます。

ボタンコンポーネントは2つのファイルで構成されています：

1. **simple-button.html**：ボタンコンポーネントのHTMLテンプレートとスタイル。

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

2. **simple-button.mjs**: ボタンコンポーネントの登録コード。

```javascript
// simple-button.mjs
export const type = $.COMP; // 双文件模块必须带有 `export const type = $.COMP`

// 需要注册的组件名，当没有定义 tag 属性时，注册的组件名与文件���保持一致
// export const tag = 'simple-button';

// 组件模板的地址，当没有定义时，默认载入和当前模块同目录下的和组件同名的 html 文件
// export const temp = './simple-button.html';
```

在需要使用该组件的地方，使用 `l-m` 引入这个模块。以下是使用 simple-button 的案例页面（双文件模式）。

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