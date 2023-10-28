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

エイリアス`@obook`を使用することで、`l-m`タグ内にリソース`"https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"`を導入した。これにより、クロスドメインのコンポーネントがソースアドレスを詳細に知ることなく、共有リソースにアクセスしやすくなった。 これにより、コードの保守性が向上し、ドメイン間でのリソースの共有が容易になる。

## 注意

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