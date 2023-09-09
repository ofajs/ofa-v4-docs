# Usando el esquema SCSR

En este ejemplo, haz clic en el botón <span style='font-family: "iconfont"'>&#xe7cb;</span> para abrirlo en una nueva página y probarlo;

SCSR, cuyo nombre completo es Representación de Cliente en el lado del Cliente Estático (Static Client-Side Rendering, en inglés), es una variante de RSC en el que, además de mantener la experiencia de usuario de RSC, permite que las páginas sean rastreadas por los motores de búsqueda en su estado estático.

La web actual está construida utilizando el esquema SCSR;

SCSR renderiza el módulo de página en modo de archivo único sin necesidad de utilizar la etiqueta `o-page`, específicamente anidando el código de plantilla del módulo de página directamente dentro de `o-app`.

## Consideraciones

Para todas las páginas que utilizan el esquema SCSR, aparte del contenido descriptivo de la página (como título, meta: descripción, palabras clave) y el contenido de la plantilla de la página, todos los recursos referenciados deben mantenerse consistentes para asegurar una experiencia de usuario coherente después de la navegación y actualización de la página.

<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html" demo></a>
<a href="../../publics/examples/use-scsr/public.css" demo></a>
<a href="../../publics/examples/use-scsr/app-config.mjs" demo></a>

