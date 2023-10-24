# Text rendering

You can use double curly braces `{{xxx}}` within the template to render text, where `xxx` is the property of a component or page itself. This allows you to directly render the value of the property onto the page.

The following is an example that demonstrates how to render text in a template: .

<comp-viewer comp-name="text-render">

```html
<template component>
    render test: {{txt}}
    <script>
        export default {
            tag: "text-render",
            data: {
                txt: "I am txt"
            },
        };
    </script>
</template>
```

</comp-viewer>

In this example, `{{txt}}` will be replaced by the value of the `txt` property and finally rendered on the page.