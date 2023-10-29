# style

Utiliza la propiedad [`style`](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/style) para mantener la coherencia con el nativo;

请注意，`style` 属性无法获取样式的实际值，而只能获取在 `style` 属性上设置的值。尽管 `style` 方法与 [css 方法](./css.md) 类似，但它无法进行全量样式覆盖。相较于 [css](./css.md)，`style` 方法的内部执行效率更高。

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