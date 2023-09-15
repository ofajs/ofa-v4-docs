<template is="exm-article">
<a href="../../publics/examples/simple-btn/demo.html" preview></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main></a>
</template>

# Component slots

By adding '<slot></slot>' tags in the template, the content can be placed in the slot inside the corresponding component tag when using the component.

Custom components do not have the 'display' property defined by default, so it needs to be manually defined for the component. In the component's style, the ':host' selector can be used to add styles to the component itself.

Este ejemplo muestra cómo crear un componente llamado `simple-btn`. La plantilla del componente incluye un slot donde puedes insertar contenido en el componente. Puedes añadir estilos al componente mediante el selector `:host`. En otra página, puedes utilizar el componente `l-m` para referenciar el componente `simple-btn` e insertar contenido en él.
