<template is="exm-article">
<a href="../../publics/examples/inject-host/demo.html" preview></a>
<a href="../../publics/examples/inject-host/comp-one.html"></a>
<a href="../../publics/examples/inject-host/comp-two.html" main></a>
</template>

# inject-host Component

Given the isolation of Web Components, it is difficult to directly modify the styles of elements within component slots. To address this problem, ofa.js provides a component called `inject-host`; the `inject-host` component injects styles into the host layer, allowing for more flexible configuration of the component's appearance.

It should be noted that using this component may affect the styles of the host layer. Therefore, when intruding styles, naming conventions should be followed to avoid affecting the styles of the host.

In the example, we defined the `comp-two` component, which internally uses the `inject-host` component to inject styles. This allows us to style the elements inside the `comp-two` component using the injected styles without affecting other components.

At the same time, special attention should also be paid to the following content: 

- By adding `<style>` tags within `inject-host`, we can define specific styles for components. These styles will only affect the elements within the current component and will not extend to other components.
- When injecting styles, it is important to avoid using common selectors that may affect the styles of other components. It is necessary to maintain the uniqueness and specificity of the selectors.
- `inject-host` can also inject external stylesheet files using the `<link rel="stylesheet" href="target/style.css">` format.

In the entire example, by using `inject-host` in the `comp-two` component, we can flexibly set and apply the styles within the component without breaking the styles of other components.
