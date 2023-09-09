(async () => {
  const appendScript = (src, opts) => {
    return new Promise((res) => {
      const ele = document.createElement("script");
      for (let k in opts) {
        const val = opts[k];
        ele.setAttribute(k, val);
      }
      ele.src = src;
      document.head.appendChild(ele);
      ele.onload = () => {
        res();
      };
    });
  };

  const configSrc = document.currentScript.getAttribute("config");

  await appendScript(
    "https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.14/dist/ofa.min.js",
    {
      // debug: "",
    }
  );

  // await appendScript(
  //   "http://127.0.0.1:5513/dist/ofa.js",
  //   {
  //     debug: "",
  //   }
  // );

  // await appendScript("http://127.0.0.1:5513/packages/ofa/main.mjs", {
  //   type: "module",
  // });

  if (localStorage.isDark === "true") {
    $("html").classList.add("dark");
  } else {
    $("html").classList.remove("dark");
  }

  if (configSrc) {
    const url = new URL(configSrc, location.href).href;

    document.addEventListener("doc-component-loaded", async () => {
      const configData = await fetch(url).then((e) => e.json());

      const { articles } = configData;

      const topNavs = [];

      articles.forEach((e) => {
        let href = e.navs[0].href || e.navs[0].childs[0].href;
        href = new URL(href, url).href;

        e.href = href;

        topNavs.push({
          name: e.name,
          href: href ? href : null,
          active: e.active || href.replace(/(.+)\/.+/, "$1"),
        });

        e.navs && fixLeftNavs(e.navs, url);
      });

      $("#header-layout").init(topNavs);
      $("#article-layout").init(articles);

      $("#outer-layer").classList.add("fadeout");
      setTimeout(() => {
        $("#outer-layer").remove();
      }, 300);
    });
  }

  const fixLeftNavs = (navs, relatePath) => {
    navs.forEach((e) => {
      if (e.href) {
        e.href = new URL(e.href, relatePath).href;
      }

      if (e.childs) {
        fixLeftNavs(e.childs, relatePath);
      }
    });
  };

  await appendScript(
    "https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.14/libs/scsr/scsr.mjs",
    {
      type: "module",
    }
  );

  // await appendScript("http://127.0.0.1:5513/libs/scsr/scsr.mjs", {
  //   type: "module",
  // });

  async function getHash(str, algorithm = "SHA-256") {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }

  // 注册 sw 服务
  const swText = await fetch("/sw.js")
    .then((e) => {
      if (e.status == 200) {
        return e.text();
      }

      return false;
    })
    .catch(() => false);

  if (swText) {
    const hsId = await getHash(swText);

    navigator.serviceWorker
      .register("/sw.js", {
        scope: "/",
      })
      .then((reg) => {
        if (localStorage._swid !== hsId) {
          reg.update();
          localStorage._swid = hsId;
        }

        setTimeout(() => {
          reg.update();
        }, 60 * 60 * 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }
})();
