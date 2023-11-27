# unwrap

El método `unwrap` se utiliza para eliminar un contenedor externo de un elemento de destino.

A continuación se muestra un ejemplo:

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

Tampoco es posible ejecutar unwrap cuando hay otros elementos hermanos;

```javascript
const $el = $(`
<div>
    <div id="target"></div>
    <div>I am siblings</div>
</div>
`);

$el.$('#target').unwrap(); // ❌ Error debido a otros nodos vecinos
```

**Por favor, tenga en cuenta de no manipular los elementos con sintaxis de plantilla.**