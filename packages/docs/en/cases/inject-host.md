# inject-host component

Due to the isolation of Web Components, it is difficult to directly modify the styles of elements inside component slots. To address this issue, ofa.js provides a component called `inject-host`, which injects styles into the host layer to configure the appearance of the component more flexibly.

It should be noted that using this component may affect the styles of the host layer. Therefore, when intruding on styles, naming conventions should be maintained to avoid affecting the styles of the host.

In the example, we defined the `comp-two` component, which internally uses the `inject-host` component to inject styles. This allows us to style the elements inside the `comp-two` component using the injected styles without affecting other components.

At the same time, the following points should also be noted:

- By adding `<style>` tags inside `inject-host`, we can define specific styles for the component. These styles will only affect the elements of the current component and will not spread to other components.
- When injecting styles, it is important to avoid using overly generic selectors to prevent affecting the styles of other components. Specificity and uniqueness of selectors should be maintained.
- `inject-host` can also inject external style sheet files using the `<link rel="stylesheet" href="target/style.css">` approach.

Throughout the example, by using the `inject-host` inside the `comp-two` component, we can flexibly set and apply internal styles of the component without breaking the styles of other components.

<a href="../../publics/examples/inject-host/demo.html" preview demo></a>
<a href="../../publics/examples/inject-host/comp-one.html" demo></a>
<a href="../../publics/examples/inject-host/comp-two.html" main demo></a>

