# o-app コンポーネントの使用

`o-app`タグを使用すると、簡単に完全なアプリケーションウィンドウを作成することができます。以下は、アプリケーションを作成し、設定するための手順です：

テキストはやや退屈に見えますが、実際に試してみるために [アプリケーションの使用例デモ](../../cases/use-app.md) にアクセスすることをお勧めします。

## 基本コード

1. HTMLファイルを作成し、`o-app`タグをアプリケーションの表示ウィンドウに設定します。`o-app`に対してフルスクリーンのスタイルを設定して、アプリケーションがビューポート全体を占有するように確認してください。

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

2. esモジュールを作成し、アプリケーションの設定データを設定します。設定データには以下のオプションが含まれます：

   - `home`：文字列型で、アプリケーションのホームページのページモジュールのアドレスです。
   - `loading`：関数型で、新しいページをロードす際にこの関数が実行され、その内容がロード中のヒントとしてアプリケーションに挿入されます。ページのロードが完了すると、このloading要素は自動的に削除されます。
   - `fail`：関数型で、アプリケーションのページのロードに失敗した場合にこの関数が実行され、その値がロード失敗のヒントとしてアプリケーションに表示されます。関数にはロード失敗ページの`src`アドレスとエラー報告オブジェクトが含まれます。
   - `pageAnime`：ページ間の切り替え時のアニメーション設定。

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

3. HTMLファイルで`o-app`タグを使用し、`src`属性を使用してesモジュールの設定データを参照します。

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

以上の手順で、`o-app`コンポーネントを使用したアプリケーションウィンドウを作成することができました。`o-app`コンポーネントは、設定データに基づいてページをロードし、ローディング中のメッセージやロード失敗のメッセージを表示し、ページの切り替えアニメーションをサポートします。これにより、完全な機能を備え、インタラクティブなアプリケーションを素早く構築することができます。

## ルートジャンプ

`o-app` アプリでは、ページモジュールから別のページモジュールに簡単にルートを移動することができます。以下では、ルートの移動方法についていくつかの異なる方法を紹介します。

### `a` タグを使ったジャンプのルーティング

ページのHTMLで、`<a>`タグを使用してルーティングのリンクを実現することができます。`href`属性を対象ページのモジュールのパスに設定し、`olink`属性を追加して、`o-app`コンポーネントにこれがルーティングリンクであることを通知する必要があります。

```html
<a href="./pages/home.mjs?count=2" olink>跳转到首页</a>
```

### goto

ページのテンプレートで `on:click` 属性を使用してクリックイベントをバインドし、モジュール上の `goto` メソッドを呼び出してルーティングを実行できます。

```html
<template page>
  <div class="container">
    <button on:click="toabout">アバウトページへ移動する</button>
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

もしくは、対象の要素を直接アンインストールすることもできます。

```html
<button on:click="goto('./pages/about.mjs')">アバウトページに遷移</button>
```

### 替換のジャンプと戻りページ

`goto` メソッド以外、`o-app` は `replace` メソッドと `back` メソッドもサポートしています。

`replace`メソッドは、遷移を置き換えるために使用されます。これは、現在のページのルーティングを置き換え、新しいページを現在のページのルーティングにします。

```html
<button on:click="replace('./pages/settings.mjs')">現在のページをジャンプして置き換える</button>
```

- 前のページに戻るための `back` メソッドです。

```html
<button on:click="back()">前のページに戻る</button>
```

アプリ内では、コンポーネントのルート状態が保持されますが、ルートデータは現在のブラウザタブにバインドされません。これにより、アプリ内で簡単にページ間のジャンプやナビゲーションを実装することができます。

もし、ルーティングとページのバインディングを実現したい場合は、o-routerコンポーネントを使用することができます。後のセクションで詳しく説明します。

以上の方法を通じて、`o-app`アプリケーションで柔軟なルーティングの移動を実現し、ユーザーにさまざまなページコンテンツを簡単に閲覧できるようにすることができます。

## アプリと現在のページへのアクセス

アプリ内のすべての要素（コンポーネントを含む）は、`app` 属性を使用してそれらが所属する `o-app` インスタンスにアクセスします。これは、アプリ全体とのインタラクションが必要な操作に非常に便利です。

app.currentプロパティを使用すると、現在アクティブなページモジュールのアドレスを取得できます。

以下は使用例です：

```javascript
// MyComponent.mjs
export default () => {
  return {
    attached(){
      const appTag = this.app;

      const currentPage = appTag.current;
      console.log(`当前激活的页面是：${currentPage}`);
    }
  };
}
```

上記の例では、セレクター `.app` でアプリタグが取得され、`app.current` 属性で現在のアクティブなページのアドレスが取得されます。

## 使い方のヒント：次のページをあらかじめキャッシュしておく

次のページにユーザーがジャンプすることが予想される場合、ユーザーエクスペリエンスを向上させるために、次のページのモジュールを事前にキャッシュすることができます。これにより、実際のジャンプ時にすぐに読み込むことができ、ユーザーの待ち時間を減らしよりスムーズな体験を提供します。

現在のページのJavaScriptコード内で、`load`メソッドを呼び出し、次のページのモジュールパスを渡します。そのモジュールはロードされキャッシュされます。

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load('./pages/next-page.mjs'); // このファイルはキャッシュに使用されるだけで、現在のページで必要なモジュールではないため、awaitを追加する必要はありません
};
```