<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# 快速开始

Para comenzar a usar, simplemente integra el proyecto `ofajs` en tu proyecto importando la dirección del CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.js"></script>
```

Este es un ejemplo simple que muestra cómo usar `ofa.js` para modificar el contenido de elementos DOM.

## 使用方法

Después de importar `ofa.js`, se registrará el símbolo `$` en el ámbito global. Use `$('xxx')` para seleccionar el primer elemento que cumpla con la condición, donde `xxx` es el contenido estándar del [selector CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors).

En el ejemplo anterior, utilizamos el símbolo "$" para seleccionar tres elementos con diferentes "id" y modificar su contenido mediante la configuración de los atributos "text", "html" y "value".

Para obtener más información sobre las propiedades y métodos disponibles, consulte la documentación de la API.
