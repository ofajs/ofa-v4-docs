# 오 라우터 컴포넌트 사용

`o-router` 컴포넌트는 `o-app` 내에서 현재 브라우저 탭에 라우팅을 바인딩하는 컴포넌트입니다. 페이지 라우팅과 표시를 더 편리하게 관리할 수 있게 도와줍니다.

## o-router 구성 요소 인용하기

먼저, 페이지에서 `o-router` 컴포넌트를 참조해야 합니다. `router.mjs` 파일을 다음과 같은 방법으로 참조할 수 있습니다:

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.js"></script>
```

## o-router 컴포넌트 사용

o-router 구성 요소는 o-app 구성 요소의 외부에 래핑하여 사용됩니다. 이렇게 하면 응용 프로그램 내의 경로가 현재 브라우저 탭에 바인딩될 수 있습니다.

```html
<o-router>
    <o-app src="app-config.mjs"></o-app>
</o-router>
```

## 텍스트를 번역할 수 없습니다.

`o-router` 컴포넌트는 `fix-body` 속성을 제공합니다. 이 속성을 설정하면 컴포넌트가 `<html>` 태그에 자동으로 스타일을 추가하여 애플리케이션의 크기가 페이지 크기와 동일하게 만들어 애플리케이션 콘텐츠가 전체 창에 가득 차도록 합니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>라우터 테스트</title>
    <script src="ofa.js"></script>
    <!-- o-router 컴포넌트 참조 -->
    <script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/libs/router/dist/router.min.js"></script>
  </head>
  <body>
    <!-- o-router 컴포넌트 사용 및 fix-body 속성 설정 -->
    <o-router fix-body> 
      <o-app src="app-config.mjs"></o-app>
    </o-router>
  </body>
</html>
```