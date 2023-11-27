# version

A través de la propiedad `ofa.version`, puede obtener el número de versión del ofa.js actualmente importado.

> **Se requiere la versión ofa.js ≥ 4.3.40**

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<div id="logger"></div>
<script>
    $("#logger").html = ofa.version;
</script>
```

</html-viewer>

De esta manera, puede mostrar la versión de ofa.js utilizada actualmente en la página.