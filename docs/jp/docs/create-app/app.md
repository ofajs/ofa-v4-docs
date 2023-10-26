# o-app コンポーネントの使用

`o-app` タグを使用すると、簡単に完全なアプリケーションウィンドウを作成できます。以下は、アプリケーションを作成し構成する手順です：

テキストがあまりにも乾燥しているように見えるため、実際に試してみるために[アプリケーションの使用例デモ](../../cases/use-app.md)にアクセスすることをお勧めします；

基本的コード

1. 创建一个 HTML 文件，设置 `o-app` 标签为应用的显示窗口。确保为 `o-app` 设置全屏的样式，以使应用占据整个视口。

```html
<!-- app.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app></o-app>
</body>
</html>
```

2. esモジュールを作成し、アプリケーションの設定データを設定します。設定データには以下のオプションがあります：

   - `home`：文字列型で、アプリケーションのホームページのページモジュールのアドレスです。
   - `loading`：関数型で、新しいページの読み込���時にこの関数が実行され、その内容がアプリケーションに挿入され、読み込み中の表示として使用されます。ページの読み込みが完了すると、このloading要素は自動的に削除されます。
   - `fail`：関数型で、アプリケーションがページの読み込みに失敗した場合にこの関数が実行され、返された値が読み込み失敗の表示としてアプリケーションに表示されます。関数には読み込みに失敗したページの`src`アドレスとエラーのオブジェクトが渡されます。
   - `pageAnime`：ページ間の切り替え時のアニメーション設定です。

以下はアプリケーションの設定データの例です：

```javascript
// app-config.mjs
export const home = "./pages/home.mjs?count=1";

export const loading = () => {
  const loadingEl = $(`<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;">Loading</div>`);
  return loadingEl;
};

export const fail = ({ src, error }) => {
  return `<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;word-break:break-all;" data-testid="error-container">
    <div style="padding:20px;text-align:center;">
      <h3>Load Fail</h3> 
      <p>${error.stack}</p>
      ${src}
      <div>
        <button on:click="back()">Back</button>
      </div>
    </div>
  </div>`;
};

export const pageAnime = {
  current: {
    opacity: 1,
    transform: "translate(0, 0)",
  },
  next: {
    opacity: 0,
    transform: "translate(30px, 0)",
  },
  previous: {
    opacity: 0,
    transform: "translate(-30px, 0)",
  },
};
```

3. HTMLファイルで`o-app`タグを使用し、`src`属性を介してesモジュールで設定データを参照します。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    o-app {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-app src="./app-config.mjs"></o-app>
</body>
</html>
```

以上の手順で、`o-app` コンポーネントを使用したアプリケーションウィンドウを作成することができました。`o-app` コンポーネントは、設定データに基づいてページをロードし、ロード中のメッセージやロード失敗のメッセージを表示し、ページの切り替えアニメーション���サポートします。これにより、完全な機能を備えたインタラクティブなアプリケーションを迅速に構築することができます。

## 路由跳转

`o-app`アプリケーションでは、ページモジュールから別のページモジュールに簡単にリンクを実装できます。以下では、様々な方法でリンクを実行する方法を紹介します。

### `<a>` タグを使用したルートの移動

;Ignore bugs;
HTMLのページで、`<a>` タグを使用してルーティングを実装することができます。`href` 属性を目標ページのパスに指定し、`olink` 属性を追加して、`o-app` コンポーネントにこれがルーティングリンクであることを伝える必要があります。

```html
<a href="./pages/home.mjs?count=2" olink>ホームに移動</a>
```

### goto

ページテンプレートで `on:click` 属性を使用してクリックイベントをバインドし、モジュールの `goto` メソッドを呼び出してルーティングを行うことができます。

```html
<template page>
  <div class="container">
    <button on:click="toabout">跳转到关于页面</button>
  </div>

  <script>
    export default async ({ query }) => {
      return {
        proto: {
          toabout() {
            this.goto("./about.mjs");
          },
        },
      };
    };
  </script>
</template>
```

または、対象の要素をアンインストールすることもできます: 

```html
<button on:click="goto('./pages/about.mjs')">関連ページに移動する</button>
```

### 替换跳转和返回页面

`goto`メソッド以外にも、`o-app`は`replace`および`back`メソッドもサポートしています。

- `replace` 方法用于替换跳转，它会取代当前页面的路由，使新页面成为当前页面的路由。

```html
<button on:click="replace('./pages/settings.mjs')">現在のページを置き換えてジャンプ</button>
```

- `back`メソッドは、前のページに戻るために使用されます。

```
<button on:click="back()">前のページに戻る</button>
```

注意する必要があるのは、アプリ内ではコンポーネントのルーティング状態が保持されるが、ルートデータは現在のブラウザタブにはバインドされないということです。これにより、アプリ内で簡単にページ間のジャンプとナビゲーションを実現できます。

もし、ルーティングとページのバインディングを実現したい場合は、o-routerコンポーネントを使用することができます。詳細は後の章で説明します。

上記の方法を使用すると、 `o-app` アプリで柔軟なルートの移動を実現し、ユーザーが異なるページコンテンツを簡単に閲覧できるようにすることができます。

## アプリと現在のページへのアクセス

アプリケーション内のさまざまな要素（コンポーネントを含む）には、**app** 属性を使用して、それらが存在する `o-app` インスタンスにアクセスします。これは、アプリケ���ション全体と対話するために必要な操作に非常に便利です。

`app.current` 属性を使用すると、現在アクティブなページモジュールのアドレスを取得できます。

以下は使用例です：

```javascript
// MyComponent.mjs
export default () => {
  return {
    attached(){
      const appTag = this.app;
      
      const currentPage = appTag.current;
      console.log(`現在アクティブなページは：${currentPage}`);
    }
  };
}
```

上記の例では、セレクタ `.app` を使用してアプリのタグを取得し、`app.current` プロパティによって現在アクティブなページのアドレスを取得しています。

使用技巧：次のページを事前にキャッシュする

いくつかのシーンでは、ユーザーが次のページに移動することをあらかじめ予測しているかもしれません。ユーザーエクスペリエンスを向上させるために、次のページのモジュールを事前にキャッシュして、実際の移動時に即座に読み込んでユーザーの待ち時間を減らし、よりスムーズなユーザーエクスペリエンスを提供します。

在当前页面的 JavaScript 代码中，调用 `load` 方法并传入下一页的模块路径，该模块将被加载并缓存。

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load('./pages/next-page.mjs'); // 这是一个仅用于缓存，非当前页必须模块，无需添加 await
};
```