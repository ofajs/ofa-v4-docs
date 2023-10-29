<template is="exm-article">
<a href="../../publics/examples/simple-btn/demo.html" preview></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main></a>
</template>

# Ranuras de componente

Al añadir la etiqueta `<slot></slot>` en la plantilla, se puede colocar el contenido dentro del slot correspondiente del componente al usarlo.

En general, los componentes personalizados no tienen la propiedad `display` definida de forma predeterminada, por lo que debes definirla manualmente para el componente. Puedes utilizar el selector `:host` en el estilo del componente para agregar estilos propios del mismo.

Este ejemplo muestra cómo crear un componente llamado `simple-btn`. El template del componente incluye una ranura donde se puede insertar contenido en el componente. Se añade estilo al componente mediante el selector `:host`. En otra página, se hace referencia al componente `simple-btn` utilizando el componente `l-m` e insertando contenido en él.
