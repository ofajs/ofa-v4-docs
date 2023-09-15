<template is="exm-article">
<a href="../../publics/examples/fill/demo.html" preview></a>
<a href="../../publics/examples/fill/test-demo.html" main></a>
</template>

# 填充渲染

填充渲染（x-fill）模板在前端框架中類似於列表渲染的概念，它允許您根據數據集合動態地渲染一組微型組件。

在填充渲染過程中，您可以使用以下特殊變量：

- **$data**：代表填充項的數據。通過操作 $data，您可以獲取或修改每個填充項的數據。
- **$index**：代表當前數據項在數據集合中的索引。
- **$host**：代表當前組件自身。如果您想要獲取組件的數據或調用組件的方法，需要使用 $host 來訪問組件。

