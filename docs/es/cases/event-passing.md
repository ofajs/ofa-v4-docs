<template is="exm-article">
<a href="../../publics/examples/event-passing/demo.html" preview></a>
<a href="../../publics/examples/event-passing/comp-one.html" main></a>
<a href="../../publics/examples/event-passing/comp-two.html"></a>
</template>

# Paso de eventos

Además de escuchar eventos nativos, `on` también se puede utilizar para escuchar eventos personalizados, lo cual es muy importante para la comunicación de eventos entre componentes. Los eventos personalizados se activan mediante el método `emit`. Al activar un evento personalizado, se puede pasar datos personalizados al receptor.

Si necesitas cruzar los límites del Shadow DOM del componente para activar eventos, puedes agregar el atributo `composed`.

En el siguiente ejemplo, aprenderemos cómo utilizar el método `emit` para la transferencia de eventos entre componentes anidados.
