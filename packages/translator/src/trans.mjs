import crypto from "crypto";
import { marked } from "marked";
import { readDir, write } from "../../generator/src/base.mjs";
import setting from "./setting.mjs";
import fanyi from "./fanyi.mjs";

const { entry, caches, needs } = setting;

const init = async () => {
  const cacheHander = await readDir(caches);

  for (let lang of needs) {
    // 将原文转换成段落哈希和哈希文章
    const { hashObj, articles } = await getHashLineData(await readDir(entry));

    for (let [hash, content] of Object.entries(hashObj)) {
      const tContent = await fanyi(content, lang);

      debugger;
    }
  }
};

setTimeout(init, 3000);
setTimeout(() => {}, 1000000);

// 获取所有的正文内容，并进行哈希匹配
const getHashLineData = async (
  inputer,
  path = "",
  hashObj = {},
  articles = {}
) => {
  for (let name of inputer) {
    const data = await inputer.read(name);

    if (data.name) {
      await getHashLineData(data, `${path}/${name}`, hashObj, articles);
      continue;
    }

    if (!/\.md$/.test(name)) {
      continue;
    }

    // 去除无用行数
    const mdDatas = marked.lexer(data).filter((e) => e.type !== "space");

    const articleHash = [];

    for (let e of mdDatas) {
      const { raw } = e;
      const hash = calculateHash(raw);
      hashObj[hash] = raw;
      articleHash.push(hash);
    }

    articles[`${path}/${name}`] = articleHash;
  }

  return { hashObj, articles };
};

function calculateHash(str) {
  const hash = crypto.createHash("sha256");
  hash.update(str);
  return hash.digest("hex");
}
