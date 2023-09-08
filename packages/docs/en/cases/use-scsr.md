# Using SCSR Solution

In this example, please click the <span style='font-family: "iconfont"'>&#xe7cb;</span> button to open and try in a new page;

SCSR stands for Static Client-Side Rendering, which is a variant of CSR (Client-Side Rendering). It retains the user experience of CSR while allowing the page to be crawled by search engines in its static state.

The current website is built using the SCSR solution.

SCSR achieves rendering on the page by directly running the single-file mode of the page module, without using the 'o-page' tag. Specifically, the template code of the page module is directly nested within 'o-app'.

## Precautions

For all pages using the SCSR solution, besides descriptive contents of the page (such as title, meta:description, keywords) and the template content of the page module, other referenced resources must remain consistent to ensure a consistent user experience after page navigation and refreshing.

<a href="../../publics/examples/use-scsr/page1.html" main demo preview></a>
<a href="../../publics/examples/use-scsr/page2.html" demo></a>
<a href="../../publics/examples/use-scsr/public.css" demo></a>
<a href="../../publics/examples/use-scsr/app-config.mjs" demo></a>

