<template is="exm-article">
<a href="../../publics/examples/simple-btn/demo.html" preview></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main></a>
</template>

# Component Slots

By adding `<slot></slot>` tags in the template, you can place content in the slots inside the corresponding component tags when using the component.

Custom components do not have the `display` property defined by default, so it needs to be manually defined for the component. In the component's style, the `:host` selector can be used to add styles to the component itself.

This example showcases the usage of the 'use-app' component. It contains multiple links that lead to different pages.

