# alias

By setting aliases, users can conveniently use shared resources, especially for making cross-domain shared components more easily access the same version of resources.

In this example, we set up an alias using the `lm.config` method, mapping the alias `@obook` to `https://cdn.jsdelivr.net/npm/obook`. Now, when we use `@obook` as a prefix, it will automatically map to the specified URL.

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

By using the alias `@obook`, we introduced the resource `"https://cdn.jsdelivr.net/npm/obook/blocks/simp-block.html"` in the `l-m` tag, which allows components from different domains to access shared resources more conveniently without needing to know the specific resource address. This enhances code maintainability and facilitates cross-domain resource sharing.

## Caveat

When setting aliases, please keep the following points in mind:

- Aliases keys must start with `@`, such as `@example`.

```javascript
lm.config({
  alias: {
    // "example": "https://example.com/resource", ❌ It does not start with @
    "@example": "https://example.com/resource",
  },
});
```

- Do not set aliases with the same name repeatedly, otherwise errors will occur.

```javascript
lm.config({
  alias: {
    "@namex": "https://example.com/resource",
  },
});

// ...

lm.config({
  alias: {
    "@namex": "https://example.com/other-resource", // Error, duplicate alias
  },
});
```