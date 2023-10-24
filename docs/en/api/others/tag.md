# tag

The `tag` property is used to get the tag of an element, returning a lowercase string.

In the example below, we demonstrate how to use the `tag` method to retrieve the tag of an element:

<html-viewer>

```html
<!-- Import ofa.js into your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="logger">logger</div>
<script>
  setTimeout(() => {
    $("#logger").textContent = $("#logger").tagName;
  }, 500);
</script>
```

</html-viewer>