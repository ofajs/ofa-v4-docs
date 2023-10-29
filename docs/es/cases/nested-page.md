<template is="exm-article">
<a href="../../publics/examples/nested-page/demo.html" preview></a>
<a href="../../publics/examples/nested-page/page1.html"></a>
<a href="../../publics/examples/nested-page/page2.html"></a>
<a href="../../publics/examples/nested-page/layout.html" main></a>
</template>

# Página incrustada

Algunas interfaces de usuario de aplicaciones están compuestas por varias capas de páginas anidadas, como la navegación superior o lateral compartida. Puedes usar la propiedad `parent` para indicar la página padre que contiene la página actual.

El proceso de creación de la página principal es similar al desarrollo de componentes. Necesitas crear una página que contenga el diseño completo del marco y luego colocar las subpáginas internas anidadas en la ranura (`slot`).

Este ejemplo demuestra cómo crear páginas anidadas, donde `page1.html` y `page2.html` son las subpáginas, y `layout.html` es la página principal. La página principal `layout.html` incluye toda la estructura del marco, mientras que las subpáginas se enlazan a través del atributo `parent` para indicar que deben estar incrustadas dentro de la página principal.

Cuando se cambia de página, se activará el evento `routerChange`. En la inicialización de la página y al cambiar de página, puedes utilizar la propiedad `app.current` para obtener la dirección de la página actual y corregir el estado de activación de las pestañas en la página.