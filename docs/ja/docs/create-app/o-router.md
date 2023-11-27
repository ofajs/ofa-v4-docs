# o-routerコンポーネントの使用

`o-router` コンポーネントは、`o-app` 内のルートを現在のブラウザのタブにバインドするためのコンポーネントです。これを使用すると、ページのルートと表示をより簡単に管理することができます。

## o-routerコンポーネントのロード

まず、ページで `o-router` コンポーネントを参照する必要があります。以下の方法で `router.mjs` ファイルを参照することができます：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/libs/router/dist/router.min.js"></script>
```

## o-router コンポーネントの使用

使用 `o-router` 组件は、`o-app` コンポーネントの外側にラップすることで実現されます。これにより、アプリ内のルーターが現在のブラウザータブにバインドされます。

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## fix-body 属性

`o-router`コンポーネントは、`fix-body`属性を提供しており、この属性を設定すると、コンポーネントは自動的に`<html>`タグにスタイルを追加し、アプリケーションのサイズをページ全体と同じにして、アプリケーションの内容をウィンドウ全体で表示します。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>routerテスト</title>
    <script src="ofa.js"></script>
    <!-- o-routerコンポーネントを読み込む -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- o-routerコンポーネントを使用し、fix-body属性を設定 -->
    <o-router fix-body>
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```