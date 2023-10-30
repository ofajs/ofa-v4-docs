# 靜態客戶端渲染(SCSR)

## 什麽是 SCSR？

SCSR 全名 Static Client-Side Rendering，稱為靜態客戶端渲染；靜態客戶端渲染（SCSR）是 CSR（Client-Side Rendering）的一種變種，它在保留了 CSR 用戶體驗的基礎上，還能夠讓頁面在靜態狀態下被爬蟲獲取。

## 如何使用 SCSR

你可以通過以下方式引用 SCSR 庫：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/libs/scsr/dist/scsr.min.js"></script>
```

## SCSR 的工作原理

SCSR 是通過直接運行單文件模式的頁面模塊，而無需使用 `o-page` 標簽，從而實現在頁面上進行渲染。具體來說，就是將頁面模塊的模板代碼直接放在 `o-app` 內。

以下是一個 SCSR 示例，展示了如何在頁面上直接渲染頁面模塊的內容：

```html
<!-- home.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="./public.css" />
    <script src="../../ofa.js"></script>
    <script src="./scsr.min.js"></script>
  </head>
  <body>
    <o-app src="./app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Hello, World!</h1>
          <p class="subtitle">Welcome to my ofa.js page.</p>
          <div>count => {{count}}</div>
          <a href="./pages/help.html" olink>GO TO HELP</a>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              data: { count: query.count || 0 },
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>
```

通過 SCSR，`template` 標簽內的內容會被直接渲染到頁面上，而這部分內容實際上就是單文件模式的頁面模塊。

繼續以上面的 `home.html` 頁面為例，我們創建一個 `help` 頁面：

```html
<!-- pages/help.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Help</title>
    <link rel="stylesheet" href="../public.css" />
    <script src="../../../ofa.js"></script>
    <script src="../scsr.min.js"></script>
  </head>
  <body>
    <o-app src="../app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Help Page</h1>
          <button on:click="back()">GO Back</button>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              proto: {},
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>

```

在 `home.html` 頁面中點擊 "GO TO HELP" 後，將平滑跳轉到 `help.html` 頁面，實現了客戶端渲染的平滑跳轉效果。

## 注意事項

所有采用 SCSR 方案的頁面，除頁面描述性的內容（如 title、meta:description、keywords）和頁面模板內容外，其他引用資源必須保持一致，以確保在頁面跳轉和刷新後的體驗一致。

## 關於 SSR 方案

當前的 SCSR 方案實際上更類似於一種 SSG（Static Site Generation）方案，因為它將頁面預先渲染成靜態內容，然後再通過客戶端進行交互。ofa.js 已經提供了相對獨立的組件封裝方案，使得前端開發人員可以將組件封裝好，然後結合傳統的後端渲染頁面方案（如 Node.js、Go、Java、PHP 等語言的網站渲染框架），後端開發人員可以快速使用這些封裝好的組件來構建優質的網頁。

我們計劃在未來提供一個完整的 SSR（Server-Side Rendering）方案。這個方案的原理大致是先獲取下一頁的元素內容，然後與當前頁的標簽內容進行對比，從而進行動態的增加、刪除和修改屬性值等操作。不過需要注意的是，這個 SSR 方案會比較耗費時間，因為這個過程涉及到復雜的元素比較和修改操作。

ofa.js 是一個新興的框架，而且作者的業余時間也有限，暫時還沒有完整開發出這個 SSR 方案。但如果未來 ofa.js 能夠得到更多的用戶使用，並且出現了對於 SSR 方案的強烈需求時，作者會繼續完善並開發這個方案。目前，作者會專注於框架的穩定性和功能擴展，同時也歡迎用戶的反饋和建議，以便未來更好地滿足用戶的需求。