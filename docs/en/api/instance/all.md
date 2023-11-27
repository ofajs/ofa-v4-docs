# all

Using the `all` method, you can get all elements on the page that match the [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors), and return an array containing these elements.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $.all("li").forEach((item,index)=>{
            item.text = `change item ${index}`;
        });
    },500);
</script>
```

</html-viewer>

## Getting Child Elements

Instances also have an `all` method, which can be used to select and retrieve child elements on the instance.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
  </ul>
</div>

<script>
  const tar = $("#target1");
  tar.all("li").forEach((item,index)=>{
    item.text = `change item ${index}`;
  });
</script>
```

</html-viewer>