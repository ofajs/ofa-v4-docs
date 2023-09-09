# Relleno

Las plantillas de relleno (x-fill) en un framework frontend son similares al concepto de renderizar listas, ya que le permiten renderizar dinámicamente un conjunto de componentes minúsculos basados en una colección de datos.

Durante el proceso de relleno, puede utilizar las siguientes variables especiales:

- **$data**: representa los datos del elemento de relleno. Al manipular $data, puede obtener o modificar los datos de cada elemento de relleno.
- **$index**: representa el índice del elemento de datos actual en la colección de datos.
- **$host**: representa el componente actual en sí mismo. Si desea obtener los datos del componente o llamar a sus métodos, debe utilizar $host para acceder al componente.

<a href="../../publics/examples/fill/demo.html" preview demo></a>
<a href="../../publics/examples/fill/test-demo.html" main demo></a>

