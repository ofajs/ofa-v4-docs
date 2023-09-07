import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
// 本地翻译缓存目录
const cacheDirs = path.resolve(__filename, "../../caches");

export default {
  // 入口文件
  entry: "/Users/huangyao/Documents/GitHub/ofa-v4-docs/packages/docs",
  // 主要语言
  mainLang: "cn",
  // 本地存放段落翻译的地方
  caches: cacheDirs,
  // 需要翻译的版本
  needs: ["t-cn", "en"],
};

// 语言显示映射表
export const langMapping = {
  cn: "简体中文",
  "t-cn": "繁体中文",
  en: "English",
};
