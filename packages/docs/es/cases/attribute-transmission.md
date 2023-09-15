<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

# Transmisión de características

El parámetro `attrs` y el parámetro `data` son similares en funcionalidad, los datos establecidos en `attrs` se fusionarán en `data`, pero los datos en `attrs` se mostrarán en las propias características del componente.

> Aquí, las **características** se refieren a los [atributos](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) del elemento

Cuando se utiliza un componente externo, también se pueden pasar datos al interior del componente a través de atributos. Es importante tener en cuenta que los datos pasados a través de atributos solo pueden ser de tipo cadena de caracteres.
