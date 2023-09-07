import { chat } from "./fanyi.mjs";

async function main() {
  console.log("chat: ", await chat("你是谁？"));
}

globalThis.test = main;

setTimeout(() => {}, 10000000);
