<template is="exm-article">
<a href="../../publics/examples/inject-host/demo.html" preview></a>
<a href="../../publics/examples/inject-host/comp-one.html"></a>
<a href="../../publics/examples/inject-host/comp-two.html" main></a>
</template>

# Inyectar componente de anfitrión

Dado el aislamiento de los Web Components, es difícil modificar directamente los estilos de los elementos dentro de las ranuras de los componentes. Para abordar este problema, ofa.js proporciona un componente llamado "inject-host"; el componente "inject-host" inyecta estilos en la capa principal para configurar de manera más flexible la apariencia del componente.

Es importante tener en cuenta que el uso de este componente puede afectar el estilo de la capa principal. Por lo tanto, al modificar los estilos, se debe mantener la nomenclatura adecuada para evitar afectar el estilo de la capa principal.

En el ejemplo, hemos definido el componente `comp-two`, que utiliza el componente `inject-host` para inyectar estilos. Esto nos permite establecer estilos en los elementos internos del componente `comp-two` utilizando los estilos inyectados, sin afectar a otros componentes.

Además, los siguientes elementos requieren una atención especial

- Al agregar etiquetas `<style>` dentro de `inject-host`, podemos definir estilos específicos dentro del componente. Estos estilos solo afectarán a los elementos del componente actual y no se extenderán a otros componentes.
- Al inyectar estilos, debemos evitar el uso de selectores demasiado comunes para evitar afectar los estilos de otros componentes. Es importante mantener la singularidad y especificidad del selector.
- `inject-host` también puede inyectar archivos de hojas de estilo externas usando la forma `<link rel="stylesheet" href="target/style.css">`.

En todo el ejemplo, al usar `inject-host` dentro del componente `comp-two`, podemos configurar y aplicar de manera flexible el estilo interno del componente sin romper el estilo de otros componentes.
