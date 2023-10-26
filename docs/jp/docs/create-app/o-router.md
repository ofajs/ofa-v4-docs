# o-router コンポーネントの使用

`o-router` コンポーネントは、`o-app` 内のルートを現在のブラウザのタブにバインドするためのコンポーネントです。ページのルートや表示をより便利に管理することがで��ます。

## o-router コンポーネントの使用
まず、`o-router`コンポーネントをページにインポートする必要があります。`router.mjs`ファイルを以下の方法でインポートできます：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.js"></script>
```

## o-routerコンポーネントの使用方法
使用 `o-router` 组件是通过将其包裹在 `o-app` 组件外部来实现的。这样可以将应用内的路由绑定到当前浏览器标签上。

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## fix-body 属性

`o-router` コンポーネントは `fix-body` 属性も提供しています。この属性を設定すると、コンポーネントは `<html>` タグに自動でスタイルを追加し、アプリのサイズをページのサイズにすることで、アプリのコンテンツをウィンドウ全体に広げます。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>router test</title>
    <script src="ofa.js"></script>
    <!-- 引用 o-router 组件 -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- 使用 o-router 组件，并设置 fix-body 属性 -->
    <o-router fix-body> 
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```