import { readDir } from "./base.mjs";
import transConfig from "./transCOnfig.mjs";
import transMD from "./transMD.mjs";
import path from "path";
import { fileURLToPath } from "url";

// 文档入口目录
const __filename = fileURLToPath(import.meta.url);
const entryDir = path.resolve(__filename, "../../../docs");

// 文档输出目录
const outDir = path.resolve(__filename, "../../../../dist");

// 初始操作
const init = async () => {
  const entryViewer = await readDir(entryDir);
  const outPutViewer = await readDir(outDir);

  // 第一层只获取目录，判断内部有 config 的情况下，为一个语言的文档网站
  entryViewer.forEach(async (name) => {
    const inputer = await entryViewer.read(name);
    if (inputer.name === "publics") {
      await copy(inputer, await outPutViewer.mkdir("publics"));
    } else if (inputer.name && inputer.name !== "dist") {
      distTo(inputer, await outPutViewer.mkdir(name));
    }
  });
};

async function copy(entry, output) {
  for (let name of entry) {
    const target = await entry.read(name, "binary");

    if (target.path) {
      await copy(target, await output.mkdir(name));
    } else {
      await output.write(name, target, "binary");
    }
  }
}

globalThis.init = init;

// 输出文件到指定目录
const distTo = async (inputer, outputer) => {
  let configDataStr = await inputer.read("config.json");

  if (!configDataStr) {
    return;
  }

  const cData = JSON.parse(configDataStr);

  const docConfig = await transConfig(cData, inputer);

  await outputer.write("doc-config.json", JSON.stringify(docConfig));

  cData.groups.forEach(async (e) => {
    const { path, type } = e;

    transMD(
      await inputer.read(path),
      await outputer.mkdir(path),
      "../doc-config.json",
      type
    );
  });
};

// init();

// setTimeout(init, 2000);
// setTimeout(() => {}, 10000000);
