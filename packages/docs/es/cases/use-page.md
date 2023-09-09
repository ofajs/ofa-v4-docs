# Usando componentes de página

Una vez que se carga 'ofa.js', se añade automáticamente un componente de página llamado 'o-page'. Este componente se utiliza para cargar módulos de página, que son un tipo especial de módulos de componente y no se registran como etiquetas personalizadas, sino que se cargan a través del componente 'o-page'.

Los módulos de página son similares a los módulos de componente, pero tienen algunas diferencias. Los módulos de página utilizan la propiedad 'page' para definir la plantilla en lugar de la propiedad 'component'. La lógica de desarrollo de los módulos de página es similar a la de los módulos de componente y utiliza la misma sintaxis y componentes de plantilla. Sin embargo, los módulos de página no pueden utilizar el atributo 'attrs', ya que los parámetros de la página suelen pasarse a través de la URL en lugar de a través de 'data' o 'attrs'.

En el ejemplo, el componente 'o-page' se utiliza para cargar el módulo de página 'page.html'. El módulo de página utiliza la propiedad 'page' para definir la plantilla y luego utiliza una función de JavaScript para devolver un objeto que configura los datos. El parámetro de consulta 'count' en la URL se pasa al módulo de página y se utiliza para inicializar los datos. Los eventos de clic en los botones dentro de la página pueden actualizar los datos y mostrarlos en la página.

<a href="../../publics/examples/use-page/demo.html" vista previa demo></a>
<a href="../../publics/examples/use-page/page.html" demo principal></a>

