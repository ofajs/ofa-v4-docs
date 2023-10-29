# style

Utiliza la propiedad [`style`](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/style) para mantener la coherencia con el nativo;

Ten en cuenta que el atributo `style` no puede obtener el valor real de los estilos, solo puede obtener el valor establecido en el atributo `style`. Aunque el método `style` es similar al método [css](./css.md), no puede realizar una anulación completa de los estilos. En comparación con [css](./css.md), el método `style` es más eficiente en cuanto a ejecución interna.

A continuación se muestra un ejemplo que demuestra cómo usar `style`:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").style.color;
    setTimeout(()=> {
        $('#target').style.color = 'red';
        $("#logger").text = $("#target").style.color;
    }, 1000);
</script>
```

</html-viewer>

Por favor, ten en cuenta que el método `style` solo obtiene y establece los valores en el atributo `style`, no los estilos calculados.