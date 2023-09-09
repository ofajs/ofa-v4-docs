# 组件的创建和使用

一旦完成对 ofa.js 的加载，全局会注册一个名为 `load-module` 的组件，你可以使用缩写 `l-m` 来引用它。其使用方式类似于 `script` 标签，通过 `src` 属性来引用你开发好的组件地址。

现在，让我们开始制作自己的组件。首先，创建一个 HTML 文件，文件名需要与组件名保持一致。

在组件文件中，首先添加一个 `template` 元素，并添加 `component`属性。将组件需要渲染的内容放置在这个 `template` 元素内。最终，这些内容将被渲染到组件的 Shadow DOM 内，Shadow DOM 与外部环境隔离，以防止污染外部环境。

接下来，只需使用 `l-m` 组件来引用你开发好的组件。在页面上，直接使用你定义的组件标签即可。

需要注意的是，注册的组件名只能使用小写英文字母和 **-** 符号，并且必须包含至少一个 **-**。这个命名规则需要遵循。

通过本示例，你可以了解如何创建一个名为 `my-comp` 的组件，并在另一个页面中使用它。同时可以通过链接外部的 CSS 文件来设置组件的样式。

<a href="../../publics/examples/simple-component/demo.html" preview demo></a>
<a href="../../publics/examples/simple-component/my-comp.html" main demo></a>
<a href="../../publics/examples/simple-component/public.css" demo></a>