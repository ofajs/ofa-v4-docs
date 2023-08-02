export const type = $.COMP;

export const tag = "my-button";
export const temp = "./my-button-template.html";

export const attrs = {
  buttonText: "Click Me",
};

export const data = {
  count: 0,
};

export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};

// export default async function ({ load, url, query }) {
//   console.log("url:", url); // 输出当前模块的文件名
//   console.log("query:", query); // 输出当前模块的 URL 参数转成的对象

//   // const asyncData = await load("./async-data.mjs"); // 使用 load 异步加载模块
//   // console.log("asyncData:", asyncData); // 输出异步加载的模块数据

//   return {
//     data: {
//       count: 0,
//     },
//     attrs: {
//       buttonText: "Click Me",
//     },
//     watch: {
//       count(newValue, { watchers }) {
//         let oldValue;
//         if (watchers) {
//           oldValue = watchers[0].oldValue;
//         }
//         console.log(`count changed from ${oldValue} to ${newValue}`);
//       },
//     },
//   };
// }
