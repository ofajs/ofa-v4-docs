<template is="exm-article">
<a href="../../publics/examples/render-text/demo.html" preview></a>
<a href="../../publics/examples/render-text/text-demo.html" main></a>
</template>

# 文本渲染

En el archivo del componente, puedes agregar una etiqueta `script` para escribir el código lógico del componente. Puedes configurar los parámetros del componente a través del objeto `default` expuesto.

Entre ellos, el parámetro `data` se utiliza para definir los datos predeterminados de los elementos del componente. Una vez que se instancia, puedes usar la **sintaxis del plantilla**.

El texto se renderiza envuelto por dobles llaves, es decir `{{xxx}}`, donde xxx representa el nombre de la propiedad del componente.

Se muestra un ejemplo de cómo renderizar la propiedad val de un elemento componente.
