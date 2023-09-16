<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview></a>
<a href="../../publics/examples/nested-component/comp-one.html" main></a>
<a href="../../publics/examples/nested-component/comp-two.html"></a>
</template>

# Nested Components

Putting all the excessive logic into one component is not a wise choice; we can divide the logic into separate components and import another component using the `l-m` method.

The nested component named CompTwo is imported through `<l-m src="./comp-two.html"></l-m>` in the example case.

The nested component is used through `<comp-two :txt="val"></comp-two>` and the val property of the current component is passed as the txt property to the nested component. This way, the nested component can use the passed data for rendering.

In `<comp-two></comp-two>`, the nested component is used without passing any properties. The usage here depends on the logic and design of the nested component itself.

As long as a component loads successfully, it can be used anywhere using its respective name. Even if the `l-m` component is loaded multiple times in different places, it won't result in the component being loaded multiple times. This mechanism ensures component reusability and consistency.
