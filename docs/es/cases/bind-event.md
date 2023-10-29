<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

# Eventos de vinculación

Dentro del componente, puedes utilizar la propiedad `on` para vincular eventos y hacer que el componente sea interactivo. Aquí se muestra cómo puedes vincular eventos en un componente para lograr efectos interactivos.

El parámetro `proto` se utiliza para definir los métodos propios del componente. Estos métodos pueden ser utilizados tanto dentro del componente como fuera del mismo al ejecutarlo a través de un selector.

`on:click="xxx"` puede ser seguido por el nombre de un método definido dentro del componente o por una expresión de función. Si se utiliza una expresión de función, no es necesario escribir explícitamente la palabra clave `this`, el alcance de las variables se vinculará automáticamente al componente en sí mismo;

Si desea obtener más información sobre los tipos de eventos disponibles, consulte el documento [Eventos](https://developer.mozilla.org/en-US/docs/Web/Events).
