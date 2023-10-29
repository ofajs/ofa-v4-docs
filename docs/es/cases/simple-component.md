<template is="exm-article">
<a href="../../publics/examples/simple-component/demo.html" preview></a>
<a href="../../publics/examples/simple-component/my-comp.html" main></a>
<a href="../../publics/examples/simple-component/public.css"></a>
</template>

# Creación y uso de componentes

Una vez que se complete la carga de ofa.js, se registrará globalmente un componente llamado 'load-module' que puedes referenciar usando la abreviatura 'l-m'. Su uso es similar a la etiqueta 'script', donde puedes usar el atributo 'src' para referenciar la ubicación del componente que has desarrollado.

Ahora, empecemos a crear nuestros propios componentes. Primero, crea un archivo HTML con el mismo nombre que el del componente.

En el archivo del componente, primero se agrega un elemento `template` y se le agrega el atributo `component`. El contenido que el componente necesita renderizar se coloca dentro de este elemento `template`. Finalmente, este contenido se renderizará dentro del Shadow DOM del componente, el cual está aislado del entorno externo para evitar la contaminación del entorno externo.

A continuación, simplemente use el componente `l-m` para llamar a su componente desarrollado. En la página, simplemente use la etiqueta del componente que ha definido.

El componente registrado debe utilizar solo letras minúsculas y el símbolo **-**, y debe contener al menos un **-**. Debe seguir esta regla de nomenclatura.

A través de este ejemplo, aprenderás cómo crear un componente llamado `my-comp` y cómo usarlo en otra página. También puedes establecer el estilo del componente mediante la vinculación de un archivo CSS externo.
