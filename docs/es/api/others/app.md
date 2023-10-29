# app

`o-app` es uno de los componentes principales en `ofa.js` y se utiliza para configurar y gestionar toda la aplicación. A continuación se presentan algunas propiedades y métodos clave de `app`:

## src

`src` atributo se utiliza para especificar la dirección exacta del módulo de configuración de parámetros de la aplicación. Para ver ejemplos detallados, consulte [Ejemplos](../../cases/app-config.md).

```javascript
const app = $("o-app");
console.log(app.src);
```

## current

`current` attributeName is used to obtain the instance of the currently displayed page. This can help you access and work with the currently displayed page, such as updating its content or performing specific operations.

```javascript
// Obtener la instancia de página actual
const currentPage = app.current;
```

## goto

El método `goto` se utiliza para acceder a una página específica. Puede pasar la dirección de la página de destino y la aplicación la cargará y mostrará. Este es un método importante para la navegación de la aplicación.

```javascript
// Ir a la página especificada
app.goto("/page2.html");
```

## replace

El método `replace` es similar a `goto`, pero se utiliza para reemplazar la página actual en lugar de agregar una nueva página a la pila. Esto se puede utilizar para implementar la sustitución de página en lugar de la navegación en pila.

```javascript
// Reemplaza la página actual por una nueva página
app.replace("/new-page.html");
```

## back

El método `back` se utiliza para regresar a la página anterior y realizar la operación de navegación. Esto llevará al usuario de vuelta a la página anterior.

```javascript
// 返回上一页
app.back();
```

## routers

La propiedad `routers` contiene la información de configuración de enrutamiento de la aplicación. Esta es una propiedad importante que define las reglas de enrutamiento y mapeo de las páginas en la aplicación. La configuración de enrutamiento determina la navegación entre las páginas y cómo se manejan las URL.

```javascript
// Acceder a la información de configuración de rutas de la aplicación
const routeConfig = app.routers;
```