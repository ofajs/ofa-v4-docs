<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# Propiedad de Transmisión

Con la sintaxis de **propiedad de transmisión**, se puede aplicar los datos del componente a los atributos de los elementos en la plantilla.

La forma de utilizarlo es agregar el atributo `:name="key"` en el elemento, donde `name` es el nombre del atributo que se desea establecer en el elemento de destino, y `key` es el nombre clave de la propiedad que se pasa desde el componente personalizado.

Antes mencioné <a href='./index.html' olink>la forma de utilizar selectores para establecer atributos</a>, mientras que lo que se presenta aquí es la sintaxis de transmisión de atributos para establecer atributos;