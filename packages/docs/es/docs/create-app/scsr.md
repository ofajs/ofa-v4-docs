# Renderizado de cliente estático (SCSR)

## ¿Qué es SCSR?

SCSR, cuyo nombre completo es Renderizado de Cliente Estático (Static Client-Side Rendering), es una variante de RSC (Renderizado de Cliente) que, además de ofrecer la experiencia de usuario de RSC, permite que las páginas sean indexadas por los rastreadores web en su estado estático.

## Cómo utilizar SCSR

Puedes utilizar una biblioteca de SCSR de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.0.0/libs/scsr/dist/scsr.min.js"></script>
```

## Cómo funciona SCSR

SCSR es un módulo de página que se ejecuta directamente en modo de archivo único, sin necesidad de utilizar la etiqueta `o-page`, lo que permite renderear en la página. Específicamente, se pone el código de plantilla del módulo de página directamente dentro de `o-app`.

A continuación se muestra un ejemplo de SCSR que muestra cómo renderear directamente el contenido del módulo de página en la página:

```html
<!-- home.html --><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="./public.css" />
    <script src="../../ofa.js"></script>
    <script src="./scsr.min.js"></script>
  </head>
  <body>
    <o-app src="./app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">¡Hola, mundo!</h1>
          <p class="subtitle">Bienvenido a mi página ofa.js.</p>
          <div>count => {{count}}</div>
          <a href="./pages/help.html" olink>IR A AYUDA</a>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              data: { count: query.count || 0 },
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>
```

A través de SCSR, el contenido dentro de la etiqueta 'template' se renderizará directamente en la página, y esta parte del contenido es en realidad el módulo de página en modo de archivo único.

Continuando con el ejemplo de la página 'home.html', creamos una página 'help':

```html
<!-- pages/help.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ayuda</title>
    <link rel="stylesheet" href="../public.css" />
    <script src="../../../ofa.js"></script>
    <script src="../scsr.min.js"></script>
  </head>
  <body>
    <o-app src="../app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Página de Ayuda</h1>
          <button on:click="back()">Volver</button>
        </div>

        <script>
          export default async ({ query }) => {
            return {
              proto: {},
            };
          };
        </script>
      </template>
    </o-app>
  </body>
</html>

```

Al hacer clic en 'IR A AYUDA' en la página 'home.html', se navegará suavemente a la página 'help.html', logrando un efecto de navegación suave en el renderizado del cliente.

## Consideraciones

Todas las páginas que utilicen el esquema SCSR, excepto el contenido descriptivo de la página (como title, meta:description, keywords) y el contenido de la plantilla de la página, deben mantenerse consistentes para garantizar una experiencia consistente después de la redirección y actualización de la página.

## Sobre el esquema SSR

El esquema actual de SCSR es más similar a un esquema de SSG (Generación de Sitio Estático) ya que renderiza previamente el contenido de la página como contenido estático y luego lo interactúa a través del cliente. ofa.js ya proporciona un enfoque de encapsulación de componentes relativamente independiente, lo que permite a los desarrolladores front-end encapsular componentes y luego combinarlos con esquemas tradicionales de renderizado de páginas en el backend (como Node.js, Go, Java, PHP u otros lenguajes y marcos de sitios web). Los desarrolladores backend pueden utilizar rápidamente estos componentes encapsulados para construir páginas web de alta calidad.

Planeamos ofrecer en el futuro un esquema completo de SSR (Renderizado en el Lado del Servidor). Este esquema consiste en obtener primero el contenido de la próxima página y luego compararlo con el contenido de la página actual para realizar operaciones dinámicas, como agregar, eliminar y modificar atributos. Sin embargo, es importante tener en cuenta que este esquema de SSR requerirá más tiempo, ya que implica comparaciones y modificaciones de elementos complejos.

ofa.js es un marco emergente y el autor tiene tiempo limitado debido a otras responsabilidades. Por el momento, el esquema de SSR no ha sido completamente desarrollado. Sin embargo, si ofa.js gana más usuarios en el futuro y hay una demanda destacada de un esquema de SSR, el autor continuará mejorándolo y desarrollándolo. Actualmente, el autor se enfoca en la estabilidad y expansión de las características del marco, y también da la bienvenida a los comentarios y sugerencias de los usuarios para satisfacer mejor sus necesidades en el futuro.

