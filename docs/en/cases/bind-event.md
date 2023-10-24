<template is="exm-article">
<a href="../../publics/examples/bind-event/demo.html" preview></a>
<a href="../../publics/examples/bind-event/test-demo.html" main></a>
</template>

# Event Binding

In the component, you can use the `on` attribute to bind events and enable interactivity for the component. Here is a demonstration of how to bind events in a component to achieve interactive effects.

The `proto` parameter is used to define the methods of the component itself. These methods can be used internally within the component or can be executed externally after obtaining the component through a selector.

`on:click="xxx"` can be followed by either a method name defined within the component or a function expression. If using a function expression, there is no need to explicitly write the `this` keyword, as the variable scope will automatically be bound to the component itself.

If you want to learn more about the available event types, please refer to the [Events](https://developer.mozilla.org/en-US/docs/Web/Events) documentation.
