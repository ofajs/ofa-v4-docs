<template is="exm-article">
<a href="../../publics/examples/inject-host/demo.html" preview></a>
<a href="../../publics/examples/inject-host/comp-one.html"></a>
<a href="../../publics/examples/inject-host/comp-two.html" main></a>
</template>

# Componente inject-host

Debido al aislamiento de los Web Components, es difícil modificar directamente el estilo de los elementos en el slot de un componente. Para hacer frente a este problema, ofa.js proporciona un componente llamado `inject-host`; este componente inyectará estilos en la capa principal para configurar la apariencia del componente de forma más flexible.

Es importante tener en cuenta que el uso de este componente puede afectar el estilo de la capa principal. Por lo tanto, al invadir el estilo, se debe mantener una convención de nomenclatura para evitar afectar el estilo de la capa principal.

En el ejemplo, definimos un componente llamado `comp-two`, que utiliza el componente `inject-host` para inyectar estilos. Esto nos permite ajustar los estilos de los elementos dentro del componente `comp-two` mediante los estilos inyectados, sin afectar a otros componentes.

Al mismo tiempo, también debemos tener en cuenta lo siguiente:

- Al agregar una etiqueta `<style>` dentro de `inject-host`, podemos definir estilos específicos para el componente. Estos estilos solo afectarán a los elementos del componente actual y no se extenderán a otros componentes.
- Al inyectar estilos, se deben evitar selectores demasiado generales para no afectar el estilo de otros componentes. Es importante mantener la singularidad y especificidad de los selectores.
- `inject-host` también puede inyectar hojas de estilo externas usando la siguiente sintaxis: `<link rel="stylesheet" href="target/style.css">`.

En todo el ejemplo, utilizando el componente 'comp-two' dentro de 'inject-host', podemos establecer y aplicar de manera flexible los estilos internos del componente sin interferir con los estilos de otros componentes.
