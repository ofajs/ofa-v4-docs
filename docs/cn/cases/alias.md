# alias

通过设置别名（alias），使用者能够更方便地使用共享的资源，特别适用于使跨域名的共享组件更方便地享用同一版本的资源。

在这个示例中，我们通过 `lm.config` 方法设置了别名，将 `@obook` 别名映射到 `https://cdn.jsdelivr.net/npm/obook`。现在，当我们使用 `@obook` 作为前缀时，它将自动映射到指定的 URL。

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

通过使用别名 `@obook`，我们在 `l-m` 标签中引入了 `"https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"` 这个资源，使得跨域名的组件可以更方便地访问共享资源，而无需知晓详细的资源地址。这增强了代码的可维护性和跨域名资源共享的便捷性。

## 注意事项

在设置别名时，请注意以下几点：

- 别名的键必须以 `@` 开头，如 `@example`。

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