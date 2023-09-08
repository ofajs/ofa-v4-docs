# Event Passing

In addition to listening for native events, `on` can also be used to listen for custom events, which is important for event communication between components. Custom events are triggered through the `emit` method. By triggering custom events, custom data can be passed to the receiver.

If you need to trigger events across the boundaries of Shadow DOM, you can add the `composed` attribute.

In the example below, we will learn how to use the `emit` method to pass events between nested components.

<a href="../../publics/examples/event-passing/demo.html" preview demo></a>
<a href="../../publics/examples/event-passing/comp-one.html" main demo></a>
<a href="../../publics/examples/event-passing/comp-two.html" demo></a>

