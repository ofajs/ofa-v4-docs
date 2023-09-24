<template is="exm-article">
<a href="../../publics/examples/form-data/demo.html" preview></a>
<a href="../../publics/examples/form-data/test-demo.html" main></a>
</template>

# Datos del formulario

En muchas aplicaciones, manejar datos del formulario es una tarea común. Para simplificar este proceso, ofa.js proporciona una segunda abstracción para manejar datos de formularios, ofreciendo el método `formData`. Con este método, puedes mapear fácilmente los valores de los elementos del formulario a un objeto y, cuando los valores de los elementos del formulario cambian, actualizar automáticamente los datos de este objeto y viceversa.

Usando el atributo `shadow`, puedes acceder al contenido del Shadow DOM del componente. Esto te permite acceder y manipular los elementos y estilos dentro del Shadow DOM desde el interior del componente.

En este ejemplo, podemos ver cómo utilizar el método `formData` para mapear automáticamente los datos del formulario al objeto `fdata`. Esto le permite obtener o modificar los valores de los elementos del formulario mediante la manipulación del objeto `fdata`, y estos cambios se sincronizarán automáticamente con los elementos del formulario correspondientes.
