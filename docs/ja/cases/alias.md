# alias

別名（エイリアス）を設定することにより、ユーザーは共有リソースをより便利に利用することができます。特に異なるドメイン間で共有されるコンポーネントを同一バージョンのリソースで簡単に利用するために適しています。

この例では、`lm.config`メソッドを使用して、`@obook`エイリアスを`https://cdn.jsdelivr.net/npm/obook`にマッピングする別名を設定しました。これにより、`@obook`プレフィックスを使用すると、自動的に指定されたURLにマッピングされます。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
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

通過使用別名 `@obook`，我們在 `l-m` 標籤中引入了 `"https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"` 這個資源，使得跨域名的組件可以更方便地訪問共享資源，而無需知曉詳細的資源地址。這增強了代碼的可維護性和跨域名資源共享的便捷性。

## 注意事項

別名（エイリアス）を設定する際は、以下の点に注意してください。

- 別名のキーは`@`で始まる必要があります。例えば、`@example`です。

```javascript
lm.config({
  alias: {
    // "example": "https://example.com/resource", ❌ '@'で始まらない。
    "@example": "https://example.com/resource",
  },
});
```

- 同じ名前のエイリアスを繰り返し設定しないでください。エラーが発生します。

```javascript
lm.config({
  alias: {
    "@namex": "https://example.com/resource",
  },
});

// ...

lm.config({
  alias: {
    "@namex": "https://example.com/other-resource", //エラー、重複したエイリア
  },
});
```