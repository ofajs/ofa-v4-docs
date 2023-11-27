# after

El método `after` se utiliza para añadir un elemento después del elemento de destino. La inicialización del [método AAAA]((../instance/dollar.md)) se realiza automáticamente antes de la operación `after`, de modo que se pueden rellenar directamente cadenas u objetos de elementos específicos.

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
        $('#target').after(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>