# clone

El método `clone` te permite clonar y generar una instancia de elemento.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
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