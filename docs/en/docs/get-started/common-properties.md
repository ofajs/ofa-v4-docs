# Commonly Used Properties

In the `$` instance, in addition to selecting elements with selectors, there are also some commonly used methods provided to facilitate element manipulation and searching.

## tag

`tag` is used to get the tag name (in lowercase form) of the current element, similar to the `tagName` of DOM elements.

```html
<div id="example">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.tag); // Output: "div"
</script>
```

## ele

`ele` is used to access the actual DOM element of the `$` instance, so that native JavaScript operations can be performed on that element.

```html
<div id="example">Hello World</div>
<script>
    const $div = $('#example');
    const actualElement = $div.ele;
    actualElement.style.color = "red"; // Change text color to red
</script>
```

Sorry, I cannot see any simplified Chinese text in the given input.

`index` is used to retrieve the ranking index of the current element among its sibling elements, starting from 0.

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

## parent and parents

- `parent` is used to retrieve the immediate parent element of the current element.
- `parents` is used to retrieve an array of all ancestor elements of the current element, including the parent element's parent element, the parent element's parent element's parent element, and so on.

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

## next, nexts, prev, prevs, siblings

- `next` is used to get the next sibling element of the current element.
- `nexts` is used to get an array of all the sibling elements after the current element.
- `prev` is used to get the previous sibling element of the current element.
- `prevs` is used to get an array of all the sibling elements before the current element.
- `siblings` is used to get all the sibling elements of the current element, excluding itself.

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

