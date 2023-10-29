# 사용 o-page 컴포넌트

o-page는 ofa.js 내에서 개발자들에게 편의를 제공하기 위해 만든 커스텀 컴포넌트입니다. 이 컴포넌트는 애플리케이션 개발에서 중요한 역할을 합니다. 만약 당신이 컴포넌트의 템플릿 구문을 사용하고 싶지만 완전히 새로운 컴포넌트를 생성하고 싶지 않다면, o-page 컴포넌트가 최선의 선택이 될 것입니다.

## 페이지 모듈

단일 파일 페이지 모듈을 만들 때는 컴포넌트 모듈을 만드는 것과 유사합니다. `template` 태그를 사용하여 페이지의 템플릿 코드를 감싸고 `page` 속성을 추가합니다. 이 태그 안에서는 다른 컴포넌트나 페이지 모듈과 상호작용하기 위해 템플릿 언어를 자유롭게 사용할 수 있습니다.

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    export default async ({ load }) => {
      return {
        data: {
          pageTitle: "My Single File Page",
        },
      };
    }
  </script>
</template>
```
HTML 파일에서는 `o-page` 태그의 `src` 속성을 사용하여 페이지 모듈의 파일 경로를 지정합니다. 페이지 내용은 이 구성 요소 내에서 렌더링됩니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-single-file-page.html"></o-page>
</body>
</html>
```

## 이중 파일 모드

두 파일 모드는 '정적 템플릿'과 '로직 코드'를 분리하여 페이지의 내용을 더 명확하게 만듭니다.

아래는 `o-page` 구성 요소와 페이지 모듈을 사용하는 단계입니다.

페이지 모듈 만들기

컴포넌트 모듈 생성과 유사하게 페이지 모듈을 생성하지만 `type` 속성을 `$.PAGE`로 설정합니다. 페이지 모듈에서 사용 가능한 매개변수에는 `temp`, `data`, `proto`, 그리고 `watch`가 있습니다.

```javascript
// my-page.mjs
export const type = $.PAGE;

export const temp = "./my-page-template.html";

export const data = {
  pageTitle: "My Page",
};

export const proto = {
  // ...
};

export const watch = {
  // ...
};
```

2. 페이지 템플릿 생성:

페이지 모듈과 동일한 디렉토리에 `my-page-template.html`이라는 페이지 템플릿 파일을 만드십시오. 이 템플릿 파일에서는 컴포넌트 템플릿 언어를 사용하여 상호 작용할 수 있으며, 이전에 언급한 컴포넌트 템플릿 언어와 유사한 방식을 사용합니다.

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

너의 HTML 파일에서 `<o-page>` 태그를 사용하여 `o-page` 컴포넌트를 사용하고 `src` 속성을 통해 페이지 모듈의 파일 경로를 참조하십시오. 페이지의 내용은 이 컴포넌트 내부에서 렌더링됩니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-page.mjs"></o-page>
</body>
</html>
```

이렇게하면 페이지를 열 때 `o-page` 컴포넌트가 `my-page.mjs` 이 페이지 모듈을 동적으로로드하고 모듈의 템플릿과 데이터를 기반으로 페이지 콘텐츠를 렌더링합니다. 페이지 모듈의 라이프사이클과 템플릿 구문은 컴포넌트 모듈과 일치하여 페이지 개발 및 관리를 더 일관적이고 유연하게 만듭니다.