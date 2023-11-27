# 和 jQuery 共存

在使用 ofa.js(≥4.3.40) 的同時，你可以與 jQuery 共存。你有兩種主要的選擇：

## 1. 使用 `noConflict`

你可以在引入 jQuery 後調用 [noConflict](https://api.jquery.com/jQuery.noConflict/) 方法，這樣就會釋放 `$` 變量，避免沖突。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script>
  $.noConflict();
  // 現在，你可以使用 jQuery 的全名來調用，例如 jQuery.ajax()。
</script>
```

## 2. 按順序引入庫

另一種方法是按順序引入庫，後引入的庫將占用 `$` 變量。這種情況下，你可以使用全局變量 `ofa` 代替原本的 `$`。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<!-- 現在 $ 是 jQuery 的別名，你可以使用 ofa 代替 $ 來調用 ofa.js 相關的功能 -->
```

使用這兩種方法之一，你可以確保 ofa.js 和 jQuery 在同一頁面上共存而不會發生沖突。