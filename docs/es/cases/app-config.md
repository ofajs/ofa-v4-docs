<template is="exm-article">
  <a href="../../publics/examples/use-config/demo.html" preview></a>
  <a href="../../publics/examples/use-config/app-config.mjs" main></a>
  <a href="../../publics/examples/use-config/page1.html"></a>
  <a href="../../publics/examples/use-config/page2.html"></a>
</template>

# Configurar parámetros de la aplicación

Puede configurar los parámetros de la aplicación proporcionando un módulo externo para la etiqueta `o-app`.
Estos parámetros son un módulo ES donde puede configurar los siguientes parámetros:
- **home**: La página de inicio de la aplicación, es decir, la página que se muestra al cargar inicialmente.
- **loading**: Contenido que se muestra mientras se carga el módulo cuando se hace clic en un enlace de la página de la aplicación. Puede proporcionar una cadena de texto como contenido de carga.
- **pageAnime**: Efecto de animación al cambiar de página, utiliza un objeto que contiene propiedades de estilo CSS.
  - **current**: Estilo de la página actual.
  - **next**: Estilo de la página que está ingresando.
  - **previous**: Estilo de la página que está saliendo.

De esta manera, puedes personalizar la página de inicio, el estilo de carga y las animaciones de transición de página, entre otros parámetros, según las necesidades de tu aplicación, brindando así una experiencia más personalizada.