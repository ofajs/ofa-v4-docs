# Evento de transferencia

Además de escuchar eventos nativos, `on` también se puede utilizar para escuchar eventos personalizados, lo cual es importante para la comunicación de eventos entre componentes. Los eventos personalizados se desencadenan mediante el método `emit`. Al desencadenar un evento personalizado, se pueden enviar datos personalizados al receptor.

Si es necesario atravesar los límites del Shadow DOM del componente para desencadenar un evento, se puede agregar el atributo `composed`.

En el siguiente ejemplo, aprenderemos cómo utilizar el método `emit` para transferir eventos entre componentes anidados.

<a href="../../publics/examples/event-passing/demo.html" preview demo></a>
<a href="../../publics/examples/event-passing/comp-one.html" main demo></a>
<a href="../../publics/examples/event-passing/comp-two.html" demo></a>
