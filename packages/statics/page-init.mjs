export default async (PATH, [{ query }]) => {
  return {
    attached() {
      if (query.pid) {
        setTimeout(() => {
          const target = this.shadow.$("article")[query.pid];

          target.html = wrapSubstringWithSpan(target.text, query.search);

          target.ele.scrollIntoView();
        }, 500);
      }
    },
  };
};

function wrapSubstringWithSpan(str, substr) {
  return str.replace(
    new RegExp(substr, "gi"),
    "<span style='color:var(--active-color)'>$&</span>"
  );
}
