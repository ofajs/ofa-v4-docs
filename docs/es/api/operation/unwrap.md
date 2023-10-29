# unwrap

El método `unwrap` se utiliza para eliminar un contenedor externo de un elemento de destino.

A continuación se muestra un ejemplo:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div style="color:red;border-color:red;">
    <div id="target">I am target</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').unwrap();
    }, 500);
</script>
```

</html-viewer>

## Nota:

Para que la operación de envoltura tenga éxito, el elemento objetivo debe tener un nodo padre.

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.unwrap(); // ❌ Error, no parent element to unwrap
$el.$('#target').unwrap(); // ✅ Correct, unwrap the wrapped element
```

当拥有其他兄弟元素时，也不可以执行 unwrap；

El código no se puede traducir.

**Por favor, tenga en cuenta de no manipular los elementos con sintaxis de plantilla.**