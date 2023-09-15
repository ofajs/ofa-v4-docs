<template is="exm-article">
<a href="../../publics/examples/render-text/demo.html" preview></a>
<a href="../../publics/examples/render-text/text-demo.html" main></a>
</template>

# Renderizado de Texto

En el archivo del componente, se puede agregar una etiqueta `script` para escribir el código lógico del componente. A través del objeto `default` expuesto, se pueden configurar los parámetros del componente.

Entre ellas. `data` parámetro es utilizado para definir los datos predeterminados de los componentes. Una vez que se ha instanciado, puedes utilizar la **sintaxis de plantilla**.

La representación de texto se realiza mediante llaves dobles, es decir `{{xxx}}`, donde xxx representa el nombre del atributo del componente.

案例演示了如何渲染组件元素的 val 属性：
