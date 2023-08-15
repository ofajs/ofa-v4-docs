import fs from "fs/promises";

export class DirViewer {
  #path = "";
  #opened = false;

  constructor(path) {
    this.#path = path;
  }

  async open() {
    if (this.#opened) {
      return;
    }

    const results = await fs.readdir(this.#path);

    for (let e of results) {
      if (/^\./.test(e) || e === "node_modules") {
        continue;
      }

      const childPath = `${this.#path}/${e}`;

      const fileStats = await fs.stat(childPath);

      if (fileStats.isDirectory()) {
        this[e] = new DirViewer(childPath);
      } else {
        this[e] = await fs.readFile(childPath, "utf-8");
      }
    }

    this.#opened = true;
  }

  get names() {
    return Object.keys(this);
  }
}

// 底部兼容层，方便以后迁移到浏览器
export async function readDir(path) {
  const viewer = new DirViewer(path);
  await viewer.open();

  return viewer;
}
