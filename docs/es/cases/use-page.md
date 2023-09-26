<template is="exm-article">
<a href="../../publics/examples/use-page/demo.html" preview></a>
<a href="../../publics/examples/use-page/page.html" main></a>
</template>

# Usando componentes de página

Una vez que se carga 'ofa.js', se añade automáticamente un componente de página llamado 'o-page'. Este componente se utiliza para cargar módulos de página, que son un tipo especial de módulos de componente y no se registran como etiquetas personalizadas, sino que se cargan a través del componente 'o-page'.

Los módulos de página son similares a los módulos de componente, pero tienen algunas diferencias. Los módulos de página utilizan la propiedad 'page' para definir la plantilla en lugar de la propiedad 'component'. La lógica de desarrollo de los módulos de página es similar a la de los módulos de componente y utiliza la misma sintaxis y componentes de plantilla. Sin embargo, los módulos de página no pueden utilizar el atributo 'attrs', ya que los parámetros de la página suelen pasarse a través de la URL en lugar de a través de 'data' o 'attrs'.

En el ejemplo, el componente `o-page` se utiliza para cargar el módulo de la página `page.html`. En el módulo de la página, se utiliza el atributo `page` para definir la plantilla y luego se devuelve un objeto a través de una función de JavaScript para establecer los datos. Los parámetros de consulta `count` de la URL se pasan al módulo de la página y se utilizan para inicializar los datos. Los eventos de clic en los botones dentro de la página pueden actualizar los datos y mostrarlos en la página.
