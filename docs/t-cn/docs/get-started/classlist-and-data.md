# classList 和 data

## classList

在 `ofa.js` 中，你可以通過以下方式來操作元素的 classList： 
- `$ele.classList`: 返回元素的 classList 對象，用於操作元素的類名。

### classList 增刪用法 

- 添加類名：`$ele.classList.add('className')`，將指定的類名添加到元素的 classList 中。 
- 移除類名：`$ele.classList.remove('className')`，從元素的 classList 中移除指定的類名。 
- 切換類名：`$ele.classList.toggle('className')`，如果元素的 classList 中已經存在該類名，則移除它；否則添加該類名。

### 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>classList Demo</title>
    <style>
      .highlight {
        background-color: yellow;
      }
    </style>
    <script src="ofa.js"></script>
  </head>
  <body>
    <h2>classList Demo</h2>
    <div id="box" class="box">I am a box</div>
    <br />
    <button id="btnAdd">Add Highlight</button>
    <button id="btnRemove">Remove Highlight</button>
    <button id="btnToggle">Toggle Highlight</button>

    <script>
      const boxElement = $('#box');
      const btnAdd = $('#btnAdd');
      const btnRemove = $('#btnRemove');
      const btnToggle = $('#btnToggle');

      btnAdd.on('click', () => {
        boxElement.classList.add('highlight');
      });

      btnRemove.on('click', () => {
        boxElement.classList.remove('highlight');
      });

      btnToggle.on('click', () => {
        boxElement.classList.toggle('highlight');
      });
    </script>
  </body>
</html>
```

在這個示例中，有一個帶有初始類名 `box` 的 `<div>` 元素，以及三個按鈕：Add Highlight、Remove Highlight 和 Toggle Highlight。 
- 當點擊 "Add Highlight" 按鈕時，通過 `classList.add()` 方法將 `highlight` 類名添加到 `<div>` 元素中，使其具有黃色背景色。 
- 當點擊 "Remove Highlight" 按鈕時，通過 `classList.remove()` 方法從 `<div>` 元素的類名中移除 `highlight` 類名，恢復原始樣式。 
- 當點擊 "Toggle Highlight" 按鈕時，通過 `classList.toggle()` 方法切換 `<div>` 元素的 `highlight` 類名。如果原本有該類名，則移除它，如果原本沒有該類名，則添加它，實現樣式的切換。

這樣，你就可以通過 `classList` 對象來管理元素的類名，從而實現對元素樣式的動態控制。

## data 的用法

在 `ofa.js` 中，你可以通過以下方式來操作元素的 data 屬性： 
- `$ele.data`: 返回元素的 dataset 對象，用於操作元素的 data 屬性。

### dataset 的具體用法

元素的 `data-*` 屬性可以用於在 HTML 中存儲自定義數據，可以通過 `data` 對象來訪問這些屬性。

例如，如果有一個元素定義了 `data-info` 屬性：

```html
<div id="myElement" data-info="some information"></div>
```

你可以使用 `dataset` 來訪問該屬性：

```javascript
const myElement = $('#myElement');
const info = myElement.data.info;
console.log(info); // Output: "some information"
```

注意：`dataset` 對象中的屬性名會將 `"data-"` 後面的部分轉換為駝峰式命名。例如，`data-info` 變成了 `dataset.info`。如果要設置 `data-*` 屬性，也可以通過 `dataset` 對象來實現：

```javascript
myElement.data.anotherInfo = "another value";
```

這樣就會在元素上添加一個 `data-another-info` 屬性，並設置其值為 `"another value"`。