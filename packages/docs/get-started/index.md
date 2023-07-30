# 上手使用

## 如何使用

### 直接引用

通过 cdn 上的地址直接引用到你的页面上：

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.0.0/dist/ofa.js"></script>
```

### 通过npm安装

```shell
npm install ofa.js --save
```

然后在项目引用 ofa.js 模块：

```javascript
import "ofa.js" // esm
// or
require("ofa.js"); // cmd
```

### 使用

引用资源后，ofa.js 会在全局上设置一个 `$` 属性，所有的功能都在 `$` 上，后面的教程会讲；

