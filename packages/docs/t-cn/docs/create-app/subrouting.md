# 子路由模式

在 ofa.js 中，設置子路由與一些前端框架的做法略有不同。ofa.js 使用一種更加直觀的方式，通過在頁面模塊上設置父頁面來作為容器，從而實現子路由的需求。

## 設置父頁面容器

要創建子路由，首先需要在子頁面的頁面模塊上設置 `parent` 參數，指定父頁面的頁面模塊地址。這樣，在子頁面加載時，ofa.js 會自動將子頁面包裹在父頁面容器中。

```html
<template page>
  <h1>Page 1</h1>

  <script>
    export const parent = "./layout-page.html";
  </script>
</template>
```

在上述示例中，子頁面的頁面模塊通過 `parent` 參數指定了父頁面容器的地址。

## 父頁面容器模板設置

父頁面容器的模板需要設置一個 `<slot>` 元素，以便子頁面能夠插入到父頁面的指定位置。同時，確保 `<slot>` 元素的容器元素設置為 `position: relative`，這是非常重要的，因為子頁面會在父頁面容器中絕對定位。

以下是一個父頁面容器的示例模板：

```html
<!-- layout-page.html -->
<template page>
  <style>
    /* 設置容器元素為 relative 定位 */
    .parent-container {
      position: relative;
    }
  </style>
  
  <!-- 設置容器元素，用於插入子頁面 -->
  <div class="parent-container">
    <slot></slot>
  </div>
</template>
```

在上述示例中，通過設置一個帶有 `slot` 的容器元素，子頁面會被插入到該容器中。確保容器元素具有相對定位，這樣子頁面可以根據容器定位。

通過使用這種方式，你可以更直觀地配置子路由，通過設置父頁面容器和子頁面的關聯，來實現子頁面的加載和渲染。

## 父頁面的路由監聽

在某些情況下，多個頁面共用同一個父頁面作為容器，當這些頁面之間進行跳轉時，父頁面不會被刷新。這種情況下，父頁面仍然可以監聽路由的變動，以便在不刷新頁面的情況下執行相應的操作。

### 監聽路由變動

父頁面模塊可以設置一個 `routerChange` 函數，用於監聽路由的變動。當頁面發生路由切換且不刷新父頁面時，將觸發 `routerChange` 事件。這個事件會傳遞當前頁面的信息，以及跳轉的方式（`type`）。

以下是一個父頁面模塊的示例，展示了如何設置 `routerChange` 函數來監聽路由變動：

```javascript
// 父頁面的頁面模塊
export const routerChange = (current, type) => {
  console.log(`路由切換：當前頁面為 ${current.src}，切換方式為 ${type}`);
};
```

在上述示例中，`routerChange` 函數接收兩個參數，`current` 表示當前頁面的地址，`type` 表示跳轉的方式。當頁面發生路由切換時，該函數會被觸發，並輸出相應的信息。

