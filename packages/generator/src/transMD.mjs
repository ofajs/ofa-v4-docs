import { marked } from "marked";

export default async function transMD(inputer, outputer, configUrl, type) {
  inputer.forEach(async (name) => {
    if (name === "SUMMARY.md") {
      return;
    }

    const target = await inputer.read(name);

    if (target.name) {
      const nextOupter = await outputer.mkdir(name);

      // 对目录进行递归
      transMD(
        target,
        nextOupter,
        configUrl === !/^\./.test(name) ? `./${configUrl}` : `../${configUrl}`,
        type
      );
      return;
    }

    if (!/\.md$/.test(name)) {
      return;
    }

    // 对md内容进行转换
    const title = target.replace(/#+ (.+)[\d\D]+/, "$1").trim();
    const result = marked(target);

    const newName = name.replace(/(.+)\..+/, "$1") + ".html";

    // const root = `http://127.0.0.1:5500`;
    const root = `https://cdn.jsdelivr.net/gh/kirakiray/ofa-v4-docs@0.3.0`;

    const agentCode = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7L1TCCJZT6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-7L1TCCJZT6');
    </script>
    `;

    if (type === "document") {
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
        src="${root}/packages/statics/init.js"
        config="${configUrl}"
      ></script>
      <link
        rel="stylesheet"
        href="${root}/packages/statics/css/public.css"
      />
      ${!root.includes("127.0.0.1") ? agentCode : ""}
    </head>
    <body>
      <o-app
        src="${root}/packages/statics/app-config.mjs"
      >
        <template page>
          <link
            rel="stylesheet"
            href="${root}/packages/statics/css/github-markdown.css"
          />
          <style>article{padding:16px 0 32px;}</style>
          <article class="markdown-body">
          ${result}
          <article-footer></article-footer>
          </article>
          <script>
            import pageInit from '${root}/packages/statics/page-init.mjs';

            export const parent = "${root}/packages/statics/pages/article-layout.html";
            export default async (...args)=> {
              return await pageInit(PATH,args);
            }
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
    } else if (type === "example") {
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
      src="${root}/packages/statics/init.js"
      config="${configUrl}"
    ></script>
    <link
      rel="stylesheet"
      href="${root}/packages/statics/css/public.css"
    />
    ${!root.includes("127.0.0.1") ? agentCode : ""}
  </head>
  <body>
    <o-app
      src="${root}/packages/statics/app-config.mjs"
    >
      <template page>
        <link
          rel="stylesheet"
          href="${root}/packages/statics/css/github-markdown.css"
        />
        <exm-article>
          <article class="markdown-body" data-no-right>
          ${result}
          <article-footer></article-footer>
          </article>
        </exm-article>
        <script>
          import pageInit from '${root}/packages/statics/page-init.mjs';

          export const parent = "${root}/packages/statics/pages/article-layout.html";
          export default async (...args)=> {
            return await pageInit(PATH,args);
          }
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
    }
  });
}
