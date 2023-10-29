<template is="exm-article">
<a href="../../publics/examples/use-page/demo.html" preview></a>
<a href="../../publics/examples/use-page/page.html" main></a>
</template>

# Usando componentes de página

Una vez que se carga `ofa.js`, se agrega automáticamente un componente de página llamado `o-page` al ámbito global. Este componente se utiliza para cargar módulos de página, que son un tipo especial de módulo de componente y no se registran como etiquetas personalizadas, sino que se cargan a través del componente `o-page`.

Las páginas modulares son similares a los módulos de componentes, pero con algunas diferencias. Las páginas modulares utilizan el atributo `page` para definir la plantilla en lugar del atributo `component`. La lógica de desarrollo de las páginas modulares es similar a la de los módulos de componentes; se usan la misma sintaxis de plantillas y los mismos componentes de plantilla. Sin embargo, las páginas modulares no pueden utilizar el atributo `attrs` porque los parámetros de la página generalmente se pasan a través de la URL en lugar de `data` o `attrs`.

En el ejemplo, el componente 'o-page' se utiliza para cargar el módulo de la página 'page.html'. Dentro del módulo de la página, se utiliza la propiedad 'page' para definir la plantilla y luego se utiliza una función en JavaScript para devolver un objeto que establece los datos. El parámetro de consulta 'count' en la URL se pasa al módulo de la página y se utiliza para inicializar los datos. Los eventos de clic en los botones de la página pueden actualizar los datos y mostrarlos en la página.
