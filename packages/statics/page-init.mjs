import { wrapSubstringWithSpan } from "./util.mjs";

export default async (PATH, [{ query }]) => {
  return {
    attached() {
      if (query.pid) {
        setTimeout(() => {
          const target = this.shadow.$("article")[query.pid];

          if (query.search) {
            target.html = wrapSubstringWithSpan(target.text, query.search);
          }

          target.ele.scrollIntoView();
        }, 500);
      }
    },
  };
};
