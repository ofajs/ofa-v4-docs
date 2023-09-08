import { readDir } from "../../BaseReader/index.mjs";
import setting from "./setting.mjs";
import fanyi from "./fanyi.mjs";
import { getHashLineData } from "./util.mjs";

const { entry, mainLang, caches, needs } = setting;

const init = async () => {
  const cachesReader = await readDir(caches);

  for (let lang of needs) {
    const langCaches = await cachesReader.read(lang, true);

    const names = await langCaches.names();

    // 将原文转换成段落哈希和哈希文章
    const { hashObj } = await getHashLineData(
      await readDir(`${entry}/${mainLang}`)
    );

    const hashEntries = Object.entries(hashObj);

    const total = hashEntries.length;

    // 将已存在的翻译剔除
    const needTrans = hashEntries.filter((e) => !names.includes(e[0]));

    let count = total - needTrans.length;

    // 将所有文案进行分组，保持一组的文案在1k内
    // 确保每次翻译的字符串在 1k 左右
    let cacheObj = {},
      cacheCount = 0;
    for (let i = 0, len = needTrans.length; i < len; i++) {
      const [hash, content] = needTrans[i];
      cacheObj[hash] = content;

      // 判断是否超过1k
      const nowLen = JSON.stringify(Object.values(cacheObj));
      cacheCount++;

      if (nowLen.length > 1000 || i === len - 1) {
        const ens = Object.entries(cacheObj);

        console.log(`开始翻译 ${lang} ：${count} - ${count + cacheCount}`);
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
        cacheCount = 0;

        console.clear();
        console.log(`已翻译 ${lang} ：${count} / ${total}`);
      }
    }

    if (names.length > hashEntries.length) {
      const usefullKeys = Object.keys(hashObj);

      // 删除多余的段落翻译
      const unuseFullKeys = names.filter((e) => !usefullKeys.includes(e));

      unuseFullKeys.forEach((name) => {
        langCaches.remove(name);
      });

      console.log(
        `删除 ${lang} 中多余的段落数据：${unuseFullKeys.length}条完成`
      );
    }

    console.log(`翻译 ${lang} 完成`);
  }
};

// init();

setTimeout(init, 3000);
// setTimeout(() => {}, 1000000);
