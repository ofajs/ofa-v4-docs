import https from "https";
import chn from "chinese-s2t";
import { apiKey, baseURL } from "./apikey.mjs";

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

export async function chat(prompt) {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  };

  const postData = JSON.stringify(data);

  const options = {
    hostname: baseURL,
    path: "/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        const result = JSON.parse(responseData);

        const msg = result.choices[0].message.content;
        resolve(msg);
      });
    });

    req.on("error", (error) => {
      console.error("请求发生错误:", error);
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}
