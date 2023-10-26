<template is="exm-article">
<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html"></a>
<a href="../../publics/examples/use-scsr/public.css"></a>
<a href="../../publics/examples/use-scsr/app-config.mjs"></a>
</template>

# 使用 SCSR 方案

在这个示例中，请点击 <span style='font-family: "iconfont"'>&#xe7cb;</span> 按钮，以新页面的方式打开并尝试；

SCSR 的全称是 Static Client-Side Rendering，又称为静态客户端渲染。它是 CSR（Client-Side Rendering）的一种变种，在保留了 CSR 用户体验的基础上，还能够让页面在静态状态下被搜索引擎爬取。

現在のウェブサイトは、SCSR案を採用して構築されています。

SCSRは、単一ファイルモードのページモジュールを直接実行することにより、ページ上でのレンダリングを実現します。具体的には、ページモジュールのテンプレートコード��直接 `o-app` 内にネストします。

注意事項

对于所有采用 SCSR 方案的页面，除了页面描述性的内容（如 title、meta:description、keywords）和页面模板内容外，其他引用的资源必须保持一致，以确保在页面跳转和刷新后的用户体验一致。