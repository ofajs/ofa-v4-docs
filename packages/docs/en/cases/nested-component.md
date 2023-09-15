<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview></a>
<a href="../../publics/examples/nested-component/comp-one.html" main></a>
<a href="../../publics/examples/nested-component/comp-two.html"></a>
</template>

# 嵌套组件

Putting all the excessive logic into one component is not a wise choice; we can divide the logic into separate components and import another component using the `l-m` method.

The nested component named CompTwo is imported through `<l-m src="./comp-two.html"></l-m>` in the example case.

The nested component is used through `<comp-two :txt="val"></comp-two>` and the val property of the current component is passed as the txt property to the nested component. This way, the nested component can use the passed data for rendering.

In `<comp-two></comp-two>`, the nested component is used without passing any properties. The usage here depends on the logic and design of the nested component itself.

只要一个组件加载成功，无论在何处，都可以使用相应名称的组件。即使在多个地方多次使用 `l-m` 组件加载相同的组件，也不会导致组件被多次加载。这种机制保证了组件的重用和一致性。
