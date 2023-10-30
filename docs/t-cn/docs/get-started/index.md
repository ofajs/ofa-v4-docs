# 上手使用
## 如何使用
### 直接引用

你可以通過 CDN 的地址直接將 ofa.js 引用到你的頁面上：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/dist/ofa.js"></script>
```

### 通過 npm 安裝

首先，在你的項目中安裝 ofa.js：

```shell
npm install ofa.js --save
```

然後在項目中引入 ofa.js 模塊：

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### 使用

在引用資源後，ofa.js 將在全局作用域上設置一個 `$` 屬性，所有的功能都在 `$` 上，後面的教程會詳細講解其用法；

通常情況下，我們建議采用直接引用的方式添加 ofa.js，而使用 npm 的方式則用於與類似 React 和 Vue 等框架進行兼容。