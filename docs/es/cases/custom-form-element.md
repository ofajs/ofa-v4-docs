<template is="exm-article">
<a href="../../publics/examples/custom-form-element/demo.html" preview></a>
<a href="../../publics/examples/custom-form-element/test-demo.html" main></a>
<a href="../../publics/examples/custom-form-element/custom-input.html"></a>
</template>

# Componente de formulario personalizado

Utilizando `ofa.js`, puedes desarrollar fácilmente componentes personalizados de elementos de formulario con características estándar. Solo necesitas agregar el atributo `value` a tu componente personalizado y configurar el atributo `name`, de esta manera tu componente hecho a medida se puede utilizar como un elemento de formulario estándar. Al actualizar el atributo `value` del componente, puedes interactuar con los elementos del formulario.

Cuando se inicialice `formData`, es necesario agregar las características del selector del componente personalizado a los parámetros (aunque los parámetros predeterminados del método `formData` sean `"input,select,textarea"`). De esta manera, `formData` puede interactuar con el componente personalizado.

En este ejemplo, implementamos un campo de texto editable utilizando el componente personalizado `custom-input`. Este componente se utiliza como elemento de formulario y utiliza el atributo `value` para interactuar con los datos. Al utilizar el método `formData`, agregamos `"input,custom-input"` como parámetro para inicializar correctamente los datos del formulario.
