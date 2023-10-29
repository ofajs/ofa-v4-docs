# ele

通过 `ele` 属性，你可以获取实例的实际元素，从而使用原生的属性或方法。

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
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

En el ejemplo anterior, utilizamos la propiedad `ele` para obtener un elemento y modificar su contenido HTML interno, así como el nombre de etiqueta del elemento utilizado para el registro. Esto te permite realizar operaciones más complejas en el elemento utilizando métodos de JavaScript nativo.