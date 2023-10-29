<template is="exm-article">
<a href="../../publics/examples/event-demo.html" preview></a>
</template>

# Respuesta a eventos

Puede usar el método `on` para asociar eventos. **Eventos** es uno de los conceptos fundamentales en el desarrollo, a través de la activación de eventos, la aplicación puede generar respuestas y lograr la interactividad.

El siguiente ejemplo muestra cómo unir un evento de clic:

En este ejemplo, seleccionamos el elemento `button` utilizando `$` y vinculamos el evento `click` con el método `on`. Cuando se hace clic en el botón, se activa la función de devolución de llamada que cambia el contenido de texto del elemento `target` a "¡Hola mundo!"

Si desea obtener más información sobre los tipos de eventos disponibles, consulte el documento [Eventos](https://developer.mozilla.org/en-US/docs/Web/Events).
