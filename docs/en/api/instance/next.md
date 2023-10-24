# next

By using the `next` property, you can obtain the next adjacent element instance of an element.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="first">I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').next.text = "change target next element";
    },500);

    console.log($('#first') === $('#target').next); // => true
</script>
```

</html-viewer>