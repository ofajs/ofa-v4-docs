# Uso del componente o-router

El componente `o-router` es un componente usado para vincular las rutas dentro de `o-app` a la pestaña del navegador actual. Este componente te ayuda a gestionar las rutas de página y la visualización de una manera más conveniente.

## Carga del componente o-router

En primer lugar, debes agregar el componente `o-router` en tu página. Puedes hacerlo importando el archivo `router.mjs` de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/libs/router/dist/router.min.js"></script>
```

## Uso del componente o-router

Para utilizar el componente `o-router`, debe envolverlo fuera del componente `o-app`. De esta manera, se puede enlazar la ruta dentro de la aplicación a la pestaña actual del navegador.

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## atributos fix-body

"El componente `o-router` también proporciona la propiedad `fix-body`. Cuando se establece esta propiedad, el componente agregará automáticamente estilos a la etiqueta `<html>` para que el tamaño de la aplicación sea igual al tamaño de la página, lo que permitirá que el contenido de la aplicación llene toda la ventana."

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>router test</title>
    <script src="ofa.js"></script>
    <!-- Cargar componente del enrutador -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- Utilice el componente o-router y establezca el atributo fix-body -->
    <o-router fix-body> 
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```