# Desarrollo de aplicaciones

Además de poder desarrollar componentes, `ofa.js` también se puede utilizar para desarrollar aplicaciones completas.

`ofa.js` integra la aplicación como un componente `o-app`, lo que te permite crear rápidamente aplicaciones utilizando esta etiqueta. Esta forma simplifica y agiliza la creación de aplicaciones.

Además, `ofa.js` también ofrece una solución completa de **enrutamiento** y **SSG (Generación de Páginas Estáticas)**, que ayuda a los desarrolladores a construir aplicaciones más robustas. Estas características aceleran el flujo de desarrollo, permitiéndote centrarte en la lógica de la aplicación y la experiencia del usuario sin tener que preocuparte demasiado por los detalles subyacentes.

```html
<!DOCTYPE html>
<html lang="es">
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

上面是一个简单的应用教程代码示例，接下来会逐步讲解应用的开发过程。

