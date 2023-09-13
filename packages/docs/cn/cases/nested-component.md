<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview demo></a>
<a href="../../publics/examples/nested-component/comp-one.html" main demo></a>
<a href="../../publics/examples/nested-component/comp-two.html" demo></a>
</template>

# 嵌套组件

全部过多的逻辑放到一个组件上，不是一个明智的选择；我们可以将逻辑分到另外的组件，在通过 `l-m` 方式导入另一个组件来使用；

案例中通过 `<l-m src="./comp-two.html"></l-m>` 引入了名为 CompTwo 的嵌套组件。

通过 `<comp-two :txt="val"></comp-two>` 使用了嵌套组件，并将当前组件的 val 属性作为 txt 属性传递给嵌套组件。这样，嵌套组件可以使用传递过来的数据进行渲染。

在 `<comp-two></comp-two>` 中，我们在不传递任何属性的情况下使用了嵌套组件。这里的使用方式取决于嵌套组件本身的逻辑和设计。

只要一个组件加载成功，无论在何处，都可以使用相应名称的组件。即使在多个地方多次使用 `l-m` 组件加载相同的组件，也不会导致组件被多次加载。这种机制保证了组件的重用和一致性。
