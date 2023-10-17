# $ 方法

`$` 方法 是 `ofa.js` 中的核心函数，用于操作 DOM 元素。下面将介绍 `$` 的主要作用：

## 获取元素

通过 `$` 符号，你可以获取页面上符合[css选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)的第一个元素，并对其进行操作。以下是一个示例：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1 text</div>

<script>
    $("#target1").text = 'change target 1';
</script>
```

</html-viewer>

在上面的示例中，我们使用 `$` 符号选择了具有 `id` 为 "target1" 的元素，并通过设置 `text` 属性来修改其文本内容。

## 生成元素

除了获取现有的元素，`$` 还可以用于创建新的元素，并将其添加到页面中。

### 通过字符串生成

你可以使用 `$` 函数通过字符串创建新元素，如下所示：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $(`<div style="color:red">add target 1 text</div>`);
  $('#target1').push(newEl);
</script>
```

</html-viewer>

在这个示例中，我们使用 `$` 函数创建了一个具有指定样式和文本内容的新元素，并将其添加到具有 `id` 为 "target1" 的现有元素内。

### 通过对象生成

你还可以使用 `$` 函数通过对象的方式生成新元素，如下所示：

<html-viewer>

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <b>target1:</b>
</div>

<script>
  const newEl = $({
    tag: "div",
    text: "add target 1 text",
    css: {
      color: "red"
    }
  });

  $('#target1').push(newEl);
</script>
```

</html-viewer>

在这个示例中，我们使用 `$` 函数通过对象的方式定义了一个新元素，包括标签类型、文本内容和样式属性，并将其添加到具有 `id` 为 "target1" 的现有元素内。