# 制作應用

使用 `o-app` 標簽可以輕松地創建一個完整的應用程序窗口。下面是如何制作一個應用並配置它的步驟：

## 基礎代碼

1. 創建一個 HTML 文件，設置 `o-app` 標簽為應用的顯示窗口。確保為 `o-app` 設置全屏的樣式，以使應用占據整個視口。

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

2. 創建一個 es 模塊，用於設置應用的配置數據。配置數據包括以下選項：

   - `home`：字符串類型，應用的首頁的頁面模塊地址。
   - `loading`：函數類型，應用在加載新頁面時，會運行這個函數，得到的內容會插入到應用中，作為加載時的提示，等到頁面加載完成後，會自動去除這個 loading 元素。
   - `fail`：函數類型，應用加載頁面失敗時，會運行這個函數，返回得到的值會顯示在應用中作為加載失敗的提示。函數會帶有加載失敗頁面的 `src` 地址和錯誤報錯對象。
   - `pageAnime`：頁面之間切換時的動畫配置。

下面是應用的配置數據示例：

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

3. 在 HTML 文件中使用 `o-app` 標簽，並通過 `src` 屬性引用配置數據的 es 模塊。

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

通過以上步驟，你已經成功制作了一個使用 `o-app` 組件的應用程序窗口。`o-app` 組件會根據配置數據中的設置加載頁面，展示加載中的提示或加載失敗的提示，並支持頁面切換動畫。這樣，你可以快速搭建一個功能完整且具有交互性的應用程序。

## 路由跳轉

在 `o-app` 應用中，你可以輕松地實現路由跳轉，從一個頁面模塊跳轉到另一個頁面模塊。下面介紹幾種不同的方式來進行路由跳轉。

### 使用 `<a>` 標簽進行路由跳轉

你可以在頁面的 HTML 中使用 `<a>` 標簽來實現路由跳轉。需要將 `href` 屬性指定為目標頁面模塊的路徑，並添加 `olink` 屬性，以告知 `o-app` 組件這是一個路由鏈接。

```html
<a href="./pages/home.mjs?count=2" olink>跳轉到首頁</a>
```

### goto

你可以在頁面模板中使用 `on:click` 屬性來綁定點擊事件，並調用模塊上的 `goto` 方法進行路由跳轉。

```html
<template page>
  <div class="container">
    <button on:click="toabout">跳轉到關於頁面</button>
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

又或者直接卸載目標元素上：

```html
<button on:click="goto('./pages/about.mjs')">跳轉到關於頁面</button>
```

### 替換跳轉和返回頁面

除了 `goto` 方法外，`o-app` 還支持 `replace` 和 `back` 方法。

- `replace` 方法用於替換跳轉，它會取代當前頁面的路由，使新頁面成為當前頁面的路由。

```html
<button on:click="replace('./pages/settings.mjs')">跳轉並替換當前頁面</button>
```

- `back` 方法用於返回到前一個頁面。

```html
<button on:click="back()">返回上一頁</button>
```

需要注意的是，應用內會保持組件的路由狀態，但路由數據不會綁定到當前瀏覽器標簽上。這樣，你可以方便地在應用中實現頁面之間的跳轉和導航。

如果你想實現路由和頁面的綁定，可以使用 o-router 組件，我們將在後面的章節中詳細介紹。

通過以上方法，你可以在 `o-app` 應用中實現靈活的路由跳轉，讓用戶能夠方便地瀏覽不同的頁面內容。

## 訪問應用和當前頁面

在應用內的各個元素（包括組件），你通過 **app** 屬性來獲取它們所在的 `o-app` 實例。這對於需要與整個應用進行交互的操作非常有用。

通過 `app.current` 屬性，你可以獲取當前激活的頁面模塊的地址。

以下是一個使用示例：

```javascript
// MyComponent.mjs
export default () => {
  return {
    attached(){
      const appTag = this.app;

      const currentPage = appTag.current;
      console.log(`當前激活的頁面是：${currentPage}`);
    }
  };
}
```

在上面的示例中，通過選擇器 `.app` 獲取了應用標簽，然後通過訪問 `app.current` 屬性獲取了當前激活的頁面地址。

## 使用技巧：提前緩存下一頁

在一些場景下，你可能已經預知用戶即將跳轉到下一頁。為了提高用戶體驗，你可以提前緩存下一頁的頁面模塊，這樣在實際跳轉時可以立即加載，減少用戶等待的時間，讓用戶體驗更加流暢。。

在當前頁面的 JavaScript 代碼中，調用 `load` 方法並傳入下一頁的模塊路徑，該模塊將被加載並緩存。

```javascript
// MyComponent.mjs
export default async ({ load }) => {
  //   await load('./pages/next-page.mjs');
  load('./pages/next-page.mjs'); // 這是一個僅用於緩存，非當前頁必須模塊，無需添加 await
};
```