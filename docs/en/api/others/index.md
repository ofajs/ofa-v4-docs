# index

`index` property is used to obtain the position of an element relative to its parent element. This position is counted starting from 0, which means the position of the first element is 0, the second is 1, and so on.

In the example below, we demonstrate how to use the `index` property to obtain the position of an element within its parent element:

<html-viewer>

```html
<!-- Import ofa.js into your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  setTimeout(() => {
    $("#logger").text = $("#target").index;
  }, 500);
</script>
```

</html-viewer>

In this example, we first select an `<li>` element with an `id` of "target". Then, we use the `index` property to get the position of this element under its parent `<ul>`, which is the second element, so the value of `index` is 1. Then, we display this value in a `<div>` element with an `id` of "logger".