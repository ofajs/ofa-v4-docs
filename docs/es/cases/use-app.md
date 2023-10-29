<template is="exm-article">
<a href="../../publics/examples/use-app/demo.html" preview></a>
<a href="../../publics/examples/use-app/page1.html" main></a>
<a href="../../publics/examples/use-app/page2.html"></a>
</template>

# Uso del componente app

En `ofa.js`, puedes usar el componente `o-app` para crear la estructura de diseño de toda la aplicación y cargar diferentes módulos de página en ella. Mediante el uso del componente `o-app`, el componente `o-page` y los módulos de página, puedes construir la estructura de páginas de toda la aplicación y realizar la navegación entre páginas.

Cuando el componente `o-page` está dentro de `o-app`, puedes usar la etiqueta `<a>` con el atributo `olink` para realizar la navegación entre páginas. Esta navegación no afectará a la página actual, sino que solo ocurrirá dentro de `o-app`, similar a usar `<iframe>`.

Si el componente `o-page` está dentro de `o-app`, también puedes utilizar los siguientes métodos:
- Usar el método `goto` para realizar una navegación de página.
- Usar el método `back` para volver a la página anterior.
- Usar el método `replace` para realizar una navegación de reemplazo en la página actual.

A través del componente `o-app`, puedes construir la estructura de diseño de toda la aplicación y cargar diferentes módulos de página en ella. Al mismo tiempo, la funcionalidad de enrutamiento proporcionada por `o-app` hace que la navegación entre páginas sea más conveniente y flexible.

En este ejemplo, creamos un diseño de aplicación utilizando el componente `o-app` y luego cargamos un módulo de página llamado `page1.html`.

En el módulo de la página `page1.html`, hemos definido un título y un botón. Al hacer clic en el botón, se redirigirá a otro módulo de página llamado `page2.html`. También hemos agregado un enlace con el atributo `olink`, al hacer clic en el enlace también se navegará a `page2.html`.

En el módulo de la página `page2.html`, también hemos definido un título y un botón. Al hacer clic en el botón, se regresará a la página anterior, logrando la navegación de la página.
