<template is="exm-article">
<a href="../../publics/examples/life-cycle/demo.html" preview></a>
<a href="../../publics/examples/life-cycle/test-demo.html" main></a>
</template>

# Ciclo de vida

Los métodos del ciclo de vida proporcionan oportunidades para ejecutar código en diferentes etapas del componente. En `ofa.js`, hay cinco métodos principales del ciclo de vida, que son: `created`, `ready`, `watch`, `attached` y `detached`.

- **created()**: Se llama cuando se crea el componente, en este momento aún no se ha renderizado el shadow root. Puede realizar algunas configuraciones de inicialización aquí, pero no puede acceder a los elementos dentro del shadow root.

- **ready()**: Se llama después de que se haya renderizado el shadow root, generalmente se utiliza para la lógica de inicialización del componente. En esta etapa, puede acceder y manipular los elementos dentro del shadow root, así como realizar otras operaciones que necesite realizar después de que se complete el renderizado.

- **watch**: Se utiliza definiendo un objeto `watch` para escuchar cambios en los datos. Después de que `ready` se complete, se activa un evento de `watch` correspondiente al valor en `data`. A partir de entonces, cada vez que el valor de la clave correspondiente cambie, se activará la función correspondiente dentro del `watch`.

- **attached()**: Se llama cuando el componente se agrega al documento, en este momento puede interactuar con el entorno externo, como obtener la apariencia del componente o inicializar la lógica de datos compartidos.

- **detached()**: Se llama cuando el componente se elimina del documento. En esta etapa, puede realizar tareas de limpieza, cancelar la interacción con el entorno externo y liberar recursos.


