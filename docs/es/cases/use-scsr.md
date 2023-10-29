<template is="exm-article">
<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html"></a>
<a href="../../publics/examples/use-scsr/public.css"></a>
<a href="../../publics/examples/use-scsr/app-config.mjs"></a>
</template>

# Uso del esquema SCSR

En este ejemplo, haga clic en el botón <span style='font-family: "iconfont"'>&#xe7cb;</span> para abrir y probar en una nueva página.

SCSR, cuyo nombre completo es Representación estática del lado del cliente, también conocida como representación estática del cliente, es una variante de CSR (Representación del lado del cliente) que, al mantener la experiencia del usuario de CSR, permite que las páginas sean rastreadas por los motores de búsqueda en un estado estático.

El sitio web actual utiliza el esquema SCSR para construirlo.

SCSR i.e. State Controlled Stateless Rendering, permite la renderización en la página mediante la ejecución directa de módulos de página en modo de archivo único sin necesidad de usar la etiqueta `o-page`. Específicamente, se trata de anidar el código de plantilla del módulo de página directamente dentro de `o-app`.

## Nota:

Para todas las páginas que adopten el esquema SCSR, excepto el contenido descriptivo de la página (como título, meta descripción, palabras clave) y el contenido de la plantilla de la página, se debe mantener la coherencia de los recursos referenciados para garantizar una experiencia de usuario consistente después de la navegación y actualización de la página.