# siblings

Using the `siblings` property, you can easily retrieve all the adjacent element instances of the current element, which will be returned as an array.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 0</li>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
    <li>I am 4</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').siblings.forEach(e => e.text = 'change text');
    },500);
</script>
```

</html-viewer>