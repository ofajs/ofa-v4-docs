import crypto from "crypto";
import { marked } from "marked";
import { readDir, write } from "../../BaseReader/index.mjs";
import setting from "./setting.mjs";
import fanyi from "./fanyi.mjs";

const { entry, caches, needs } = setting;

const init = async () => {
  const cachesReader = await readDir(caches);

  for (let lang of needs) {
    const langCaches = await cachesReader.read(lang, true);

    const names = await langCaches.names();

    // 将原文转换成段落哈希和哈希文章
    const { hashObj } = await getHashLineData(await readDir(entry));

    const hashEntries = Object.entries(hashObj);

    const total = hashEntries.length;

    // 将已存在的翻译剔除
    const needTrans = hashEntries.filter((e) => !names.includes(e[0]));

    let count = total - needTrans.length;

    // 将所有文案进行分组，保持一组的文案在1k内
    // 确保每次翻译的字符串在 1k 左右
    let cacheObj = {};
    for (let i = 0, len = needTrans.length; i < len; i++) {
      const [hash, content] = needTrans[i];
      cacheObj[hash] = content;

      // 判断是否超过1k
      const nowLen = JSON.stringify(Object.values(cacheObj));

      if (nowLen.length > 1000 || i === len - 1) {
        const ens = Object.entries(cacheObj);

        const afterArr = await fanyi(
          ens.map((e) => e[1]),
          lang
        );

        await Promise.all(
          ens.map(async ([hash], index) => {
            const result = afterArr[index];

            await langCaches.write(hash, result);
            count++;
          })
        );

        cacheObj = {};

        console.clear();
        console.log(`翻译 ${lang} 中：${count} / ${total}`);
      }
    }

    console.log(`翻译 ${lang} 完成`);
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
  const names = await inputer.names();
  for (let name of names) {
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
