<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# Empezar rápido

Para empezar, simplemente integra el proyecto `ofajs` en tu proyecto mediante la URL del CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.20/dist/ofa.js"></script>
```

Esta es un ejemplo sencillo que muestra cómo usar `ofa.js` para modificar el contenido de elementos DOM:

## Método de uso

Después de importar `ofa.js`, se registrará el símbolo `$` en el ámbito global. Puedes seleccionar el primer elemento que cumpla con la condición usando `$('xxx')`, donde `xxx` es el contenido estándar de [selector CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors).

En el ejemplo anterior, utilizamos el símbolo `$` para seleccionar tres elementos con diferentes `id`, y modificamos su contenido estableciendo las propiedades `text`, `html` y `value`.

Para obtener más información sobre las propiedades y métodos disponibles, consulte la documentación de la API.
