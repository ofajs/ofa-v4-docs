<template is="exm-article">
<a href="../../publics/examples/nested-component/demo.html" preview></a>
<a href="../../publics/examples/nested-component/comp-one.html" main></a>
<a href="../../publics/examples/nested-component/comp-two.html"></a>
</template>

＃ネストされたコンポーネント

全部过多的逻辑放到一个组件上，不是一个明智的选择；我们可以将逻辑分到另外的组件，在通过 `l-m` 方式导入另一个组件来使用；

案例中通过 `<l-m src="./comp-two.html"></l-m>` 引入了名为 CompTwo 的嵌套组件。

通过 `<comp-two :txt="val"></comp-two>` 使用了嵌套组件，并将当前组件的 val 属性作为 txt 属性传递给嵌套组件。这样，嵌套组件可以使用传递过来的数据进行渲染。

;Ignore bugs;
`<comp-two></comp-two>`では、プロパティを渡さずにネストされたコンポーネントを使用しています。この使用方法は、ネストされたコンポーネント自体のロジックとデザインに依存します。

コンポーネントが正常にロードされていれば、どこからでも対応する名前のコンポーネントを使用できます。同じコンポーネントを `l-m` コンポーネントを複数の場所で複��回ロードしても、コンポーネントは複数回ロードされることはありません。この仕組みにより、コンポーネントの再利用と一貫性が確保されます。