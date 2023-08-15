import { readDir } from "./base.mjs";

globalThis.readDir = readDir;

// 文档入口目录
const entryDir = "/Users/huangyao/Documents/GitHub/ofa-v4-docs/packages/docs";

(async () => {
  const dirData = await readDir(entryDir);

  // 第一层只获取目录，判断内部有 config 的情况下，为一个语言的文档网站
  console.log("dirData => ", dirData);
})();

setTimeout(() => {}, 10000000);
