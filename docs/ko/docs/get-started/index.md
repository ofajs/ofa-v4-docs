# 쓰임새 파악
## 사용 방법
### 직접 인용

CDN 주소를 사용하여 ofa.js를 당신의 페이지에 직접 참조할 수 있습니다.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.29/dist/ofa.js"></script>
```

### npm을 통한 설치

먼저, 프로젝트에 ofa.js를 설치하세요.

```shell
npm install ofa.js --save
```

그런 다음 프로젝트에 ofa.js 모듈을 가져옵니다:

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### 번역할 수 없습니다.

인용 자료를 가져온 후에 ofa.js는 전역 범위에서 `$` 속성을 설정합니다. 모든 기능은 `$`에 있으며, 이후 튜토리얼에서 그 사용법을 자세히 설명할 것입니다.

일반적으로 ofa.js를 직접 참조하여 추가하는 것을 권장하며 React 및 Vue와 같은 프레임워크와의 호환성을 위해 npm을 사용하는 것이 좋습니다.