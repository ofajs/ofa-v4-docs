<template is="exm-article">
<a href="../../publics/examples/property-transmission/demo.html" preview></a>
<a href="../../publics/examples/property-transmission/test-demo.html" main></a>
</template>

# Property Transmission

With the **property transmission** template syntax, you can apply the component's data to element attributes within the template.

The method is to add the attribute `:name="key"` to the element, where `name` is the name of the target element attribute to be set, and `key` is the property key you want to pass from your custom component.

之前在提到了<a href='./index.html' olink>使用选择器的方式来设置属性</a>，而这里介绍的是属性传递语法设置属性；
