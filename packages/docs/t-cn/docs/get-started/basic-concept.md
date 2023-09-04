# 實例的基礎概念

`$` 實例是對頁面上元素的封裝，除了用於選擇現有的元素外，它還可以直接創建新元素並進行操作。在本章中，我們將介紹如何創建新元素以及對 `$` 實例的一些操作。

## 創建新元素

通過 `$` 實例，我們可以直接創建新的元素並進行操作，例如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create New Element</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <script>
    const $ele = $('<div style="color:red">I am text</div>');
    $('body').push($ele);
  </script>
</body>
</html>
```

在上面的例子中，我們通過 `$('<div style="color:red">I am text</div>')` 創建了一個新的 `div` 元素，並將其添加到了 `body` 中。

## 獲取子元素

通過 `$` 獲取的實例，並不像 DOM 元素那樣擁有 `children` 屬性。但是我們可以通過數組索引來訪問實例的直接子元素：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Child Elements</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
  </div>
  <script>
    const $div = $('div');
    console.log($div[0]); // Output: <p>First Paragraph</p>
    console.log($div[1]); // Output: <p>Second Paragraph</p>
    console.log($div.length); // Output: 2
  </script>
</body>
</html>
```

在上面的例子中，我們獲取了 `div` 元素，並通過索引來訪問第一個和第二個 `p` 元素。同時，我們還使用了 `$div.length` 獲取了子元素的數量。

## 操作子元素

通過 `$` 實例，我們還可以直接使用數組的方法來操作子元素，例如 `push` 和 `pop`：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manipulate Child Elements</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <p>First Paragraph</p>
  </div>
  <script>
    const $paragraphs = $('p');
    
    // 添加新的 div 元素作為子元素
    const $newDiv = $('<div>New Div</div>');
    $paragraphs.push($newDiv);

    setTimeout(()=>{
      // 刪除最後一個子元素
      $paragraphs.pop();

      console.log($paragraphs);
    },1000)

  </script>
</body>
</html>
```

在上面的例子中，我們獲取了所有 `p` 元素的 `$` 實例，並使用 `push` 方法添加了一個新的 `div` 元素作為子元素，然後使用 `pop` 方法移除了最後一個子元素。

通過上述示例，你可以了解 `$` 實例的一些基本操作，包括創建新元素和對子元素的訪問與操作。 `$` 實例提供了簡便的方法來操作頁面上的元素。

