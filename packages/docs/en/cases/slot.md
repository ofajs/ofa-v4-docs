This example demonstrates how to create a component called 'sync'. The component's template contains multiple links. Note that only strings or numbers can be passed as data for syncing, other data types are not supported.

# Component Slots

By adding `<slot></slot>` tags in the template, you can place content in the slots inside the corresponding component tags when using the component.

Custom components do not have the `display` property defined by default, so it needs to be manually defined for the component. In the component's style, the `:host` selector can be used to add styles to the component itself.

This example showcases the usage of the 'use-app' component. It contains multiple links that lead to different pages.

