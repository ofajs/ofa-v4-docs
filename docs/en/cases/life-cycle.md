<template is="exm-article">
<a href="../../publics/examples/life-cycle/demo.html" preview></a>
<a href="../../publics/examples/life-cycle/test-demo.html" main></a>
</template>

# Lifecycle

Lifecycle hooks provide an opportunity to execute code at different stages of a component. In `ofa.js`, there are five main lifecycle hooks, which are `created`, `ready`, `watch`, `attached`, and `detached`.

- **created()**: Called when the component is created, at this time the shadow root has not started rendering. You can perform some initialization settings here, but you cannot access the elements inside the shadow root.

- **ready()**: Called after the shadow root has finished rendering, usually used for component initialization logic. At this stage, you can access and manipulate the elements inside the shadow root, as well as perform other operations that need to be executed after rendering is completed.

- **watch**: Listen for changes in data by defining a `watch` object. After the `ready` event, the corresponding value on the `data` object will trigger a `watch`. Afterwards, whenever the value of the corresponding key changes, the corresponding function in the `watch` object will be triggered.

- **attached()**: Called when the component is added to the document, at this time you can perform operations that interact with the external environment, such as obtaining the appearance of the component or initializing shared data.

- **detached()**: Called when the component is removed from the document. At this stage, you can perform cleanup work, cancel interactions with the external environment, and release resources.


