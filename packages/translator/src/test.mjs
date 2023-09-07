import { chat } from "./fanyi.mjs";

async function main() {
  const arr = [
    "**ofa.js** 符合了微前端的五个核心特点：",
    "1. **独立部署**：每个组件和页面都可以独立地开发、测试和部署，这使得团队能够更迅速地发布新功能和解决问题。",
  ];

  console.log("chat: ", await chat(`将数组内的 markdown 翻译成英文：${JSON.stringify(arr)}`));
}

globalThis.test = main;

setTimeout(() => {}, 10000000);
