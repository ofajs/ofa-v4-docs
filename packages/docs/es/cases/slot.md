# Component slots

By adding '<slot></slot>' tags in the template, the content can be placed in the slot inside the corresponding component tag when using the component.

Custom components do not have the 'display' property defined by default, so it needs to be manually defined for the component. In the component's style, the ':host' selector can be used to add styles to the component itself.

This example demonstrates how to create a component named 'simple-btn'. The component's template contains a slot where content can be inserted into the component. By adding the ':host' selector to the component's style, styles can be added to the component. On another page, use the 'l-m' component to reference the 'simple-btn' component and insert content into it.

<a href="../../publics/examples/simple-btn/demo.html" preview demo></a>
<a href="../../publics/examples/simple-btn/simple-btn.html" main demo></a>

