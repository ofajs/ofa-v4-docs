<template is="exm-article">
<a href="../../publics/examples/set-props.html" preview></a>
</template>

# 빠른 시작

시작하려면 CDN 주소를 통해 `ofajs` 프로젝트를 당신의 프로젝트에 통합하면 됩니다.

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.js"></script>
```

이것은 `ofa.js`를 사용하여 DOM 요소의 내용을 수정하는 방법을 보여주는 간단한 예제입니다.

## 사용 방법

ofa.js를 가져온 후에 전역 범위에서 `$` 기호가 등록됩니다. `$('xxx')`를 사용하여 조건에 맞는 첫 번째 요소를 선택할 수 있습니다. 여기서 `xxx`는 표준의 [CSS 선택자](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors) 내용입니다.

위의 예에서는 `$` 기호를 사용하여 다른 `id`를 가진 세 가지 요소를 선택하고 `text`, `html`, 및 `value` 속성을 설정하여 내용을 수정했습니다.

API 문서를 참조하여 사용 가능한 속성과 메소드에 대해 더 자세히 알아보세요.
