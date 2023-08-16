import fs from "fs/promises";

const { defineProperty } = Object;

export class DirViewer extends Array {
  constructor(path) {
    super();

    defineProperty(this, "path", {
      value: path,
    });

    defineProperty(this, "opened", {
      value: (async () => {
        await this.reload();
      })(),
    });
  }

  async reload() {
    const results = await fs.readdir(this.path);

    this.length = 0;

    this.push(
      ...results.filter((e) => !(/^\./.test(e) || e === "node_modules"))
    );
  }

  async read(name) {
    const childPath = `${this.path}/${name}`;
    const fileStats = await fs.stat(childPath);

    if (fileStats.isDirectory()) {
      const reobj = new DirViewer(childPath);

      await reobj.opened;

      return reobj;
    } else {
      return await fs.readFile(childPath, "utf-8");
    }
  }

  async write(name, content) {
    await fs.writeFile(`${this.path}/${name}`, content);

    await this.reload();
  }

  async mkdir(name) {
    const path = `${this.path}/${name}`;

    const result = await fs.stat(path).catch((err) => null);

    if (result) {
      await fs.rm(path, { recursive: true });
    }

    await fs.mkdir(path);

    await this.reload();

    return this.read(name);
  }

  async rm(name) {
    await fs.rm(`${this.path}/${name}`, { recursive: true });

    await this.reload();
  }

  get name() {
    return this.path.replace(/.+\/(.+)/, "$1");
  }
}

// 底部兼容层，方便以后迁移到浏览器
export async function readDir(path) {
  const viewer = new DirViewer(path);

  await viewer.opened;

  return viewer;
}
