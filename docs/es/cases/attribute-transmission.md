<template is="exm-article">
    <a href="../../publics/examples/attr-trans/demo.html" preview></a>
    <a href="../../publics/examples/attr-trans/simple-btn.html" main></a>
</template>

# Transferencia de características

Los parámetros `attrs` y `data` son similares en funcionalidad. Los datos establecidos en `attrs` se fusionarán en `data`, pero los datos en `attrs` se reflejarán en las características propias del componente.

> Aquí, la palabra "特性" se refiere a los [atributos](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) de los elementos.

Cuando se utiliza un componente externo, también se puede pasar datos al componente interno a través de atributos. Es importante tener en cuenta que los datos pasados a través de los atributos solo pueden ser de tipo cadena de caracteres.
