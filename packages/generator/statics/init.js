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

  // await appendScript(
  //   "https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.1.1/dist/ofa.min.js",
  //   {
  //     debug: "",
  //   }
  // );

  await appendScript("http://127.0.0.1:5513/packages/ofa/main.mjs", {
    type: "module",
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.isDark === "true") {
      $("body").classList.add("dark");
    } else {
      $("body").classList.remove("dark");
    }
  });

  if (configSrc) {
    const url = new URL(configSrc, location.href).href;

    document.addEventListener("doc-component-loaded", async () => {
      const configData = await fetch(url).then((e) => e.json());

      $("#header-layout").init(configData);
      $("#article-layout").init(configData);

      console.log("configData => ", configData);
    });
  }

  await appendScript(
    "https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.1.1/libs/scsr/scsr.mjs",
    {
      type: "module",
    }
  );
})();
