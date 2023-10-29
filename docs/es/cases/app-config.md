<template is="exm-article">
  <a href="../../publics/examples/use-config/demo.html" preview></a>
  <a href="../../publics/examples/use-config/app-config.mjs" main></a>
  <a href="../../publics/examples/use-config/page1.html"></a>
  <a href="../../publics/examples/use-config/page2.html"></a>
</template>

# Configurar los parámetros de la aplicación

Puede configurar los parámetros de la aplicación mediante la configuración de un módulo externo para la etiqueta `o-app`.

Estos parámetros son un módulo de ES, puede configurar los siguientes parámetros:

- **home**: Página principal de la aplicación, es la página que se muestra al cargar inicialmente.
- **loading**: Contenido mostrado mientras se carga un módulo en una página de la aplicación al hacer clic para navegar. Puedes devolver una cadena como contenido de carga.
- **pageAnime**: Efecto de animación al cambiar de página, utiliza un objeto que contiene propiedades de estilo CSS.
  - **current**: Estilo cuando la página está actualmente en pantalla.
  - **next**: Estilo cuando la página aún no ha entrado en pantalla.
  - **previous**: Estilo cuando la página está a punto de salir de pantalla.

A través de esta forma, puede personalizar la página de inicio, el estilo de carga y las animaciones de transición de página según las necesidades de la aplicación, brindándole una experiencia más personalizada.
