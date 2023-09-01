# 使用 SCSR 方案

这个案例请点击 <span style='font-family: "iconfont"'>&#xe7cb;</span> 按钮，以用新页面的方式打开来尝试；

SCSR 全名 Static Client-Side Rendering，称为静态客户端渲染；静态客户端渲染（SCSR）是 CSR（Client-Side Rendering）的一种变种，它在保留了 CSR 用户体验的基础上，还能够让页面在静态状态下被爬虫获取。

当前网站就是 SCSR 方案构建；

SCSR 是通过直接运行单文件模式的页面模块，而无需使用 `o-page` 标签，从而实现在页面上进行渲染。具体来说，就是将页面模块的模板代码直接放在 `o-app` 内。

## 注意事项

所有采用 SCSR 方案的页面，除页面描述性的内容（如 title、meta:description、keywords）和页面模板内容外，其他引用资源必须保持一致，以确保在页面跳转和刷新后的体验一致。

<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html" demo></a>
<a href="../../publics/examples/use-scsr/public.css" demo></a>
<a href="../../publics/examples/use-scsr/app-config.mjs" demo></a>