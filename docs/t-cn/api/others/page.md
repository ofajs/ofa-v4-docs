# `o-page` 組件

`o-page` 是 `ofa.js` 中的核心組件之一，代表著一個獨立的頁面或頁面模塊。以下是 `o-page` 的一些關鍵屬性和方法：

## `src` 屬性

`src` 屬性用於指定頁面模塊的具體地址。這是指定頁面內容和行為的關鍵屬性，告訴應用程序從哪裏加載特定頁面的內容。

```javascript
// 示例代碼：獲取當前頁面的地址
// const page = $("o-app").current;
...
ready(){
  // 在頁面模塊的生命周期內，this 就是當前頁面模塊本身；
  const page = this;
}
...
```

## `goto` 方法

`goto` 方法用於從當前頁面跳轉到另一個頁面。相比較於 `app` 的 `goto` 方法，`page` 的 `goto` 方法可以使用相對地址來導航到其他頁面。

```javascript
// 示例代碼：在當前頁面模塊內跳轉到其他頁面
page.goto("./page2.html");
```

## `replace` 方法

`replace` 方法用於替換當前頁面為另一個頁面。這與 `app` 的 `replace` 方法類似，但是在頁面內進行替換操作。

```javascript
// 示例代碼：在當前頁面模塊內將當前頁面替換為另一個頁面
page.replace("./new-page.html");
```

## `back` 方法

`back` 方法用於返回到前一個頁面。這會導航用戶回到上一個頁面，類似於瀏覽器的後退操作。

```javascript
// 示例代碼：返回到前一個頁面
page.back();
```