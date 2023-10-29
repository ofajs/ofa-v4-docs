# parent

Con el atributo `parent`, podemos obtener una instancia del elemento padre de la instancia;

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').parent.css.color = 'blue';
       $('#target').css.color = 'red';
    },500);
</script>
```

</html-viewer>