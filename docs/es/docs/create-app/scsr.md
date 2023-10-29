# Renderizado estático del cliente (SCSR)

## ¿Qué es SCSR?

SCSR, cuyo nombre completo es Representación en el Lado del Cliente Estático, se refiere a la representación del lado del cliente en forma estática. La Representación del Lado del Cliente Estático (SCSR) es una variante del CSR (Representación en el Lado del Cliente) que permite que las páginas sean indexadas por los rastreadores web mientras se mantiene la experiencia del usuario del CSR.

## Cómo utilizar SCSR

Puedes hacer referencia a la biblioteca SCSR de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/scsr/dist/scsr.min.js"></script>
```

## Principio de funcionamiento de SCSR

SCSR es un módulo de página que se ejecuta en modo de archivo único sin la necesidad de utilizar la etiqueta `o-page`, lo que permite la renderización en la página. En pocas palabras, se coloca directamente el código de la plantilla del módulo de la página dentro de `o-app`.

El siguiente es un ejemplo de SCSR que muestra cómo renderizar contenido de módulos de página directamente en la página:

```html
<!-- home.html -->
<!DOCTYPE html>
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
          <h1 class="title">Hello, World!</h1>
          <p class="subtitle">Welcome to my ofa.js page.</p>
          <div>count => {{count}}</div>
          <a href="./pages/help.html" olink>GO TO HELP</a>
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

通过 SCSR，`template` 标签内的内容会被直接渲染到页面上，而这部分内容实际上就是单文件模式的页面模块。

继续以上面的 `home.html` 页面为例，我们创建一个 `help` 页面：

```html
<!-- pages/help.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Help</title>
    <link rel="stylesheet" href="../public.css" />
    <script src="../../../ofa.js"></script>
    <script src="../scsr.min.js"></script>
  </head>
  <body>
    <o-app src="../app.mjs">
      <template page>
        <div class="container">
          <h1 class="title">Help Page</h1>
          <button on:click="back()">GO Back</button>
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

Después de hacer clic en "IR A AYUDA" en la página `home.html`, se realizará una transición suave a la página `help.html`, lo que logra un efecto de transición suave en el renderizado del lado del cliente.

## Nota:

Todos los recursos referenciados en las páginas que utilizan el esquema SCSR, con excepción del contenido descriptivo de la página (como el título, meta descripción y palabras clave) y del contenido del plantilla de la página, deben mantenerse consistentes para garantizar una experiencia uniforme después de la navegación y actualización de la página.

## Acerca de los esquemas SSR

El actual esquema de SCSR es en realidad más similar a un esquema de SSG (Generación de Sitio Estático), ya que renderiza las páginas como contenido estático de antemano y luego se interactúa con ellas mediante el cliente. ofa.js ya proporciona un esquema de envoltura de componentes relativamente independiente, lo que permite a los desarrolladores de frontend envolver los componentes y luego combinarlos con esquemas de renderizado de páginas tradicionales en el backend (como Node.js, Go, Java, PHP, etc.), lo que permite a los desarrolladores de backend utilizar rápidamente estos componentes envueltos para construir páginas web de alta calidad.

Planeamos ofrecer en el futuro una solución completa de SSR (Renderizado en el Lado del Servidor). El principio de esta solución es obtener el contenido de la siguiente página y compararlo con el contenido de la página actual para realizar operaciones dinámicas como agregar, eliminar y modificar atributos. Sin embargo, hay que tener en cuenta que este plan de SSR puede ser bastante demorado debido a las complicadas operaciones de comparación y modificación de elementos.

ofa.js es un marco en desarrollo y el autor tiene limitaciones de tiempo debido a sus otras responsabilidades. Aún no ha completado completamente la solución SSR para ofa.js. Sin embargo, si en el futuro ofa.js obtiene más usuarios y surge una fuerte demanda de una solución SSR, el autor continuará mejorando y desarrollando esta solución. Por ahora, el autor se centrará en la estabilidad y la expansión de las funciones del marco. También se agradece el feedback y las sugerencias de los usuarios para satisfacer mejor sus necesidades en el futuro.