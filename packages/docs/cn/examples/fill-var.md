# 填充渲染

填充渲染（x-fill）模板在前端框架中类似于列表渲染的概念，它允许您根据数据集合动态地渲染一组微型组件。

在填充渲染过程中，您可以使用以下特殊变量：

- **$data**：代表填充项的数据。通过操作 $data，您可以获取或修改每个填充项的数据。
- **$index**：代表当前数据项在数据集合中的索引。
- **$host**：代表当前组件自身。如果您想要获取组件的数据或调用组件的方法，需要使用 $host 来访问组件。

<a href="../../publics/examples/fill-var/demo.html" preview demo></a>
<a href="../../publics/examples/fill-var/test-demo.html" main demo></a>

