# 子路由模式

En ofa.js, la configuración de subrutas es ligeramente diferente a la práctica de algunos frameworks frontend. ofa.js utiliza un enfoque más intuitivo al establecer la página padres como contenedores en los módulos de la página, para cumplir con los requisitos de las subrutas.

## 设置父页面容器

Para crear una subruta, primero debes establecer el parámetro `parent` en el módulo de la página secundaria, indicando la dirección del módulo de la página principal. De esta manera, cuando se cargue la página secundaria, el archivo ofa.js automáticamente envolverá la página secundaria en el contenedor de la página principal.

```html
<template page>
  <h1>Page 1</h1>

  <script>
    export const parent = "./layout-page.html";
  </script>
</template>
```

En el ejemplo anterior, el módulo de página de la subpágina especifica la dirección del contenedor de la página padre mediante el parámetro `parent`.

## 父页面容器模板设置

La plantilla del contenedor de la página principal debe tener un elemento `<slot>` para que las páginas secundarias puedan insertarse en la posición especificada en la página principal. Además, asegúrate de que el elemento contenedor del elemento `<slot>` esté configurado como `position: relative`, esto es muy importante ya que las páginas secundarias se posicionan absolutamente dentro del contenedor de la página principal.

A continuación se muestra un ejemplo de plantilla de contenedor de página padre.

```html
<!-- layout-page.html -->
<template page>
  <style>
    /* Establece el contenedor como posicionamiento relativo */
    .parent-container {
      position: relative;
    }
  </style>
  
  <!-- Establece el contenedor para insertar las subpáginas -->
  <div class="parent-container">
    <slot></slot>
  </div>
</template>
```

En el ejemplo anterior, al establecer un elemento contenedor con una ranura, las subpáginas se insertarán en ese contenedor. Asegúrese de que el elemento contenedor tenga una posición relativa para que las subpáginas se puedan posicionar en función del contenedor.

Mediante este método, puedes configurar las subrutas de forma más intuitiva, cargando y renderizando las páginas hijas a través de la asociación entre el contenedor de la página principal y las páginas hijas.

## 父页面的路由监听

En algunos casos, varias páginas comparten la misma página principal como contenedor, cuando estas páginas se cambian, la página principal no se actualiza. En esta situación, la página principal aún puede escuchar los cambios en la ruta para realizar las acciones correspondientes sin refrescar la página.

### 监听路由变动

La función `routerChange` puede ser configurada en el módulo de la página padre para escuchar los cambios de la ruta. Cuando ocurre un cambio de ruta en la página sin refrescarla, se activa el evento `routerChange`. Este evento pasa la información de la página actual y el método de dirección (`type`).

A continuación se muestra un ejemplo de un módulo de página principal que muestra cómo configurar la función `routerChange` para escuchar los cambios en la ruta:

```javascript
// El módulo de página de la página padre
export const routerChange = (current, type) => {
  console.log(`Cambiar ruta: la página actual es ${current.src}, el tipo de cambio es ${type}`);
};
```

En el ejemplo anterior, la función `routerChange` recibe dos parámetros, `current` representa la dirección actual de la página y `type` representa el método de navegación. Cuando se produce un cambio de ruta en la página, esta función se activará y mostrará la información correspondiente.