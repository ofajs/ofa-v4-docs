<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview></a>
<a href="../../publics/examples/nested-component/comp-one.html" main></a>
<a href="../../publics/examples/nested-component/comp-two.html"></a>
</template>

# Componentes anidados

Poner toda la lógica en un solo componente no es una elección sabia; podemos dividir la lógica en componentes separados y luego importar otro componente mediante `l-m` para usarlo;

En el ejemplo, se importa un componente anidado llamado CompTwo utilizando `<l-m src="./comp-two.html"></l-m>`.

Se utiliza el componente anidado mediante `<comp-two :txt="val"></comp-two>` y se pasa la propiedad val del componente actual como propiedad txt al componente anidado. De esta manera, el componente anidado puede utilizar los datos pasados para renderizar.

En `<comp-two></comp-two>`, se utiliza el componente anidado sin pasar ninguna propiedad. La forma en que se utiliza depende de la lógica y el diseño del componente anidado en sí.

Una vez que un componente se carga correctamente, se puede utilizar en cualquier lugar utilizando su nombre correspondiente. Incluso si se carga el mismo componente varias veces en diferentes lugares usando el componente 'l-m', no se volverá a cargar. Este mecanismo garantiza la reutilización y consistencia de los componentes.
