<template is="exm-article">
<a href="../../publics/examples/use-app/demo.html" preview></a>
<a href="../../publics/examples/use-app/page1.html" main></a>
<a href="../../publics/examples/use-app/page2.html"></a>
</template>

# Uso del componente app

En `ofa.js`, puede utilizar el componente `o-app` para crear la estructura de diseño de toda la aplicación y cargar módulos de página dentro de él. Al utilizar los componentes `o-app`, `o-page` y módulos de página, puede construir la estructura de página de toda la aplicación e implementar la navegación entre páginas

Cuando el componente `o-page` esté dentro de `o-app`, puedes usar la etiqueta `<a>` con el atributo `olink` para realizar la navegación entre páginas. Esta navegación no afectará a la página actual, en su lugar se realizará dentro de `o-app`, similar a usar `<iframe>`.

Si el componente `o-page` está dentro de `o-app`, también puedes utilizar los siguientes métodos:
- El método `goto` para navegar a una página.
- El método `back` para regresar a la página anterior.
- El método `replace` para realizar una navegación de reemplazo en la página actual.

Usando el componente `o-app`, puedes construir la estructura de diseño de toda la aplicación y cargar diferentes módulos de página en ella. Además, la funcionalidad de enrutamiento proporcionada por `o-app` permite una navegación fácil y flexible entre páginas.

En este ejemplo, creamos una estructura de aplicación utilizando el componente `o-app` y luego cargamos un módulo de página llamado `page1.html` en él.

En el módulo de página `page1.html`, definimos un título y un botón. Al hacer clic en el botón, se navegará a otro módulo de página llamado `page2.html`. También agregamos un enlace con el atributo `olink`, que navegará a `page2.html` al hacer clic en él.

En la página del módulo `page2.html`, también hemos definido un título y un botón. Al hacer clic en el botón, se regresará a la página anterior, logrando la navegación de la página.
