# Adding or Removing Child Elements

Element instances have array-like properties, adding or deleting nodes can be done using only the array methods; when using the `push`, `unshift`, `pop`, `shift`, and `splice` methods, the [$ method](../instance/dollar.md) initialization will be performed internally, so you can fill in the specific element strings or objects directly.

Similarly, you can also use other array methods such as `forEach`, `map`, `some`, and so on.

Please note, do not add or remove child elements on elements with template syntax.

## push

Adding child elements from the end.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").push(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## unshift

Add a subelement to the beginning of the array. Here is an example:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").unshift(`<li style="color:blue;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## Pop

Remove child elements from the end.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").pop();
    }, 500);
</script>
```

</html-viewer>

## shift

Remove sub-elements at the beginning of an array.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $("ul").shift();
    }, 500);
</script>
```

</html-viewer>

## splice

You can delete or replace existing child elements, and you can also add new child elements. Its usage is similar to the `splice` method of an array. Here is an example:

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
$("ul").splice(1, 2, `<li style="color:green;">new li 1</li>`, `<li style="color:green;">new li 2</li>`);
    }, 500);
</script>
```

</html-viewer>