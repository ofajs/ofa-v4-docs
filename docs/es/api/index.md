# API Introducción

A continuación se muestra una descripción general de la API de ofa.js. Puede revisarlo primero y consultar la documentación detallada en el futuro si es necesario.

## Ejemplo relacionado

- [$](./instance/dollar.md): Principalmente utilizado para obtener métodos de instancia
- [all](./instance/all.md): Obtener todas las instancias relacionadas
- [prev](./instance/prev.md): Obtener la instancia anterior al elemento objetivo
- [prevs](./instance/prevs.md): Obtener todas las instancias anteriores al elemento objetivo
- [next](./instance/next.md): Obtener la instancia siguiente al elemento objetivo
- [nexts](./instance/nexts.md): Obtener todas las instancias siguientes al elemento objetivo
- [siblings](./instance/siblings.md): Obtener todas las instancias de elementos adyacentes al elemento objetivo
- [parent](./instance/parent.md): Obtener la instancia del elemento padre
- [parents](./instance/parents.md): Obtener todas las instancias de los elementos padres
- [clone](./instance/clone.md): Método para clonar una instancia
- [ele](./instance/ele.md): Obtener el elemento nativo real de la instancia
- [shadow](./instance/shadow.md): Obtener el nodo raíz de sombra del componente personalizado
- [root](./instance/root.md): Obtener el nodo raíz de la instancia objetivo
- [子元素](./instance/children.md): Obtener directamente un hijo por su índice
- [host](./instance/host.md): Obtener la instancia del elemento "app" objetivo

## Operaciones de nodo

- [Agregar o eliminar nodos hijos](./operation/array-like.md)
- [before](./operation/before.md)：Agregar elementos antes de la instancia objetivo
- [after](./operation/after.md)：Agregar elementos después de la instancia objetivo
- [remove](./operation/remove.md)：Eliminar el elemento objetivo
- [wrap](./operation/wrap.md)：Envolver el elemento objetivo con otro elemento
- [unwrap](./operation/unwrap.md)：Quitar el elemento de envoltura de la instancia objetivo

## Operaciones de atributos

- [text](./props/text.md): Obtener o establecer el texto del elemento objetivo
- [html](./props/html.md): Obtener o establecer el código HTML del elemento objetivo
- [attr](./props/attr.md): Obtener o establecer los [atributos](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) del elemento objetivo
- [css](./props/css.md): Obtener o establecer los estilos del elemento objetivo
- [style](./props/style.md): Obtener los estilos nativos del elemento objetivo
- [classList](./props/class-list.md): Obtener la lista de clases nativas del elemento objetivo
- [data](./props/data.md): Obtener el conjunto de datos nativos del elemento objetivo

## Eventos relacionados

- [on](./event/on.md): vincula un evento a un elemento objetivo
- [one](./event/one.md): vincula un evento a un elemento objetivo de forma temporal
- [emit](./event/emit.md): activa manualmente un evento
- [off](./event/off.md): desvincula un evento previamente vinculado

## Sintaxis de plantilla

- [Renderizado de texto](./temp-syntax/text-render.md): Renderiza rápidamente texto en archivos de plantilla
- [class](./temp-syntax/class.md): Renderiza rápidamente nombres de clases en archivos de plantilla
- [sync](./temp-syntax/sync.md): Sincroniza rápidamente datos en archivos de plantilla
- [Renderizado condicional](./temp-syntax/condition.md): Renderiza contenido en archivos de plantilla según condiciones
- [Renderizado de listas](./temp-syntax/fill.md): Renderiza rápidamente datos de arrays en archivos de plantilla

## Ciclo de vida
- [created](./life-cycle/created.md)：El componente se crea pero no se activa cuando se renderiza el contenido.
- [ready](./life-cycle/ready.md)：El componente se crea y se activa después de renderizar el contenido.
- [watch](./life-cycle/watch.md)：El componente se inicializa y se activa cuando el valor cambia.
- [loaded](./life-cycle/loaded.md)：El componente se activa después de que los recursos internos se cargan.
- [attached](./life-cycle/attached.md)：El componente se activa después de ser agregado al documento.
- [detached](./life-cycle/detached.md)：El componente se activa después de ser eliminado del documento.
- [routerChange](./life-cycle/router-change.md)：La página principal incrustada se activa cuando cambia la ruta de la aplicación.

## Otros

- [Modelo de caja](./otros/box.md): Obtener todos los datos relacionados con el tamaño del elemento objetivo
- [formData](./otros/form-data.md): Vincular y obtener datos del formulario de manera conveniente
- [tag](./otros/tag.md): Obtener el nombre de la etiqueta del objetivo
- [index](./otros/index.md): Obtener el orden del elemento objetivo dentro de su elemento padre
- [is](./otros/is.md): Verificar si el elemento objetivo coincide con la expresión de selector CSS
- [refresh](./otros/refresh.md): Actualizar activamente la interfaz del componente
- [PATH](./otros/path.md): Obtener la dirección del archivo de registro del componente o página
- [extend](./otros/extend.md): Ampliar los datos o métodos de la instancia; ampliar los datos o métodos subyacentes de ofa.js;
- [Características de datos de instancia](./otros/stanz.md): Introducir las características de los datos subobjetos de los datos de la instancia y cómo escuchar los cambios en los datos