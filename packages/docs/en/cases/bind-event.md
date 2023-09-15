<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

# Event Binding

Within the component, you can use the `on` attribute to bind events and make the component interactive. This demonstrates how to bind events within a component to achieve interactive effects.

The `proto` parameter is used to define the component's own methods, which can be used internally within the component or externally by selecting the component and running the methods.

The `xxx` after `on:click="xxx"` can be the method name defined within the component or a function expression. If using a function expression, the `this` keyword does not need to be explicitly written, as the variable scope will be automatically bound to the component itself.

If you want to learn more about available event types, please refer to the [Events](https://developer.mozilla.org/en-US/docs/Web/Events) documentation.

