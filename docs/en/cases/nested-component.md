<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview></a>
<a href="../../publics/examples/nested-component/comp-one.html" main></a>
<a href="../../publics/examples/nested-component/comp-two.html"></a>
</template>

# Nested Components

It is not a wise choice to put all excessive logic in one component; we can separate the logic into another component and import it in the current component using the `l-m` approach.

In the case, the nested component named CompTwo is imported using `<l-m src="./comp-two.html"></l-m>`.

By using `<comp-two :txt="val"></comp-two>`, a nested component is used and the val attribute of the current component is passed to the nested component as txt attribute. This way, the nested component can render using the passed data.

In `<comp-two></comp-two>`, we used nested components without passing any properties. The usage here depends on the logic and design of the nested component itself.

As long as a component is successfully loaded, it can be used anywhere with its corresponding name. Even if the "l-m" component is loaded multiple times in different places, it will not cause the component to be loaded multiple times. This mechanism ensures component reuse and consistency.
