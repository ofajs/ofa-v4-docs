<template is="exm-article">
<a href="../../publics/examples/inject-host/demo.html" preview></a>
<a href="../../publics/examples/inject-host/comp-one.html"></a>
<a href="../../publics/examples/inject-host/comp-two.html" main></a>
</template>

# inject-host 组件

鉴于 Web Components 的隔离性，很难直接修改组件插槽内元素的样式。为了应对这个问题，ofa.js 提供了一个名为 `inject-host` 的组件；`inject-host` 组件会向宿主层注入样式，从而更灵活地配置组件的外观。

需要注意的是，使用此组件可能会影响宿主层的样式。因此，在侵入样式时应保持命名的规范性，以避免影响宿主的样式。

示例中，我们定义了 `comp-two` 组件，内部使用了 `inject-host` 组件来注入样式。这使得我们可以通过注入的样式对 `comp-two` 组件内的元素进行样式设置，而不会影响到其他组件。

同时，以下内容也需要特别注意：

- 通过在 `inject-host` 内添加 `<style>` 标签，我们可以定义组件内的特定样式。这些样式只会影响到当前组件的元素，而不会波及到其他组件。
- 在注入样式时，应当避免使用过于普通的选择器，以免影响到其他组件的样式。需要保持选择器的唯一性和特定性。
- `inject-host` 也可以注入外部的样式表文件，通过 `<link rel="stylesheet" href="target/style.css">` 的方式。

在整个示例中，通过使用 `comp-two` 组件内的 `inject-host`，我们可以在不破坏其他组件样式的情况下，灵活地设置并应用组件内部的样式。
