# $

`$` 方法 是 `ofa.js` 中的核心函數，用於操作 DOM 元素實例。下面將介紹 `$` 的主要作用：

## 獲取元素實例

通過 `$` 方法，你可以獲取頁面上符合[css選擇器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)的第一個元素實例，並對其進行操作。以下是一個示例：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1 text</div>

<script>
  setTimeout(()=>{
    $("#target1").text = 'change target 1';
  },500);
</script>
```

</html-viewer>

在上面的示例中，我們使用 `$` 符號選擇了具有 `id` 為 "target1" 的元素實例，並通過設置 `text` 屬性來修改其文本內容。

## 查找子元素實例

實例也擁有 `$` 方法，可以通過實例上的 `$` 方法獲取元素實例的第一個符合條件的子元素實例。

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <h3>target</h3>
  <p>I am target1</p>
</div>

<script>
  const tar = $("#target1");
  tar.$('h3').text = 'change target title';
</script>
```

</html-viewer>

## 元素實例特性

請不要將獲取的元素實例直接插入到其他地方，這樣的操作會導致原來的元素受到影響。如果需要創建一份副本，您可以使用 [clone](./clone.md) 方法。

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="pos1" style="border:red solid 1px;">
  <h3>position 1</h3>
  <p id="target1" style="color:green">I am target1</p>
</div>

<div id="pos2" style="border:blue solid 1px;margin:8px;">
  <h3>position 2</h3>
</div>

<script>
  setTimeout(()=>{
    const tar = $("#target1");
    $("#pos2").push(tar);
  },500);
</script>
```

</html-viewer>

## 獲取影子節點內的子元素

可以通過 [shadow](./shadow.md) 屬性獲取實例後，在通過 `$` 方法獲取想要的元素；

```javascript
$('my-component').shadow.$("selector").method(xxx)
```
## 直接實例化元素

你可以通過以下方式直接將原生元素初始化為 `$` 實例對象：

```javascript
const ele = document.createElement('div');
const $ele = $(ele);
```

```javascript
const ele = document.querySelector('#target');
const $ele = $(ele);
```

這樣，你可以方便地將現有的 HTML 元素轉換為 `$` 實例，以便使用 `$` 提供的功能進行操作和處理。

## 生成元素實例

除了獲取現有的元素實例，`$` 還可以用於創建新的元素實例，並將其添加到頁面中。

### 通過字符串生成

你可以使用 `$` 函數通過字符串創建新元素實例，如下所示：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
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

在這個示例中，我們使用 `$` 函數創建了一個具有指定樣式和文本內容的新元素實例，並將其添加到具有 `id` 為 "target1" 的現有元素實例內。

### 通過對象生成

你還可以使用 `$` 函數通過對象的方式生成新元素實例，如下所示：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
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

在這個示例中，我們使用 `$` 函數通過對象的方式定義了一個新元素實例，包括標簽類型、文本內容和樣式屬性，並將其添加到具有 `id` 為 "target1" 的現有元素實例內。