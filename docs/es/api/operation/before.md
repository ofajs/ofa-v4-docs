# before

El método `before` se utiliza para agregar elementos antes del elemento objetivo. Antes de realizar la operación `before`, se ejecuta automáticamente la operación de inicialización del [método `$`](../instance/dollar.md), por lo tanto, se puede completar directamente con una cadena de elementos específicos u objetos.

**Por favor, tenga en cuenta de no manipular los elementos con sintaxis de plantilla.**

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').before(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>