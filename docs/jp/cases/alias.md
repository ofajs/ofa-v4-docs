# alias

エイリアス（alias）を設定することにより、ユーザーは共有リソースをより便利に利用することができ、特に異なるドメイン間での共有コンポーネントを同じバージョンのリソースで利用しやすくするのに適しています。

この例では、 `lm.config` メソッドを使用して別名を設定し、 `@obook` 別名を `https://cdn.jsdelivr.net/npm/obook` にマッピングしました。 これで、プレフィックスとして `@obook` を使用すると、指定されたURLに自動的にマッピングされます。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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

通过使用别名 `@obook`，我们在 `l-m` 标签中引入了 `"https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"` 这个资源，使得跨域名的组件可以更方便地访问共享资源，而无需知晓详细的资源地址。这增强了代码的可维护性和跨域名资源共享的便捷性。

注意事項

エイリアスを設定する際には、以下の点に注意してください：

エイリアスのキーは `@` で始める必要があります。例： `@example`。

```javascript
lm.config({
  alias: {
    // "example": "https://example.com/resource", ❌ 没有@开头
    "@example": "https://example.com/resource",
  },
});
```

- 不要重复设置相同名称的别名，否则会引发错误。

```javascript
lm.config({
  alias: {
    "@namex": "https://example.com/resource",
  },
});

// ...

lm.config({
  alias: {
    "@namex": "https://example.com/other-resource", // 错误，重复的别名
  },
});
```