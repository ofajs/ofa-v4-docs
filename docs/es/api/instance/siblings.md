# siblings

Usando la propiedad `siblings`, puedes obtener fácilmente todas las instancias de los vecinos del elemento actual, que serán devueltas como un array.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
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