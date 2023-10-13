# 獲取元素和事件相關

該章節旨在加強對上一章內容的理解，包括選擇元素 和 事件綁定。

## 選擇元素

在之前的章節中，我們已經了解了通過 $ 符號從全局獲取某個元素的方法。接下來，我們將介紹其他獲取元素的方法。

### 從元素內查找某個元素

#### 使用 `$("xxx").$('xxxx')` 的方式

`$("xxx").$('xxxx')` 是通過先選擇一個父元素，然後在其內部查找符合條件的子元素的方式。其中，`$("xxx")` 選擇了一個父元素，然後使用 `$('xxxx')` 在該父元素內查找符合條件的子元素。

#### 示例

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // 選擇父元素並查找子元素
  const parentElement = $(".parent");
  const childElement = parentElement.$(".child");

  // 修改子元素的文本內容
  childElement.text = "Modified child element";
</script>
```

在上面的示例中，首先通過 `$(".parent")` 選擇了具有 `parent` 類的父元素，然後使用 `$(".child")` 在該父元素內查找具有 `child` 類的子元素。然後修改了子元素的文本內容為 "Modified child element"。

### 使用 `$('xxx xxxx')` 的方式

`$('xxx xxxx')` 是通過在全局範圍內查找符合第二個選擇器條件的元素，然後在這些元素內部查找符合第一個選擇器條件的元素。這種方式可以直接一步到位地查找到符合條件的子元素。

#### 示例

```html
<div class="parent">
  <p>Hello World</p>
  <div class="child">
    <span>This is a child element</span>
  </div>
</div>
<script>
  // 直接查找符合條件的子元素
  const childElement = $('div .child');

  // 修改子元素的文本內容
  childElement.text = "Modified child element";
</script>
```

在上面的示例中，直接使用 `$('div .child')` 查找到具有 `child` 類的子元素，並修改了子元素的文本內容為 "Modified child element"。

### 選擇多個元素

#### 使用 `$.all('xxx')` 查找全局的元素

`$.all('xxx')` 方法用於查找頁面中所有符合選擇器條件的元素，並將它們作為一個元素集合返回。這樣可以選擇頁面中的多個元素進行批量操作。

#### 示例

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
<script>
  // 查找所有 p 標簽元素
  const allParagraphs = $.all("p");

  // 修改所有 p 標簽元素的文本內容
  allParagraphs.forEach((paragraph, index) => {
    paragraph.text = `Modified Paragraph ${index + 1}`;
  });
</script>
```

在上面的示例中，使用 `$.all("p")` 查找到頁面中的所有 `p` 標簽元素，並對它們進行了批量操作，將文本內容修改為 "Modified Paragraph 1"、"Modified Paragraph 2" 和 "Modified Paragraph 3"。

### 從元素內查找所有符合條件的元素

除了可以在全局範圍內查找元素，還可以從某個元素內查找所有符合條件的子元素，使用方式為：`$('xxx').all('xxxx')`。

#### 示例

```html
<div class="container">
  <p>Hello World</p>
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
<script>
  // 從容器內查找所有帶有 "item" 類的子元素
  const container = $(".container");
  const items = container.all(".item");

  // 修改所有子元素的文本內容
  items.forEach((item, index) => {
    item.text = `Modified Item ${index + 1}`;
  });
</script>
```

在上面的示例中，首先使用 `$(".container")` 查找到具有 `container` 類的元素，然後通過 `.all(".item")` 在該容器內查找所有帶有 `item` 類的子元素，並對它們進行了批量操作，將文本內容修改為 "Modified Item 1"、"Modified Item 2" 和 "Modified Item 3"。

## 事件

前面已經講過 `on` 綁定事件的使用方法，後面介紹幾個和事件相關的方法；

### off 方法的使用文檔

`off` 方法用於移除通過 `on` 方法綁定的事件處理函數。當不再需要某個事件的處理函數時，可以使用 `off` 方法將其從元素上移除，以避免重復執行或內存泄漏。

#### 語法

```javascript
$(selector).off(eventName, eventHandler);
```

- `selector`: 選擇要移除事件處理函數的元素。 
- `eventName`: 要移除的事件名稱。 
- `eventHandler`: 要移除的事件處理函數。

#### 示例

```html
<button id="btn">Click Me</button>
<script>
  const handleClick = () => {
    alert("Button clicked!");
  };

  // 綁定點擊事件處理函數
  $("#btn").on("click", handleClick);

  // 5秒後移除點擊事件處理函數
  setTimeout(() => {
    $("#btn").off("click", handleClick);
  }, 5000);
</script>
```

