# clone

Using the `clone` method, you can clone and generate a copy of an element instance;

<html-viewer>

```
<!-- Import ofa.js into the project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target" style="color:red;">I am target</div>

logger⬇️
<div id="logger"></div>

<script>
    setTimeout(()=>{
       const tar = $('#target').clone();
       $('#logger').push(tar);
    },500);
</script>
```

</html-viewer>