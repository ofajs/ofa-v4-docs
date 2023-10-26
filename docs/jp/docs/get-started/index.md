# はじめに
## 如何使用
### 直接引用
CDNのアドレスを使用して、ofa.jsを直接自分のページに読み込むことができます：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.js"></script>
```

### 通过 npm 安装

まず、プロジェクトに ofa.js をインストールしてください。

```shell
npm install ofa.js --save
```

そして、プロジェクトに ofa.js モジュールをインポートします：

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### 使用

リソースを引用した後、ofa.js はグローバルスコープに `$` プロパティを設定します。すべての機能は `$` 上で利用できます。後のチュートリアルでその使用法について詳しく説明します。

通常情况下，我们建议采用直接引用的方式添加 ofa.js，而使用 npm 的方式则用于与类似 React 和 Vue 等框架进行兼容。