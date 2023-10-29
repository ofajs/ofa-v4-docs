# classList

La propiedad [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) se mantiene igual que la nativa.

Aquí hay un ejemplo que muestra cómo usar `classList`:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    .t-red{
        color: red;
        font-size: 14px;
    }
    .t-blue{
        color: blue;
        font-weight:bold;
        font-size:20px;
    }
</style>
<div id="target" class="t-red">origin text</div>

<script>
    setTimeout(()=> {
        $("#target").classList.remove('t-red');
        setTimeout(()=>{
            $("#target").classList.add('t-blue');
        },1000);
    }, 1000);
</script>
```

</html-viewer>

La propiedad `classList` te permite agregar, eliminar y cambiar dinámicamente los nombres de clase para cambiar el estilo de un elemento. Para obtener más información sobre los métodos de operación, consulta [classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList).