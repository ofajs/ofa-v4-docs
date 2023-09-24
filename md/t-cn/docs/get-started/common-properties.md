# 常用屬性

在 `$` 實例中，除了可以通過選擇器選擇元素外，還提供了一些常用的屬性來方便元素的操作和查找。

## tag 屬性

`tag` 屬性用於獲取當前元素的標簽名（小寫形式），類似於 DOM 元素的 `tagName` 屬性。

```html
<div id="example">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.tag); // Output: "div"
</script>
```

## ele 屬性

`ele` 屬性用於獲取 `$` 實例的實際 DOM 元素，從而可以對該元素進行原生的 JavaScript 操作。

```html
<div id="example">Hello World</div>
<script>
    const $div = $('#example');
    const actualElement = $div.ele;
    actualElement.style.color = "red"; // Change text color to red
</script>
```

## index 屬性

`index` 屬性用於獲取當前元素在同級元素中的排名索引，從 0 開始計數。

```html
<div>
    <span>First</span>
    <span>Second</span>
    <span id="target">Third</span>
</div>
<script>
    const $targetSpan = $('#target');
    console.log($targetSpan.index); // Output: 2
</script>
```

## parent 和 parents 屬性 

- `parent` 屬性用於獲取當前元素的直接父元素。 
- `parents` 屬性用於獲取當前元素的所有祖先元素（包括父元素的父元素、父元素的父元素的父元素等）構成的數組。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parent and Parents Attributes</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <span>
      <a id="example">Hello World</a>
    </span>
  </div>
  <script>
    const $a = $('#example');

    const $parentSpan = $a.parent;
    console.log($parentSpan.tag); // Output: "span"

    const $parentsArray = $a.parents;
    console.log($parentsArray.map($ele => $ele.tag)); // Output: ["span", "div", "body", "html"]
  </script>
</body>
</html>
```

## next、nexts、prev、prevs、siblings 屬性 

- `next` 屬性用於獲取當前元素的下一個兄弟元素。 
- `nexts` 屬性用於獲取當前元素後面的所有兄弟元素構成的數組。 
- `prev` 屬性用於獲取當前元素的前一個兄弟元素。 
- `prevs` 屬性用於獲取當前元素前面的所有兄弟元素構成的數組。 
- `siblings` 屬性用於獲取當前元素的所有兄弟元素，不包括自己。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Siblings Attributes</title>
  <script src="../ofa.js"></script>
</head>
<body>
  <div>
    <span>Zero</span>
    <span>First</span>
    <span id="example">Second</span>
    <span>Third</span>
    <span>Four</span>
  </div>
  <script>
    const $span = $('#example');

    const $nextSibling = $span.next;
    console.log($nextSibling.tag); // Output: "span"

    const $nextSiblingsArray = $span.nexts;
    console.log($nextSiblingsArray.map($ele => $ele.text)) // Output: ["Third", "Four"]

    const $prevSibling = $span.prev;
    console.log($prevSibling.tag); // Output: "span"

    const $prevSiblingsArray = $span.prevs;
    console.log($prevSiblingsArray.map($ele => $ele.text)) // Output: ["Zero", "First"]

    const $siblings = $span.siblings;
    console.log($siblings.map($ele => $ele.text)) // Output: ["Zero", "First", "Third", "Four"]
  </script>
</body>
</html>
```

