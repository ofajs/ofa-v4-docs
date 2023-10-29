<template is="exm-article">
<a href="../../publics/examples/fill-temps/demo.html" preview></a>
<a href="../../publics/examples/fill-temps/test-demo.html" main></a>
</template>

# Relleno de renderizado recursivo

relleno de representación le permite usar plantillas independientes para representar datos y nombrarlas mediante el atributo `nombre` en el elemento `<plantilla>`. Esta forma le permite lograr una representación de datos con estructuras anidadas, creando así componentes más complejos.

Cuando se utiliza el `x-fill` para el rendimiento de relleno, simplemente pase el nombre de la plantilla correspondiente al atributo `name` para rendir el contenido de la plantilla independiente. Además, el rendimiento de relleno también admite el relleno recursivo, es decir, se puede seguir utilizando el mismo nombre de plantilla dentro de la plantilla para lograr un relleno anidado.

En el ejemplo, hemos definido una plantilla independiente llamada `item` y le hemos pasado el nombre de la plantilla correspondiente usando `x-fill`. De esta manera, cada elemento en los datos se renderizará utilizando esta plantilla, y dentro de la plantilla se puede usar el mismo nombre de plantilla para llenado recursivo. Esta forma le permite manejar datos con estructuras anidadas de manera flexible y lograr una renderización de componentes más compleja.


