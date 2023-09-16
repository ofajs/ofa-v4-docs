<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# Componentes de formulario personalizados

Con `ofa.js`, puede desarrollar con facilidad componentes de elementos de formulario personalizados con las características estándar de un formulario. Solo necesita agregar el atributo `value` y configurar el atributo `name` a su componente personalizado, y este podrá usarse como un elemento de formulario estándar. Al actualizar el atributo `value` del componente, puede interactuar con el elemento del formulario.

Al inicializar `formData`, se debe agregar la característica de selector personalizada al parámetro (aunque el parámetro predeterminado de `formData` es `"input,select,textarea"`). De esta manera, `formData` puede interactuar con el componente personalizado.

En este ejemplo, usamos el componente personalizado `custom-input` para crear un cuadro de texto editable. Este componente se utiliza como un elemento de formulario y utiliza la propiedad `value` para la interacción de datos. Al utilizar el método `formData`, agregamos `"input,custom-input"` como parámetro para inicializar correctamente los datos del formulario.
