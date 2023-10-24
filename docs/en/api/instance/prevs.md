# prevs

By using the `prevs` attribute, you can easily access all the previous adjacent element instances of the current element, which will be returned in the form of an array.

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 0</li>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
       $('#target').prevs.forEach(e => e.text = 'change text');
    },500);
</script>
```

</html-viewer>