<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# State Synchronization

Sometimes it is necessary for multiple component instances or pages to share the same piece of data, and this is where the functionality of state synchronization is needed.

Use the `$.stanz` method to create shared data; on the components that need to share this data, bind the data to the component in the attached lifecycle phase;

Note that data binding in the detached lifecycle needs to be cleared to prevent memory leaks.

In this example, we demonstrate how to use state synchronization to achieve the switch of dark mode. First, we use the `$.stanz` method to create a data object named `isDark`, which can be shared among multiple components. This allows different component instances to share data and achieve the switch of dark mode.