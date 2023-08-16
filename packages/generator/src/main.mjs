import { readDir } from "./base.mjs";
import transConfig from "./transCOnfig.mjs";
import transMD from "./transMD.mjs";

globalThis.readDir = readDir;

// 文档入口目录
const entryDir = "/Users/huangyao/Documents/GitHub/ofa-v4-docs/packages/docs";

// 文档输出目录
const outDir = "/Users/huangyao/Documents/GitHub/ofa-v4-docs/packages/website";

// 初始操作
const init = async () => {
  const entryViewer = await readDir(entryDir);
  const outPutViewer = await readDir(outDir);

  // 第一层只获取目录，判断内部有 config 的情况下，为一个语言的文档网站
  entryViewer.forEach(async (name) => {
    const inputer = await entryViewer.read(name);
    if (inputer.name && inputer.name !== "publics" && inputer.name !== "dist") {
      const outputer = await outPutViewer.mkdir(name);

      distTo(inputer, outputer);
    }
  });
};

globalThis.init = init;

// 输出文件到指定目录
const distTo = async (inputer, outputer) => {
  let configData = await inputer.read("config.json");

  if (!configData) {
    return;
  }

  const docConfig = await transConfig(JSON.parse(configData), inputer);

  await outputer.write("doc-config.json", JSON.stringify(docConfig));

  transMD(inputer, outputer, "doc-config.json");
};

setTimeout(init, 2000);
setTimeout(() => {}, 10000000);
