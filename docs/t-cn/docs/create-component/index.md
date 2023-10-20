# 制作和使用組件

ofa.js 使用基礎的 HTML 和 JavaScript 文件來定義組件，避免引入新的文件類型以減少學習成本。只要你對 HTML 有一定的了解，就能夠快速開發和使用 ofa.js 組件。

## 準備創建組件前的步驟

在開始創建組件之前，需要注意一些準備工作。由於創建組件涉及到瀏覽器請求資源的操作，如果你僅僅是雙擊打開 HTML 文件來查看，會在 "file" 協議下進行查看。在 "file" 協議下，JavaScript 模塊的加載可能會報錯。因此，你需要準備一個靜態服務器來正確查看組件。

如果你使用的是 Visual Studio Code 編輯器，你可以簡單地安裝一個支持靜態服務器的插件。我們推薦使用 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 插件。

安裝插件後，只需在 `demo.html` 文件上右鍵點擊，選擇 "Open with Live Server"，插件將會自動以靜態服務器模式打開文件。

如果你使用的是其他編輯器，你也可以創建一個 Nginx 或 Apache 服務器，只要能夠支持靜態 HTML 查看即可。這樣做可以確保你能夠正常預覽和開發你的組件。

## 創建一個按鈕組件

下面，我們將創建一個簡單的按鈕組件，命名為 **simple-button**，它將具有比原生按鈕更美觀的樣式。

首先，創建一個名為 `simple-button.html` 的文件，其中使用 `template` 標簽，並添加 `component` 屬性以標識為組件。

然後，在 `template` 內部編寫組件的模板代碼。接著，在模板內容下方，添加一個 `script` 標簽，將組件的 JavaScript 代碼放入其中。

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
      tag: 'simple-button' // 需要注冊的組件名，如果沒有定義 tag 屬性，注冊的組件名與文件名保持一致
    }
  </script>
</template>
```

在成功引入 ofa.js 後，會自動注冊 `load-module` 組件，這是一個用於聲明式引用模塊的組件，類似於 script 標簽。該組件會代理加載指定 `src` 的模塊，並對需要加載的模塊進行預處理。在本案例中，會加載模板並注冊 simple-button 組件。

`load-module` 組件還可以使用縮寫 `l-m`，以減少代碼量。

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="../../ofa.js"></script>
    <!-- <load-module src="./simple-button.html"></load-module> -->
    <!-- l-m 組件等同於 load-module 組件，可以寫少一點代碼 -->
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>I am a button</simple-button>
  </body>
</html>
```

`load-module` 組件是一個定制的**聲明式加載器**庫，提供了強大的功能，可以擴展支持各種類型的文件，或者對 JavaScript 模塊進行中轉處理。它已經拆分成了一個獨立的項目，具體的使用文檔在 [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js)。

### 雙文件模式

雙文件模式將 `靜態模板` 和 `邏輯代碼` 分開，使組件更加清晰。

邏輯代碼放在 js 文件內，這個 js 需要標識 `export const type = $.COMP;`，以通知頁面這是一個組件模塊。在這種拆分模式下，模塊代碼可以使用 `import` 等 ES Module 的標準語法。

按鈕組件由兩個文件組成：

1. **simple-button.html**：按鈕組件的 HTML 模板和樣式。

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

2. **simple-button.mjs**：按鈕組件的注冊代碼。

```javascript
// simple-button.mjs
export const type = $.COMP; // 雙文件模塊必須帶有 `export const type = $.COMP`

// 需要注冊的組件名，當沒有定義 tag 屬性時，注冊的組件名與文件名保持一致
// export const tag = 'simple-button';

// 組件模板的地址，當沒有定義時，默認載入和當前模塊同目錄下的和組件同名的 html 文件
// export const temp = './simple-button.html';
```

在需要使用該組件的地方，使用 `l-m` 引入這個模塊。以下是使用 simple-button 的案例頁面（雙文件模式）。

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