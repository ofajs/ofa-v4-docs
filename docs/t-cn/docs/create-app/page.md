# 使用 o-page 組件

在 ofa.js 內部，我們構建了一個名為 `o-page` 的自定義組件，旨在為頁面的開發提供便利。這個組件在應用開發中扮演著關鍵的角色。當你想要使用組件的模板語法，但又不想創建全新的組件時，`o-page` 組件將成為你的最佳選擇。

## 頁面模塊

創建一個單文件頁面模塊時，類似於創建組件模塊。使用 `template` 標簽來包裹頁面的模板代碼，並添加 `page` 屬性。在該標簽內部，可以自由使用模板語法與其他組件或頁面模塊進行交互。

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
在 HTML 文件中，使用 `o-page` 標簽的 `src` 屬性指定頁面模塊的文件路徑。頁面內容將在該組件內部進行渲染。

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

## 雙文件模式

雙文件模式將 `靜態模板` 和 `邏輯代碼` 分開，使頁面的內容更加清晰。

以下是使用 `o-page` 組件和頁面模塊的步驟：

1. 創建頁面模塊：

與創建組件模塊類似，創建一個頁面模塊，但將 `type` 屬性設置為 `$.PAGE`。頁面模塊可用的參數包括 `temp`、`data`、`proto` 和 `watch`。

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

2. 創建頁面模板：

在與頁面模塊相同的目錄下，創建一個名為 `my-page-template.html` 的頁面模板文件。在這個模板文件中，你可以使用模板語法進行交互，用法與前面提到的組件模板語法類似。

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

在你的 HTML 文件中，通過 `<o-page>` 標簽來使用 `o-page` 組件，通過 `src` 屬性引用頁面模塊的文件路徑。頁面的內容將會在這個組件內部渲染。

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

這樣，當你打開頁面時，`o-page` 組件會動態加載 `my-page.mjs` 這個頁面模塊，並根據模塊中的模板和數據渲染頁面內容。頁面模塊的生命周期和模板語法與組件模塊保持一致，使得頁面的開發和管理變得更加統一和靈活。