 # CSS 的用法

在 `ofa.js` 中，你可以通過以下方式來操作元素的 CSS 樣式；

## 獲取元素的具體 CSS 樣式

可以使用 `$ele.css.xxx` 來獲取元素的具體 CSS 樣式，其中 `xxx` 是你想要獲取的 CSS 屬性名。

### 示例

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  // 獲取元素的顏色樣式
  const myElement = $("#myElement");
  const colorStyle = myElement.css.color;
  console.log(colorStyle); // Output: "blue"

  // 獲取元素的字體大小樣式
  const fontSizeStyle = myElement.css.fontSize;
  console.log(fontSizeStyle); // Output: "18px"
</script>
```

## 設置某個樣式屬性

可以使用 `$ele.css.xxx = ''` 的方式來設置元素的 CSS 樣式，其中 `xxx` 是你想要設置的 CSS 屬性名。通過將屬性值設為空字符串，可以將指定的樣式屬性移除。

### 示例

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 設置元素的顏色樣式
  myElement.css.color = 'red';
  // 移除元素的字體大小樣式
  myElement.css.fontSize = '';
</script>
```

## 賦值對象

可以使用 `$ele.css = {xxx}` 的方式來設置元素的 style，其中 `xxx` 是一個包含 CSS 屬性名和屬性值的對象。

### 示例

```html
<div id="myElement">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 設置元素的樣式
  myElement.css = {
    color: "red",
    fontSize: "24px",
    backgroundColor: "yellow",
  };
</script>
```

## 賦值字符串

可以使用 `$ele.css = 'color:red;...'` 的方式來設置元素的 style，其中 `'color:red;...'` 是一個包含 CSS 樣式規則的字符串。

### 示例

```html
<div id="myElement">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 設置元素的樣式
  myElement.css = 'color:red; font-size:24px; background-color:yellow;';
</script>
```

## 設置 css 的技巧

你可以通過 `$ele.css = {...$ele.css, color:'red'}` 的方式來修改元素的某個樣式屬性，而不影響其他樣式屬性。這種方式可以在不重寫整個樣式的情況下，只修改其中一個屬性。

### 示例

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 修改元素的顏色樣式，同時保留其他樣式屬性不變
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

在上面的示例中，通過使用 `{ ...myElement.css, color: 'red' }`，我們只修改了元素的顏色樣式，而將其他樣式屬性保持不變。這是一個很方便的技巧，可以靈活地修改元素的樣式。