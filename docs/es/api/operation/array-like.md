# Añadir o eliminar elementos secundarios

Las instancias de elementos tienen características similares a las de un array. Para añadir o eliminar nodos, solo se necesita utilizar los métodos de operación de arrays mencionados anteriormente. Si se utilizan los métodos "push", "unshift", "pop", "shift" o "splice", automáticamente se ejecutará la operación de inicialización del método [$] (../instance/dollar.md), por lo que se puede escribir directamente la cadena u objeto específico del elemento.

Del mismo modo, también puede utilizar otros métodos de matriz, como `forEach`, `map`, `some`, etc.

Por favor, tenga en cuenta que no debe agregar ni eliminar subelementos en elementos con sintaxis de plantilla.

## push

Agregar un elemento secundario al final.

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
        $("ul").push(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## unshift

Añadir elementos secundarios al principio del array. A continuación se muestra un ejemplo:

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
        $("ul").unshift(`<li style="color:blue;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>

## pop

Eliminar elementos secundarios desde el final.

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
        $("ul").pop();
    }, 500);
</script>
```

</html-viewer>

## shift

Eliminar subelementos al comienzo del array.

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
        $("ul").shift();
    }, 500);
</script>
```

</html-viewer>

## splice

Se pueden eliminar o reemplazar elementos existentes, así como agregar nuevos elementos. Su uso es similar al método `splice` de una matriz. Aquí hay un ejemplo:

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
$("ul").splice(1, 2, `<li style="color:green;">new li 1</li>`, `<li style="color:green;">new li 2</li>`);
    }, 500);
</script>
```

</html-viewer>