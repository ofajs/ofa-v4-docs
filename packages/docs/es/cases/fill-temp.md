<template is="exm-article">
<a href="../../publics/examples/fill-temps/demo.html" preview></a>
<a href="../../publics/examples/fill-temps/test-demo.html" main></a>
</template>

# Relleno y Renderización recursiva

La renderización de relleno le permite utilizar plantillas independientes para renderizar datos y agregarles un nombre usando el elemnto `<template>` con el atributo `name`. Esto le permite renderizar datos con estructuras anidadas y crear componentes más complejos.

Cuando utiliza el relleno `x-fill`, simplemente necesita pasar el nombre de la plantilla correspondiente al atributo `name` para renderizar el contenido de la plantilla independiente. Además, la renderización de relleno también admite relleno recursivo, lo que significa que puede seguir utilizando el mismo nombre de plantilla dentro de la plantilla para una renderización anidada.

En el ejemplo, hemos definido una plantilla independiente llamada `item` y hemos pasado el nombre de la plantilla correspondiente al usar `x-fill`. De esta manera, cada elemento en los datos se renderizará utilizando esta plantilla y la plantilla puede volver a usar el mismo nombre para el relleno recursivo. Esto le permite manejar datos con estructuras anidadas de manera flexible y lograr una renderización de componentes más compleja.

