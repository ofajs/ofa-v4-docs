# 和 jQuery 共存

在使用 ofa.js(≥4.3.40) 的同时，你可以与 jQuery 共存。你有两种主要的选择：

## 1. 使用 `noConflict`

你可以在引入 jQuery 后调用 [noConflict](https://api.jquery.com/jQuery.noConflict/) 方法，这样就会释放 `$` 变量，避免冲突。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script>
  $.noConflict();
  // 现在，你可以使用 jQuery 的全名来调用，例如 jQuery.ajax()。
</script>
```

## 2. 按顺序引入库

另一种方法是按顺序引入库，后引入的库将占用 `$` 变量。这种情况下，你可以使用全局变量 `ofa` 代替原本的 `$`。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<!-- 现在 $ 是 jQuery 的别名，你可以使用 ofa 代替 $ 来调用 ofa.js 相关的功能 -->
```

使用这两种方法之一，你可以确保 ofa.js 和 jQuery 在同一页面上共存而不会发生冲突。