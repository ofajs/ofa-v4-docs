# root

Usar el atributo root para obtener el nodo raíz del elemento;

En la página, el nodo raíz de los elementos comunes es una instancia de [document](https://developer.mozilla.org/en-US/docs/Web/API/Document);

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li id="target">I am target</li>
</ul>
<div id="logger" style="padding:16px;color:green;"></div>

<script>
    setTimeout(()=>{
        $('#logger').text = $("#target").root.ele === document;
    }, 500);
</script>
```

</html-viewer>

## Elementos dentro de los nodos sombra

Debido a que los elementos dentro de un componente están aislados del entorno externo, la propiedad `root` de los elementos dentro del nodo sombra es el nodo raíz de la sombra;

<comp-viewer comp-name="test-root">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <h3>logger1:</h3>
    <div id="logger1" style="color:red;">{{l1}}</div>
    <h3>logger2:</h3>
    <div id="logger2" style="color:green;">{{l2}}</div>
    <script>
        export default {
            tag:"test-root",
            data:{
                l1:"",
                l2:""
            },
            ready(){
                this.l1 = this.shadow.$("#target").root === this.shadow;
                this.l2 = this.root.ele === document;
            }
        };
    </script>
</template>
```

</comp-viewer>

