# alias

通过设置别名（alias），使用者能够更方便地使用共享的资源，特别适用于使跨域名的共享组件更方便地享用同一版本的资源。

在以下示例中，我们通过设置别名 `@obook`，将其映射到实际资源地址 `"https://cdn.jsdelivr.net/npm/obook@2.1.34"`。这意味着在后续的组件或模块中，可以使用 `@obook` 别名来引用资源，而不必记住完整的资源地址。

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<script>
lm.config({
    alias:{
      "@obook": "https://cdn.jsdelivr.net/npm/obook@2.1.34",
    }
});
</script>

<l-m src="@obook/blocks/simp-block.html"></l-m>
 <simp-block>
  <h2>Test Title</h2>
  <h3>Test h3 desc</h3>
</simp-block>
```

</html-viewer>

通过使用别名 `@obook`，我们在 `l-m` 标签中引入了 `"https://cdn.jsdelivr.net/npm/obook@2.1.34"` 的资源，使得跨域名的组件可以更方便地访问共享资源，而无需知晓详细的资源地址。这增强了代码的可维护性和跨域名资源共享的便捷性。