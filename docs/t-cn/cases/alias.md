# alias

通過設置別名（alias），使用者能夠更方便地使用共享的資源，特別適用於使跨域名的共享組件更方便地享用同一版本的資源。

在這個示例中，我們通過 `lm.config` 方法設置了別名，將 `@obook` 別名映射到 `https://cdn.jsdelivr.net/npm/obook`。現在，當我們使用 `@obook` 作為前綴時，它將自動映射到指定的 URL。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<script>
  lm.config({
    alias: {
      "@obook": "https://cdn.jsdelivr.net/npm/obook",
    },
  });
</script>

<l-m src="@obook/blocks/simp-block.html"></l-m>
<simp-block>
  <h2>Test Title</h2>
  <h3>Test h3 desc</h3>
</simp-block>
```

</html-viewer>

通過使用別名 `@obook`，我們在 `l-m` 標簽中引入了 `"https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"` 這個資源，使得跨域名的組件可以更方便地訪問共享資源，而無需知曉詳細的資源地址。這增強了代碼的可維護性和跨域名資源共享的便捷性。

## 注意事項

在設置別名時，請注意以下幾點：

- 別名的鍵必須以 `@` 開頭，如 `@example`。

```javascript
lm.config({
  alias: {
    // "example": "https://example.com/resource", ❌ 沒有@開頭
    "@example": "https://example.com/resource",
  },
});
```

- 不要重復設置相同名稱的別名，否則會引發錯誤。

```javascript
lm.config({
  alias: {
    "@namex": "https://example.com/resource",
  },
});

// ...

lm.config({
  alias: {
    "@namex": "https://example.com/other-resource", // 錯誤，重復的別名
  },
});
```