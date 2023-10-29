<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# Sincronización de estados

A veces es necesario que varias instancias de componentes o páginas compartan los mismos datos, en este caso es necesario contar con la función de sincronización de estado.

Utilice el método `$.stanz` para crear datos compartidos; si desea compartir estos datos en un componente, debe vincular los datos al componente en el momento de adjuntarlo.

Se necesita borrar los datos vinculados durante el ciclo de "detached" para evitar una fuga de memoria.

En este ejemplo, mostramos cómo usar la función de sincronización de estado para implementar el cambio de modo oscuro. Primero, usamos el método `$.stanz` para crear un objeto de datos llamado `isDark`, que puede ser compartido entre varios componentes. Esto permite que las diferentes instancias de los componentes compartan datos y logren el cambio de modo oscuro.