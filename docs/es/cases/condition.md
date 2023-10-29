<template is="exm-article">
<a href="../../publics/examples/condition/demo.html" preview></a>
<a href="../../publics/examples/condition/test-demo.html" main></a>
</template>

# El rendimiento condicional

模板内除了有模板语法，也有模板组件；

> Los componentes de plantilla son componentes diseñados específicamente para su uso en plantillas;

El renderizado condicional le permite insertar contenido diferente en un componente de forma dinámica según las condiciones específicas. A continuación se muestra un ejemplo de cómo usar el renderizado condicional dentro de un componente.

En este ejemplo, creamos un componente llamado `test-demo`. El componente contiene un botón que aumenta la propiedad `count`. Usando las etiquetas `x-if`, `x-else-if` y `x-else`, implementamos la lógica de representación condicional.

- La etiqueta `x-if` acepta un atributo `value`, que se utiliza para definir una condición. Si el valor de `value` es `true`, se renderizará el contenido dentro de `x-if`. En este ejemplo, si `count` es un número par, se mostrará texto en color rojo.
- La etiqueta `x-else-if` también acepta un atributo `value`, que se utiliza para definir una condición. Si la condición anterior no se cumple y el valor de `value` es `true`, se renderizará el contenido dentro de `x-else-if`. En este ejemplo, si `count` es un múltiplo de 3, se mostrará texto en color azul.
- La etiqueta `x-else` no requiere un atributo `value`, se renderizará su contenido cuando ninguna de las condiciones anteriores se cumpla. En este ejemplo, si `count` no es ni un número par ni un múltiplo de 3, se mostrará texto en color verde. También se puede utilizar `x-else` inmediatamente después de `x-if`.

De esta manera, puedes renderizar contenido diferente de manera dinámica según diferentes condiciones, logrando una interacción y visualización flexible.