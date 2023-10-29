# wrap

El método `wrap` se utiliza para envolver un elemento objetivo con otro elemento. Antes de realizar la operación `wrap`, se realiza automáticamente la inicialización del [método `$`](../instance/dollar.md), por lo que se puede ingresar directamente una cadena u objeto específico del elemento.

A continuación se muestra un ejemplo:

<html-viewer>

```
<!-- Importe ofa.js en su proyecto -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div>
    <div>I am 1</div>
    <div id="target">I am 2</div>
    <div>I am 3</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').wrap(`<div style="border-color:red;">wrap</div>`);
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

$el.wrap("<div>nuevo div</div>"); // ❌ Error, no tiene padre para envolver
$el.$('#target').wrap("<div>nuevo div</div>"); // ✅ Correcto, tiene padre
```

**Por favor, tenga en cuenta de no manipular los elementos con sintaxis de plantilla.**