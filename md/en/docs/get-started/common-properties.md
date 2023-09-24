# Common Properties

In a `$` instance, in addition to selecting elements using selectors, there are also some common properties provided for easy element manipulation and retrieval.

## tag Property

The `tag` property is used to get the lowercase tag name of the current element, similar to the `tagName` property of DOM elements.

```html
<div id="example">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.tag); // Output: "div"
</script>
```

## ele Property

The `ele` property is used to get the actual DOM element of the `$` instance, allowing native JavaScript operations on that element.

```html
<div id="example">Hello World</div>
<script>
    const $div = $('#example');
    const actualElement = $div.ele;
    actualElement.style.color = "red"; // Change text color to red
</script>
```

## index Property

The `index` property is used to get the ranking index of the current element among sibling elements, starting from 0.

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

## parent and parents attributes 

- The `parent` attribute is used to get the direct parent element of the current element. 
- The `parents` attribute is used to get an array of all ancestor elements of the current element (including the parent's parent, the parent's parent's parent, and so on).

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

## next, nexts, prev, prevs, siblings attributes 

- The `next` attribute is used to get the next sibling element of the current element. 
- The `nexts` attribute is used to get an array of all sibling elements that come after the current element. 
- The `prev` attribute is used to get the previous sibling element of the current element. 
- The `prevs` attribute is used to get an array of all sibling elements that come before the current element. 
- The `siblings` attribute is used to get all sibling elements of the current element, excluding itself.

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

