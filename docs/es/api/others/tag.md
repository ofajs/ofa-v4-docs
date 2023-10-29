# tag

El atributo `tag` se utiliza para obtener la etiqueta de un elemento, y devuelve una cadena en minúsculas.

En el siguiente ejemplo, demostramos cómo usar el método `tag` para obtener la etiqueta de un elemento:

<html-viewer>

```html
<!-- Importa ofa.js a tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="logger">logger</div>
<script>
  setTimeout(() => {
    $("#logger").text = $("#logger").tag;
  }, 500);
</script>
```

</html-viewer>