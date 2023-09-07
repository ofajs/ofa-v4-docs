# 嵌套组件

Putting all the excessive logic into one component is not a wise choice; we can divide the logic into separate components and import another component using the `l-m` method.

The nested component named CompTwo is imported through `<l-m src="./comp-two.html"></l-m>` in the example case.

The nested component is used through `<comp-two :txt="val"></comp-two>` and the val property of the current component is passed as the txt property to the nested component. This way, the nested component can use the passed data for rendering.

In `<comp-two></comp-two>`, the nested component is used without passing any properties. The usage here depends on the logic and design of the nested component itself.

Once a component is successfully loaded, it can be used anywhere using the corresponding component name. Even if the `l-m` component is used to load the same component multiple times in different places, the component will not be loaded multiple times. This mechanism ensures component reuse and consistency.

<a href="../../publics/examples/nested-component/demo.html" preview demo></a>
<a href="../../publics/examples/nested-component/comp-one.html" main demo></a>
<a href="../../publics/examples/nested-component/comp-two.html" demo></a>

