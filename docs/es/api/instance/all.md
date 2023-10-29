# all

Con el método `all`, puedes obtener todos los elementos que coincidan con los [selectores CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_selectors) en la página y devolverlos en un array.

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

<script>
    setTimeout(()=>{
        $.all("li").forEach((item,index)=>{
            item.text = `change item ${index}`;
        });
    },500);
</script>
```

</html-viewer>

## Obtener elementos secundarios

Las instancias también tienen el método `all`, que permite seleccionar y obtener elementos secundarios utilizando el método `all` en la instancia.

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
  <ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
  </ul>
</div>

<script>
  const tar = $("#target1");
  tar.all("li").forEach((item,index)=>{
    item.text = `change item ${index}`;
  });
</script>
```

</html-viewer>