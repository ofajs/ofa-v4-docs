# before

The `before` method is used to add elements before the target element. Prior to executing the `before` operation, the initialization operation of the [$ method](../instance/dollar.md) is automatically performed, so you can directly fill in specific element strings or objects.

**Please note, do not manipulate elements with template syntax.**

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(() => {
        $('#target').before(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>