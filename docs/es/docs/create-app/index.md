# Introducción

Además de poder desarrollar componentes, `ofa.js` también se puede utilizar para desarrollar aplicaciones completas.

`ofa.js` integra la aplicación como un componente `o-app`, lo que te permite crear rápidamente aplicaciones simplemente utilizando esta etiqueta. Este enfoque simplifica y agiliza la creación de aplicaciones.

Además, ofa.js también proporciona un completo esquema de **enrutamiento** y **SSG (generación de páginas estáticas)**, que ayuda a los desarrolladores a construir aplicaciones más robustas. Estas funcionalidades aceleran el proceso de desarrollo, permitiéndote centrarte en la lógica de la aplicación y la experiencia del usuario, sin tener que preocuparte demasiado por los detalles subyacentes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>app test demo</title>
    <script src=".././../ofa.js"></script>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      o-app {
        display: block;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <o-app>
      <o-page src="./pages/hello.html"></o-page>
    </o-app>
  </body>
</html>
```

El siguiente es un ejemplo de código de tutorial de aplicación simple; a continuación se explicará el proceso de desarrollo de la aplicación paso a paso.