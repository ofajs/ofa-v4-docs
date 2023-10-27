# 使用 o-page 组件

o-pageというカスタムコンポーネントをofa.js内で構築しました。これはページの開発を簡単にするためのものです。このコンポーネントはアプリケーション開発で重要な役割を果たします。コンポーネントのテンプレート構文を使用したいが、新しいコンポーネントを作成たくない場合、o-pageコンポーネントは最適な選択肢となります。

## 页面模块

シングルファイルのページモジュールを作成する場合、コンポーネントモジュールの作成と同じです。`template` タグを使用してページのテンプレートコードを囲み、`page` 属性を追加します。このタグ内では、テンプレートの文法と他のコンポーネントやページモジュールのインタラクションを自由に行うことができます。

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
HTML ファイルでは、`o-page` タグの `src` 属性を使用してページモジュールのファイルパスを指定します。コンポーネント内でページの内容がレンダリングされます。

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

## 双文件模式

静的テンプレートとロジックコードを分離するダブルファイルモードは、ページのコンテンツをより明確にします。

以下は、`o-page` コンポーネントとページモジュールを使用する手順です。

1. 创建页面模块：

ページモジュールを作成する際には、コンポーネントモジュールの作成と似ていますが、`type` 属性を `$.PAGE` に設定します。ページモジュールで使用できるパラメータには、`temp`、`data`、`proto`、`watch` が含まれます。

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

2. 创建页面模板：

同じディレクトリに `my-page-template.html` という名前のページテンプレートファイルを作成します。このテンプレートファイルでは、前述のコンポーネントテンプレートの文法と同様に、テンプレート文法を使用して対話型処理を行うことができます。

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

あなたのHTMLファイルで、`<o-page>`タグを使用して`o-page`コンポーネントを使用し、`src`属性を使用してページモジュールのファイルパスを参照します。ページのコンテンツはこのコンポーネント内でレンダリングされます。

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

これにより、ページを開くと、`o-page`コンポーネントが`my-page.mjs`というページモジュールを動的にロードし、モジュール内のテンプレートとデータに基づいてページコンテンツをレンダリングします。ページモジュールのライフサイクルとテンプレートの文法はコンポーントモジュールと同じであり、ページの開発と管理がより統一的で柔軟になります。