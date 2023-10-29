# after

El método "after" se utiliza para agregar un elemento después del elemento objetivo. Antes de ejecutar la operación "after", se ejecuta automáticamente la operación de inicialización del método "$" (consulte [$ 方法](../instance/dollar.md)), por lo que puede proporcionar directamente una cadena de elementos o un objeto específico.

**Por favor, tenga en cuenta de no manipular los elementos con sintaxis de plantilla.**

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').after(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>