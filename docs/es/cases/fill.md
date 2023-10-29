<template is="exm-article">
<a href="../../publics/examples/fill/demo.html" preview></a>
<a href="../../publics/examples/fill/test-demo.html" main></a>
</template>

# Rendimiento de relleno

El relleno de plantillas (x-fill) en los marcos de frontend es similar al concepto de renderización de listas, lo que le permite renderear dinámicamente un conjunto de componentes miniatura según una colección de datos.

En el proceso de renderizado de relleno, puedes utilizar las siguientes variables especiales:

- **$data**: Representa los datos del elemento de llenado. Al operar en $data, puedes obtener o modificar los datos de cada elemento de llenado.
- **$index**: Representa el índice del elemento actual en la colección de datos.
- **$host**: Representa el componente actual. Si deseas obtener datos del componente o llamar a los métodos del componente, necesitas utilizar $host para acceder al componente.


