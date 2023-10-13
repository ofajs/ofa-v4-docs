# 開發應用

除了可以開發組件，`ofa.js` 還可以用於開發功能完整的應用程序。

`ofa.js` 將應用程序集成為一個 `o-app` 組件，通過直接使用這個標簽，你就能夠快速創建應用程序。這種方式使應用的創建變得簡單且高效。

此外，`ofa.js` 官方還提供了完整的**路由**和**SSG（靜態頁面生成）**方案，幫助開發者構建更健全的應用程序。這些功能能夠加速開發流程，讓你能夠專注於應用程序的邏輯和用戶體驗，而不必過多擔心底層細節。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>app test demo</title>
    <script src=".././../ofa.js"></script>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      o-app {
        display: block;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <o-app>
      <o-page src="./pages/hello.html"></o-page>
    </o-app>
  </body>
</html>
```

上面是一個簡單的應用教程代碼示例，接下來會逐步講解應用的開發過程。