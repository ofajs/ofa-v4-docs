<template is="exm-article">
<a href="../../publics/examples/form-data/demo.html" preview></a>
<a href="../../publics/examples/form-data/test-demo.html" main></a>
</template>

# Datos del formulario

En muchas aplicaciones, el procesamiento de datos de formulario es una tarea común. Para simplificar este proceso, ofa.js ha abstraído el manejo de datos de formulario y proporciona el método `formData`. Con este método, puede mapear fácilmente los valores de los elementos del formulario a un objeto y actualizar automáticamente los datos de este objeto cuando cambian los valores de los elementos del formulario, y viceversa.

A través de la propiedad `shadow`, puedes acceder al contenido del nodo raíz del Shadow DOM del componente. Esto te permite acceder y manipular los elementos y estilos del Shadow DOM dentro del componente.

En este ejemplo, podemos ver cómo utilizar el método `formData` para mapear automáticamente los datos del formulario al objeto `fdata`. Esto le permite obtener o modificar los valores de los elementos del formulario manipulando el objeto `fdata`, y estos cambios también se sincronizarán automáticamente con los elementos correspondientes del formulario.
