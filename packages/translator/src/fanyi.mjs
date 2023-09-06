import chn from "chinese-s2t";
export default async (content, lang) => {
  if (lang === "t-cn") {
    await new Promise((res) => setTimeout(res, 500));
    return chn.s2t(content);
  }
};
