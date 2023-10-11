<template is="exm-article">
<a href="../../publics/examples/event-passing/demo.html" preview></a>
<a href="../../publics/examples/event-passing/comp-one.html" main></a>
<a href="../../publics/examples/event-passing/comp-two.html"></a>
</template>

# Event Propagation

Besides listening for native events, `on` can also be used to listen for custom events, which is very important for event communication between components. Custom events are triggered through the `emit` method. By triggering custom events, custom data can be passed to the receiving party.

If you need to cross Shadow DOM boundaries between components to trigger an event, you can add the `composed` attribute.

In the following example, we will learn how to use the `emit` method to pass events between nested components.
