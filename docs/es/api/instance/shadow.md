# shadow

使用 `shadow` 属性，你可以获取元素的影子根节点实例。

<comp-viewer comp-name="test-shadow">

```html
<template component>
    <ul>
        <li>item 1</li>
        <li id="target">item 2</li>
        <li>item 3</li>
    </ul>
    <script>
        export default {
            tag:"test-shadow",
            ready(){
                setTimeout(()=>{
                    this.shadow.$("#target").text = 'change target';
                },500);
            }
        };
    </script>
</template>
```

</comp-viewer>

Es importante tener en cuenta que se debe evitar modificar directamente los elementos dentro de los nodos sombra en elementos con sintaxis de plantilla, para asegurar la consistencia y mantenibilidad de las operaciones.

## Obtener instancias de elementos dentro de elementos sombra de componentes desde el exterior

También puede obtener instancias de elementos personalizados externamente y luego acceder a los elementos dentro del nodo sombra a través de la propiedad `shadow`, como se muestra a continuación:

```javascript
$("test-shadow").shadow.$('selector').method(xxx);
```