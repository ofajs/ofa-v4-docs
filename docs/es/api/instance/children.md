# Subelementos

Obtener instancias de elementos secundarios es muy sencillo, simplemente tienes que tratar la instancia como un arreglo y obtener su instancia de elemento secundario mediante un número.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>
<div id="logger1" style="color:red;"></div>
<div id="logger2" style="color:blue;"></div>

<script>
    setTimeout(()=>{
       $("#logger1").text = $('ul').length;
       $("#logger2").text = $('ul')[1].text;
    }, 500);

</script>
```

</html-viewer>

## length

Obtener la cantidad de elementos secundarios de un elemento objetivo; como se muestra en el ejemplo anterior;

```javascript
$("#logger1").text = $('ul').length;
```