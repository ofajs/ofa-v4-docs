# El rendimiento condicional

条件渲染是通过三个条件组件来实现的：

## x-if

El componente principal `x-if` es un componente de condición que requiere establecer un valor `value`. Si se cumple la condición del valor `value`, mostrará el contenido envuelto.

## x-if-else

`x-if-else` puede seguir a `x-if` o `x-if-else` y necesita establecer el valor `value`. Si el componente de condición anterior no se cumple y su propio valor `value` es verdadero, se mostrará el contenido envuelto.

## x-else

`x-else` se puede agregar después de `x-if` o `x-if-else`, al final. Si ninguna de las condiciones anteriores se cumple, mostrará el contenido definido por sí mismo. No es necesario establecer un valor `value`.

## Ejemplo

<comp-viewer comp-name="text-render">

```html
<template component>
    <button on:click="count++">Add Count</button>
    <x-if :value="count % 3 === 0">
        <div style="color:red;">if => {{count}}</div>
    </x-if>
    <x-else-if :value="(count + 1) % 3 === 0">
        <div style="color:green;">else-if => {{count}}</div>
    </x-else-if>
    <x-else>
        <div style="color:blue;">else => {{count}}</div>
    </x-else>
    <script>
        export default {
            tag:"text-render",
            data:{
                count:0
            },
        };
    </script>
</template>
```

</comp-viewer>

En el ejemplo, se utilizan estos componentes de renderizado condicional para seleccionar el contenido a mostrar según el valor de `count`. Cuando `count` es divisible por 3, se cumple la condición `x-if` y se muestra el texto en rojo; cuando `(count + 1)` es divisible por 3, se cumple la condición `x-if-else` y se muestra el texto en verde; de lo contrario, se muestra el texto en azul.

