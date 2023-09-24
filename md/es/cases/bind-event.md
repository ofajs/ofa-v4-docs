<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

# Bindings de eventos

Dentro de un componente, puedes usar la propiedad `on` para realizar bindings de eventos y dotar al componente de capacidad interactiva. Aquí se muestra cómo realizar bindings de eventos dentro de un componente para lograr efectos interactivos.

El parámetro `proto` se utiliza para definir los métodos propios del componente, estos métodos se pueden utilizar dentro del componente o ejecutarse desde el exterior después de obtener el componente a través del selector.

El `xxx` después de `on:click="xxx"` puede ser el nombre del método definido dentro del componente o una expresión de función. Si se utiliza una expresión de función, no es necesario escribir explícitamente la palabra clave `this`, el ámbito de la variable se enlazará automáticamente con el propio componente.

Si quieres conocer más tipos de eventos disponibles, consulta la documentación de [Eventos](https://developer.mozilla.org/en-US/docs/Web/Events).
