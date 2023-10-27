<template is="exm-article">
<a href="../../publics/examples/sync-state/demo.html" preview></a>
<a href="../../publics/examples/sync-state/is-dark.js"></a>
<a href="../../publics/examples/sync-state/simple-btn.html" main></a>
<a href="../../publics/examples/sync-state/switch-dark.html"></a>
</template>

# State Synchronization

Sometimes it is necessary for multiple component instances or pages to share the same piece of data, and this is where the functionality of state synchronization is needed.

Use the `$.stanz` method to create shareable data; if you need to share this data in a component, you should bind the data to the component in the `attached` method.

Note: It is necessary to clear the bound data during the detached cycle, otherwise there will be a memory leak.

In this example, we demonstrate how to use state synchronization to achieve the switch of dark mode. First, we use the `$.stanz` method to create a data object named `isDark`, which can be shared among multiple components. This allows different component instances to share data and achieve the switch of dark mode.