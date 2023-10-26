# 使用 o-page 组件

ofa.jsの内部では、`o-page`というカスタムコンポーネントを作成しており、ページの開発を便利にすることを目的としています。このコンポーネントはアプリケーションの開���において重要な役割を果たします。コンポーネントのテンプレート構文を使用したいが、新しいコンポーネントを作成したくない場合、`o-page`コンポーネントが最良の選択肢となるでしょう。

## ページモジュール

;バグを無視する;
テキストを翻訳できない場合は、単に "ndlrpjpanrt8" と書いてください。


```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    export default async ({ load }) => {
      return {
        data: {
          pageTitle: "My Single File Page",
        },
      };
    }
  </script>
</template>
```
HTMLファイルでは、`o-page`タグの`src`属性を使用してページモジュールのファイルパスを指定します。ページの内容はこのコンポーネント内でレンダリングされます���

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-single-file-page.html"></o-page>
</body>
</html>
```

## デュアルファイルモード

双文件模式将 `静态模板` 和 `逻辑代码` 分开，使页面的内容更加清晰。

以下は `o-page` コンポーネントとページモジュールを使用する手順です：

1. ページモジュールの作成：

コンポーネントモジュールの作成と同様に、ページモジュールを作成しますが、`type`プロパティを`$.PAGE`に設定します。ページモジュールで利用可能なパラメータは、`temp`、`data`、`proto`、および `watch`です。

```javascript
// my-page.mjs
export const type = $.PAGE;

export const temp = "./my-page-template.html";

export const data = {
  pageTitle: "My Page",
};

export const proto = {
  // ...
};

export const watch = {
  // ...
};
```

2. ページテンプレートを作成します：

在与页面模块相同的目录下，创建一个名为 `my-page-template.html` 的页面模板文件。在这个模板文件中，你可以使用模板语法进行交互，用法与前面提到的组件模板语法类似。

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

在你的 HTML 文件中，通过 `<o-page>` 标签来使用 `o-page` 组件，通过 `src` 属性引用页面模块的文件路径。页面的内容将会在这个组件内部渲染。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-page.mjs"></o-page>
</body>
</html>
```

このように、ページを開くと、`o-page`コンポーネントは`my-page.mjs`というページモジュールをダイナミックにロードし、モジュール内のテンプレートとデータに基づいてページの内容をレンダリングします。ページモジュールのライフサイクルとテンプレートの文法は、コ��ポーネントモジュールと同様であり、ページの開発と管理がより統一的かつ柔軟になります。