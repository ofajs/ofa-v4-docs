export default async function transConfig(configData, inputer) {
  const docConfig = {
    articles: [],
  };

  const { groups } = configData;

  console.log(configData);

  await Promise.all(
    groups.map(async (e) => {
      const { name, path, type } = e;

      const item = {
        name,
        type,
        navs: [],
      };

      docConfig.articles.push(item);

      if (type === "document") {
        const doc = await inputer.read(path);

        const summary = await doc.read("SUMMARY.md");

        item.navs = markdownToJSON(summary);

        fixLink(item.navs, path);

        console.log("item => ", item);
      }
    })
  );

  return docConfig;
}

const fixLink = (summary, path) => {
  summary.forEach((e) => {
    if (e.href) {
      e.href = e.href.replace(/^\.\/(.+)\.md$/, `./${path}/$1.html`);
    }

    if (e.childs) {
      fixLink(e.childs, path);
    }
  });
};

function markdownToJSON(markdown) {
  const lines = markdown.split("\n");
  const json = convertLinesToJSON(lines);
  return json.childs;
}

function convertLinesToJSON(lines) {
  let json = [];
  let stack = [json];

  for (let line of lines) {
    const indent = line.search(/\S/);
    line = line.trim();

    if (line.startsWith("-")) {
      const depth = Math.floor(indent / 2) + 1;
      const item = parseListItem(line);

      while (stack.length > depth) {
        stack.pop();
      }

      const parent = stack[stack.length - 1];
      if (!parent.childs) {
        parent.childs = [];
      }

      parent.childs.push(item);
      stack.push(item);
    }
  }

  return json;
}

function parseListItem(line) {
  const linkRegex = /\[(.*?)\]\((.*?)\)/;
  const match = line.match(linkRegex);

  if (match) {
    const name = match[1].trim();
    const href = match[2].trim();
    return { name, href };
  } else {
    const name = line.substring(1).trim();
    return { name };
  }
}
