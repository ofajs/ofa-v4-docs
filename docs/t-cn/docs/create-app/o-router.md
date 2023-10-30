# o-router 組件的使用

`o-router` 組件是一個用於將 `o-app` 內的路由綁定到當前瀏覽器標簽頁的組件，它能夠幫助你更方便地管理頁面路由和展示。

## 引用 o-router 組件

首先，你需要在頁面中引用 `o-router` 組件。你可以通過以下方式引用 `router.mjs` 文件：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/router/dist/router.min.js"></script>
```

## 使用 o-router 組件

使用 `o-router` 組件是通過將其包裹在 `o-app` 組件外部來實現的。這樣可以將應用內的路由綁定到當前瀏覽器標簽上。

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## fix-body 屬性

`o-router` 組件還提供了 `fix-body` 屬性，當你設置了該屬性後，組件會自動為 `<html>` 標簽添加樣式，使應用的尺寸等於頁面的大小，從而讓應用的內容充滿整個窗口。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>router test</title>
    <script src="ofa.js"></script>
    <!-- 引用 o-router 組件 -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- 使用 o-router 組件，並設置 fix-body 屬性 -->
    <o-router fix-body> 
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```