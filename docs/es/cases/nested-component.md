<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview></a>
<a href="../../publics/examples/nested-component/comp-one.html" main></a>
<a href="../../publics/examples/nested-component/comp-two.html"></a>
</template>

# Componentes anidados

全部过多的逻辑放到一个组件上，不是一个明智的选择；我们可以将逻辑分到另外的组件，在通过 `l-m` 方式导入另一个组件来使用；

En el ejemplo se importa el componente anidado llamado CompTwo a través de `<l-m src="./comp-two.html"></l-m>`.

A través de `<comp-two :txt="val"></comp-two>`, se usa un componente anidado y se pasa el atributo val del componente actual como atributo txt al componente anidado. De esta manera, el componente anidado puede usar los datos pasados para realizar la renderización.

En `<comp-two></comp-two>`, estamos usando un componente anidado sin pasar ningún atributo. La forma en que se utiliza aquí depende de la lógica y el diseño del componente anidado.

Si un componente se carga correctamente, sin importar dónde, se puede utilizar el componente con el nombre correspondiente. Incluso si se utiliza el componente "l-m" para cargar el mismo componente varias veces en diferentes lugares, esto no provocará que el componente se cargue varias veces. Este mecanismo garantiza la reutilización y coherencia de los componentes.
