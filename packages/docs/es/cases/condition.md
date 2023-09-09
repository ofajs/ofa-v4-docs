# 条件渲染

模板内除了有模板语法，也有模板组件；

> **模板组件** es un componente diseñado específicamente para plantillas, este tipo de componentes solo se pueden usar dentro de una plantilla;

La renderización condicional le permite insertar contenido diferente en un componente dinámicamente en función de una condición específica. A continuación se muestra un ejemplo de cómo utilizar la renderización condicional dentro de un componente.

En este ejemplo, creamos un componente llamado `test-demo`. El componente contiene un botón que, al hacer clic, incrementará la propiedad `count`. Usando las etiquetas `<x-if>`, `<x-else-if>` y `<x-else>`, implementamos la lógica de la renderización condicional.

- La etiqueta `<x-if>` recibe un atributo `value` para definir la condición. Si el valor de `value` es `true`, se renderiza el contenido dentro de `<x-if>`. En este ejemplo, si `count` es par, aparecerá un texto rojo.
- La etiqueta `<x-else-if>` también recibe un atributo `value` para definir la condición. Si la condición anterior no se cumple y el valor de `value` es `true`, se renderiza el contenido dentro de `<x-else-if>`. En este ejemplo, si `count` es un múltiplo de 3, aparecerá un texto azul.
- La etiqueta `<x-else>` no requiere un atributo `value`, se renderizará su contenido cuando ninguna de las condiciones anteriores se cumpla. En este ejemplo, si `count` no es par ni un múltiplo de 3, aparecerá un texto verde. También se puede usar `x-else` inmediatamente después de `x-if`;

De esta manera, puede renderizar contenido diferente dinámicamente según diferentes condiciones, logrando un efecto de interacción y presentación flexible.

<a href="../../publics/examples/condition/demo.html" preview demo></a>
<a href="../../publics/examples/condition/test-demo.html" main demo></a>

