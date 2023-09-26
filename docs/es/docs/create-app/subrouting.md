# Modo de subruta

En ofa.js, configurar subrutas es ligeramente diferente a otras prácticas en marcos front-end. ofa.js utiliza un enfoque más intuitivo al establecer una página padre como contenedor en el módulo de la página para cumplir con los requisitos de las subrutas.

## Configuración del contenedor de página padre

Para crear subrutas, primero se debe establecer el parámetro 'parent' en el módulo de la página secundaria para especificar la dirección del contenedor de la página padre. De esta manera, cuando se carga la página secundaria, ofa.js automáticamente envuelve la página secundaria dentro del contenedor de la página padre.

```html
<template page>
  <h1>Página 1</h1>

  <script>
    export const parent = "./layout-page.html";
  </script>
</template>
```

En el ejemplo anterior, el módulo de la página secundaria especifica la dirección del contenedor de la página padre utilizando el parámetro 'parent'.

## Configuración de la plantilla del contenedor de la página principal

La plantilla del contenedor de la página principal necesita tener un elemento `<slot>` para que las páginas secundarias puedan insertarse en la posición especificada de la página principal. Además, asegúrate de que el elemento contenedor del `<slot>` esté configurado como `position: relative`, esto es muy importante, ya que las páginas secundarias se posicionan absolutamente dentro del contenedor de la página principal.

A continuación se muestra un ejemplo de plantilla del contenedor de la página principal:

```html
<!-- layout-page.html -->
<template page>
  <style>
    /* Configura el elemento contenedor como posición relativa */
    .parent-container {
      position: relative;
    }
  </style>
  
  <!-- Configura el elemento contenedor para insertar las páginas secundarias -->
  <div class="parent-container">
    <slot></slot>
  </div>
</template>
```

En el ejemplo anterior, al configurar un elemento contenedor con `slot`, las páginas secundarias se insertarán en ese contenedor. Asegúrate de que el elemento contenedor tenga una posición relativa para que las páginas secundarias se posicionen en relación a él.

Utilizando este enfoque, puedes configurar de manera más visual las rutas secundarias y lograr la carga y el renderizado de las páginas secundarias mediante la asociación entre el contenedor de la página principal y las páginas secundarias.

## Listener de rutas de la página principal

En algunas situaciones, varias páginas comparten la misma página principal como contenedor y cuando se realiza una navegación entre estas páginas, la página principal no se refresca. En este caso, la página principal aún puede escuchar los cambios de ruta para realizar acciones correspondientes sin refrescar la página.

### Escuchar los cambios de ruta

El módulo de la página principal puede configurar una función `routerChange` para escuchar los cambios de ruta. Cuando se produce un cambio de ruta en la página sin actualizar la página principal, se activará el evento `routerChange`. Este evento pasará la información de la página actual y el tipo de cambio (`type`).

A continuación se muestra un ejemplo de un módulo de página principal que demuestra cómo configurar la función `routerChange` para escuchar los cambios de ruta:

```javascript
// Módulo de página principal
export const routerChange = (current, type) => {
  console.log(`Cambio de ruta: página actual ${current.src}, tipo de cambio ${type}`);
};
```

En el ejemplo anterior, la función `routerChange` recibe dos parámetros, `current` que representa la dirección actual de la página, y `type` que representa el tipo de redirección. Cuando se produce un cambio de ruta en la página, esta función se activa y muestra la información correspondiente.

