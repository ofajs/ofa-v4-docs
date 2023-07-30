# ofa-v4-docs

欢迎来到 ofa.js v4 的文档站相关仓库！

## 目录结构

主要文件位于 packages 目录下，以下为目录说明： 

- **docs** : 存放 ofa.js 文档的目录。 
- **example** : 存放示范案例的目录；
- **generator** : 提供将 .md 文件转换为 HTML 的库。 
- **dist-docs** : 存放通过 translator 翻译后的文档，包含其他语言版本。 
- **translator** : 提供将某种语言的 .md 文件翻译成其他语言版本的库。 
- **website** : 包含通过 generator 生成的静态 HTML 文档，用于展示最终效果。


## 工作流程 

1. 在 **docs**  目录中编写 ofa.js v4 的文档。 
2. 利用 **translator**  将 **docs**  目录中的文档翻译成其他语言，并保存到 **dist-docs**  目录下。 
3. 使用 **generator**  将 **dist-docs**  目录中的 .md 文档转换为静态页面，并将生成的页面放置于 **website**  目录下，以供展示和访问。

我们期待您通过这个文档站获得对 ofa.js v4 的深入理解。如有任何疑问或建议，欢迎与我们交流！
