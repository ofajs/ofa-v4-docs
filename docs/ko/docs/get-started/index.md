쓰임새 파악
## 사용 방법
### 직접 인용

CDN 주소를 사용하여 ofa.js를 당신의 페이지에 직접 참조할 수 있습니다.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.js"></script>
```

### 通过 npm 安装

먼저, 프로젝트에 ofa.js를 설치하세요.

```shell
npm install ofa.js --save
```

然后在项目中引入 ofa.js 模块：

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

번역할 수 없습니다.

인용 자료를 가져온 후에 ofa.js는 전역 범위에서 `$` 속성을 설정합니다. 모든 기능은 `$`에 있으며, 이후 튜토리얼에서 그 사용법을 자세히 설명할 것입니다.

위의 텍스트를 한국어로 번역하면 다음과 같습니다:

\```
주로, 우리는 ofa.js를 직접 인용하는 것을 권장하며, npm을 이용하는 방법은 React나 Vue와 같은 프레임워크와의 호환성을 위해 사용됩니다.
\```