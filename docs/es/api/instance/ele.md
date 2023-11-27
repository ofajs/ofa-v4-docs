# ele

Mediante el atributo `ele`, puedes obtener la instancia real del elemento, lo que te permite usar atributos y métodos nativos.

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">I am target</li>
</ul>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=>{
       var ele = $("#target").ele;
       ele.innerHTML = '<b>change target</b>';
       $("#logger").text = ele.tagName;
    },500);
</script>
```

</html-viewer>

En el ejemplo anterior, utilizamos la propiedad `ele` para obtener un elemento y modificar su contenido HTML interno, así como el nombre de [etiqueta del elemento utilizado](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName) para el registro. Esto te permite realizar operaciones más complejas en el elemento utilizando métodos de JavaScript nativo.