import chn from "chinese-s2t";
export default async (content, lang) => {
  if (lang === "t-cn") {
    await new Promise((res) => setTimeout(res, 500));

    if (Array.isArray(content)) {
      return content.map((e) => chn.s2t(e));
    } else {
      return chn.s2t(content);
    }
  }

  return content;
};
