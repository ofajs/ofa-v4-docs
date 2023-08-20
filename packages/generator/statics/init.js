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
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"
  );

  // await appendScript(
  //   "https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.1.6/dist/ofa.min.js",
  //   {
  //     debug: "",
  //   }
  // );

  await appendScript("http://127.0.0.1:5513/packages/ofa/main.mjs", {
    type: "module",
  });

  $("body").on("doc-component-loaded", () => {
    $("#outer-layer").classList.add("fadeout");
    setTimeout(() => {
      $("#outer-layer").remove();
    }, 300);
  });

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
        const href = new URL(e.navs[0].href, url).href;

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

  // await appendScript(
  //   "https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.1.4/libs/scsr/scsr.mjs",
  //   {
  //     type: "module",
  //   }
  // );

  await appendScript("http://127.0.0.1:5513/libs/scsr/scsr.mjs", {
    type: "module",
  });
})();
