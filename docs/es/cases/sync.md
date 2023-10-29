<template is="exm-article">
<a href="../../publics/examples/sync/demo.html" preview></a>
<a href="../../publics/examples/sync/test-demo.html" main></a>
<a href="../../publics/examples/sync/custom-input.html"></a>
</template>

# Enlace de datos bidireccional

mediante el uso de la sintaxis `sync`, puede establecer una asociación bidireccional en tiempo real entre los elementos interactivos de la interfaz de usuario (como cuadros de texto o componentes personalizados) y el modelo de datos.

El siguiente ejemplo muestra cómo usar la propiedad "sync" en un componente para lograr una vinculación bidireccional entre un cuadro de texto y un modelo de datos:

- En el parámetro `data`, hemos definido un dato llamado `testText` y le hemos asignado el valor inicial "Soy testText".
- El uso de `sync:value="testText"` indica que se ha establecido una vinculación bidireccional entre el valor del campo de entrada y el dato `testText`. Por lo tanto, cuando el usuario ingresa contenido en el campo, el dato `testText` se actualizará en tiempo real, y viceversa.
- De manera similar, el uso de `sync:txt="testText"` indica que se ha establecido una vinculación bidireccional entre el atributo `txt` del componente personalizado y el dato `testText`. Cuando el atributo `txt` del componente cambie, el dato `testText` se actualizará en tiempo real, y viceversa.

A través de la vinculación de datos bidireccional, puede establecer fácilmente una conexión entre la interfaz de usuario y el modelo de datos, de modo que los cambios en los datos se reflejen automáticamente en la interfaz, al mismo tiempo que las entradas del usuario en la interfaz también afecten inmediatamente al modelo de datos.

Lo que debes tener en cuenta es que la sincronización de datos solo puede transferir **cadenas de texto** o **números**, no puede transferir otros tipos de datos.
