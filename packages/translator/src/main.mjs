import { marked } from "marked";
import chn from "chinese-s2t";
import crypto from "crypto";
import { readDir, write } from "../../generator/src/base.mjs";

// 入口文档目录
const entry = `/Users/huangyao/Documents/GitHub/ofa-v4-docs/packages/docs`;

// 主要语言
const mainLang = "cn";

// 翻译到另一个语言
const targetLang = "t-cn";

// 语言显示映射表
const langMapping = {
  "t-cn": "繁体中文",
};

// 主体翻译函数
const fanyi = async (text) => {
  return chn.s2t(text);
};

const init = async () => {
  const docsDir = await readDir(entry);

  const inputer = await docsDir.read(mainLang);
  const oupter = await docsDir.mkdir(targetLang);

  // 转换 config.json
  let configData = await inputer.read("config.json");
  configData = JSON.parse(configData);

  await Promise.all(
    configData.groups.map(async (e) => {
      e.name = await fanyi(e.name);
    })
  );

  configData.langName = langMapping[targetLang];

  oupter.write("config.json", JSON.stringify(configData));

  // 将原文转换成段落哈希和哈希文章
  const { hashObj, articles } = await getHashLineData(inputer);

  console.log("hash => ", hashObj, articles);

  const transed = {};

  // 翻译哈希正文
  for (let hash of Object.keys(hashObj)) {
    const content = hashObj[hash];

    const transContent = await fanyi(content);

    transed[hash] = transContent;
  }

  console.log("transed:", transed);

  // 写入正文
  for (let p of Object.keys(articles)) {
    const path = `${entry}/${targetLang}${p}`;

    const data = articles[p];

    // 转换回翻译的正文
    const articleArr = data.map((e) => {
      return transed[e];
    });

    let article = "";

    articleArr.forEach((e) => {
      article += /\n$/.test(e) ? e : e + "\n\n";
    });

    await write(path, article);
  }
};

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

globalThis.init = init;

init();

// setTimeout(init, 3000);

// setTimeout(() => {}, 10000000);