在上面的示例中，當點擊按鈕時，會彈出一個對話框顯示 "Button clicked!"。但是在5秒後，通過 `off` 方法移除了點擊事件處理函數，所以按鈕再次點擊時不會觸發彈出對話框。

### one 方法的使用文檔

`one` 方法用於綁定事件處理函數，但該處理函數只會在第一次觸發事件時執行一次。在執行一次後，事件處理函數會被自動移除，避免重復觸發。

#### 語法

```javascript
$(selector).one(eventName, eventHandler);
```

- `selector`: 選擇要綁定事件處理函數的元素。 
- `eventName`: 要綁定的事件名稱。 
- `eventHandler`: 要執行的事件處理函數。


#### 示例

```html
<button id="btn">Click Me Once</button>
<script>
  // 綁定點擊事件處理函數，但只會執行一次
  $("#btn").one("click", () => {
    alert("Button clicked once!");
  });
</script>
```

在上面的示例中，當點擊按鈕時，會彈出一個對話框顯示 "Button clicked once!"。但是在第一次點擊後，事件處理函數就會被移除，所以後續點擊按鈕不會再觸發彈出對話框。

### emit 方法的使用文檔

`emit` 方法用於手動觸發元素上綁定的特定事件。通過 `emit` 方法可以在不進行實際操作的情況下觸發事件處理函數的執行。

#### 語法

```javascript
$(selector).emit(eventName);
```
 
- `selector`: 選擇要觸發事件的元素。 
- `eventName`: 要觸發的事件名稱。

#### 示例

```html
<button id="btn">Click Me</button>
<script>
  // 綁定點擊事件處理函數
  $("#btn").on("click", () => {
    alert("Button clicked!");
  });

  // 通過 emit 方法觸發按鈕的點擊事件
  $("#btn").emit("click");
</script>
```

在上面的示例中，通過 `emit` 方法手動觸發了按鈕的點擊事件，結果會彈出一個對話框顯示 "Button clicked!"，盡管沒有實際點擊按鈕。

注意：使用 `emit` 方法不會模擬鼠標點擊或其他實際事件，它只會直接調用已綁定的事件處理函數。所以，如果你希望在特定情況下觸發事件的執行，可以使用 `emit` 方法。


當你綁定事件後，有時你可能希望阻止事件的進一步傳播（冒泡）或取消事件的默認行為。下面將介紹如何在事件觸發後禁止冒泡和取消默認事件。

### 禁止事件冒泡

事件冒泡是指當一個元素上的事件被觸發時，它會沿著 DOM 樹向上冒泡，依次觸發父元素上的同類型事件。如果你希望在特定元素上處理事件後阻止其繼續冒泡，可以使用 `event.stopPropagation()` 方法。

示例代碼：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stop Event Bubbling</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div id="outer">
    <div id="inner">
      <button id="btn">Click Me</button>
    </div>
  </div>

  <script>
    const btn = $('#btn');
    const innerDiv = $('#inner');

    btn.on('click', (event) => {
      alert('Button Clicked!');
      event.stopPropagation(); // 阻止事件冒泡
    });

    innerDiv.on('click', () => {
      alert('Inner Div Clicked!');
    });

    $('#outer').on('click', () => {
      alert('Outer Div Clicked!');
    });
  </script>
</body>
</html>
```

在上面的示例中，當你點擊按鈕 "Click Me" 後，它會顯示 "Button Clicked!"，但不會觸發 "Inner Div Clicked!" 和 "Outer Div Clicked!"。這是因為我們在按鈕的點擊事件處理程序中調用了 `event.stopPropagation()`，阻止了事件的進一步傳播。

### 取消事件的默認行為

有些元素上的事件在觸發時會有默認的行為。例如，點擊提交按鈕會導致表單提交，點擊鏈接會跳轉到鏈接的地址等。如果你希望阻止事件的默認行為，可以使用 `event.preventDefault()` 方法。

示例代碼：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prevent Default Event</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" />
    <button id="submitBtn">Submit</button>
  </form>

  <script>
    const form = $('#myForm');
    const submitBtn = $('#submitBtn');

    submitBtn.on('click', (event) => {
      event.preventDefault(); // 取消事件的默認行為
      const name = $('#name').value;
      alert(`Hello, ${name}! Form submission prevented.`);
    });

    form.on('submit', () => {
      alert('Form Submitted!');
    });
  </script>
</body>
</html>
```

在上面的示例中，當你點擊提交按鈕 "Submit" 後，它會顯示 "Hello, {name}! Form submission prevented."，但不會觸發 "Form Submitted!" 的警報。這是因為我們在提交按鈕的點擊事件處理程序中調用了 `event.preventDefault()`，阻止了表單的提交默認行為。