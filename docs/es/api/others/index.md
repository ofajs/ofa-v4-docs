# index

El atributo `index` se utiliza para obtener la posición de un elemento dentro de su elemento padre. Esta posición se cuenta a partir de 0, lo que significa que la posición del primer elemento es 0, la del segundo es 1, y así sucesivamente.

En el siguiente ejemplo, mostramos cómo usar la propiedad `index` para obtener la posición de un elemento dentro de su elemento padre:

<html-viewer>

```html
<!-- Importa ofa.js a tu proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  setTimeout(() => {
    $("#logger").text = $("#target").index;
  }, 500);
</script>
```

</html-viewer>

En este ejemplo, primero seleccionamos un elemento `<li>` con la `id` "target". Luego, utilizamos el atributo `index` para obtener la posición de este elemento dentro de su elemento padre `<ul>`, que es el segundo elemento, por lo que el valor de `index` es 1. Después, mostramos este valor en el elemento `<div>` con la `id` "logger".