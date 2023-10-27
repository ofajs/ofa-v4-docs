<template is="exm-article">
<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html"></a>
<a href="../../publics/examples/use-scsr/public.css"></a>
<a href="../../publics/examples/use-scsr/app-config.mjs"></a>
</template>

# Using SCSR Solution

In this example, please click the <span style='font-family: "iconfont"'>&#xe7cb;</span> button to open and try in a new page;

SCSR, short for Static Client-Side Rendering, is also known as static client-side rendering. It is a variant of CSR (Client-Side Rendering) that preserves the user experience of CSR and allows web pages to be crawled by search engines while being in a static state.

The current website adopts the SCSR solution for construction.

SCSR achieves rendering on the page by directly running the single-file mode of the page module, without using the `o-page` tag. Specifically, the template code of the page module is directly nested inside the `o-app`.

## Caveat

For all pages using the SCSR scheme, except for descriptive content such as title, meta:description, keywords, and page template content, all referenced resources must remain consistent to ensure a consistent user experience after page redirection and refresh.