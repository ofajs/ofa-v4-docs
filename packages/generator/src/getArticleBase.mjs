import { marked } from "marked";

async function getArticleBase(inputer, obj) {
  await inputer.opened;

  let data;

  for (let name of inputer) {
    if (name === "SUMMARY.md") {
      continue;
    }

    data = await inputer.read(name);

    if (data.name) {
      const newObj = {};
      obj[name] = newObj;
      getArticleBase(data, newObj);
      continue;
    }

    const tokens = marked.lexer(data);

    obj[name] = tokens
      .filter((e) => {
        switch (e.type) {
          case "heading":
          case "list":
          case "paragraph":
            return true;
        }

        return false;
      })
      .map((e) => {
        let t;

        switch (e.type) {
          case "heading":
            t = "h";
          case "list":
            t = "l";
          case "paragraph":
            t = "p";
        }

        return {
          t,
          c: removeMarkdownFormats(e.text || e.raw),
        };
      });
  }
}

function removeMarkdownFormats(text) {
  // 去除链接格式 [text](url) 或 ![altText](imageUrl)
  const linkRegex = /\[([^\]]+)\]\([^)]+\)/g;
  const imageRegex = /!\[([^\]]+)\]\([^)]+\)/g;

  // 去除 `xx` 代码格式
  const codeRegex = /`([^`]+)`/g;

  // 去除加粗格式 **text** 或 __text__
  const boldRegex = /\*\*(.*?)\*\*|__(.*?)__/g;

  // 去除斜体格式 *text* 或 _text_
  const italicRegex = /\*(.*?)\*|_(.*?)_/g;

  // 去除链接格式
  text = text.replace(linkRegex, "$1");
  text = text.replace(imageRegex, "$1");

  // 去除 `xx` 代码格式
  text = text.replace(codeRegex, "$1");

  // 去除加粗格式
  text = text.replace(boldRegex, "$1$2");

  // 去除斜体格式
  text = text.replace(italicRegex, "$1$2");

  return text;
}

export default getArticleBase;
