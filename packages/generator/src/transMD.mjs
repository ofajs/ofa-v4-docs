import { marked } from "marked";

export default async function transMD(inputer, outputer, configUrl) {
  inputer.forEach(async (name) => {
    const target = await inputer.read(name);

    if (target.name) {
      const nextOupter = await outputer.mkdir(name);

      // 对目录进行递归
      transMD(
        target,
        nextOupter,
        configUrl === !/^\./.test(name) ? `./${configUrl}` : `../${configUrl}`
      );
      return;
    }

    if (!/\.md$/.test(name)) {
      return;
    }

    // 对md内容进行转换
    const title = target.replace(/#+ (.+)[\d\D]+/, "$1");
    const result = marked(target);

    const newName = name.replace(/(.+)\..+/, "$1") + ".html";

    outputer.write(
      newName,
      `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title || newName}</title>
    <script
      src="https://cdn.jsdelivr.net/gh/kirakiray/ofa-v4-docs@0.1.1/packages/generator/statics/init.js"
      config="${configUrl}"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/kirakiray/ofa-v4-docs@0.1.1/packages/generator/statics/css/public.css"
    />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7L1TCCJZT6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-7L1TCCJZT6');
    </script>
  </head>
  <body>
    <o-app
      src="https://cdn.jsdelivr.net/gh/kirakiray/ofa-v4-docs@0.1.1/packages/generator/statics/app-config.mjs"
    >
      <template page>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/kirakiray/ofa-v4-docs@0.1.1/packages/generator/statics/css/github-markdown.css"
        />
        <article class="markdown-body">
        ${result}
        </article>
        <script>
          export const parent =
            "https://cdn.jsdelivr.net/gh/kirakiray/ofa-v4-docs@0.1.1/packages/generator/statics/pages/article-layout.html";
        </script>
      </template>
    </o-app>
    <div class="outer-layer" id="outer-layer">
      <div class="loading"></div>
    </div>
  </body>
</html>
`
    );
  });
}
