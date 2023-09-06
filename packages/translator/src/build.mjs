import setting from "./setting.mjs";
import { readDir, write } from "../../BaseReader/index.mjs";
import { getHashLineData } from "./util.mjs";

const { entry, caches, needs, mainLang } = setting;

const init = async () => {
  const cachesReader = await readDir(caches);
  entry, caches, needs;

  for (let lang of needs) {
    // 已翻译过的段落的仓库
    const langLibs = await cachesReader.read(lang);

    // 将原文转换成段落哈希和哈希文章
    const { articles } = await getHashLineData(
      await readDir(`${entry}/${mainLang}`)
    );

    // 写入正文
    for (let p of Object.keys(articles)) {
      const path = `${entry}/${lang}${p}`;

      const data = articles[p];

      const articleArr = [];

      // 转换回翻译的正文
      for (let hash of data) {
        articleArr.push(await langLibs.read(hash));
      }

      let article = "";

      articleArr.forEach((e) => {
        article += /\n$/.test(e) ? e : e + "\n\n";
      });

      await write(path, article);
    }
  }

  console.log(`转换文档成功`);
};

// setTimeout(init, 3000);
init();
