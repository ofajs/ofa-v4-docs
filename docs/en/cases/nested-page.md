<template is="exm-article">
<a href="../../publics/examples/nested-page/demo.html" preview></a>
<a href="../../publics/examples/nested-page/page1.html"></a>
<a href="../../publics/examples/nested-page/page2.html"></a>
<a href="../../publics/examples/nested-page/layout.html" main></a>
</template>

# Nested Pages

Some application UIs are composed of nested pages with multiple layers, such as a common top or side navigation. You can use the `parent` property to represent the parent page that the current page is nested in.

The production method of the parent page is similar to component development. You need to create a page that contains the entire framework layout, and then place the nested child pages in the `slot`.

This example demonstrates how to create nested pages, where `page1.html` and `page2.html` are subpages and `layout.html` is the parent page. The parent page `layout.html` contains the entire framework layout, while the subpages are linked to the parent page using the `parent` property, indicating that they should be nested within the parent page.

When switching pages, the "routerChange" event will be triggered. During page initialization and page switching, you can use the `app.current` property to get the current page address and adjust the activation status of the tabs in the page.