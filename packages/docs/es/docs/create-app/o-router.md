# Uso del componente o-router

El componente `o-router` es un componente utilizado para enlazar rutas dentro de `o-app` a la pestaña actual del navegador, lo que ayuda a gestionar el enrutamiento y la presentación de la página más fácilmente.

## Referencia al componente o-router

Primero, necesitas referenciar el componente `o-router` en tu página. Puede hacer referencia al archivo `router.mjs` de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.0.0/libs/router/dist/router.min.js"></script>
```

## Usando el componente o-router

El uso del componente `o-router` se consigue envolviéndolo en el exterior del componente `o-app`. Esto vincula las rutas in-app a la pestaña actual del navegador.

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## atributo fix-body

El componente `o-router` también proporciona el atributo `fix-body`, cuando estableces este atributo, el componente estiliza automáticamente la etiqueta `<html>` para que el tamaño de la aplicación sea igual al tamaño de la página de forma que el contenido de la aplicación llene toda la ventana.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>router test</title>
    <script src="ofa.js"></script>
    <!-- Referencia al componente o-router -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.0.0/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- Utiliza el componente o-router y establece la propiedad fix-body -->
    <o-router fix-body> 
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```

