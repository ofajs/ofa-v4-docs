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
//   console.log("url:", url); 
//   console.log("query:", query);  

//   // const asyncData = await load("./async-data.mjs");  
//   // console.log("asyncData:", asyncData); 

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
